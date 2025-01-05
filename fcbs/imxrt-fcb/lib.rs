//! i.MX RT FlexSPI configuration block (FCB) template library.
//!
//! Supports the following SPI flash parts:
//!
//! - Winbond W25Q
//! - Adesto AT25SF
//! - ISSI IS25WP and IS25LP
//!
//! # Getting started
//!
//! Depend on [`imxrt-boot-gen`]. Using its feature flags, select the i.MX RT MCU
//! that you're using. To understand which chips are supported by `imxrt-boot-gen`,
//! consult its documentation. This package will not build without one of
//! these features.
//!
//! Use [`Part`] to select your part, and call [`Part::fcb`] to create the FCB.
//!
//! If you're seeking compatibility with [`imxrt-rt`], consult its documentation
//! to understand the names and link sections expected by its FCB.
//!
//! [`imxrt-rt`]: https://docs.rs/imxrt-rt/latest/imxrt_rt/
//! [`imxrt-boot-gen`]: https://docs.rs/imxrt-boot-gen/latest/imxrt_boot_gen/

#![no_std]

use imxrt_boot_gen::{
    flexspi::{self, *},
    serial_flash::nor,
};
pub use imxrt_boot_gen::{
    flexspi::{SerialClockFrequency, Version, VERSION_DEFAULT},
    serial_flash::nor::ConfigurationBlock,
};

/// A SPI flash part.
///
/// Use [`Part::fcb`] to create the FCB.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
#[non_exhaustive]
pub enum Part {
    /// Winbond, 64MBit density.
    W25Q64J,
    /// Winbond, 16MBit density.
    W25Q16J,
    /// Winbond, 128MBit density.
    W25Q128J,
    /// Adesto, 128Mbit density.
    AT25SF128,
    /// ISSI, 128Mbit density.
    IS25xP128,
    /// ISSI, 64Mbit density.
    IS25xP064,
}

const fn mbits_to_bytes(mbits: u32) -> u32 {
    (mbits / 8) * 1024 * 1024
}

impl Part {
    const fn density_bytes(self) -> u32 {
        match self {
            Self::W25Q16J => mbits_to_bytes(16),
            Self::W25Q64J => mbits_to_bytes(64),
            Self::W25Q128J => mbits_to_bytes(128),
            Self::AT25SF128 => mbits_to_bytes(128),
            Self::IS25xP128 => mbits_to_bytes(128),
            Self::IS25xP064 => mbits_to_bytes(64),
        }
    }

    /// Create a FCB for a [`Part`].
    ///
    /// `freq` is the FlexSPI clock frequency. If you don't need `options`,
    /// supply [`Options::default()`].
    ///
    /// # Example
    ///
    /// ```
    /// use imxrt_fcb::{
    ///     ConfigurationBlock, SerialClockFrequency::MHz60,
    ///     Part::W25Q16J, Options, Version,
    /// };
    ///
    /// #[no_mangle]
    /// #[cfg_attr(all(target_arch = "arm", target_os = "none"), link_section = ".fcb")]
    /// pub static FLEXSPI_CONFIGURATION_BLOCK: ConfigurationBlock = W25Q16J.fcb(MHz60, {
    ///     let mut opts = Options::default();
    ///     opts.version = Version::new(1, 4, 0);
    ///     opts
    /// });
    /// ```
    pub const fn fcb(self, freq: SerialClockFrequency, options: Options) -> ConfigurationBlock {
        match self {
            Part::W25Q16J | Part::W25Q128J | Part::W25Q64J => {
                w25q(self.density_bytes(), freq, options)
            }
            Part::AT25SF128 => at25sf(self.density_bytes(), freq, options),
            Part::IS25xP128 | Part::IS25xP064 => is25xp(self.density_bytes(), freq, options),
        }
    }
}

/// Options for the FCB.
#[non_exhaustive]
pub struct Options {
    /// Passed directly through to the FCB.
    pub controller_misc_options: u32,
    /// The version for the FCB.
    ///
    /// This is [`VERSION_DEFAULT`] by default.
    pub version: Version,
}

impl Options {
    /// Default options.
    pub const fn default() -> Self {
        Self {
            controller_misc_options: 0,
            version: VERSION_DEFAULT,
        }
    }
}

mod common {
    use imxrt_boot_gen::flexspi::{opcodes::sdr::*, *};

    const SEQ_READ: Sequence = SequenceBuilder::new()
        .instr(Instr::new(CMD, Pads::One, 0xEB))
        .instr(Instr::new(RADDR, Pads::Four, 0x18))
        .instr(Instr::new(DUMMY, Pads::Four, 0x06))
        .instr(Instr::new(READ, Pads::Four, 0x04))
        .build();

    const SEQ_READ_STATUS: Sequence = SequenceBuilder::new()
        .instr(Instr::new(CMD, Pads::One, 0x05))
        .instr(Instr::new(READ, Pads::One, 0x04))
        .build();

    const SEQ_WRITE_ENABLE: Sequence = SequenceBuilder::new()
        .instr(Instr::new(CMD, Pads::One, 0x06))
        .build();

    const SEQ_ERASE_SECTOR: Sequence = SequenceBuilder::new()
        .instr(Instr::new(CMD, Pads::One, 0x20))
        .instr(Instr::new(RADDR, Pads::One, 0x18))
        .build();

    const SEQ_PAGE_PROGRAM: Sequence = SequenceBuilder::new()
        .instr(Instr::new(CMD, Pads::One, 0x02))
        .instr(Instr::new(RADDR, Pads::One, 0x18))
        .instr(Instr::new(WRITE, Pads::One, 0x04))
        .build();

    const SEQ_CHIP_ERASE: Sequence = SequenceBuilder::new()
        .instr(Instr::new(CMD, Pads::One, 0x60))
        .build();

    pub(crate) const LUT: LookupTable = LookupTable::new()
        .command(Command::Read, SEQ_READ)
        .command(Command::ReadStatus, SEQ_READ_STATUS)
        .command(Command::WriteEnable, SEQ_WRITE_ENABLE)
        .command(Command::EraseSector, SEQ_ERASE_SECTOR)
        .command(Command::PageProgram, SEQ_PAGE_PROGRAM)
        .command(Command::ChipErase, SEQ_CHIP_ERASE);
}

const fn w25q(
    density_bytes: u32,
    freq: SerialClockFrequency,
    options: Options,
) -> crate::ConfigurationBlock {
    let common = flexspi::ConfigurationBlock::new(common::LUT)
        .version(options.version)
        .controller_misc_options(options.controller_misc_options)
        .read_sample_clk_src(ReadSampleClockSource::LoopbackFromDQSPad)
        .column_address_width(ColumnAddressWidth::OtherDevices)
        .device_mode_configuration(DeviceModeConfiguration::Disabled)
        .wait_time_cfg_commands(WaitTimeConfigurationCommands::disable())
        .flash_size(SerialFlashRegion::A1, density_bytes)
        .serial_clk_freq(freq)
        .serial_flash_pad_type(FlashPadType::Quad);

    nor::ConfigurationBlock::new(common)
        .page_size(256)
        .sector_size(4096)
        .ip_cmd_serial_clk_freq(nor::SerialClockFrequency::MHz30)
}

const fn at25sf(
    density_bytes: u32,
    freq: SerialClockFrequency,
    options: Options,
) -> crate::ConfigurationBlock {
    let common = flexspi::ConfigurationBlock::new(common::LUT)
        .version(options.version)
        .controller_misc_options(options.controller_misc_options)
        .read_sample_clk_src(ReadSampleClockSource::LoopbackFromDQSPad)
        .column_address_width(ColumnAddressWidth::OtherDevices)
        .device_mode_configuration(DeviceModeConfiguration::Disabled)
        .wait_time_cfg_commands(WaitTimeConfigurationCommands::disable())
        .flash_size(SerialFlashRegion::A1, density_bytes)
        .serial_clk_freq(freq)
        .serial_flash_pad_type(FlashPadType::Quad);

    nor::ConfigurationBlock::new(common)
        .page_size(256)
        .sector_size(4096)
        .ip_cmd_serial_clk_freq(nor::SerialClockFrequency::MHz30)
}

const fn is25xp(
    density_bytes: u32,
    freq: SerialClockFrequency,
    options: Options,
) -> crate::ConfigurationBlock {
    let common = flexspi::ConfigurationBlock::new(common::LUT)
        .version(options.version)
        .read_sample_clk_src(ReadSampleClockSource::LoopbackFromDQSPad)
        .controller_misc_options(options.controller_misc_options)
        .serial_flash_pad_type(FlashPadType::Quad)
        .serial_clk_freq(freq)
        .flash_size(SerialFlashRegion::A1, density_bytes);

    nor::ConfigurationBlock::new(common)
        .page_size(256)
        .sector_size(4 * 1024)
        .ip_cmd_serial_clk_freq(nor::SerialClockFrequency::MHz30)
}

//! FlexSPI configuration block (FCB) for the iMXRT1180EVK.
//!
//! This FCB is compatible with the flash storage found on the
//! iMXRT1180EVK.
#![no_std]

pub use imxrt_fcb::ConfigurationBlock;
use imxrt_fcb::{Options, Part::W25Q128J, SerialClockFrequency::MHz133, Version};

pub const SERIAL_NOR_CONFIGURATION_BLOCK: ConfigurationBlock = W25Q128J
    .fcb(MHz133, {
        let mut options = Options::default();
        options.version = Version::new(1, 4, 0);
        options.controller_misc_options = 0x10;
        options
    })
    .block_size(64 * 1024);

#[no_mangle]
#[cfg_attr(all(target_arch = "arm", target_os = "none"), link_section = ".fcb")]
pub static FLEXSPI_CONFIGURATION_BLOCK: ConfigurationBlock = SERIAL_NOR_CONFIGURATION_BLOCK;

#[cfg(test)]
mod tests {
    use super::SERIAL_NOR_CONFIGURATION_BLOCK;

    /// Magic numbers extracted from a build of the 1180 EVK's SDK.
    ///
    /// The actual configuration has an instruction sequence at offset 0x100.
    /// I dropped it when copying over the raw values, since we don't have
    /// support for custom instruction sequences. Erase sector and erase chip
    /// are both implemented.
    const EXPECTED: [u32; 128] = [
        0x46434642, 0x00040156, 0x00000000, 0x01030300, 0x00000000, 0x00000000, 0x00000000,
        0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000,
        0x00000000, 0x00000000, 0x10000000, 0x01040700, 0x00000000, 0x00000000, 0x00000001,
        0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000,
        0x00000000, 0x00000000, 0x00000000, 0x00000000, 0xeb04180a, 0x06320426, 0x00000000,
        0x00000000, 0x05040424, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000,
        0x00000000, 0x00000000, 0x06040000, 0x00000000, 0x00000000, 0x00000000, 0x00000000,
        0x00000000, 0x00000000, 0x00000000, 0x20041808, 0x00000000, 0x00000000, 0x00000000,
        0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000,
        0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x02041808, 0x04200000,
        0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x60040000,
        0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000,
        0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000,
        0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000,
        0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000,
        0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000,
        0x00010000, 0x00100000, 0x01000000, 0x00000000, 0x00000100, 0x00000000, 0x00000000,
        0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000,
        0x00000000, 0x00000000,
    ];

    #[test]
    fn imxrt1180evk() {
        let actual: [u32; 128] = unsafe { core::mem::transmute(SERIAL_NOR_CONFIGURATION_BLOCK) };
        for (i, (a, e)) in actual.iter().zip(EXPECTED).enumerate() {
            let offset = i * 4;
            assert_eq!(
                a.to_be_bytes(),
                e.to_le_bytes(),
                "Offset {offset:#X}\nACTUAL: {actual:?}\nEXPECTED: {EXPECTED:?}"
            );
        }
    }
}

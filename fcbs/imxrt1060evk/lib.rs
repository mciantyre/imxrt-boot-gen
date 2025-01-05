//! FlexSPI configuration block (FCB) for the iMXRT1060EVK.
//!
//! This FCB is compatible with the IS25WP QuadSPI flash storage found on the
//! iMXRT1060EVK.
#![no_std]

pub use imxrt_fcb::ConfigurationBlock;
use imxrt_fcb::{Options, Part::IS25xP064, SerialClockFrequency::MHz133, Version};

pub const SERIAL_NOR_CONFIGURATION_BLOCK: ConfigurationBlock = IS25xP064.fcb(MHz133, {
    let mut options = Options::default();
    options.version = Version::new(1, 4, 0);
    options.controller_misc_options = 0x10;
    options
});

#[no_mangle]
#[cfg_attr(all(target_arch = "arm", target_os = "none"), link_section = ".fcb")]
pub static FLEXSPI_CONFIGURATION_BLOCK: ConfigurationBlock = SERIAL_NOR_CONFIGURATION_BLOCK;

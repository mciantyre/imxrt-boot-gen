//! FlexSPI configuration block (FCB) for the iMXRT1010EVK.
//!
//! This FCB is compatible with the Adesto QuadSPI flash storage found on the
//! iMXRT1010EVK.
#![no_std]

pub use imxrt_fcb::ConfigurationBlock;
use imxrt_fcb::{Options, Part::AT25SF128, SerialClockFrequency::MHz120};

pub const SERIAL_NOR_CONFIGURATION_BLOCK: ConfigurationBlock =
    AT25SF128.fcb(MHz120, Options::default());

#[no_mangle]
#[cfg_attr(all(target_arch = "arm", target_os = "none"), link_section = ".fcb")]
pub static FLEXSPI_CONFIGURATION_BLOCK: ConfigurationBlock = SERIAL_NOR_CONFIGURATION_BLOCK;

var searchIndex = JSON.parse('{\
"imxrt_boot_gen":{"doc":"Generate i.MX RT boot-time data structures.","t":[0,0,13,13,13,13,13,4,4,3,4,3,13,13,13,13,13,13,4,13,13,13,3,13,17,3,13,13,13,13,13,13,13,13,13,13,13,13,13,4,13,13,17,17,13,4,13,17,3,3,4,4,13,13,17,3,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,11,11,12,12,0,0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,3,13,13,13,13,13,13,13,13,13,13,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["flexspi","serial_flash","A1","A2","B1","B2","ChipErase","ColumnAddressWidth","Command","ConfigurationBlock","DeviceModeConfiguration","DeviceModeSequence","Disabled","Dual","Dummy","Eight","Enabled","EraseSector","FlashPadType","FlashProvidedDQS","Four","Hyperflash","Instr","InternalLoopback","JUMP_ON_CS","LookupTable","LoopbackFromDQSPad","MHz100","MHz120","MHz133","MHz166","MHz30","MHz50","MHz60","MHz75","MHz80","Octal","One","OtherDevices","Pads","PageProgram","Quad","RECOMMENDED_CS_HOLD_TIME","RECOMMENDED_CS_SETUP_TIME","Read","ReadSampleClockSource","ReadStatus","STOP","Sequence","SequenceBuilder","SerialClockFrequency","SerialFlashRegion","Single","Two","VERSION_DEFAULT","WaitTimeConfigurationCommands","WriteEnable","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","build","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone","column_address_width","command","controller_misc_options","cs_hold_time","cs_setup_time","default","default","device_mode_configuration","disable","eq","eq","eq","eq","eq","eq","eq","eq","eq","flash_size","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","instr","into","into","into","into","into","into","into","into","into","into","into","into","into","into","into","ne","ne","ne","new","new","new","new","new","new","opcodes","read_sample_clk_src","serial_clk_freq","serial_flash_pad_type","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","version","version","wait_time_cfg_commands","device_mode_arg","device_mode_seq","ddr","sdr","CADDR","CMD","DATASZ","DUMMY","DUMMY_RWDS","LEARN","MODE1","MODE2","MODE4","MODE8","RADDR","READ","WRITE","CADDR","CMD","DATASZ","DUMMY","DUMMY_RWDS","LEARN","MODE1","MODE2","MODE4","MODE8","RADDR","READ","WRITE","nor","ConfigurationBlock","MHz100","MHz120","MHz133","MHz166","MHz30","MHz50","MHz60","MHz75","MHz80","NoChange","SerialClockFrequency","borrow","borrow","borrow_mut","borrow_mut","clone","clone","fmt","fmt","from","from","into","into","ip_cmd_serial_clk_freq","new","page_size","sector_size","try_from","try_from","try_into","try_into","type_id","type_id"],"q":["imxrt_boot_gen","","imxrt_boot_gen::flexspi","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","imxrt_boot_gen::flexspi::DeviceModeConfiguration","","imxrt_boot_gen::flexspi::opcodes","","imxrt_boot_gen::flexspi::opcodes::ddr","","","","","","","","","","","","","imxrt_boot_gen::flexspi::opcodes::sdr","","","","","","","","","","","","","imxrt_boot_gen::serial_flash","imxrt_boot_gen::serial_flash::nor","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["FlexSPI configuration block definitions","Serial NOR flash boot","","","","","","<code>columnAdressWidth</code>","The default sequence definition lookup indices","FlexSPI configuration block","Describes both the <code>deviceModeCfgEnable</code> field, and the …","Sequence parameter for device mode configuration","Device configuration mode is disabled","","","Octal mode","Device configuration mode is enabled","","<code>sFlashPad</code> field","","Quad mode","","A FlexSPI instruction","","JUMP_ON_CS FlexSPI instruction","A sequence lookup table, part of the general FlexSPI …","","","","","","","","","","","","Single mode","","Number of pads to use to execute the instruction","","","The recommended <code>csHoldTime</code>, <code>0x03</code>.","The recommended <code>csSetupTime</code>, <code>0x03</code>.","","<code>readSampleClkSrc</code> of the general FCB   ","","STOP FlexSPI instruction","A collection of FlexSPI instructions","A <code>Sequence</code> builder","<code>serialClkFreq</code>","A FlexSPI serial flash region","","Dual mode","The default FCB version used by this library.","Wait time for all configuration commands","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Create the sequence","","","","","","","","","","","","","","","<code>columnAddressWidth</code>, the properties of the flash memory","Assign the <code>sequence</code> to the command that is found at the …","Set miscellaneous controller options.","Set the chip select hold time (<code>csHoldTime</code>)","Set the chip select setup time (<code>csSetupTime</code>)","","","Sets device configuration mode. The …","","","","","","","","","","","Set a flash size for the provided flash region","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Insert <code>instr</code> as the next sequence instruction","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","Creates a new <code>SequenceBuilder</code> than can accept up to eight …","Create a new sequence parameter for device configuration","Computes the wait time from the specified <code>wait_time_us</code> …","Create a new lookup table. All memory is set to zero.","Create a new FlexSPI LUT instruction","Create a new configuration block that uses <code>lookup_table</code> as …","FlexSPI lookup table instruction opcodes","<code>readSampleClkSrc</code>, the clock source for FlexSPI","Sets the serial clock frequencey, <code>serialClkFreq</code>","Sets the serial flash pad type, <code>sFlashPad</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Construct a version number for your FCB.","Override the version specifier.","Sets <code>waitTimeCfgCommands</code>","<code>deviceModeArg</code>","<code>deviceModeSeq</code>","Dual data transfer rate (DDR) opcodes","Single data transfer rate (SDR) opcodes","","","","","","","","","","","","","","Transmit column address to flash","Transmit command code to flash","Transmit Read/ Program Data size (byte number) to Flash","Leave data lines undriven by FlexSPI controller.","Similar to <code>DUMMY</code>, but the cycle number is different","Receive Read Data or Preamble bit from Flash device","Transmit mode bits to flash","Transmit mode bits to flash","Transmit mode bits to flash","Transmit mode bits to flash","Transmit row address to flash","Receive data from flash","Transmit programming data to flash","Serial NOR configuration blocks and fields","A serial NOR configuration block","","","","","","","","","","No change, keep current serial clock unchanged","<code>ipCmdSerialClkFreq</code> field for serial NOR-specific FCB","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Set the serial clock frequency","Create a new serial NOR configuration block based on the …","Set the serial NOR page size","Set the serial NOR sector size","","","","","",""],"i":[0,0,10,10,10,10,11,0,0,0,0,0,6,8,11,14,6,11,0,3,14,4,0,3,0,0,3,9,9,9,9,9,9,9,9,9,8,14,4,0,11,8,0,0,11,0,11,0,0,0,0,0,8,14,0,0,11,1,3,4,5,6,7,8,9,10,11,12,13,2,14,15,1,3,4,5,6,7,8,9,10,11,12,13,2,14,15,1,3,4,5,6,7,8,9,10,11,12,13,2,14,15,15,12,15,15,15,5,6,15,7,3,4,5,6,7,8,9,10,11,15,3,4,5,7,8,9,10,11,12,13,2,14,14,15,1,3,4,5,6,7,8,9,10,11,12,13,2,14,15,1,1,3,4,5,6,7,8,9,10,11,12,13,2,14,15,5,6,7,1,5,7,12,13,15,0,15,15,15,1,3,4,5,6,7,8,9,10,11,12,13,2,14,15,1,3,4,5,6,7,8,9,10,11,12,13,2,14,15,1,3,4,5,6,7,8,9,10,11,12,13,2,14,15,0,15,15,26,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,24,24,24,24,24,24,24,24,24,0,24,25,24,25,24,25,24,25,24,25,24,25,25,25,25,25,24,25,24,25,24,25],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[1,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[2,2],[14,14],[15,15],[[15,4],15],[[12,11,2],12],[[15,16],15],[[15,17],15],[[15,17],15],[[],5],[[],6],[[15,6],15],[[],7],[[3,3],18],[[4,4],18],[[5,5],18],[[6,6],18],[[7,7],18],[[8,8],18],[[9,9],18],[[10,10],18],[[11,11],18],[[15,10,16],15],[[3,19],20],[[4,19],20],[[5,19],20],[[7,19],20],[[8,19],20],[[9,19],20],[[10,19],20],[[11,19],20],[[12,19],20],[[13,19],20],[[2,19],20],[[14,19],20],[[14,19],20],[[15,19],20],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[1,13],1],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[5,5],18],[[6,6],18],[[7,7],18],[[],1],[[17,17],5],[21,7],[[],12],0,[12,15],0,[[15,3],15],[[15,9],15],[[15,8],15],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[],23],[[17,17,17],16],[[15,16],15],[[15,7],15],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[24,24],[25,25],[[24,19],20],[[25,19],20],[[]],[[]],[[]],[[]],[[25,24],25],[15,25],[[25,16],25],[[25,16],25],[[],22],[[],22],[[],22],[[],22],[[],23],[[],23]],"p":[[3,"SequenceBuilder"],[3,"Sequence"],[4,"ReadSampleClockSource"],[4,"ColumnAddressWidth"],[3,"DeviceModeSequence"],[4,"DeviceModeConfiguration"],[3,"WaitTimeConfigurationCommands"],[4,"FlashPadType"],[4,"SerialClockFrequency"],[4,"SerialFlashRegion"],[4,"Command"],[3,"LookupTable"],[3,"Instr"],[4,"Pads"],[3,"ConfigurationBlock"],[15,"u32"],[15,"u8"],[15,"bool"],[3,"Formatter"],[6,"Result"],[15,"u16"],[4,"Result"],[3,"TypeId"],[4,"SerialClockFrequency"],[3,"ConfigurationBlock"],[13,"Enabled"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};

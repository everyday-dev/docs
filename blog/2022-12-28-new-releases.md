---
title: New releases 🎉 (kicad & avr templates, breakout boards)
authors: stephen
tags: [new-release]
---

I'm happy to finally be sharing several new projects with others! The templates will always be "under development" as I continue to add new suggestions and tweaks that make them more useful but the PCBs are pretty much "produciton" intent as most of the bugs have already been worked out.
- **breadboard-io [[docs]](https://www.greatlakesdev.io/docs/breadboard-io/)[[github]](https://github.com/greatlakesdev/breadboard-io)**: 🍞 A small footprint design used to easily add a few push-buttons and LEDs to a breadboard
- **atmega32u4_breakout [[docs]](https://www.greatlakesdev.io/docs/atmega32u4-breakout/introduction)[[github]](https://github.com/greatlakesdev/atmega32u4_breakout)**: Breakout and Development board for the ATmega32u4-MU MCU from Atmel. Even though its an 8-bit AVR part, its still plenty useful for most projects and most importantly - the MCU is avilable to purchase 🫠
- **kicad-2-layer-template [[github]](https://github.com/greatlakesdev/kicad-2-layer-template)**: ♼ 2-layer KiCAD project template with DRC rules set to meet PCBWays "Standard" tiers max capabilities
- **avr-cmake-template [[github]](https://github.com/greatlakesdev/avr-cmake-template)**: Template project for building AVR based firmware using VScode, CMake and the AVR toolchain

For the breakout boards and future hardware releases, the intent will be to not only post them publicly but also try and offer completely assembled PCBs for minimal cost to others so they can skip the building part if they want. The store will hopefully be coming soon but more priority is being placed on getting new content and projects added to the org. A couple new project should be coming soon (sneak peak below) and I will be making another post to announce those once they are finalized and released.
- **robin-sbc**:  An affordable and compact SBC offering a handful of useful serial interfaces (TWI, SPI, UART, CAN), 2x USB High Speed Host ports, 24bit LCD interface w/ I2C touch connector, NFC, and Wifi & Bluetooth connectivity.
- **can-hub**: A versatile 2-channel CAN hub device w/ digitally enabled termination and an SD for logging. The plan is to develop two subset of firmware:
    - SLCAN support giving you the ability to Read/Write/Listen on the bus using a standard interface via Python, C, or GUI apps
    - Custom firmware that offers the same feature set as the SLCAN but adds the ability to create config on the device that bridges data between the two CAN ports based on a set of filters. I also intend to add other features such as data logging to an SD card, replay functionality and message injection based on incoming packets.
- **10pin JTAG/SWD conn. breakout**: Easily breakout the 1.27mm pitch 10pin headers commonly used for JTAG/SWD onto a breadboard. The 2.54mm header is also compatible with the header on ST-Link JTAG Programmers which ship with STM32 Nucleo dev-boards - allowing a developer to add a 10pin header to their programmers making them a bit more useful for ST based projects.

I hope to be getting a few more write-ups done in the near future walking through some topics such as CI/CD on hardware based projects, remote runners for Linux/Yocto projects and other general engineering design tips.

⚡ Happy tinkering!
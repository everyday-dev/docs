"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2831],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=u(o),h=a,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||n;return o?r.createElement(m,i(i({ref:t},s),{},{components:o})):r.createElement(m,i({ref:t},s))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:a,i[1]=d;for(var u=2;u<n;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},390:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>u});var r=o(7462),a=(o(7294),o(3905));const n={title:"Flashing the Arduino Bootloader",sidebar_position:1,slug:"/atmega32u4_breakout/advanced-guides/flashing-arduino-bootloader",keywords:["atmega32u4","breadboard","prototyping","oshw","hardware","kicad","debugging","avr","arduino"],description:"Guide on how to flash the Arduino bootloader onto the atmega32u4 breakout board by everyday\u26a1dev"},i=void 0,d={unversionedId:"hardware/atmega32u4-breakout/advanced-guides/arduino",id:"hardware/atmega32u4-breakout/advanced-guides/arduino",title:"Flashing the Arduino Bootloader",description:"Guide on how to flash the Arduino bootloader onto the atmega32u4 breakout board by everyday\u26a1dev",source:"@site/docs/hardware/atmega32u4-breakout/advanced-guides/arduino.mdx",sourceDirName:"hardware/atmega32u4-breakout/advanced-guides",slug:"/atmega32u4_breakout/advanced-guides/flashing-arduino-bootloader",permalink:"/docs/atmega32u4_breakout/advanced-guides/flashing-arduino-bootloader",draft:!1,editUrl:"https://github.com/everyday-dev/opensource/tree/main/docs/hardware/atmega32u4-breakout/advanced-guides/arduino.mdx",tags:[],version:"current",lastUpdatedBy:"stephendpmurphy",lastUpdatedAt:1687821463,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:1,frontMatter:{title:"Flashing the Arduino Bootloader",sidebar_position:1,slug:"/atmega32u4_breakout/advanced-guides/flashing-arduino-bootloader",keywords:["atmega32u4","breadboard","prototyping","oshw","hardware","kicad","debugging","avr","arduino"],description:"Guide on how to flash the Arduino bootloader onto the atmega32u4 breakout board by everyday\u26a1dev"},sidebar:"sidebar",previous:{title:"Advanced Guides",permalink:"/docs/atmega32u4_breakout/advanced-guides"},next:{title:"Flashing the USB DFU bootloader",permalink:"/docs/atmega32u4_breakout/advanced-guides/flashing-dfu-bootloader"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Writing the fuses",id:"writing-the-fuses",level:2},{value:"Flashing the Arduino bootloader",id:"flashing-the-arduino-bootloader",level:2}],s={toc:u},c="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"If you have an atmega32u4 breakout board with the ",(0,a.kt)("inlineCode",{parentName:"p"},"bare-metal")," bootloaders (or empty flash) and would like to use the board with the Arduino IDE, we will need to do\na couple different things. To begin you will need to gather the necessary tools outlined in the Prerequisite section"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You will need a couple different tools to write the Arduino bootloader"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/avrdudes/avrdude"},"avrdude")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE")),(0,a.kt)("li",{parentName:"ul"},"AVR ISP programmer (1x of the following)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.amazon.com/Programmer-USB-AVRISP-XPII-Compatible/dp/B00KM6ZA9I/ref=sr_1_4?crid=2E8DSYQHJD8S8&keywords=avrisp+mkii&qid=1672774084&s=electronics&sprefix=avrisp+mkii%2Celectronics%2C78&sr=1-4"},"AVRISP MKII programmer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.microchip.com/en-us/development-tool/ATATMEL-ICE"},"Atmel ICE")),(0,a.kt)("li",{parentName:"ul"},"Arduino running the ",(0,a.kt)("inlineCode",{parentName:"li"},"Arduino ISP")," example sketch")))),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If you use an Arduino as an ISP programmer, make sure it is an Arduino with 3.3V logic levels. An Arduino Uno, for example, will not work as it runs a 5V logic level and can cause\ndamage to the atmega32u4 pins.")),(0,a.kt)("h2",{id:"writing-the-fuses"},"Writing the fuses"),(0,a.kt)("p",null,"The most notable change in these fuse values are to enable the boot reset vector fuse which causes the MCU to start looking for a bootloader in the boot section of flash where the Arduino\nbootloader will be placed. The other changes consist of setting the clock to use the EXT crystal (16MHz) and disable the ",(0,a.kt)("inlineCode",{parentName:"p"},"DIV/8")," fuse giving a\nfinal core clock of 16MHz."),(0,a.kt)("p",null,"To write the fuses you need to connect the 6pin ISP header to your programmer and then execute the following via CLI (The below uses the Atmel ICE programmer)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"avrdude -p atmega32u4 -c atmelice_isp -U lfuse:w:0xde:m -U hfuse:w:0xd8:m -U efuse:w:0xcb:m\n")),(0,a.kt)("p",null,"With the fuses set, we are now ready to open the Arduino IDE and flash the bootloader."),(0,a.kt)("h2",{id:"flashing-the-arduino-bootloader"},"Flashing the Arduino bootloader"),(0,a.kt)("p",null,"To write the bootloader we need to open the Arduino IDE set the correct board. We want to select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Arduino Micro")," as this is another Arduino based board using the same\natmega32u4 MCU:\n",(0,a.kt)("inlineCode",{parentName:"p"},"Tools -> Board -> Arduino AVR Boards -> Arduino Micro"),". Now set the programmer to the correct ISP programmer you are using: ",(0,a.kt)("inlineCode",{parentName:"p"},"Tools -> Programmer -> Atmel-ICE (AVR)"),"."),(0,a.kt)("p",null,"With our board and programmer set, we are ready to write the bootloader: ",(0,a.kt)("inlineCode",{parentName:"p"},"Tools -> Burn Bootloader"),". This process will take 1 to 2 minutes to complete. Once finished, power-cycle\nthe board and you should now see the ",(0,a.kt)("inlineCode",{parentName:"p"},"Arduino Micro")," show up as an available Port under ",(0,a.kt)("inlineCode",{parentName:"p"},"Tools -> Port")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You might encounter an error at the end of writing the bootloader such as the following:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},"avrdude: verification error, first mismatch at byte 0x0000\n         0xff != 0x2f\navrdude: verification error; content mismatch\nFailed to burn bootloader: uploading error: exit status 1\n")),(0,a.kt)("p",{parentName:"admonition"},"This can be ignored and you should now have the ",(0,a.kt)("inlineCode",{parentName:"p"},"Arduino Micro")," available under ",(0,a.kt)("inlineCode",{parentName:"p"},"Tools -> Port"))))}p.isMDXComponent=!0}}]);
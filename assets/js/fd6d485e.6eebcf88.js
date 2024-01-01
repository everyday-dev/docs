"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1706],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,b=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return a?r.createElement(b,i(i({ref:t},s),{},{components:a})):r.createElement(b,i({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d[p]="string"==typeof e?e:n,i[1]=d;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3096:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={title:"Utilizing the USB DFU bootloader",sidebar_position:3,slug:"/atmega32u4_breakout/advanced-guides/utilizing-dfu-bootloader",keywords:["atmega32u4","breadboard","prototyping","oshw","hardware","kicad","debugging","avr","usb","dfu","usb-dfu"],description:"Guide on how to execute and use the USB DFU bootloader for the atmega32u4 breakout board by everyday\u26a1dev"},i=void 0,d={unversionedId:"hardware/atmega32u4-breakout/advanced-guides/usb-dfu",id:"hardware/atmega32u4-breakout/advanced-guides/usb-dfu",title:"Utilizing the USB DFU bootloader",description:"Guide on how to execute and use the USB DFU bootloader for the atmega32u4 breakout board by everyday\u26a1dev",source:"@site/docs/hardware/atmega32u4-breakout/advanced-guides/usb-dfu.mdx",sourceDirName:"hardware/atmega32u4-breakout/advanced-guides",slug:"/atmega32u4_breakout/advanced-guides/utilizing-dfu-bootloader",permalink:"/docs/atmega32u4_breakout/advanced-guides/utilizing-dfu-bootloader",draft:!1,editUrl:"https://github.com/everyday-dev/opensource/tree/main/docs/hardware/atmega32u4-breakout/advanced-guides/usb-dfu.mdx",tags:[],version:"current",lastUpdatedBy:"stephendpmurphy",lastUpdatedAt:1687291082,formattedLastUpdatedAt:"Jun 20, 2023",sidebarPosition:3,frontMatter:{title:"Utilizing the USB DFU bootloader",sidebar_position:3,slug:"/atmega32u4_breakout/advanced-guides/utilizing-dfu-bootloader",keywords:["atmega32u4","breadboard","prototyping","oshw","hardware","kicad","debugging","avr","usb","dfu","usb-dfu"],description:"Guide on how to execute and use the USB DFU bootloader for the atmega32u4 breakout board by everyday\u26a1dev"},sidebar:"sidebar",previous:{title:"Flashing the USB DFU bootloader",permalink:"/docs/atmega32u4_breakout/advanced-guides/flashing-dfu-bootloader"},next:{title:"breadboard-io",permalink:"/docs/breadboard-io"}},u={},l=[],s={toc:l},p="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When using the atmega32u4 breakout board in a bare-metal setup we have two options for relfashing: ",(0,n.kt)("inlineCode",{parentName:"p"},"avrdude")," and an ISP programmer or ",(0,n.kt)("inlineCode",{parentName:"p"},"USB-DFU"),"\nwith a single USB Type C cable. Using the ISP programmer can be easiest when at a bench and you're actively developing your application and constantly reflashing to test. The\nUSB-DFU programmer is by far more convenient when your on the go or need to flash an updated application to a finished and installed project. A single USB to\nprovide power plus data and you can flash your application."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The default variant (",(0,n.kt)("inlineCode",{parentName:"p"},"bare-metal"),") of the atmega32u4_breakout comes pre-loaded with the USB-DFU programmer. If you have a board set up to use the Arduino environment\nor accidentally mass-erased the chip and deleted the USB-DFU bootloader then checkout ",(0,n.kt)("a",{parentName:"p",href:"flashing-dfu-bootloader"},"this guide")," to reflash it.")),(0,n.kt)("br",null),(0,n.kt)("p",null,"A simple two-button sequence is needed to enter the USB-DFU bootloader:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Begin by pressing and holding the ",(0,n.kt)("inlineCode",{parentName:"li"},"RST")," button"),(0,n.kt)("li",{parentName:"ul"},"Next press and hold the ",(0,n.kt)("inlineCode",{parentName:"li"},"USR")," button"),(0,n.kt)("li",{parentName:"ul"},"Release the ",(0,n.kt)("inlineCode",{parentName:"li"},"RST")," button"),(0,n.kt)("li",{parentName:"ul"},"Release the ",(0,n.kt)("inlineCode",{parentName:"li"},"USR")," button")),(0,n.kt)("p",null,"Once completing the sequence outlined above and shown below, the USB DFU bootloader should enumerate on your PC. You can now use the ",(0,n.kt)("inlineCode",{parentName:"p"},"make dfu_flash")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"make dfu_erase"),"\ncommands in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/avr-cmake-template#flashing"},"avr-cmake-template")," or reflash the board using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dfu-programmer/dfu-programmer"},(0,n.kt)("inlineCode",{parentName:"a"},"dfu-programmer"))," directly\n",(0,n.kt)("img",{alt:"gif animation showing the sequence to press buttons on a PCB. Press and hold RST, Press and hold USR, Release RST, Releast USR",src:a(4524).Z,width:"928",height:"516"})))}c.isMDXComponent=!0},4524:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hwb_seq-5a108ccc3ea3116d37ec60dc34dc1aa5.gif"}}]);
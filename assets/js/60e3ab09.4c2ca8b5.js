"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3706],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"AVR USB Made Simple - Enumeration",authors:"stephen",tags:["avr","usb","c","embedded","usb-made-simple"],draft:!1,keywords:["everydaydev","usb","avr","usb-made-simple"],description:"A multi-part introduction to USB on AVR microcontrollers. Part 1 covers the basics of USB and how to get a device enumerating in an OS.",image:"img/everydaydev_black_on_white_linkedin_520x272.png"},i=void 0,l={permalink:"/blog/2023/9/16/avr-usb-made-simple-p1",source:"@site/blog/2023-9-16-avr-usb-made-simple-p1.mdx",title:"AVR USB Made Simple - Enumeration",description:"A multi-part introduction to USB on AVR microcontrollers. Part 1 covers the basics of USB and how to get a device enumerating in an OS.",date:"2023-09-16T00:00:00.000Z",formattedDate:"September 16, 2023",tags:[{label:"avr",permalink:"/blog/tags/avr"},{label:"usb",permalink:"/blog/tags/usb"},{label:"c",permalink:"/blog/tags/c"},{label:"embedded",permalink:"/blog/tags/embedded"},{label:"usb-made-simple",permalink:"/blog/tags/usb-made-simple"}],readingTime:14.765,hasTruncateMarker:!0,authors:[{name:"Stephen Murphy",title:"Founder",url:"https://github.com/stephendpmurphy",imageURL:"/img/profile.jpeg",key:"stephen"}],frontMatter:{title:"AVR USB Made Simple - Enumeration",authors:"stephen",tags:["avr","usb","c","embedded","usb-made-simple"],draft:!1,keywords:["everydaydev","usb","avr","usb-made-simple"],description:"A multi-part introduction to USB on AVR microcontrollers. Part 1 covers the basics of USB and how to get a device enumerating in an OS.",image:"img/everydaydev_black_on_white_linkedin_520x272.png"},prevItem:{title:"AVR USB Made Simple - Vendor Specific Control Transfers",permalink:"/blog/2023/9/21/avr-usb-made-simple-p2"},nextItem:{title:"We're back - and we have a new name",permalink:"/blog/2023/6/30/rebranding"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this multi-part series, we will explore USB implementation on AVR microcontrollers, starting with the basics of USB enumeration. USB can be found all around us in our everyday\nlives. It's in our phones, our computers, our cars, and even our home appliances. It's a ubiquitous standard that has been around for decades and is still going strong. However\nwe often take it for granted as engineers and developers. Silicon vendors have made it so easy to get a device up and running with USB via their libraries and examples\nthat we don't often think about what's going on under the hood."))}d.isMDXComponent=!0}}]);
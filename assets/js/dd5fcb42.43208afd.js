"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8727],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(r),p=n,f=l["".concat(d,".").concat(p)]||l[p]||m[p]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[l]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(7294),n=r(6010),o=r(3438),i=r(9960),c=r(3919),d=r(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return a.createElement(i.Z,{href:t,className:(0,n.Z)("card padding--lg",s.cardContainer)},r)}function l(e){let{href:t,icon:r,title:o,description:i}=e;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,n.Z)("text--truncate",s.cardTitle),title:o},r," ",o),i&&a.createElement("p",{className:(0,n.Z)("text--truncate",s.cardDescription),title:i},i))}function m(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?a.createElement(l,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.xz)(t.docId??void 0);return a.createElement(l,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(p,{item:t});case"category":return a.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,o.jA)();return a.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return a.createElement(g,e);const i=(0,o.MN)(t);return a.createElement("section",{className:(0,n.Z)("row",r)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e})))))}},3681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=r(7462),n=(r(7294),r(3905)),o=r(2991);const i={title:"Advanced Guides",sidebar_position:4,slug:"/atmega32u4_breakout/advanced-guides",keywords:["atmega32u4","breadboard","prototyping","oshw","hardware","kicad","debugging","avr","usb","dfu","usb-dfu"],description:"Summary of advanced guides for the atmega32u4 breakout board by everyday\u26a1dev"},c=void 0,d={unversionedId:"hardware/atmega32u4-breakout/advanced-guides/index",id:"hardware/atmega32u4-breakout/advanced-guides/index",title:"Advanced Guides",description:"Summary of advanced guides for the atmega32u4 breakout board by everyday\u26a1dev",source:"@site/docs/hardware/atmega32u4-breakout/advanced-guides/index.mdx",sourceDirName:"hardware/atmega32u4-breakout/advanced-guides",slug:"/atmega32u4_breakout/advanced-guides",permalink:"/docs/atmega32u4_breakout/advanced-guides",draft:!1,editUrl:"https://github.com/everyday-dev/opensource/tree/main/docs/hardware/atmega32u4-breakout/advanced-guides/index.mdx",tags:[],version:"current",lastUpdatedBy:"stephendpmurphy",lastUpdatedAt:1686526090,formattedLastUpdatedAt:"Jun 11, 2023",sidebarPosition:4,frontMatter:{title:"Advanced Guides",sidebar_position:4,slug:"/atmega32u4_breakout/advanced-guides",keywords:["atmega32u4","breadboard","prototyping","oshw","hardware","kicad","debugging","avr","usb","dfu","usb-dfu"],description:"Summary of advanced guides for the atmega32u4 breakout board by everyday\u26a1dev"},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/docs/atmega32u4_breakout/getting-started"},next:{title:"Flashing the Arduino Bootloader",permalink:"/docs/atmega32u4_breakout/advanced-guides/flashing-arduino-bootloader"}},s={},u=[],l={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);
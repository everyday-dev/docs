"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9369],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),a=r(6010),o=r(3438),i=r(9960),c=r(3919),d=r(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",s.cardContainer)},r)}function u(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(l,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:i},i))}function p(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},1952:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=r(7462),a=(r(7294),r(3905)),o=r(2991);const i={title:"\ud83d\udd29 Hardware",sidebar_position:2,slug:"/hardware",keywords:["atmega32u4","breadboard-io","breadboard","prototyping","oshw","hardware","kicad","debugging","avr"],description:"Summary of the different hardware projects offered by everyday\u26a1dev"},c=void 0,d={unversionedId:"hardware/index",id:"hardware/index",title:"\ud83d\udd29 Hardware",description:"Summary of the different hardware projects offered by everyday\u26a1dev",source:"@site/docs/hardware/index.mdx",sourceDirName:"hardware",slug:"/hardware",permalink:"/docs/hardware",draft:!1,editUrl:"https://github.com/everyday-dev/opensource/tree/main/docs/hardware/index.mdx",tags:[],version:"current",lastUpdatedBy:"stephendpmurphy",lastUpdatedAt:1686526090,formattedLastUpdatedAt:"Jun 11, 2023",sidebarPosition:2,frontMatter:{title:"\ud83d\udd29 Hardware",sidebar_position:2,slug:"/hardware",keywords:["atmega32u4","breadboard-io","breadboard","prototyping","oshw","hardware","kicad","debugging","avr"],description:"Summary of the different hardware projects offered by everyday\u26a1dev"},sidebar:"sidebar",previous:{title:"Welcome to the docs \ud83d\udcda",permalink:"/docs/"},next:{title:"atmega32u4 breakout",permalink:"/docs/atmega32u4_breakout"}},s={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);
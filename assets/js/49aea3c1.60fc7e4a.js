"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"what_is_rucio",title:"What is Rucio?"},c=void 0,u={unversionedId:"started/what_is_rucio",id:"started/what_is_rucio",title:"What is Rucio?",description:"Having demonstrated very large scale data management capabilities, Don Quijote",source:"@site/../docs/started/what_is_rucio.md",sourceDirName:"started",slug:"/started/what_is_rucio",permalink:"/documentation/started/what_is_rucio",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/what_is_rucio.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1682077387,formattedLastUpdatedAt:"Apr 21, 2023",frontMatter:{id:"what_is_rucio",title:"What is Rucio?"},sidebar:"docs",previous:{title:"Before you get started",permalink:"/documentation/started/before_you_get_started"},next:{title:"Main Components",permalink:"/documentation/started/main_components"}},l={},p=[{value:"What can Rucio do",id:"what-can-rucio-do",level:2}],d={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Having demonstrated very large scale data management capabilities, Don Quijote\n(DQ2), the ",(0,o.kt)("strong",{parentName:"p"},"ATLAS Distributed Data Management System")," used for ",(0,o.kt)("strong",{parentName:"p"},"HEP\nexperiments at CERN")," had reached its limits in terms of scalability. The\nprimary concerns were"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the requirement of a large number of support staff to operate."),(0,o.kt)("li",{parentName:"ul"},"difficulty in interfacing with new technologies")),(0,o.kt)("p",null,"To address these very scaling requirements for HEP experiments, ",(0,o.kt)("strong",{parentName:"p"},"Rucio")," as a\nDistributed Data Management System, was developed. Drawing benefits from\nadvances in Cloud & Big Data computations, it relies on a conceptual data model\nto ensure system stability. Dataflow autonomy and automation are the key design\nprinciples guiding the development of Rucio. To reduce the operational overheads\nof the support staff, it employs an automation framework and also accounts for\nnewer use cases & user requirements of the LHC Run2 experiments."),(0,o.kt)("h2",{id:"what-can-rucio-do"},"What can Rucio do"),(0,o.kt)("p",null,"Standing on the shoulders of its predecessor, ",(0,o.kt)("strong",{parentName:"p"},"ATLAS"),", the capabilities of\nRucio are currently leveraged for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Storage of detector data, simulator data, and user data"),(0,o.kt)("li",{parentName:"ul"},"Unified interfacing of heterogenous network & storage infrastructure"),(0,o.kt)("li",{parentName:"ul"},"Support for newer protocols in Storage & Network using plugins"),(0,o.kt)("li",{parentName:"ul"},"Data Recovery"),(0,o.kt)("li",{parentName:"ul"},"Adaptive Replication")))}f.isMDXComponent=!0}}]);
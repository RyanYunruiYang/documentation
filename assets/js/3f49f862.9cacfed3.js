"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1632],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||i;return t?n.createElement(d,c(c({ref:r},p),{},{components:t})):n.createElement(d,c({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[s]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74474:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),c=["components"],a={title:"rucio-follower"},l=void 0,u={unversionedId:"bin/rucio-follower",id:"bin/rucio-follower",title:"rucio-follower",description:"",source:"@site/../docs/bin/rucio-follower.md",sourceDirName:"bin",slug:"/bin/rucio-follower",permalink:"/documentation/bin/rucio-follower",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-follower.md",tags:[],version:"current",frontMatter:{title:"rucio-follower"},sidebar:"docs",previous:{title:"rucio-dumper",permalink:"/documentation/bin/rucio-dumper"},next:{title:"rucio-hermes",permalink:"/documentation/bin/rucio-hermes"}},p={},s=[],f={toc:s},m="wrapper";function d(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)(m,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"usage: rucio-follower [-h] [--run-once] [--threads THREADS]\n\noptional arguments:\n  -h, --help         show this help message and exit\n  --run-once         Runs one loop iteration\n  --threads THREADS  Concurrency control: total number of threads on this\n                     process\n")))}d.isMDXComponent=!0}}]);
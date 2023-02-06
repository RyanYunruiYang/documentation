"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5543],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=i,f=p["".concat(l,".").concat(h)]||p[h]||m[h]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},33229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={title:"1.19.6"},l=void 0,u={unversionedId:"release-notes/1.19.6",id:"release-notes/1.19.6",title:"1.19.6",description:"General",source:"@site/../docs/release-notes/1.19.6.md",sourceDirName:"release-notes",slug:"/release-notes/1.19.6",permalink:"/documentation/release-notes/1.19.6",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.19.6.md",tags:[],version:"current",frontMatter:{title:"1.19.6"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p},h="wrapper";function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(h,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"general"},"General"),(0,a.kt)("h3",{id:"enhancements"},"Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clients: Fix for update_replicas_states function description in replicaclient.py ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2240"},"#2240")),(0,a.kt)("li",{parentName:"ul"},"Documentation: ChangeLog seems to be a COPYRIGHT file? ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2434"},"#2434")),(0,a.kt)("li",{parentName:"ul"},"Rules: Injector should not inject a rule which is about to expire soon ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2219"},"#2219")),(0,a.kt)("li",{parentName:"ul"},"Testing: Test reaper console script ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2149"},"#2149")),(0,a.kt)("li",{parentName:"ul"},'Transfers: Automatically recover requests in state "protocol mismatch" ',(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2115"},"#2115"))),(0,a.kt)("h3",{id:"bugs"},"Bugs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Core & Internals: PostgreSQL alembic upgrade problems ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2212"},"#2212")),(0,a.kt)("li",{parentName:"ul"},"Core & Internals: ineffective ",(0,a.kt)("inlineCode",{parentName:"li"},"list-dids-by-meta")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2403"},"#2403")),(0,a.kt)("li",{parentName:"ul"},"Core & Internals: New psycopg2-binary release incompatible with current sqlalchemy version ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2446"},"#2446")),(0,a.kt)("li",{parentName:"ul"},"Core & Internals: list_replicas should raise DID not found ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2468"},"#2468")),(0,a.kt)("li",{parentName:"ul"},"Life time model: Atropos doesn\u2019t gracefully handle InvalidRSEExpression ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2432"},"#2432")),(0,a.kt)("li",{parentName:"ul"},"Life time model: Atropos command-line option --unlock-rules has no effect ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2456"},"#2456")),(0,a.kt)("li",{parentName:"ul"},"Rules: Calculation error of progress class for Rule PROGRESS notifications ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2440"},"#2440")),(0,a.kt)("li",{parentName:"ul"},"Testing: nosetests commands override return codes  ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2465"},"#2465"))),(0,a.kt)("h2",{id:"clients"},"Clients"),(0,a.kt)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clients: revert xrdcp workaround in downloadclient as soon as gfal is fixed ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1598"},"#1598"))),(0,a.kt)("h3",{id:"bugs-1"},"Bugs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clients: If policy section not available in client config, no exception should be raised ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1485"},"#1485")),(0,a.kt)("li",{parentName:"ul"},"Clients: Issue in client_extract download  ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2485"},"#2485"))))}f.isMDXComponent=!0}}]);
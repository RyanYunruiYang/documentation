(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{448:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(m,o(o({ref:t},u),{},{components:n})):i.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<a;u++)c[u]=n[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(448)),c=["components"],o={title:"1.27.2"},s={unversionedId:"release-notes/1.27.2",id:"release-notes/1.27.2",isDocsHomePage:!1,title:"1.27.2",description:"General",source:"@site/../docs/release-notes/1.27.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.2",permalink:"/documentation/release-notes/1.27.2",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.2.md",version:"current",frontMatter:{title:"1.27.2"}},u=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Bugs",id:"bugs-2",children:[]}]}],l={toc:u};function b(e){var t=e.components,n=Object(i.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Recovery: Expand automatic recovery of suspicious replicas ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4565"},"#4565"))),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Database: Add NO_INDEX_FFS(CONTENTS CONTENTS_PK) hint to reaper queries ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5097"},"#5097")),Object(a.b)("li",{parentName:"ul"},"Transfers: set reason for cancelled hops in multi-hops ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5086"},"#5086"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Consistency checks: Exception when calling core.replica.list_replicas() with a lengthy list of dids ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2216"},"#2216")),Object(a.b)("li",{parentName:"ul"},"Transfers: requests stay forever in Queued state if source creation fails ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5087"},"#5087"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Option to validate files by file size in Download Client. ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5008"},"#5008"))),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Issue with stat/exists and lan/wan protocols ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4984"},"#4984")),Object(a.b)("li",{parentName:"ul"},'Clients: "rucio upload" CLI fails if user has not WRITE privileges on the file to upload ',Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5073"},"#5073"))),Object(a.b)("h2",{id:"webui"},"WebUI"),Object(a.b)("h3",{id:"bugs-2"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WebUI: Cannot update subscriptions from the Rucio UI due to failing to load scopes ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5091"},"#5091"))))}b.isMDXComponent=!0}}]);
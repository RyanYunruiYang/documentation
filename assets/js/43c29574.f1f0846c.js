(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{157:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return u})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),i=(r(0),r(434)),c=["components"],a={title:"rucio-conveyor-finisher"},u={unversionedId:"bin/rucio-conveyor-finisher",id:"bin/rucio-conveyor-finisher",isDocsHomePage:!1,title:"rucio-conveyor-finisher",description:"`",source:"@site/../docs/bin/rucio-conveyor-finisher.md",sourceDirName:"bin",slug:"/bin/rucio-conveyor-finisher",permalink:"/documentation/bin/rucio-conveyor-finisher",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-conveyor-finisher.md",version:"current",frontMatter:{title:"rucio-conveyor-finisher"},sidebar:"docs",previous:{title:"rucio-cache-consumer",permalink:"/documentation/bin/rucio-cache-consumer"},next:{title:"rucio-conveyor-poller",permalink:"/documentation/bin/rucio-conveyor-poller"}},s=[],l={toc:s};function p(e){var n=e.components,r=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-conveyor-finisher [-h] [--run-once]\n                               [--total-threads TOTAL_THREADS]\n                               [--db-bulk DB_BULK] [--bulk BULK]\n                               [--sleep-time SLEEP_TIME]\n                               [--activities ACTIVITIES [ACTIVITIES ...]]\n\nConveyor is a group of daemons to manage file transfers. The conveyor-finisher\nis the resposible to update Rucio internal state after the transfer has\nfinished.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --total-threads TOTAL_THREADS\n                        Concurrency control: total number of threads per\n                        process\n  --db-bulk DB_BULK     Bulk control: number of transfers per db query\n  --bulk BULK           Bulk control: number of requests\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep if few requests\n  --activities ACTIVITIES [ACTIVITIES ...]\n                        Explicit list of activities to include\n")))}p.isMDXComponent=!0},434:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),b=t,m=p["".concat(c,".").concat(b)]||p[b]||f[b]||i;return r?o.a.createElement(m,a(a({ref:n},s),{},{components:r})):o.a.createElement(m,a({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,c=new Array(i);c[0]=b;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
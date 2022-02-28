(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{376:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(t),m=r,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||i;return t?o.a.createElement(f,a(a({ref:n},s),{},{components:t})):o.a.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),i=(t(0),t(376)),c=["components"],a={title:"Running rucio-undertaker"},u={unversionedId:"bin/rucio-undertaker",id:"bin/rucio-undertaker",isDocsHomePage:!1,title:"Running rucio-undertaker",description:"`",source:"@site/../docs/bin/rucio-undertaker.md",sourceDirName:"bin",slug:"/bin/rucio-undertaker",permalink:"/documentation/bin/rucio-undertaker",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-undertaker.md",version:"current",frontMatter:{title:"Running rucio-undertaker"}},s=[],p={toc:s};function l(e){var n=e.components,t=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-undertaker [-h] [--run-once] [--total-workers TOTAL_WORKERS]\n                        [--chunk-size CHUNK_SIZE] [--sleep-time SLEEP_TIME]\n\nThe Undertaker deamon is responsible for managing expired DIDs. It deletes\nDIDs, but not replicas by checking if there are DIDs where the 'expired_at'\ndate property is older than the current timestamp.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --total-workers TOTAL_WORKERS\n                        Total number of workers\n  --chunk-size CHUNK_SIZE\n                        Chunk size\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n\nCreate a DID that is already expired by setting its lifetime to -1:: $ python\nfrom rucio.db.sqla.constants import DIDType from rucio.client.didclient import\nDIDClient client = DIDClient() client.add_did(scope='mock', name='test',\ntype=DIDType.DATASET, lifetime=-1) Check if the DID exists:: $ rucio list-dids\nmock:test +--------------+--------------+ | SCOPE:NAME | [DID TYPE] |\n|--------------+--------------| | mock:test | DATASET |\n+--------------+--------------+ Run the daemon:: $ rucio-undertaker --run-once\nCheck if the DID exists:: $ rucio list-dids mock:test\n+--------------+--------------+ | SCOPE:NAME | [DID TYPE] |\n|--------------+--------------| +--------------+--------------+\n")))}l.isMDXComponent=!0}}]);
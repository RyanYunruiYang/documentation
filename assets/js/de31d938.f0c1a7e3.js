"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Rucio Storage Element"},c=void 0,l={unversionedId:"rucio_storage_element",id:"rucio_storage_element",title:"Rucio Storage Element",description:"A Rucio Storage Element (RSE) is the logical abstraction of a storage system for",source:"@site/../docs/rucio_storage_element.md",sourceDirName:".",slug:"/rucio_storage_element",permalink:"/documentation/rucio_storage_element",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/rucio_storage_element.md",tags:[],version:"current",lastUpdatedBy:"Eraldo Silva Junior",lastUpdatedAt:1675960174,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{title:"Rucio Storage Element"},sidebar:"docs",previous:{title:"Files, Datasets, and Containers",permalink:"/documentation/file_dataset_container"},next:{title:"Metadata attributes",permalink:"/documentation/metadata_attributes"}},u={},p=[{value:"Rucio Cache RSE",id:"rucio-cache-rse",level:2},{value:"Distances between RSEs",id:"distances-between-rses",level:2}],d={toc:p},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Rucio Storage Element (RSE) is the logical abstraction of a storage system for\nphysical files. It is the smallest unit of storage space addressable within\nRucio. It has a unique identifier and a set of meta attributes describing\nproperties such as supported protocols (https, srm, s3, ",".","..), host/port\naddress, quality of service, storage type (disk, tape, ",".","..), physical space\nproperties (used-, available-, non-pledged space), and geographical zone."),(0,o.kt)("p",null,"Rucio Storage Elements can be grouped in many logical ways, e.g. the UK RSEs,\nthe Tier-1 RSEs, or the 'good' RSEs. One can reference groups of RSEs by\nmetadata attributes or by explicit enumeration of RSEs. See the section about\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/rse_expressions"},"RSE Expressions")," for more information."),(0,o.kt)("p",null,"RSE tags are expanded at transfer time to enumerate target sites.  Post-facto\nchanges to the sites in an RSE tag list will not affect currently replicated\nfiles."),(0,o.kt)("h2",{id:"rucio-cache-rse"},"Rucio Cache RSE"),(0,o.kt)("p",null,"A cache is storage service which keeps additional copies of files to reduce\nresponse time and bandwidth usage. In Rucio, a cache is an RSE, tagged as\nvolatile. The control of the cache content is usually handled by an external\nprocess or applications (e.g. the Workflow management systems) and not by\nRucio. Thus, as Rucio doesn't control all file movements on these RSEs, the\napplication populating the cache must register and unregister these file\nreplicas in Rucio. The information about replica location on volatile RSEs can\nhave a lifetime. Replicas registered on volatile RSEs are excluded from the\nRucio replica management system (replication rules, quota, replication locks)\ndescribed in the section ",(0,o.kt)("a",{parentName:"p",href:"/documentation/replica_management"},"Replica management"),". Explicit\ntransfer requests can be made to Rucio in order to populate the cache."),(0,o.kt)("h2",{id:"distances-between-rses"},"Distances between RSEs"),(0,o.kt)("p",null,"When configuring transfers between RSEs, bidirectional distances or rankings\nmust be defined for that link. When sorting by these distances in the selection\nof a transfer source, the following criterion are used:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Higher source_ranking first"),(0,o.kt)("li",{parentName:"ul"},"On equal source_ranking, prefer DISK over TAPE"),(0,o.kt)("li",{parentName:"ul"},"On equal type, prefer lower distance_ranking"),(0,o.kt)("li",{parentName:"ul"},"On equal distance, prefer single hop")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7564],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},34675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"transfers-preparer",title:"Transfers Preparer"},p=void 0,l={unversionedId:"operator/transfers/transfers-preparer",id:"operator/transfers/transfers-preparer",title:"Transfers Preparer",description:"conveyor-preparer (transfer preparer) is the main entry point into the",source:"@site/../docs/operator/transfers/transfers_preparer.md",sourceDirName:"operator/transfers",slug:"/operator/transfers/transfers-preparer",permalink:"/documentation/operator/transfers/transfers-preparer",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/transfers/transfers_preparer.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1683288767,formattedLastUpdatedAt:"May 5, 2023",frontMatter:{id:"transfers-preparer",title:"Transfers Preparer"},sidebar:"docs",previous:{title:"Transfers Overview",permalink:"/documentation/operator/transfers/transfers-overview"},next:{title:"Transfers Throttler",permalink:"/documentation/operator/transfers/transfers-throttler"}},c={},u=[],d={toc:u},h="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(h,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"conveyor-preparer")," (transfer preparer) is the main entry point into the\ntransfer machinery. It leverages topological information to pick the best source\nreplica for the transfer. It also decides if the transfer has to be handled by\nthe throttler or not. For all new rucio installations, it is recommended to run\nthis daemon and activate it by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"conveyor/use_preparer = True"),"\nconfiguration option."),(0,o.kt)("p",null,"Preparer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"finds all source RSEs which have a replica of the desired file"),(0,o.kt)("li",{parentName:"ul"},"filters out the source RSEs which don't respect administrative constraints"),(0,o.kt)("li",{parentName:"ul"},"ensures protocol compatibility between sources and destination"),(0,o.kt)("li",{parentName:"ul"},"performs path computations to find the best sources"),(0,o.kt)("li",{parentName:"ul"},"transitions the transfer request either to a ",(0,o.kt)("inlineCode",{parentName:"li"},"Waiting")," or to a ",(0,o.kt)("inlineCode",{parentName:"li"},"Queued")," state")),(0,o.kt)("h1",{id:"source-replica-selection"},"Source replica selection"),(0,o.kt)("p",null,"One of the main jobs done by the preparer is the selection of the replica\nto be used as a transfer sources. For that, it relies on multiple RSE\nattributes and on the configured protocols. This section provides a summary\nof what configuration parameters can influence the preparer at this stage."),(0,o.kt)("p",null,"We will use the notation ",(0,o.kt)("inlineCode",{parentName:"p"},"section/option")," to speak about a configuration\nvalue to be set in ",(0,o.kt)("inlineCode",{parentName:"p"},"rucio.cfg")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[section]\noption = value\n")),(0,o.kt)("p",null,"The preparer will start by retrieving all the possible sources from the\ndatabase."),(0,o.kt)("p",null,"In the following step, the preparer will skip all sources which don't\nrespect the administrative constraints. For example, it will ignore source\nRSEs with ",(0,o.kt)("inlineCode",{parentName:"p"},"availability_read=False")," (unless the preparer is run with\n",(0,o.kt)("inlineCode",{parentName:"p"},"--ignore-availability"),"). It also respects the ",(0,o.kt)("inlineCode",{parentName:"p"},"restricted_read")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"restricted_write")," RSE attributes for the source and the destination."),(0,o.kt)("p",null,"Some request attributes will impact the source selection. For example, preparer\nwill skip source RSEs which don't match the ",(0,o.kt)("inlineCode",{parentName:"p"},"source_replica_expression")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"allow_tape_source")," conditions. It will also ignore requests witch require a\n",(0,o.kt)("inlineCode",{parentName:"p"},"transfertool")," that this preparer cannot use. The request attributes are\neither inherited from the rule, or set by another transfer daemon\n(for example: preparer)"),(0,o.kt)("p",null,"The next step is to perform the path computation. At this stage, preparer\nuses the distance between RSEs to perform shortest-path computations. If\nmulti-hopping is enabled via ",(0,o.kt)("inlineCode",{parentName:"p"},"transfers/use_multihop"),", then the configuration\nvalue ",(0,o.kt)("inlineCode",{parentName:"p"},"transfers/hop_penalty")," + the RSE attributes ",(0,o.kt)("inlineCode",{parentName:"p"},"available_for_multihop"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"hop_penalty")," will influence the distances for multi-hop paths.\nEach hop, even for single-hop transfers, must respect the protocol\ncompatibility between the source of the hop and its destination. The\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/1b8ca368523d13fd11bc0b32c14528f2fcec778b/lib/rucio/common/constants.py#L48"},"SCHEME_MAP"),"\nconstant defines the compatibility between protocols. Only protocols with\nnon-zero ",(0,o.kt)("inlineCode",{parentName:"p"},"third_party_copy_read")," will be considered for source RSEs, ordered\nby priority. Same for the destination: ",(0,o.kt)("inlineCode",{parentName:"p"},"third_party_copy_write")," is used."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": distances between RSEs which are set by the administrator via"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rucio-admin rse add-distance --distance 1 RSE1 RSE2\n# Note: before rucio 1.30 (as a consequence: also in the current LTS release 1.29),\n# the --ranking option was used for the same purpose. The --distance option\n# could still be set and was mentioned in documentation alongside --ranking\n# but was completely ignored by rucio.\n# On 1.29, you'll have to use the following command:\nrucio-admin rse add-distance --ranking 1 RSE1 RSE2\n")),(0,o.kt)("p",null,"Once all valid paths are found, after all the filtering done previously,\nthe paths are ordered using the following simple\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/608c9b1dc834f07396cc49dfcbc3daa613b61d56/lib/rucio/core/transfer.py#L905"},"rules"),"\n:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the source ranking is compared first. Source ranking is an integer which is\ndecreased each time a particular source is found to have an issue to perform\nthis particular transfer. It is thus equal to 0 at first try, and decreased\nat transfer failure before re-trying the transfer. This ensures that\nproblematic sources are much less likely to be re-used."),(0,o.kt)("li",{parentName:"ul"},"On equal source ranking, the RSE type is checked. Disk sources are preferred\nover tape."),(0,o.kt)("li",{parentName:"ul"},"On equal source RSE type, the distance between the source RSE and the\ndestination RSE is compared."),(0,o.kt)("li",{parentName:"ul"},"On equal distance, we prefer single-hop paths.")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"1.22.0rc1"},s=void 0,u={unversionedId:"release-notes/1.22.0rc1",id:"release-notes/1.22.0rc1",title:"1.22.0rc1",description:"Release Candidate",source:"@site/../docs/release-notes/1.22.0rc1.md",sourceDirName:"release-notes",slug:"/release-notes/1.22.0rc1",permalink:"/documentation/release-notes/1.22.0rc1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.22.0rc1.md",tags:[],version:"current",frontMatter:{title:"1.22.0rc1"}},p={},c=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}],d={toc:c},m="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"release-candidate"},"Release Candidate"),(0,i.kt)("p",null,"This is a release candidate! Only to be used in testing environments!"),(0,i.kt)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,i.kt)("p",null,"This feature release requires a database schema upgrade. Please consult the ",(0,i.kt)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about upgrading your database schema."),(0,i.kt)("p",null,"The following changes are necessary and are covered by the ",(0,i.kt)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"OAuth2.0 and JWT feature support (Alembic revision ",(0,i.kt)("inlineCode",{parentName:"li"},"d1189a09c6e0"),")")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"IDENTITIES_TYPE_CHK")," constraint in ",(0,i.kt)("inlineCode",{parentName:"li"},"identities")," table"),(0,i.kt)("li",{parentName:"ul"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"ACCOUNT_MAP_ID_TYPE_CHK")," constraint in ",(0,i.kt)("inlineCode",{parentName:"li"},"account_map")," table"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"oidc_scope")," column to ",(0,i.kt)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"audience")," column to ",(0,i.kt)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"refresh_token")," column to ",(0,i.kt)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"refresh")," column to ",(0,i.kt)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"TOKENS_REFRESH_CHK")," constraint to ",(0,i.kt)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"refresh_start")," column to ",(0,i.kt)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"refresh_expired_at")," column to ",(0,i.kt)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"refresh_lifetime")," column to ",(0,i.kt)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"oauth_requests")," table"),(0,i.kt)("li",{parentName:"ul"},"Change size of ",(0,i.kt)("inlineCode",{parentName:"li"},"token")," column in ",(0,i.kt)("inlineCode",{parentName:"li"},"tokens")," table")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Changes for Multi-VO functionality (Alembic revision ",(0,i.kt)("inlineCode",{parentName:"li"},"a118956323f8"),")")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"vos")," table"),(0,i.kt)("li",{parentName:"ul"},"Insert default row to ",(0,i.kt)("inlineCode",{parentName:"li"},"vos")," table"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"vo")," column to ",(0,i.kt)("inlineCode",{parentName:"li"},"rses")," table"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"RSES_VOS_FK")," foreign key constraint to ",(0,i.kt)("inlineCode",{parentName:"li"},"rses")," table"),(0,i.kt)("li",{parentName:"ul"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"RSES_RSE_UQ")," unique contraint in ",(0,i.kt)("inlineCode",{parentName:"li"},"rses")," table")),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authentication & Authorisation: Rucio user authentication via OIDC protocol (XDC IAM), getting user info and JWT tokens ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2612"},"#2612")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Need VO table and VO column in RSE table ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2727"},"#2727")),(0,i.kt)("li",{parentName:"ul"},"Deletion: Reaper 2.0 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2412"},"#2412")),(0,i.kt)("li",{parentName:"ul"},"Release management: Add oidc auth templates to setup.py ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3348"},"#3348")),(0,i.kt)("li",{parentName:"ul"},"Release management: Dependency upgrade for 1.22 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3360"},"#3360")),(0,i.kt)("li",{parentName:"ul"},"Release management: Better way to deal with configuration / permissions / policy ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/533"},"#533"))),(0,i.kt)("h3",{id:"enhancements"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deletion: Protection of sources too strict in the reaper ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1637"},"#1637"))),(0,i.kt)("h3",{id:"bugs"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authentication & Authorisation: Fixes to OIDC AuthN/Z after first deployment on a testbed ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3337"},"#3337")),(0,i.kt)("li",{parentName:"ul"},"Deletion: only_delete_obsolete is not working properly ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3399"},"#3399"))))}k.isMDXComponent=!0}}]);
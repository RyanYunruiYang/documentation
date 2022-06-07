(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{426:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(n),m=i,p=b["".concat(r,".").concat(m)]||b[m]||d[m]||a;return n?o.a.createElement(p,c(c({ref:t},l),{},{components:n})):o.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(3),o=n(7),a=(n(0),n(426)),r=["components"],c={id:"index",title:"Welcome to Rucio's documentation",sidebar_label:"Welcome",slug:"/"},u={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Welcome to Rucio's documentation",description:"Rucio is a project that provides services and associated libraries for allowing",source:"@site/../docs/index.md",sourceDirName:".",slug:"/",permalink:"/documentation/",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/index.md",version:"current",lastUpdatedBy:"egazzarr",lastUpdatedAt:1654609084,formattedLastUpdatedAt:"6/7/2022",sidebar_label:"Welcome",frontMatter:{id:"index",title:"Welcome to Rucio's documentation",sidebar_label:"Welcome",slug:"/"},sidebar:"docs",next:{title:"Before you get started",permalink:"/documentation/before_you_get_started"}},l=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Client",id:"client",children:[]},{value:"Administration",id:"administration",children:[]},{value:"Developer Documentation",id:"developer-documentation",children:[]},{value:"Contributing to the Documentation",id:"contributing-to-the-documentation",children:[]},{value:"About Us",id:"about-us",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,r);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Rucio is a project that provides services and associated libraries for allowing\nscientific collaborations to manage large volumes of data spread across\nfacilities at multiple institutions and organisations. Rucio was originally\ndeveloped to meet the requirements of the high-energy physics experiment\n",Object(a.b)("a",{parentName:"p",href:"https://atlas.cern/"},"ATLAS"),", and now is continuously extended to support the\nLHC experiments and other diverse scientific communities."),Object(a.b)("p",null,"Rucio offers advanced features, is highly scalable, and modular. It is a data\nmanagement solution that covers the needs of different communities in the\nscientific domain (e.g., HEP, astronomy, biology)."),Object(a.b)("p",null,"Below are some resources to help you get you started on your journey."),Object(a.b)("h2",{id:"getting-started"},"Getting Started"),Object(a.b)("p",null,"What exactly is Rucio? What were the motivations behind developing such a\nsystem? Who uses it? What powers these systems? Answers to all these questions\nand more can be found by browsing through the sub-sections of this topic."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/what_is_rucio"},"What is Rucio")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/main_components"},"Main Components")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/additional_layers_and_resources"},"Additional Layers and Resources"))),Object(a.b)("h2",{id:"client"},"Client"),Object(a.b)("p",null,"The rucio client enables users to interact with the system and access the\ndistributed data. The client can upload, download, manage and delete everything\nfrom single files up to Petabyte sized datasets."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/setting_up_the_rucio_client"},"Setting Up the Rucio Client")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/using_the_client"},"Using the Client")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/using_the_admin_client"},"Using the Admin Client"))),Object(a.b)("h2",{id:"administration"},"Administration"),Object(a.b)("p",null,"This section of the documentation deals with some of the material that an\noperator or administrator of a Rucio environment would require. For example, how\nto install a server or some quick tips for working with the administrative\nCLI. Take a deep dive, but not before you ensure you've read through the\npre-requisites section under each of the topics!"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/installing_server"},"Installing Rucio Server")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/installing_daemons"},"Installing Rucio Daemons")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/monitoring"},"Monitoring")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"database"},"Database")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/configuration_parameters"},"Configuration parameters"))),Object(a.b)("h2",{id:"developer-documentation"},"Developer Documentation"),Object(a.b)("p",null,"Whether you want to develop with Rucio or contribute to the project, the\nDeveloper documentation will help you get started. Peruse some common REST API &\nClient API references that are directly derived from Rucio's python\nlibraries. We also have a contribution guide for those who wish to pitch in."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"client_api/accountclient"},"Client API Documentation")),Object(a.b)("li",{parentName:"ul"},"REST API Documentation"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/setting_up_demo"},"Setting up a Rucio demo environment")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"configure-rucio-globus"},"Configuring Rucio to use Globus as an Online Transfer\nTool")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"contributing"},"Contributing guide"))),Object(a.b)("h2",{id:"contributing-to-the-documentation"},"Contributing to the Documentation"),Object(a.b)("p",null,"Documentation is always a work in progress and we welcome both, qualitative and\ntechnical contributions, from the community. Make sure you look into the\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/rucio/documentation"},"documentations GitHub repository")," and\nunderstand the pre-requisites before you submit your first PR!"),Object(a.b)("h2",{id:"about-us"},"About Us"),Object(a.b)("p",null,"Learn more about the brilliant minds pioneering the development and maintenance\nof Rucio in this section. Should you wish to get in touch with us, we've also\nincluded several ways of doing so in the ",Object(a.b)("strong",{parentName:"p"},"Contact Us")," section."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/about_our_contributors"},"About Our Contributors")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/contact_us"},"Contact Us"))))}b.isMDXComponent=!0}}]);
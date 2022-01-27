(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),c=(n(0),n(176)),i={id:"conflux_rpcs",title:"Public RPCs endpoints",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/rpc-endpoints.md",keywords:["endpoints"]},a={unversionedId:"sdks-and-tools/en/conflux_rpcs",id:"sdks-and-tools/en/conflux_rpcs",isDocsHomePage:!1,title:"Public RPCs endpoints",description:"Public available Conflux network RPC endpoints",source:"@site/docs/sdks-and-tools/en/rpc-endpoints.md",sourceDirName:"sdks-and-tools/en",slug:"/sdks-and-tools/en/conflux_rpcs",permalink:"/sdks-and-tools/en/conflux_rpcs",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/rpc-endpoints.md",version:"current",frontMatter:{id:"conflux_rpcs",title:"Public RPCs endpoints",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/rpc-endpoints.md",keywords:["endpoints"]},sidebar:"docs",previous:{title:"Introduction to Smart Contracts",permalink:"/contract/en/contract_introduction"},next:{title:"SDKs",permalink:"/sdks-and-tools/en/conflux_sdks"}},s=[{value:"Conflux-rust latest version",id:"conflux-rust-latest-version",children:[{value:"Conflux-RPC with smart DNS (Recommended)",id:"conflux-rpc-with-smart-dns-recommended",children:[]},{value:"TokenView&#39;s Infura service",id:"tokenviews-infura-service",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Public available Conflux network RPC endpoints"),Object(c.b)("p",null,"Mainnet chainId ",Object(c.b)("inlineCode",{parentName:"p"},"1029"),", testnet chainId ",Object(c.b)("inlineCode",{parentName:"p"},"1")),Object(c.b)("h2",{id:"conflux-rust-latest-version"},"Conflux-rust latest version"),Object(c.b)("h3",{id:"conflux-rpc-with-smart-dns-recommended"},"Conflux-RPC with smart DNS (Recommended)"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_getLogs")," method's ",Object(c.b)("inlineCode",{parentName:"p"},"max epoch gap")," is configured to ",Object(c.b)("inlineCode",{parentName:"p"},"1000"),"."),Object(c.b)("h4",{id:"http"},"HTTP"),Object(c.b)("p",null,"To ensure the service availability, we have set it's rate limit to ",Object(c.b)("a",{parentName:"p",href:"https://www.nginx.com/blog/rate-limiting-nginx/"},Object(c.b)("inlineCode",{parentName:"a"},"rate=100r/s burst=80 nodelay")),". If the request ratio succeed the limit, the service will return ",Object(c.b)("inlineCode",{parentName:"p"},"503"),". If you have requirement to send a lot transaction, one solution is send transaction in batch."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"mainnet"),": ",Object(c.b)("a",{parentName:"li",href:"https://main.confluxrpc.com"},"https://main.confluxrpc.com")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"testnet"),": ",Object(c.b)("a",{parentName:"li",href:"https://test.confluxrpc.com"},"https://test.confluxrpc.com"))),Object(c.b)("h4",{id:"websocket"},"WebSocket"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"ws(s)://main.confluxrpc.com/ws"),Object(c.b)("li",{parentName:"ul"},"ws(s)://test.confluxrpc.com/ws")),Object(c.b)("h3",{id:"tokenviews-infura-service"},"TokenView's Infura service"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://services.tokenview.com/cn/product/infura"},"https://services.tokenview.com/cn/product/infura"))))}u.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||c;return n?o.a.createElement(m,a(a({ref:t},l),{},{components:n})):o.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
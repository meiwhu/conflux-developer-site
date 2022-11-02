(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{191:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,d=m["".concat(b,".").concat(s)]||m[s]||p[s]||l;return n?r.a.createElement(d,c(c({ref:t},i),{},{components:n})):r.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var i=2;i<l;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(191)),b={id:"evm_space_networks",title:"Network Endpoints",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/networks.md",keywords:["endpoint"]},c={unversionedId:"conflux-doc/docs/EVM-Space/evm_space_networks",id:"conflux-doc/docs/EVM-Space/evm_space_networks",isDocsHomePage:!1,title:"Network Endpoints",description:"Confura",source:"@site/docs/conflux-doc/docs/EVM-Space/networks.md",sourceDirName:"conflux-doc/docs/EVM-Space",slug:"/conflux-doc/docs/EVM-Space/evm_space_networks",permalink:"/conflux-doc/docs/EVM-Space/evm_space_networks",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/networks.md",version:"current",frontMatter:{id:"evm_space_networks",title:"Network Endpoints",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/networks.md",keywords:["endpoint"]},sidebar:"evmSpace",previous:{title:"Introduction",permalink:"/conflux-doc/docs/EVM-Space/intro_of_evm_space"},next:{title:"Conflux eSpace Guide",permalink:"/v2-hardfork/evm_space_guide"}},o=[{value:"Confura",id:"confura",children:[{value:"Hong Kong",id:"hong-kong",children:[]},{value:"US East",id:"us-east",children:[]},{value:"Rate Limits",id:"rate-limits",children:[]},{value:"Common causes and mitigations",id:"common-causes-and-mitigations",children:[]},{value:"Other Notes",id:"other-notes",children:[]}]},{value:"Confura",id:"confura-1",children:[]},{value:"Hardfork number",id:"hardfork-number",children:[]}],i={toc:o};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"confura"},"Confura"),Object(l.b)("h3",{id:"hong-kong"},"Hong Kong"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Network"),Object(l.b)("th",{parentName:"tr",align:null},"Chain ID"),Object(l.b)("th",{parentName:"tr",align:null},"RPC Endpoint URL"),Object(l.b)("th",{parentName:"tr",align:null},"Explorer"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#mainnet"},"Mainnet")),Object(l.b)("td",{parentName:"tr",align:null},"1030 (0x406)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://evm.confluxrpc.com"},"https://evm.confluxrpc.com")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://evm.confluxscan.net"},"https://evm.confluxscan.net"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#testnet"},"Testnet")),Object(l.b)("td",{parentName:"tr",align:null},"71 (0x47)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://evmtestnet.confluxrpc.com"},"https://evmtestnet.confluxrpc.com")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://evmtestnet.confluxscan.net"},"https://evmtestnet.confluxscan.net"))))),Object(l.b)("h3",{id:"us-east"},"US East"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Network"),Object(l.b)("th",{parentName:"tr",align:null},"Chain ID"),Object(l.b)("th",{parentName:"tr",align:null},"RPC Endpoint URL"),Object(l.b)("th",{parentName:"tr",align:null},"Explorer"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#mainnet"},"Mainnet")),Object(l.b)("td",{parentName:"tr",align:null},"1030 (0x406)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://evm.confluxrpc.org"},"https://evm.confluxrpc.org")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://evm.confluxscan.io"},"https://evm.confluxscan.io"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#testnet"},"Testnet")),Object(l.b)("td",{parentName:"tr",align:null},"71 (0x47)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://evmtestnet.confluxrpc.org"},"https://evmtestnet.confluxrpc.org")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://evmtestnet.confluxscan.io"},"https://evmtestnet.confluxscan.io"))))),Object(l.b)("h3",{id:"rate-limits"},"Rate Limits"),Object(l.b)("p",null,"To ensure the service availability, we've added several rate limiters (implemented with token bucket algorithm) to mitigrate against bursts of incoming traffic. Users who send many requests in quick succession may see error responses that show up as status code ",Object(l.b)("inlineCode",{parentName:"p"},"429"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"QPS"),Object(l.b)("th",{parentName:"tr",align:null},"Burst"),Object(l.b)("th",{parentName:"tr",align:null},"Comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"all"),Object(l.b)("td",{parentName:"tr",align:null},"100"),Object(l.b)("td",{parentName:"tr",align:null},"1000"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of all requests per second")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"eth_getLogs"),Object(l.b)("td",{parentName:"tr",align:null},"20"),Object(l.b)("td",{parentName:"tr",align:null},"20"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of ",Object(l.b)("inlineCode",{parentName:"td"},"eth_getLogs")," requests per second")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"eth_call"),Object(l.b)("td",{parentName:"tr",align:null},"10"),Object(l.b)("td",{parentName:"tr",align:null},"200"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of ",Object(l.b)("inlineCode",{parentName:"td"},"eth_call")," requests per second")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"eth_sendRawTransaction"),Object(l.b)("td",{parentName:"tr",align:null},"50"),Object(l.b)("td",{parentName:"tr",align:null},"500"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of ",Object(l.b)("inlineCode",{parentName:"td"},"eth_sendRawTransaction")," requests per second")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"eth_getTransactionCount"),Object(l.b)("td",{parentName:"tr",align:null},"50"),Object(l.b)("td",{parentName:"tr",align:null},"500"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of ",Object(l.b)("inlineCode",{parentName:"td"},"eth_getTransactionCount")," requests per second")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"eth_getBlockByNumber"),Object(l.b)("td",{parentName:"tr",align:null},"5"),Object(l.b)("td",{parentName:"tr",align:null},"500"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of ",Object(l.b)("inlineCode",{parentName:"td"},"eth_getBlockByNumber")," requests per second")))),Object(l.b)("p",null,"If you are in the demand for higher QPS need, please visit ",Object(l.b)("a",{parentName:"p",href:"https://test.confluxhub.io/payment/consumer/app/subscription/0x4805C5B2741088B8458ed781083eA8940186E477"},"Conflux Hub")," to purchase our VIP subscription plan (testnet supported only for the moment) with the following new QPS standards."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"QPS"),Object(l.b)("th",{parentName:"tr",align:null},"Burst"),Object(l.b)("th",{parentName:"tr",align:null},"Comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"all"),Object(l.b)("td",{parentName:"tr",align:null},"200"),Object(l.b)("td",{parentName:"tr",align:null},"1000"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of all requests per second")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"eth_getLogs"),Object(l.b)("td",{parentName:"tr",align:null},"20"),Object(l.b)("td",{parentName:"tr",align:null},"20"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of ",Object(l.b)("inlineCode",{parentName:"td"},"eth_getLogs")," requests per second")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"eth_call"),Object(l.b)("td",{parentName:"tr",align:null},"20"),Object(l.b)("td",{parentName:"tr",align:null},"200"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of ",Object(l.b)("inlineCode",{parentName:"td"},"eth_call")," requests per second")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"eth_sendRawTransaction"),Object(l.b)("td",{parentName:"tr",align:null},"50"),Object(l.b)("td",{parentName:"tr",align:null},"500"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of ",Object(l.b)("inlineCode",{parentName:"td"},"eth_sendRawTransaction")," requests per second")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"eth_getTransactionCount"),Object(l.b)("td",{parentName:"tr",align:null},"100"),Object(l.b)("td",{parentName:"tr",align:null},"500"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of ",Object(l.b)("inlineCode",{parentName:"td"},"eth_getTransactionCount")," requests per second")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"eth_getBlockByNumber"),Object(l.b)("td",{parentName:"tr",align:null},"20"),Object(l.b)("td",{parentName:"tr",align:null},"50"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of ",Object(l.b)("inlineCode",{parentName:"td"},"eth_getBlockByNumber")," requests per second")))),Object(l.b)("h3",{id:"common-causes-and-mitigations"},"Common causes and mitigations"),Object(l.b)("p",null,"Rate limiting can occur under a variety of conditions, but it\u2019s most common in these scenarios:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Issuing multiple state call requests all at once can lead to rate limitting. We recommend using ",Object(l.b)("inlineCode",{parentName:"li"},"Multicall"),", which aggregates results from multiple contract constant function calls, and reduces the number of separate JSON RPC requests that need to be sent."),Object(l.b)("li",{parentName:"ul"},"Running high frequency ",Object(l.b)("inlineCode",{parentName:"li"},"eth_getLogs")," requests to catch up latest block can trigger rate limitting. As ",Object(l.b)("inlineCode",{parentName:"li"},"eth_getLogs")," request calls are expensive, we recommend adapting the epoch range or block range within your log query filter to reduces request calls.")),Object(l.b)("h3",{id:"other-notes"},"Other Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"eth_getLogs")," method no longer restrict the maximum gap between ",Object(l.b)("inlineCode",{parentName:"li"},"from_block")," and ",Object(l.b)("inlineCode",{parentName:"li"},"to_block")," for log query filter. Instead the query is now bounded with reasonable queryset size, 3s maximum running time and no more than 10,000 resultset size, under other circumstance you may need to narrow down your search condition.")),Object(l.b)("h2",{id:"confura-1"},"Confura"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Network"),Object(l.b)("th",{parentName:"tr",align:null},"Chain ID"),Object(l.b)("th",{parentName:"tr",align:null},"RPC Endpoint URL"),Object(l.b)("th",{parentName:"tr",align:null},"Explorer"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#mainnet"},"Mainnet")),Object(l.b)("td",{parentName:"tr",align:null},"1030 (0x406)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://conflux-espace-public.unifra.io"},"https://conflux-espace-public.unifra.io")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://evm.confluxscan.net"},"https://evm.confluxscan.net"))))),Object(l.b)("h2",{id:"hardfork-number"},"Hardfork number"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Mainnet: EpochNumber 36935000, BlockNumber 92060600"),Object(l.b)("li",{parentName:"ul"},"Testnet: EpochNumber 61465000, BlockNumber 77340000")))}u.isMDXComponent=!0}}]);
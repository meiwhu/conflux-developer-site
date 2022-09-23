(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(192)),i={id:"conflux_rpcs",title:"Public RPCs endpoints",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/rpc-endpoints.md",keywords:["endpoints"]},c={unversionedId:"sdks-and-tools/en/conflux_rpcs",id:"sdks-and-tools/en/conflux_rpcs",isDocsHomePage:!1,title:"Public RPCs endpoints",description:"Public available Conflux network RPC endpoints",source:"@site/docs/sdks-and-tools/en/rpc-endpoints.md",sourceDirName:"sdks-and-tools/en",slug:"/sdks-and-tools/en/conflux_rpcs",permalink:"/sdks-and-tools/en/conflux_rpcs",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/rpc-endpoints.md",version:"current",frontMatter:{id:"conflux_rpcs",title:"Public RPCs endpoints",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/rpc-endpoints.md",keywords:["endpoints"]},sidebar:"docs",previous:{title:"Papers",permalink:"/introduction/en/conflux_papers"},next:{title:"Overview",permalink:"/v2-hardfork/hydra_overview"}},o=[{value:"Confura",id:"confura",children:[{value:"Public Endpoint",id:"public-endpoint",children:[]},{value:"Rate Limits",id:"rate-limits",children:[]},{value:"Other Notes",id:"other-notes",children:[]}]},{value:"Unifra",id:"unifra",children:[]}],b={toc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Public available Conflux network RPC endpoints"),Object(l.b)("h2",{id:"confura"},"Confura"),Object(l.b)("p",null,"Confura is an Ethereum Infura equivalent public JSON-RPC service on Conflux network, which is developed and maintained by Conflux foundation."),Object(l.b)("p",null,"Our public RPC services are located in different regions globally. By utilizing geographic DNS routing, developers can request the regional RPC services which are physically closest to them."),Object(l.b)("h3",{id:"public-endpoint"},"Public Endpoint"),Object(l.b)("h4",{id:"hong-kong"},"Hong Kong"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Network"),Object(l.b)("th",{parentName:"tr",align:null},"Chain ID"),Object(l.b)("th",{parentName:"tr",align:null},"Explorer"),Object(l.b)("th",{parentName:"tr",align:null},"Endpoint"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Mainnet"),Object(l.b)("td",{parentName:"tr",align:null},"1029"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://confluxscan.net"},"https://confluxscan.net")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://main.confluxrpc.com"},"https://main.confluxrpc.com")," ",Object(l.b)("br",null)," wss://main.confluxrpc.com/ws")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Testnet"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://testnet.confluxscan.net"},"https://testnet.confluxscan.net")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://test.confluxrpc.com"},"https://test.confluxrpc.com")," ",Object(l.b)("br",null)," wss://test.confluxrpc.com/ws")))),Object(l.b)("h4",{id:"us-east"},"US East"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Network"),Object(l.b)("th",{parentName:"tr",align:null},"Chain ID"),Object(l.b)("th",{parentName:"tr",align:null},"Explorer"),Object(l.b)("th",{parentName:"tr",align:null},"Endpoint"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Mainnet"),Object(l.b)("td",{parentName:"tr",align:null},"1029"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://confluxscan.io"},"https://confluxscan.io")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://main.confluxrpc.org"},"https://main.confluxrpc.org")," ",Object(l.b)("br",null)," wss://main.confluxrpc.org/ws")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Testnet"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://testnet.confluxscan.io"},"https://testnet.confluxscan.io")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://test.confluxrpc.org"},"https://test.confluxrpc.org")," ",Object(l.b)("br",null)," wss://test.confluxrpc.org/ws")))),Object(l.b)("h3",{id:"rate-limits"},"Rate Limits"),Object(l.b)("p",null,"To ensure the service availability, we've added several rate limiters (implemented with token bucket algorithm) to mitigrate against bursts of incoming traffic. Users who send many requests in quick succession may see error responses that show up as status code ",Object(l.b)("inlineCode",{parentName:"p"},"429"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"QPS"),Object(l.b)("th",{parentName:"tr",align:null},"Burst"),Object(l.b)("th",{parentName:"tr",align:null},"Comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"all"),Object(l.b)("td",{parentName:"tr",align:null},"100"),Object(l.b)("td",{parentName:"tr",align:null},"1000"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of all requests per second")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cfx_getLogs"),Object(l.b)("td",{parentName:"tr",align:null},"20"),Object(l.b)("td",{parentName:"tr",align:null},"20"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of ",Object(l.b)("inlineCode",{parentName:"td"},"cfx_getLogs")," requests per second")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cfx_call"),Object(l.b)("td",{parentName:"tr",align:null},"10"),Object(l.b)("td",{parentName:"tr",align:null},"200"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of ",Object(l.b)("inlineCode",{parentName:"td"},"cfx_call")," requests per second")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cfx_sendRawTransaction"),Object(l.b)("td",{parentName:"tr",align:null},"50"),Object(l.b)("td",{parentName:"tr",align:null},"500"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of ",Object(l.b)("inlineCode",{parentName:"td"},"cfx_sendRawTransaction")," requests per second")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cfx_getNextNonce"),Object(l.b)("td",{parentName:"tr",align:null},"50"),Object(l.b)("td",{parentName:"tr",align:null},"500"),Object(l.b)("td",{parentName:"tr",align:null},"limits the number of ",Object(l.b)("inlineCode",{parentName:"td"},"cfx_getNextNonce")," requests per second")))),Object(l.b)("h4",{id:"common-causes-and-mitigations"},"Common causes and mitigations"),Object(l.b)("p",null,"Rate limiting can occur under a variety of conditions, but it\u2019s most common in these scenarios:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Issuing multiple state call requests all at once can lead to rate limitting. We recommend using ",Object(l.b)("inlineCode",{parentName:"li"},"Multicall"),", which aggregates results from multiple contract constant function calls, and reduces the number of separate JSON RPC requests that need to be sent."),Object(l.b)("li",{parentName:"ul"},"Running high frequency ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getLogs")," requests to catch up latest epoch can trigger rate limitting. As ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getLogs")," request calls are expensive, we recommend adapting the epoch range or block range within your log query filter to reduces request calls.")),Object(l.b)("h3",{id:"other-notes"},"Other Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getLogs")," method no longer restrict the maximum gap between ",Object(l.b)("inlineCode",{parentName:"li"},"from_epoch")," and ",Object(l.b)("inlineCode",{parentName:"li"},"to_epoch")," for log query filter. Instead the query is now bounded with reasonable queryset size, 3s maximum running time and no more than 10,000 resultset size, under other circumstance you may need to narrow down your search condition.")),Object(l.b)("h2",{id:"unifra"},"Unifra"),Object(l.b)("p",null,"Unifra is a Web3 developer platform focused on simplifying blockchain development. It has built a suite of developer tools, enhanced APIs, and a superior node infrastructure to seamlessly build and run blockchain applications. Unifra provide API services for multiple chains including Ethereum, BNS Smart Chain, Polygon and Conflux."),Object(l.b)("p",null,"Unifra provides:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Open access to free public end-points"),Object(l.b)("li",{parentName:"ul"},"Real-time webhook alerts via Notify"),Object(l.b)("li",{parentName:"ul"},"Best-in-class support and reliability / stability"),Object(l.b)("li",{parentName:"ul"},"Unifra's NFT API"),Object(l.b)("li",{parentName:"ul"},"Dashboard with Request Explorer")),Object(l.b)("p",null,"To use Unifra's service, developer need to register an account first and find the RPC endpoint in ",Object(l.b)("a",{parentName:"p",href:"https://console.unifra.io/"},"Unifra console"),". For detail infomation check ",Object(l.b)("a",{parentName:"p",href:"https://docs.unifra.io/"},"Unifra's documentation")))}s.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(185)),i={id:"conflux_papers",title:"Papers",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/papers.md",keywords:["conflux","papers"]},c={unversionedId:"introduction/en/conflux_papers",id:"introduction/en/conflux_papers",isDocsHomePage:!1,title:"Papers",description:"The Conflux Protocol is defined and analyzed in a number of research papers.",source:"@site/docs/introduction/en/papers.md",sourceDirName:"introduction/en",slug:"/introduction/en/conflux_papers",permalink:"/introduction/en/conflux_papers",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/papers.md",version:"current",frontMatter:{id:"conflux_papers",title:"Papers",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/papers.md",keywords:["conflux","papers"]},sidebar:"docs",previous:{title:"Storage",permalink:"/introduction/en/conflux_storage"},next:{title:"Public RPCs endpoints",permalink:"/sdks-and-tools/en/conflux_rpcs"}},s=[{value:"Con\ufb02ux Protocol Specification (Yellow paper)",id:"con\ufb02ux-protocol-specification-yellow-paper",children:[]},{value:"A Decentralized Blockchain with High Throughput and Fast Confirmation",id:"a-decentralized-blockchain-with-high-throughput-and-fast-confirmation",children:[]},{value:"GHAST: Breaking Confirmation Delay Barrier in Nakamoto Consensus via Adaptive Weighted Blocks",id:"ghast-breaking-confirmation-delay-barrier-in-nakamoto-consensus-via-adaptive-weighted-blocks",children:[]},{value:"Technical Presentation",id:"technical-presentation",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Conflux Protocol is defined and analyzed in a number of research papers."),Object(a.b)("h2",{id:"con\ufb02ux-protocol-specification-yellow-paper"},Object(a.b)("a",{parentName:"h2",href:"https://confluxnetwork.org/files/Conflux_Protocol_Specification_20201020.pdf"},"Con\ufb02ux Protocol Specification (Yellow paper)")),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"https://confluxnetwork.org/files/Conflux_Protocol_Specification_20201020.pdf"},"Protocol Specification")," serves as a reference of the Conflux protocol. It describes the ledger structure, the consensus mechanism, Proof of Work, the incentive mechanism, and many others aspects of the system."),Object(a.b)("h2",{id:"a-decentralized-blockchain-with-high-throughput-and-fast-confirmation"},Object(a.b)("a",{parentName:"h2",href:"https://www.usenix.org/conference/atc20/presentation/li-chenxing"},"A Decentralized Blockchain with High Throughput and Fast Confirmation")),Object(a.b)("p",null,"This paper presents Conflux, a scalable and decentralized blockchain system that provides high throughput and fast confirmation. Conflux operates on a novel consensus protocol which optimistically processes concurrent blocks without discarding any forks and adaptively assigns weights to blocks based on their topology in the Conflux ledger structure (called Tree-Graph). The adaptive weight mechanism enables Conflux to detect and thwart liveness attack by automatically switching between an optimistic strategy for fast confirmation in normal scenarios and a conservative strategy to ensure consensus progress during liveness attacks. "),Object(a.b)("h2",{id:"ghast-breaking-confirmation-delay-barrier-in-nakamoto-consensus-via-adaptive-weighted-blocks"},Object(a.b)("a",{parentName:"h2",href:"https://arxiv.org/abs/2006.01072"},"GHAST: Breaking Confirmation Delay Barrier in Nakamoto Consensus via Adaptive Weighted Blocks")),Object(a.b)("p",null,"This paper has been published at ",Object(a.b)("a",{parentName:"p",href:"https://arxiv.org/"},"https://arxiv.org/"),". In it, we present a new consensus protocol named GHAST (Greedy Heaviest Adaptive Sub-Tree) which organizes blocks in a Tree-Graph structure (i.e., a directed acyclic graph (DAG) with a tree embedded) that allows fast and concurrent block generation."),Object(a.b)("h2",{id:"technical-presentation"},Object(a.b)("a",{parentName:"h2",href:"https://confluxnetwork.org/files/Conflux_Technical_Presentation_20200309.pdf"},"Technical Presentation")),Object(a.b)("p",null,"This is a technical presentation about Conflux's main ideas and architecture, you can find how it's designed, and how Conflux achieves safety against double spending attacks and robustness against liveness attacks."))}p.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,h=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
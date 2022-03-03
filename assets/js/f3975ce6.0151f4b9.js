(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return h}));var r=n(3),o=n(7),a=(n(0),n(186)),i=n(191),c={id:"conflux_overview",title:"Overview",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/overview.md",slug:"/",keywords:["conflux","overview"]},s={unversionedId:"introduction/en/conflux_overview",id:"introduction/en/conflux_overview",isDocsHomePage:!1,title:"Overview",description:"Conflux is a new secure and reliable public blockchain with very high",source:"@site/docs/introduction/en/overview.md",sourceDirName:"introduction/en",slug:"/",permalink:"/",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/overview.md",version:"current",frontMatter:{id:"conflux_overview",title:"Overview",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/overview.md",slug:"/",keywords:["conflux","overview"]},sidebar:"docs",next:{title:"Basics",permalink:"/introduction/en/conflux_basics"}},l=[],u={toc:l};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Conflux is a new secure and reliable public blockchain with very high\nperformance and scalability. It can achieve the same level of decentralization\nand security as Bitcoin and Ethereum but provide more than two orders of\nmagnitude improvement on transaction throughput (TPS) and finality latency.  "),Object(a.b)("p",null,"The major superiority of Conflux hinges on its novel design of consensus\nprotocol, authenticated storage, and transaction relay protocol. In Conflux\nledger, blocks are organized as ",Object(a.b)("strong",{parentName:"p"},"Tree-Graph")," where each block references some\nother blocks with one of them being its parent block. By only looking at the\nblocks linked with parent edges, the ledger appears to be a tree structure\n(parental tree), while by looking at all the blocks, it appears to be a directed\nacyclic graph. This is also the reason that we call the ledger structure of\nConflux as Tree-Graph. "),Object(a.b)("img",{alt:"Tree-Graph",src:Object(i.a)("img/tree_graph.jpg")}),Object(a.b)("p",null,"The consensus algorithm of Conflux, which is called\n",Object(a.b)("strong",{parentName:"p"},"Greedy-Heaviest-Adaptive-SubTree")," (GHAST), enables all the nodes in the\nblockchain network to consistently agree on a ",Object(a.b)("strong",{parentName:"p"},"pivot chain")," of blocks by\napplying the ",Object(a.b)("em",{parentName:"p"},"heaviest subtree rule")," on the parental tree in the ledger, and in\nturn reach the consensus on the total order of all the blocks based on the pivot\nchain. GHAST also allows the Conflux nodes to detect some attacks (e.g., balance\nattack that tries to generate two balanced subtrees) that may hurt the liveness,\ni.e., the ability to confirm transactions, and thwart these attacks by\nadaptively adjusting the weights of the blocks.  "),Object(a.b)("p",null,"The Tree-Graph ledger and the GHAST consensus algorithm make Conflux nodes be\nable to quickly generate new blocks without worrying about that the existence of\nforks in the ledger may harm the security of the network, and hence enable the\nsystem to achieve both the high throughput and the low transaction confirmation\nlatency.  "),Object(a.b)("p",null,"Conflux employs account model and supports the smart contract. Its smart\ncontract is compatible with Solidity, which is Turing complete, as used in\nEthereum. Conflux uses merkle patricia tree as the major structure for its\nauthenticated storage used for the states of the accounts and the smart\ncontracts. Instead of using a single multi-version merkle tree, Conflux uses\nmultiple merkle trees for each version of the states. High-level speaking, it\nconsists of a snapshot tree and the delta trees. The delta tree is always held\nin memory and it contains all the state updates from the last snapshot. The\nsnapshot tree, instead, is read-only during the execution of the transactions.\nThis design makes the transaction execution in Conflux more efficient because it\ncan utilize the memory more effectively when accessing the state in the storage.\nThe delta tree typically contains the most frequently accessed data, and since\nthe state size is small in delta tree, the depth of the tree can also be\nshallow, which makes the memory be able to hold more effective data.  "),Object(a.b)("p",null,"In addition, Conflux employs a novel transaction relay protocol to improve the\neffective utilization of the network bandwidth for transaction propagation\nsince, in Conflux, the network bandwidth could become the real bottleneck. In\norder to reduce the redundant transaction propagation, a Conflux node first\nsends out to its peers an announcement containing the transaction ids that the\npeers may not have seen before, and then let the peers request the transactions\nthat they really need. Conflux introduces an efficient encoding for the\ntransaction id to achieve a good trade-off between the size and the security."))}h.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),f=r,p=h["".concat(i,".").concat(f)]||h[f]||d[f]||a;return n?o.a.createElement(p,c(c({ref:t},l),{},{components:n})):o.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},191:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(16),o=n(195);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},195:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(189)),i={id:"evm_space_vm_compatibility",title:"Compatibility with the EVM",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/EVM_Compatibility.md",keywords:["EVM","VM"]},l={unversionedId:"conflux-doc/docs/EVM-Space/evm_space_vm_compatibility",id:"conflux-doc/docs/EVM-Space/evm_space_vm_compatibility",isDocsHomePage:!1,title:"Compatibility with the EVM",description:"The eSpace implements an Ethereum Virtual Machine (EVM). Below are some differences between eSpace and Ethereum:",source:"@site/docs/conflux-doc/docs/EVM-Space/evm_compatibility.md",sourceDirName:"conflux-doc/docs/EVM-Space",slug:"/conflux-doc/docs/EVM-Space/evm_space_vm_compatibility",permalink:"/conflux-doc/docs/EVM-Space/evm_space_vm_compatibility",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/EVM_Compatibility.md",version:"current",frontMatter:{id:"evm_space_vm_compatibility",title:"Compatibility with the EVM",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/EVM_Compatibility.md",keywords:["EVM","VM"]},sidebar:"evmSpace",previous:{title:"Compatibility with the Web3 JSON-RPC Protocol",permalink:"/conflux-doc/docs/EVM-Space/evm_space_rpc_compatibility"}},b=[{value:"Precompiles",id:"precompiles",children:[{value:"Standard precompiles",id:"standard-precompiles",children:[]}]},{value:"Phantom transactions",id:"phantom-transactions",children:[{value:"Example",id:"example",children:[]}]}],o={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The eSpace implements an Ethereum Virtual Machine (EVM). Below are some differences between eSpace and Ethereum:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The ",Object(c.b)("inlineCode",{parentName:"li"},"NUMBER")," opcode will return the tree-graph ",Object(c.b)("inlineCode",{parentName:"li"},"epoch number"),". As a result, ",Object(c.b)("inlineCode",{parentName:"li"},"block.number")," used in eSpace contracts will not grow at a stable and predictable rate, and so it might not be suitable for measuring time."),Object(c.b)("li",{parentName:"ul"},"The ",Object(c.b)("inlineCode",{parentName:"li"},"BLOCKHASH")," opcode can only take ",Object(c.b)("inlineCode",{parentName:"li"},"NUMBER-1")," as input. (Unlike Ethereum, which takes any integer in ",Object(c.b)("inlineCode",{parentName:"li"},"NUMBER-256")," to ",Object(c.b)("inlineCode",{parentName:"li"},"NUMBER-1")," as input)"),Object(c.b)("li",{parentName:"ul"},"Block generate rate is 1.25s per block (mainnet)"),Object(c.b)("li",{parentName:"ul"},"Contract max code size is ",Object(c.b)("inlineCode",{parentName:"li"},"49152")," double as Ethereum"),Object(c.b)("li",{parentName:"ul"},"No gas refund in ",Object(c.b)("inlineCode",{parentName:"li"},"SSTORE")," opcode and ",Object(c.b)("inlineCode",{parentName:"li"},"SUICIDE")," opcode."),Object(c.b)("li",{parentName:"ul"},"The operations which occupy storage have a different gas cost.",Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"SSTORE")," costs 40000 gas (instead of 20000 gas in Ethereum) when changing a storage entry from zero to non-zero."),Object(c.b)("li",{parentName:"ol"},"When deploying a new contract, each byte costs 400 gas (instead of 200 gas in Ethereum)."),Object(c.b)("li",{parentName:"ol"},"When creating a new account by ",Object(c.b)("inlineCode",{parentName:"li"},"CALL")," or ",Object(c.b)("inlineCode",{parentName:"li"},"SUICIDE"),", it consumes 50000 gas (instead of 25000 gas in Ethereum)."))),Object(c.b)("li",{parentName:"ul"},"At most ",Object(c.b)("inlineCode",{parentName:"li"},"1/4")," of transaction ",Object(c.b)("inlineCode",{parentName:"li"},"gasLimit")," will be refund (if not used)"),Object(c.b)("li",{parentName:"ul"},"Only the block whose block height is a multiple of ",Object(c.b)("inlineCode",{parentName:"li"},"5")," can pack Ethereum type transaction. The total gas limit of these transaction cannot exceed half of the block gas limit (1500w).")),Object(c.b)("h2",{id:"precompiles"},"Precompiles"),Object(c.b)("h3",{id:"standard-precompiles"},"Standard precompiles"),Object(c.b)("div",{class:"compat-evm-precompiles-table"}),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Address"),Object(c.b)("th",{parentName:"tr",align:null},"ID"),Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Spec"),Object(c.b)("th",{parentName:"tr",align:null},"Status"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"0x01"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"ECRecover")),Object(c.b)("td",{parentName:"tr",align:null},"ECDSA public key recovery"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},"Yellow Paper")),Object(c.b)("td",{parentName:"tr",align:null},"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"0x02"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"SHA256")),Object(c.b)("td",{parentName:"tr",align:null},"SHA-2 256-bit hash function"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},"Yellow Paper")),Object(c.b)("td",{parentName:"tr",align:null},"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"0x03"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"RIPEMD160")),Object(c.b)("td",{parentName:"tr",align:null},"RIPEMD 160-bit hash function"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},"Yellow Paper")),Object(c.b)("td",{parentName:"tr",align:null},"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"0x04"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"Identity")),Object(c.b)("td",{parentName:"tr",align:null},"Identity function"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},"Yellow Paper")),Object(c.b)("td",{parentName:"tr",align:null},"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"0x05"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"ModExp")),Object(c.b)("td",{parentName:"tr",align:null},"Big integer modular exponentiation"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-198"},"EIP-198")),Object(c.b)("td",{parentName:"tr",align:null},"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"0x06"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"BN128Add")),Object(c.b)("td",{parentName:"tr",align:null},"Elliptic curve addition"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-196"},"EIP-196")),Object(c.b)("td",{parentName:"tr",align:null},"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"0x07"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"BN128Mul")),Object(c.b)("td",{parentName:"tr",align:null},"Elliptic curve scalar multiplication"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-196"},"EIP-196")),Object(c.b)("td",{parentName:"tr",align:null},"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"0x08"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"BN128Pair")),Object(c.b)("td",{parentName:"tr",align:null},"Elliptic curve pairing check"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-197"},"EIP-197")),Object(c.b)("td",{parentName:"tr",align:null},"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"0x09"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"Blake2F")),Object(c.b)("td",{parentName:"tr",align:null},"BLAKE2b ",Object(c.b)("inlineCode",{parentName:"td"},"F")," compression function"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-152"},"EIP-152")),Object(c.b)("td",{parentName:"tr",align:null},"\u2705")))),Object(c.b)("h2",{id:"phantom-transactions"},"Phantom transactions"),Object(c.b)("p",null,"A ",Object(c.b)("em",{parentName:"p"},"cross-space transaction")," is a transaction in the Conflux core space that, at some point during its execution, calls one of the state-changing (i.e., not ",Object(c.b)("inlineCode",{parentName:"p"},"view"),") methods of the ",Object(c.b)("inlineCode",{parentName:"p"},"CrossSpaceCall")," internal contract.\nSuch transactions can change CFX balances and contract storage in both spaces, core and eSpace."),Object(c.b)("p",null,"As EVM clients are not aware of Conflux space transactions (the two spaces use different transaction formats), we construct one or more ",Object(c.b)("em",{parentName:"p"},"phantom")," transactions (aka ",Object(c.b)("em",{parentName:"p"},"virtual")," transactions) for each call to the ",Object(c.b)("inlineCode",{parentName:"p"},"CrossSpaceCall")," internal contract.\nThese phantom transactions are derived from the corresponding core space transaction, they do not exist in the ledger.\nPhantom transactions have the following special properties:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"gas")," and ",Object(c.b)("inlineCode",{parentName:"li"},"gasPrice")," are ",Object(c.b)("inlineCode",{parentName:"li"},"0"),". Gas for cross-space transactions is charged in the core space. Therefore, the corresponding phantom transactions do not consume any gas."),Object(c.b)("li",{parentName:"ul"},"Invalid signature (",Object(c.b)("inlineCode",{parentName:"li"},"r"),", ",Object(c.b)("inlineCode",{parentName:"li"},"s"),", ",Object(c.b)("inlineCode",{parentName:"li"},"v"),", ",Object(c.b)("inlineCode",{parentName:"li"},"standardV"),"). The Conflux protocol is unable to sign transactions on behalf of the sender of the cross-space transaction. Therefore, phantom transactions use a fake signature that will not pass ECDSA verification.")),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("p",null,"When we retrieve epoch ",Object(c.b)("inlineCode",{parentName:"p"},"0x72819")," in the Conflux core space, we see it contains a single Conflux transaction."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'cfx_getBlockByEpochNumber(0x72819, true)\n\n{\n  "epochNumber": "0x72819",\n  "hash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n  "transactions": [\n    {\n      "hash": "0xe89ef4b61434ec331b621b8687033f9e4058e76759a3522bdc50e0cb358f505e",\n      "blockHash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n      "from": "NET8888:TYPE.USER:AAJFT5SK5RGK2KTJPMPUEJ69989N15KCCY7JAJEUP2",\n      "to": "NET8888:TYPE.CONTRACT:ACAP3N9KXZ7C4TU5NUU8G65FJ7A09MG1FY77ZAYSVW",\n      "gasPrice": "0x1",\n      "gas": "0x8b28d",\n      "storageLimit": "0x54",\n      "r": "0x2b943e84111cd5f95fbdf15667329ac546c9e5b99548d3c3702aeced4f07de6d",\n      "s": "0x2f47ae3c15ec2d1cbcf5bde3870aa21e1df54e8b7b926840a54faa9951cb3321",\n      "v": "0x0",\n      ...\n    }\n  ],\n  ...\n}\n')),Object(c.b)("p",null,"When we retrieve the corresponding block in the eSpace, we see it contains two phantom transactions."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'eth_getBlockByNumber(0x72819, true)\n\n{\n  "hash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n  "number": "0x72819",\n  "transactions": [\n    {\n      "hash": "0xfcdcf304b6b9dc263625b0924efaf3a7eb7044a17d27c0b8d631025b55d1147e",\n      "blockHash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n      "from": "0x0000000000000000000000000000000000000000",\n      "to": "0xf709629eee416c2d2a53692d38f1568538d8022f",\n      "gasPrice": "0x0",\n      "gas": "0x0",\n      "r": "0x1",\n      "s": "0x1",\n      "v": "0x4593",\n      ...\n    },\n    {\n      "hash": "0xca2f5c5848458bea556f99e626db7108377d600e24add1920c4106358a1a5502",\n      "blockHash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n      "from": "0xf709629eee416c2d2a53692d38f1568538d8022f",\n      "to": "0xdacf3af269b55ece5fe3239626a27f2a76c48245",\n      "gasPrice": "0x0",\n      "gas": "0x0",\n      "r": "0x1",\n      "s": "0x1",\n      "v": "0x4593",\n      ...\n    }\n  ],\n  ...\n}\n')))}p.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,u=d["".concat(i,".").concat(s)]||d[s]||m[s]||c;return n?r.a.createElement(u,l(l({ref:t},o),{},{components:n})):r.a.createElement(u,l({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<c;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);
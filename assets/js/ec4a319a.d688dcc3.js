(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{182:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return d})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return l}));var t=r(3),a=r(7),o=(r(0),r(188)),c={id:"send_tx_error",title:"cfx_sendRawTransaction errors",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/send-tx-error.md",keywords:["rpc","error"]},d={unversionedId:"conflux-doc/docs/RPCs/send_tx_error",id:"conflux-doc/docs/RPCs/send_tx_error",isDocsHomePage:!1,title:"cfx_sendRawTransaction errors",description:"When sending transaction through cfx_sendRawTransaction method, if the transaction is not build correctly, the method will failed and return some error message.",source:"@site/docs/conflux-doc/docs/RPCs/send-tx-error.md",sourceDirName:"conflux-doc/docs/RPCs",slug:"/conflux-doc/docs/RPCs/send_tx_error",permalink:"/conflux-doc/docs/RPCs/send_tx_error",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/send-tx-error.md",version:"current",frontMatter:{id:"send_tx_error",title:"cfx_sendRawTransaction errors",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/RPCs/send-tx-error.md",keywords:["rpc","error"]},sidebar:"api",previous:{title:"Common RPC errors",permalink:"/conflux-doc/docs/RPCs/common_rpc_error"},next:{title:"Publish-Subscribe API",permalink:"/conflux-doc/docs/pubsub"}},s=[{value:"Incorrect <code>nonce</code>",id:"incorrect-nonce",children:[{value:"tx already exist",id:"tx-already-exist",children:[]},{value:"tool stale nonce",id:"tool-stale-nonce",children:[]},{value:"too distant future",id:"too-distant-future",children:[]}]},{value:"Incorrect <code>gas</code>",id:"incorrect-gas",children:[{value:"NotEnoughBaseGas",id:"notenoughbasegas",children:[]},{value:"exceeds the maximum value 15000000",id:"exceeds-the-maximum-value-15000000",children:[]}]},{value:"Incorrect <code>gasPrice</code>",id:"incorrect-gasprice",children:[]},{value:"Incorrect <code>epochHeight</code>",id:"incorrect-epochheight",children:[]},{value:"Incorrect <code>to</code> address",id:"incorrect-to-address",children:[]},{value:"Incorrect <code>chainId</code>",id:"incorrect-chainid",children:[]},{value:"Encode or Signature error",id:"encode-or-signature-error",children:[{value:"Rlp encode",id:"rlp-encode",children:[]},{value:"Signature error",id:"signature-error",children:[]}]},{value:"Fullnode error",id:"fullnode-error",children:[{value:"txpool is full",id:"txpool-is-full",children:[]},{value:"catch up mode",id:"catch-up-mode",children:[]},{value:"Other",id:"other",children:[]}]}],i={toc:s};function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},i,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When sending transaction through ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction")," method, if the transaction is not build correctly, the method will failed and return some error message.\nBelow are the most common errrors."),Object(o.b)("h2",{id:"incorrect-nonce"},"Incorrect ",Object(o.b)("inlineCode",{parentName:"h2"},"nonce")),Object(o.b)("h3",{id:"tx-already-exist"},"tx already exist"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"tx already exist\\""\n    }\n  }\n')),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Tx with same nonce already inserted. To replace it, you need to specify a gas price > {}"\n    }\n}\n')),Object(o.b)("p",null,"To replace transaction in pool, specify a bigger gasPrice and resend."),Object(o.b)("h3",{id:"tool-stale-nonce"},"tool stale nonce"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"Transaction 0x4a2cfa73267139d965ab86d41f2af16db09e62ff92a5abffd7f8e743f36f327c is discarded due to a too stale nonce\\""\n    }\n}\n')),Object(o.b)("h3",{id:"too-distant-future"},"too distant future"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"Transaction 0xc875a03e1ce01268931a1a428d8f8313714ab5eb9c2b626bd327af7e5c3e8c03 is discarded due to in too distant future\\""\n    }\n}\n')),Object(o.b)("h2",{id:"incorrect-gas"},"Incorrect ",Object(o.b)("inlineCode",{parentName:"h2"},"gas")),Object(o.b)("h3",{id:"notenoughbasegas"},"NotEnoughBaseGas"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "15922956697249514502",\n  "error": {\n      "code": -32602,\n      "message": "Invalid parameters: tx",\n      "data": "\\"NotEnoughBaseGas { required: 21000, got: 2000 }\\""\n  }\n}\n')),Object(o.b)("h3",{id:"exceeds-the-maximum-value-15000000"},"exceeds the maximum value 15000000"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "15922956697249514502",\n  "error": {\n      "code": -32602,\n      "message": "Invalid parameters: tx",\n      "data": "\\"transaction gas 20000000 exceeds the maximum value 15000000, the half of pivot block gas limit\\""\n  }\n}\n')),Object(o.b)("h2",{id:"incorrect-gasprice"},"Incorrect ",Object(o.b)("inlineCode",{parentName:"h2"},"gasPrice")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "15922956697249514502",\n  "error": {\n      "code": -32602,\n      "message": "Invalid parameters: tx",\n      "data": "\\"ZeroGasPrice\\""\n  }\n}\n')),Object(o.b)("h2",{id:"incorrect-epochheight"},"Incorrect ",Object(o.b)("inlineCode",{parentName:"h2"},"epochHeight")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "15922956697249514502",\n  "error": {\n      "code": -32602,\n      "message": "Invalid parameters: tx",\n      "data": "\\"EpochHeightOutOfBound { block_height: 53800739, set: 0, transaction_epoch_bound: 100000 }\\""\n  }\n}\n')),Object(o.b)("h2",{id:"incorrect-to-address"},"Incorrect ",Object(o.b)("inlineCode",{parentName:"h2"},"to")," address"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "15922956697249514502",\n  "error": {\n      "code": -32602,\n      "message": "Invalid parameters: tx",\n      "data": "Unsupported receiver address type"\n  }\n}\n')),Object(o.b)("h2",{id:"incorrect-chainid"},"Incorrect ",Object(o.b)("inlineCode",{parentName:"h2"},"chainId")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "15922956697249514502",\n  "error": {\n      "code": -32602,\n      "message": "Invalid parameters: tx",\n      "data": "\\"ChainIdMismatch { expected: 1, got: 2 }\\""\n  }\n}\n')),Object(o.b)("h2",{id:"encode-or-signature-error"},"Encode or Signature error"),Object(o.b)("h3",{id:"rlp-encode"},"Rlp encode"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "15922956697249514502",\n  "error": {\n      "code": -32602,\n      "message": "Invalid parameters: raw",\n      "data": "\\"RlpIncorrectListLen\\""\n  }\n}\n')),Object(o.b)("h3",{id:"signature-error"},"Signature error"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "15922956697249514502",\n  "error": {\n      "code": -32602,\n      "message": "Invalid parameters: tx",\n      "data": "Can not recover pubkey for Ethereum like tx"\n  }\n}\n')),Object(o.b)("h2",{id:"fullnode-error"},"Fullnode error"),Object(o.b)("h3",{id:"txpool-is-full"},"txpool is full"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "15922956697249514502",\n  "error": {\n      "code": -32602,\n      "message": "Invalid parameters: tx",\n      "data": "txpool is full"\n  }\n}\n')),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "15922956697249514502",\n  "error": {\n      "code": -32602,\n      "message": "Invalid parameters: tx",\n      "data": "Failed imported to deferred pool: Transaction Pool is full"\n  }\n}\n')),Object(o.b)("h3",{id:"catch-up-mode"},"catch up mode"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "15922956697249514502",\n  "error": {\n      "code": -32077,\n      "message": "Request rejected due to still in the catch up mode.",\n      "data": null\n  }\n}\n')),Object(o.b)("h3",{id:"other"},"Other"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n  "jsonrpc": "2.0",\n  "id": "15922956697249514502",\n  "error": {\n      "code": -32602,\n      "message": "Invalid parameters: tx",\n      "data": "Failed to read account_cache from storage: {}"\n  }\n}\n')))}l.isMDXComponent=!0},188:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var n=a.a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},u=function(e){var n=l(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=t,m=u["".concat(c,".").concat(b)]||u[b]||p[b]||o;return r?a.a.createElement(m,d(d({ref:n},i),{},{components:r})):a.a.createElement(m,d({ref:n},i))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=b;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:t,c[1]=d;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
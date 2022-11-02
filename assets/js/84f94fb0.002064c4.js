(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),o=(t(0),t(191)),c={id:"transaction_send_common_error",title:"Sending TX Common Error",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/why-tx-send-failed.md",keywords:["transaction"]},i={unversionedId:"sending-tx/en/transaction_send_common_error",id:"sending-tx/en/transaction_send_common_error",isDocsHomePage:!1,title:"Sending TX Common Error",description:"In Conflux network, when sending a transaction via method cfx_sendRawTransaction, if the transaction is not constructed correctly, the sending will fail. Some of the common errors are:",source:"@site/docs/sending-tx/en/why-tx-send-failed.md",sourceDirName:"sending-tx/en",slug:"/sending-tx/en/transaction_send_common_error",permalink:"/sending-tx/en/transaction_send_common_error",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/why-tx-send-failed.md",version:"current",frontMatter:{id:"transaction_send_common_error",title:"Sending TX Common Error",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/why-tx-send-failed.md",keywords:["transaction"]},sidebar:"docs",previous:{title:"Why Transaction is Pending?",permalink:"/sending-tx/en/why_tx_is_pending"},next:{title:"Transaction FAQs",permalink:"/sending-tx/en/transaction_faqs"}},s=[{value:"Nonce Usage Error",id:"nonce-usage-error",children:[{value:"using a nonce that has already been executed",id:"using-a-nonce-that-has-already-been-executed",children:[]},{value:"using a nonce that has already been sent to the transaction pool",id:"using-a-nonce-that-has-already-been-sent-to-the-transaction-pool",children:[]},{value:"using a too large nonce",id:"using-a-too-large-nonce",children:[]}]},{value:"Gas",id:"gas",children:[]},{value:"gasPrice",id:"gasprice",children:[]},{value:"Data",id:"data",children:[]},{value:"epochHeight",id:"epochheight",children:[]},{value:"chainId Usage Error",id:"chainid-usage-error",children:[]},{value:"Encoding or Signature Error",id:"encoding-or-signature-error",children:[]},{value:"Full Transaction Pool",id:"full-transaction-pool",children:[]},{value:"Others",id:"others",children:[{value:"the node is in catch-up mode",id:"the-node-is-in-catch-up-mode",children:[]},{value:"internal error",id:"internal-error",children:[]}]}],l={toc:s};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In Conflux network, when sending a transaction via method ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction"),", if the transaction is not constructed correctly, the sending will fail. Some of the common errors are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"using a nonce that has already been executed"),Object(o.b)("li",{parentName:"ul"},"using a nonce that has already been sent to the transaction pool")),Object(o.b)("p",null,"There are also several other cases where sending fails:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The chainId is under mismatch."),Object(o.b)("li",{parentName:"ul"},"epochHeight is too large"),Object(o.b)("li",{parentName:"ul"},"gas exceeds 15 million (half of block gas limit)"),Object(o.b)("li",{parentName:"ul"},"gas is less than 21000"),Object(o.b)("li",{parentName:"ul"},"data is too large (exceeds 200K)"),Object(o.b)("li",{parentName:"ul"},"gasPrice is set to 0"),Object(o.b)("li",{parentName:"ul"},"Signature error"),Object(o.b)("li",{parentName:"ul"},"Transaction pool is full")),Object(o.b)("p",null,"The following are the RPC errors returned by the ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction")," method when a transaction fails"),Object(o.b)("h2",{id:"nonce-usage-error"},"Nonce Usage Error"),Object(o.b)("h3",{id:"using-a-nonce-that-has-already-been-executed"},"using a nonce that has already been executed"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"Transaction 0x4a2cfa73267139d965ab86d41f2af16db09e62ff92a5abffd7f8e743f36f327c is discarded due to a too stale nonce\\""\n    }\n}\n')),Object(o.b)("p",null,"In this case, the nonce needs to be changed to a currently available (unused) one"),Object(o.b)("h3",{id:"using-a-nonce-that-has-already-been-sent-to-the-transaction-pool"},"using a nonce that has already been sent to the transaction pool"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"tx already exist\\""\n    }\n  }\n')),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Tx with same nonce already inserted. to replace it, you need to specify a gas price > {}"\n    }\n}\n')),Object(o.b)("p",null,"For both cases, the transaction has already been sent to the transaction pool. If you want to update or replace it, you can use the same nonce, modify the corresponding field, and resend it with a higher gasPrice value."),Object(o.b)("h3",{id:"using-a-too-large-nonce"},"using a too large nonce"),Object(o.b)("p",null,"The nonce for sending a transaction cannot be too large for the user's current nonce. If it exceeds 2000, the following error will be found:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data":"\\"Transaction 0xc875a03e1ce01268931a1a428d8f8313714ab5eb9c2b626bd327af7e5c3e8c03 is discarded due to in too distant future\\""\n    }\n  }\n')),Object(o.b)("h2",{id:"gas"},"Gas"),Object(o.b)("p",null,"If the gas traded is too small (",Object(o.b)("inlineCode",{parentName:"p"},"<21000"),") or too large (",Object(o.b)("inlineCode",{parentName:"p"},">15m"),") the following error is returned:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"NotEnoughBaseGas { required: 21000, got: 2000 }\\""\n    }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"transaction gas 20000000 exceeds the maximum value 15000000, the half of pivot block gas limit\\""\n    }\n}\n')),Object(o.b)("h2",{id:"gasprice"},"gasPrice"),Object(o.b)("p",null,"The gasPrice of the transaction cannot be set to 0:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"ZeroGasPrice\\""\n    }\n}\n')),Object(o.b)("h2",{id:"data"},"Data"),Object(o.b)("p",null,"The transaction has a size limit. The maximum is 200k."),Object(o.b)("h2",{id:"epochheight"},"epochHeight"),Object(o.b)("p",null,"If the epochHeight of a transaction is smaller than the epochNumber of the current network by more than 100k, the following error will be found."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"EpochHeightOutOfBound { block_height: 53800739, set: 0, transaction_epoch_bound: 100000 }\\""\n    }\n}\n')),Object(o.b)("h2",{id:"chainid-usage-error"},"chainId Usage Error"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"ChainIdMismatch { expected: 1, got: 2 }\\""\n    }\n}\n')),Object(o.b)("h2",{id:"encoding-or-signature-error"},"Encoding or Signature Error"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: raw",\n        "data": "\\"RlpIncorrectListLen\\""\n    }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Can not recover pubkey for Ethereum like tx"\n    }\n}\n')),Object(o.b)("h2",{id:"full-transaction-pool"},"Full Transaction Pool"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "txpool is full"\n    }\n}\n')),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Failed imported to deferred pool: Transaction Pool is full"\n    }\n}\n')),Object(o.b)("p",null,"In this case, you can wait for a while to resend the transaction and increase the gasPrice of the transaction to help improve the chances of sending"),Object(o.b)("h2",{id:"others"},"Others"),Object(o.b)("h3",{id:"the-node-is-in-catch-up-mode"},"the node is in catch-up mode"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32077,\n        "message": "Request rejected due to still in the catch up mode,\n        "data": null\n    }\n}\n')),Object(o.b)("p",null,"Wait for the node data to sync to the latest before sending"),Object(o.b)("h3",{id:"internal-error"},"internal error"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Failed to read account_cache from storage: {}"\n    }\n}\n')))}d.isMDXComponent=!0},191:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,h=u["".concat(c,".").concat(p)]||u[p]||b[p]||o;return t?r.a.createElement(h,i(i({ref:n},l),{},{components:t})):r.a.createElement(h,i({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);
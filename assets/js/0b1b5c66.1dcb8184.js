(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{192:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||c;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),c=(n(0),n(192)),o={id:"light_node",title:"Run a Light Node",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/light-nodes.md",keywords:["conflux","light node"]},i={unversionedId:"conflux-doc/docs/light_node",id:"conflux-doc/docs/light_node",isDocsHomePage:!1,title:"Run a Light Node",description:"Overview",source:"@site/docs/conflux-doc/docs/light-nodes.md",sourceDirName:"conflux-doc/docs",slug:"/conflux-doc/docs/light_node",permalink:"/conflux-doc/docs/light_node",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/light-nodes.md",version:"current",frontMatter:{id:"light_node",title:"Run a Light Node",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/light-nodes.md",keywords:["conflux","light node"]},sidebar:"docs",previous:{title:"Run an Independent Chain",permalink:"/conflux-doc/docs/independent_chain"},next:{title:"Fullnode Config File",permalink:"/apis/en/node_config_example"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Running a light node",id:"running-a-light-node",children:[]},{value:"Interacting with a light node",id:"interacting-with-a-light-node",children:[{value:"RPC queries",id:"rpc-queries",children:[]},{value:"JavaScript",id:"javascript",children:[]},{value:"Other SDKs",id:"other-sdks",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"RPC availability",id:"rpc-availability",children:[]}],b={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Node version: ",Object(c.b)("inlineCode",{parentName:"strong"},"conflux-rust v2.0.0"),".")),Object(c.b)("p",null,"Light nodes are special nodes in the Conflux network that store block headers only, and retrieve everything else from their peers on-demand. This means that by default, light nodes do not store transactions, nor do they store the state trees. This can drastically reduce the disk and bandwidth use of light nodes compared to full and archive nodes, especially under high TPS. As a trade-off, RPC queries have a higher latency on light nodes."),Object(c.b)("p",null,"Light nodes execute GHAST consensus on their local header graph, and they also verify each item retrieved on-demand using Merkle proofs and other similar mechanisms. Items retrieved on-demand include accounts, bloom filters, transactions, and transaction receipts. This means that, while light nodes need to rely on their peers to fulfill RPC queries, they do this in a trustless manner."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"The current light node implementation is still considered experimental, bugs are expected to exist. If you encounter any issues, please let us know by opening an issue on the ",Object(c.b)("a",{parentName:"strong",href:"https://github.com/Conflux-Chain/conflux-rust/issues"},"conflux-rust")," repository.")),Object(c.b)("h2",{id:"running-a-light-node"},"Running a light node"),Object(c.b)("p",null,"Light nodes are implemented as a part of the official ",Object(c.b)("inlineCode",{parentName:"p"},"conflux-rust")," binary and can be enabled using the ",Object(c.b)("inlineCode",{parentName:"p"},"--light")," command line flag."),Object(c.b)("p",null,"Please start by downloading the latest release from the ",Object(c.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/releases"},"conflux-rust")," repository, or by building from source following ",Object(c.b)("a",{parentName:"p",href:"installation"},"this")," guide. Then, you can simply run the node using these commands:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"> cd run\n> ./conflux --config hydra.toml --light 2> stderr.txt\n")),Object(c.b)("p",null,"Alternatively, if you want your node to connect to the testnet, you will need to pass ",Object(c.b)("inlineCode",{parentName:"p"},"testnet.toml")," instead. Similarly to full nodes, you will know when your node is fully synced with the network once it prints:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"Catch-up mode: false\n")),Object(c.b)("h2",{id:"interacting-with-a-light-node"},"Interacting with a light node"),Object(c.b)("p",null,"Similarly to full and archive nodes, you can interact with a light node through an HTTP, TCP, or WebSocket connection. By default, local HTTP queries are enabled through port ",Object(c.b)("inlineCode",{parentName:"p"},"12539"),". For details, please refer to the ",Object(c.b)("a",{parentName:"p",href:"json_rpc"},"JSON-RPC")," documentation."),Object(c.b)("h3",{id:"rpc-queries"},"RPC queries"),Object(c.b)("p",null,"Light nodes support most Conflux RPC APIs, and support for the rest is also ",Object(c.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/issues/1461"},"on the way"),". As light nodes need to query their peers to fulfill RPC requests, the overall latency is slightly larger. (It is significantly larger for ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_getLogs"),", see ",Object(c.b)("a",{parentName:"p",href:"#im-searching-through-event-logs-why-is-it-so-slow"},"below"),".)"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'> curl -X POST --data \'{ "jsonrpc": "2.0", "method": "cfx_clientVersion", "id": 1 }\' -H "Content-Type: application/json" localhost:12539\n{ "jsonrpc": "2.0", "result": "conflux-rust-1.0.0", "id": 1 }\n\n> curl -X POST --data \'{ "jsonrpc":"2.0", "method":"cfx_getBalance", "params": ["cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg"], "id": 2 }\' -H "Content-Type: application/json" localhost:12539\n{ "jsonrpc": "2.0", "result": "0x5fc346d4363f84249d4a", "id": 2 }\n\n> curl -X POST --data \'{ "jsonrpc": "2.0", "method": "cfx_getLogs", "params": [{ "address": "cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp", "fromEpoch": "0x1c8b8", "toEpoch": "0x1c8d6" }], "id": 3}\' -H "Content-Type: application/json" localhost:12539\n{ "jsonrpc": "2.0", "result": [{ "address": "CFX:TYPE.CONTRACT:ACC7UAWF5UBTNMEZVHU9DHC6SGHEA0403Y2DGPYFJP", "blockHash": "0x694898c77602511b6c411860ec230ac7ca58c08a4cbe3cad904e724b2eb97fee", "data": "0x0000000000000000000000000000000000000000000000049b9ca9a694340000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000141da5f533abef1b82a4a6d698415b8a56894b7b410000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "epochNumber": "0x1c8bf", "logIndex": "0x0", "topics": ["0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987","0x0000000000000000000000001da5f533abef1b82a4a6d698415b8a56894b7b41","0x0000000000000000000000001da5f533abef1b82a4a6d698415b8a56894b7b41","0x00000000000000000000000080bb30efc5683758128b404fe5da03432eb16634"], "transactionHash": "0x7dcfeb245369e509f2d154f2d5523e3ebe0b54f1d420e02edf56c70cdcae278d", "transactionIndex": "0x0", "transactionLogIndex": "0x0" },{ "address": "CFX:TYPE.CONTRACT:ACC7UAWF5UBTNMEZVHU9DHC6SGHEA0403Y2DGPYFJP", "blockHash": "0x694898c77602511b6c411860ec230ac7ca58c08a4cbe3cad904e724b2eb97fee", "data": "0x0000000000000000000000000000000000000000000000049b9ca9a694340000", "epochNumber": "0x1c8bf", "logIndex": "0x1", "topics": ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x0000000000000000000000001da5f533abef1b82a4a6d698415b8a56894b7b41","0x00000000000000000000000080bb30efc5683758128b404fe5da03432eb16634"], "transactionHash": "0x7dcfeb245369e509f2d154f2d5523e3ebe0b54f1d420e02edf56c70cdcae278d", "transactionIndex": "0x0", "transactionLogIndex": "0x1" }], "id": 3 } -H "Content-Type: application/json" localhost:12539\n')),Object(c.b)("h3",{id:"javascript"},"JavaScript"),Object(c.b)("p",null,"Light nodes support most of the functionalities of the JavaScript SDK (",Object(c.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/js-conflux-sdk"},"js-conflux-sdk"),"). You can install the SDK using the following command:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"> npm install --save js-conflux-sdk@1.0.0-beta.1\n")),Object(c.b)("p",null,"Then, you can query the blockchain and send transactions:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const { Conflux, Drip } = require('js-conflux-sdk');\n\nconst PRIVATE_KEY = '0x...';\nconst RECEIVER = 'cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg';\n\nasync function main() {\n  const conflux = new Conflux({ url: 'http://localhost:12539' });\n\n  // query node version\n  const client_version = await conflux.provider.call('cfx_clientVersion');\n  console.log('client_version:', client_version);\n\n  // query account balance\n  const balance = await conflux.getBalance('cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg');\n  console.log('balance:', balance.toString(10));\n\n  // query smart contract logs\n  const logs = await conflux.getLogs({\n    address: 'cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp',\n    fromEpoch: 116920,\n    toEpoch: 116950,\n  });\n\n  console.log('logs:', logs);\n\n  // send transaction\n  const account = conflux.wallet.addPrivateKey(PRIVATE_KEY);\n\n  const tx = {\n    from: account.address,\n    to: RECEIVER,\n    value: Drip.fromCFX(0.1),\n    gasPrice: '0x1',\n  };\n\n  try {\n    const receipt = await conflux.sendTransaction(tx).executed();\n    console.log('receipt:', receipt);\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nmain();\n")),Object(c.b)("h3",{id:"other-sdks"},"Other SDKs"),Object(c.b)("p",null,"While it has not been tested, light nodes are expected to work with the Java and Go SDKs as well."),Object(c.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(c.b)("h4",{id:"why-do-i-get-an-error-when-calling-a-contract-method"},"Why do I get an error when calling a contract method?"),Object(c.b)("p",null,"If you run the following code:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const admin = await cfx.InternalContract('AdminControl').getAdmin('cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp');\nconsole.log('admin:', admin);\n")),Object(c.b)("p",null,"... you will get this error:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"RPCError: This API is not implemented yet\n    at HttpProvider.call\n    at processTicksAndRejections\n    at async Conflux.call\n    at async MethodTransaction.call\n    at async MethodTransaction.then {\n  code: -32000,\n  data: 'Tracking issue: https://github.com/Conflux-Chain/conflux-rust/issues/1461'\n}\n")),Object(c.b)("p",null,"This is because contract calls use the ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_call")," RPC API which is not yet supported on light nodes. For details, please refer to ",Object(c.b)("a",{parentName:"p",href:"#rpc-availability"},"this")," table."),Object(c.b)("p",null,"Suppose you would like to send a transaction to a smart contract:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"conflux.InternalContract('AdminControl').setAdmin('cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp', 'cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg').sendTransaction({\n  from: account,\n}).executed();\n")),Object(c.b)("p",null,"You will get a similar error. This is because for contract transactions, ",Object(c.b)("inlineCode",{parentName:"p"},"js-conflux-sdk")," will automatically attempt to estimate the gas limit and storage limit using the ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," RPC which is not yet supported on light nodes. You can address this by manually setting these parameters:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"conflux.InternalContract('AdminControl').setAdmin('cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp', 'cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg').sendTransaction({\n  from: account,\n  gas: '0x1111',\n  storageLimit: '0x0',\n  gasPrice: '0x1',\n}).executed();\n")),Object(c.b)("p",null,"If you encounter a ",Object(c.b)("inlineCode",{parentName:"p"},"This API is not implemented yet")," error, you can set the debug logger on the conflux object to find out which RPC is causing it."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const cfx = new Conflux({\n  url: 'http://localhost:12539',\n  logger: console,\n});\n")),Object(c.b)("h4",{id:"why-do-i-see-timeout-instead-of-null"},"Why do I see timeout instead of null?"),Object(c.b)("p",null,"For most operations, you might sometimes see a timeout error:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'RPCError: Operation timeout: "Timeout while retrieving transaction with hash 0x497755f45baef13a35347933c48c0b8940f2cc3347477b5ed9f165581b082699"\n')),Object(c.b)("p",null,"This is because light nodes have to retrieve transactions and other items from their peers. If no peer responds within 4 seconds, you will get a timeout error. In most cases, retrying the query will succeed."),Object(c.b)("p",null,"You will also get a timeout if you call ",Object(c.b)("inlineCode",{parentName:"p"},"conflux.getTransactionByHash")," and pass a transaction hash that does not exist. This is because the ",Object(c.b)("em",{parentName:"p"},'"non-existence"')," or transactions is not something light nodes can verify, so returning ",Object(c.b)("inlineCode",{parentName:"p"},"null")," might be misleading. This behavior might change in the future."),Object(c.b)("h4",{id:"im-searching-through-event-logs-why-is-it-so-slow"},"I'm searching through event logs, why is it so slow?"),Object(c.b)("p",null,"Log filtering is a very expensive operation on light nodes. For each epoch in the range you specify, the node needs to perform 1 to 3 queries. We recommend you make multiple queries with smaller epoch ranges."),Object(c.b)("p",null,"Instead of..."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const fromEpoch = 110000;\nconst toEpoch = 119999;\n\n// NOT RECOMMENDED\nconst logs = await cfx.getLogs({ fromEpoch, toEpoch, address: 'cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp' });\nconsole.log('logs:', logs);\n")),Object(c.b)("p",null,"... you are encouraged to do this:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"for (ii = 0; ii < 10; ++ii) {\n  const fromEpoch = 110000 + ii * 1000;\n  const toEpoch = 110000 + (ii + 1) * 1000 - 1;\n  const logs = await cfx.getLogs({ fromEpoch, toEpoch, address: 'cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp' });\n  console.log('logs:', logs);\n}\n")),Object(c.b)("h2",{id:"rpc-availability"},"RPC availability"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"RPC"),Object(c.b)("th",{parentName:"tr",align:"center"},"supported"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_call"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_call"))),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("a",{parentName:"td",href:"https://github.com/Conflux-Chain/conflux-rust/issues/1461"},"not yet"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_checkbalanceagainsttransaction"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_checkBalanceAgainstTransaction"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_clientversion"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_clientVersion"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_epochnumber"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_epochNumber"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_estimategasandcollateral"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_estimateGasAndCollateral"))),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("a",{parentName:"td",href:"https://github.com/Conflux-Chain/conflux-rust/issues/1461"},"not yet"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_gasprice"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_gasPrice"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getaccount"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getAccount"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getaccumulateinterestrate"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getAccumulateInterestRate"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getadmin"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getAdmin"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getbalance"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getBalance"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getbestblockhash"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getBestBlockHash"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getblockbyepochnumber"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getBlockByEpochNumber"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getblockbyhash"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getBlockByHash"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getblockbyhashwithpivotassumption"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getBlockByHashWithPivotAssumption"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getblockrewardinfo"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getBlockRewardInfo"))),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("a",{parentName:"td",href:"https://github.com/Conflux-Chain/conflux-rust/issues/1461"},"not yet"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getblocksbyepoch"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getBlocksByEpoch"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getcode"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getCode"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getcollateralforstorage"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getCollateralForStorage"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getconfirmationriskbyhash"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getConfirmationRiskByHash"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getinterestrate"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getInterestRate"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getlogs"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getLogs"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getnextnonce"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getNextNonce"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getskippedblocksbyepoch"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getSkippedBlocksByEpoch"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getsponsorinfo"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getSponsorInfo"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getstakingbalance"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getStakingBalance"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getstatus"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getStatus"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getstorageat"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getStorageAt"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_getstorageroot"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getStorageRoot"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_gettransactionbyhash"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getTransactionByHash"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_gettransactionreceipt"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_getTransactionReceipt"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"json_rpc#cfx_sendrawtransaction"},Object(c.b)("inlineCode",{parentName:"a"},"cfx_sendRawTransaction"))),Object(c.b)("td",{parentName:"tr",align:"center"},"OK")))))}s.isMDXComponent=!0}}]);
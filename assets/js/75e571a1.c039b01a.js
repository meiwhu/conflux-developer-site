(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{135:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),c=(t(0),t(185)),o={},s={unversionedId:"conflux-doc/docs/EVM-Space/cross_space_call",id:"conflux-doc/docs/EVM-Space/cross_space_call",isDocsHomePage:!1,title:"The CrossSpaceCall Internal Contract",description:"CrossSpaceCall Interface",source:"@site/docs/conflux-doc/docs/EVM-Space/cross_space_call.md",sourceDirName:"conflux-doc/docs/EVM-Space",slug:"/conflux-doc/docs/EVM-Space/cross_space_call",permalink:"/conflux-doc/docs/EVM-Space/cross_space_call",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-doc/docs/EVM-Space/cross_space_call.md",version:"current",frontMatter:{},sidebar:"evmSpace",previous:{title:"Overview of Core and eSpace Addresses",permalink:"/conflux-doc/docs/EVM-Space/account_explain"},next:{title:"Compatibility with the Web3 JSON-RPC Protocol",permalink:"/conflux-doc/docs/EVM-Space/evm_space_rpc_compatibility"}},l=[{value:"Cross-Space CFX Transfer",id:"cross-space-cfx-transfer",children:[{value:"From Core to eSpace",id:"from-core-to-espace",children:[]},{value:"From eSpace back to Core",id:"from-espace-back-to-core",children:[]}]}],i={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"CrossSpaceCall Interface"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90")," introduces a new internal contract: ",Object(c.b)("inlineCode",{parentName:"p"},"CrossSpaceCall"),". This contract is located at address ",Object(c.b)("inlineCode",{parentName:"p"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2sn102vjv")," (",Object(c.b)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000006"),") in the Core Space. ",Object(c.b)("inlineCode",{parentName:"p"},"CrossSpaceCall")," enables ",Object(c.b)("strong",{parentName:"p"},"CFX and data")," to be transferred between the two spaces."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"// SPDX-License-Identifier: MIT\npragma solidity >=0.5.0;\n\ninterface CrossSpaceCall {\n    event Call(bytes20 indexed sender, bytes20 indexed receiver, uint256 value, uint256 nonce, bytes data);\n\n    event Create(bytes20 indexed sender, bytes20 indexed contract_address, uint256 value, uint256 nonce, bytes init);\n\n    event Withdraw(bytes20 indexed sender, address indexed receiver, uint256 value, uint256 nonce);\n\n    event Outcome(bool success);\n\n    // Create contract in eSpace\n    function createEVM(bytes calldata init) external payable returns (bytes20);\n\n    // Transfer CFX to eSpace address\n    function transferEVM(bytes20 to) external payable returns (bytes memory output);\n\n    // Call eSpace contract method\n    function callEVM(bytes20 to, bytes calldata data) external payable returns (bytes memory output);\n\n    function staticCallEVM(bytes20 to, bytes calldata data) external view returns (bytes memory output);\n\n    // Widthdraw CFX from the sender's mapped account in eSpace\n    function withdrawFromMapped(uint256 value) external;\n\n    // Query eSpace mapped account's CFX balance\n    function mappedBalance(address addr) external view returns (uint256);\n\n    // Query eSpace mapped account's nonce\n    function mappedNonce(address addr) external view returns (uint256);\n}\n")),Object(c.b)("h2",{id:"cross-space-cfx-transfer"},"Cross-Space CFX Transfer"),Object(c.b)("h3",{id:"from-core-to-espace"},"From Core to eSpace"),Object(c.b)("p",null,"Transferring CFX from Conflux Core to eSpace can be done by calling the ",Object(c.b)("inlineCode",{parentName:"p"},"CrossSpaceCall.transferEVM(bytes20 to)")," method. When calling this method, you also need to specify the destination address (",Object(c.b)("inlineCode",{parentName:"p"},"to"),"). The amount of CFX to be transferred is specified as the value of this transaction."),Object(c.b)("p",null,"Take js-conflux-sdk (v2) as an example\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const { Conflux, format, Drip, CONST } = require('js-conflux-sdk');\n\n// Init Conflux instance\nconst conflux = new Conflux({\n  url: \"https://test.confluxrpc.com\",\n  networkId: 1\n});\n\n// Add account private key\nconst account = conflux.wallet.addPrivateKey(process.env.PRIVATE_KEY);  // Replace PRIVTE_KEY with your own private key\n\nconst CrossSpaceCall = conflux.InternalContract('CrossSpaceCall');\n\nasync function main() {\n  // The eSpace receiver address\n  const receiverAddress = \"0x02e1A5817ABf2812f04c744927FC91F03099C0f4\";\n\n  const receipt = await CrossSpaceCall\n    .transferEVM(receiverAddress)\n    .sendTransaction({\n      from: account.address,\n      value: Drip.fromCFX(1),\n    })\n    .executed();\n\n  console.log('Cross-space transfer: ', receipt.outcomeStatus === CONST.TX_STATUS.SUCCESS ? 'Success' : 'Fail');\n}\n\nmain().catch(console.log);\n")),Object(c.b)("p",null,"As long as the ",Object(c.b)("inlineCode",{parentName:"p"},"CrossSpaceCall.transferEVM(bytes20 to)")," method is called successfully, you can see the change by looking up the balance of the desination address in eSpace."),Object(c.b)("h3",{id:"from-espace-back-to-core"},"From eSpace back to Core"),Object(c.b)("p",null,"Transferring CFX from eSpace back to Conflux Core requires two steps."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Transfer CFX to the mapped account of the receiver Core Space address in eSpace."),Object(c.b)("li",{parentName:"ol"},"Call ",Object(c.b)("inlineCode",{parentName:"li"},"CrossSpaceCall.withdrawFromMapped(amount)")," in Core with the receiver address to withdraw the CFX.")),Object(c.b)("p",null,"Example of using js-conflux-sdk (v2) to cross back CFX:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"// Check above init code\nasync function main() {\n  const receipt = await CrossSpaceCall\n    .withdrawFromMapped(Drip.fromCFX(1))\n    .sendTransaction({\n      from: account.address,\n    })\n    .executed();\n\n  console.log('Cross-space transfer: ', receipt.outcomeStatus === CONST.TX_STATUS.SUCCESS ? 'Success' : 'Fail');\n}\n\nmain().catch(console.log);\n")),Object(c.b)("p",null,"The above example is intended to demonstrate the technical details of transferring CFX between Conflux Core and Conflux eSpace. Users can use the ",Object(c.b)("a",{parentName:"p",href:"https://evm.fluentwallet.com"},"Space Bridge Dapp")," to cross CFX directly through their wallets."))}p.isMDXComponent=!0},185:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=a,f=d["".concat(o,".").concat(b)]||d[b]||u[b]||c;return t?r.a.createElement(f,s(s({ref:n},i),{},{components:t})):r.a.createElement(f,s({ref:n},i))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<c;i++)o[i]=t[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
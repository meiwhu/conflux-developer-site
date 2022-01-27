(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{176:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var a=t(0),c=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=c.a.createContext({}),i=function(e){var n=c.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=i(e.components);return c.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},b=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(t),b=a,f=d["".concat(o,".").concat(b)]||d[b]||u[b]||r;return t?c.a.createElement(f,s(s({ref:n},p),{},{components:t})):c.a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},70:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return i}));var a=t(3),c=t(7),r=(t(0),t(176)),o={},s={unversionedId:"conflux-doc/docs/EVM-Space/zh/cross_space_call_zh",id:"conflux-doc/docs/EVM-Space/zh/cross_space_call_zh",isDocsHomePage:!1,title:"CrossSpaceCall \u5185\u7f6e\u5408\u7ea6",description:"CIP-90 \u540c\u65f6\u8fd8\u5f15\u5165\u4e86\u4e00\u4e2a\u65b0\u5185\u7f6e\u5408\u7ea6 CrossSpaceCall (0x0888000000000000000000000000000000000006)\uff0c\u8be5\u5185\u7f6e\u5408\u7ea6\u4f4d\u4e8e Native Space\uff0c\u5373\u53ea\u80fd\u5728 Native Space \u8fdb\u884c\u8c03\u7528\u3002",source:"@site/docs/conflux-doc/docs/EVM-Space/zh/cross_space_call_zh.md",sourceDirName:"conflux-doc/docs/EVM-Space/zh",slug:"/conflux-doc/docs/EVM-Space/zh/cross_space_call_zh",permalink:"/conflux-doc/docs/EVM-Space/zh/cross_space_call_zh",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-doc/docs/EVM-Space/zh/cross_space_call_zh.md",version:"current",frontMatter:{}},l=[{value:"CFX \u8de8 Space",id:"cfx-\u8de8-space",children:[{value:"Native \u8de8\u5165 EVM Space",id:"native-\u8de8\u5165-evm-space",children:[]},{value:"EVM \u8de8\u56de Native Space",id:"evm-\u8de8\u56de-native-space",children:[]}]}],p={toc:l};function i(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"CIP-90 \u540c\u65f6\u8fd8\u5f15\u5165\u4e86\u4e00\u4e2a\u65b0\u5185\u7f6e\u5408\u7ea6 ",Object(r.b)("inlineCode",{parentName:"p"},"CrossSpaceCall (0x0888000000000000000000000000000000000006)"),"\uff0c\u8be5\u5185\u7f6e\u5408\u7ea6\u4f4d\u4e8e Native Space\uff0c\u5373\u53ea\u80fd\u5728 Native Space \u8fdb\u884c\u8c03\u7528\u3002\n\u901a\u8fc7 CrossSpaceCall \u53ef\u5b9e\u73b0 CFX \u548c\u6570\u636e \u5728\u4e24\u4e2a Space \u4e92\u8de8\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// SPDX-License-Identifier: MIT\npragma solidity >=0.5.0;\n\ninterface CrossSpaceCall {\n    event Call(bytes20 indexed sender, bytes20 indexed receiver, uint256 value, uint256 nonce, bytes data);\n\n    event Create(bytes20 indexed sender, bytes20 indexed contract_address, uint256 value, uint256 nonce, bytes init);\n\n    event Withdraw(bytes20 indexed sender, address indexed receiver, uint256 value, uint256 nonce);\n\n    event Outcome(bool success);\n\n    // Create contract in EVM Space\n    function createEVM(bytes calldata init) external payable returns (bytes20);\n    \n    // Transfer CFX to EVM address\n    function transferEVM(bytes20 to) external payable returns (bytes memory output);\n\n    // Call EVM contract method\n    function callEVM(bytes20 to, bytes calldata data) external payable returns (bytes memory output);\n\n    function staticCallEVM(bytes20 to, bytes calldata data) external view returns (bytes memory output);\n\n    // Widthdraw CFX from EVM Space's mapped account\n    function withdrawFromMapped(uint256 value) external;\n\n    // Query EVM Space mapped account's CFX balance\n    function mappedBalance(address addr) external view returns (uint256);\n\n    // Query EVM Space mapped account's nonce\n    function mappedNonce(address addr) external view returns (uint256);\n}\n")),Object(r.b)("h2",{id:"cfx-\u8de8-space"},"CFX \u8de8 Space"),Object(r.b)("h3",{id:"native-\u8de8\u5165-evm-space"},"Native \u8de8\u5165 EVM Space"),Object(r.b)("p",null,"\u5c06 CFX \u4ece Conflux Native Space \u8de8\u5230 EVM Space \u53ef\u4ee5\u8c03\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"CrossSpaceCall.transferEVM(targetAddress)")," \u65b9\u6cd5\uff0c\u901a\u8fc7\u53c2\u6570\u6307\u5b9a",Object(r.b)("inlineCode",{parentName:"p"},"\u63a5\u53d7\u5730\u5740"),"\u5e76\u901a\u8fc7",Object(r.b)("inlineCode",{parentName:"p"},"\u4ea4\u6613\u7684 value")," \u6307\u5b9a\u8de8\u5165\u7684\u91d1\u989d\u3002"),Object(r.b)("p",null,"\u4ee5 js-conflux-sdk(v2) \u4e3a\u4f8b\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const { Conflux, format, Drip, CONST } = require('js-conflux-sdk');\n// Init conflux instance\nconst conflux = new Conflux({\n  url: \"https://test.confluxrpc.com\",\n  networkId: 1\n});\n// Add account private key\nconst account = conflux.wallet.addPrivateKey(process.env.PRIVATE_KEY);  // Replace PRIVTE_KEY with your own private key\n// CrossCall\nconst CrossSpaceCall = conflux.InternalContract('CrossSpaceCall');\n\nasync function main() {\n  // The EVM Space receiver address\n  const receiverAddress = \"0x02e1A5817ABf2812f04c744927FC91F03099C0f4\";\n\n  const receipt = await CrossSpaceCall\n    .transferEVM(receiverAddress)\n    .sendTransaction({\n      from: account.address,\n      value: Drip.fromCFX(1),\n    })\n    .executed();\n\n  console.log('Cross transfer: ', receipt.outcomeStatus === CONST.TX_STATUS.SUCCESS ? 'Success' : 'Fail');\n}\n\nmain().catch(console.log);\n")),Object(r.b)("p",null,"\u53ea\u8981 ",Object(r.b)("inlineCode",{parentName:"p"},"CrossSpaceCall.transferEVM(targetAddress)")," \u65b9\u6cd5\u8c03\u7528\u6210\u529f\uff0c\u5728 EVM Space \u67e5\u8be2 ",Object(r.b)("inlineCode",{parentName:"p"},"receiverAddress")," \u7684\u4f59\u989d\u5c31\u5e94\u8be5\u53ef\u4ee5\u770b\u5230\u53d8\u5316\u3002"),Object(r.b)("h3",{id:"evm-\u8de8\u56de-native-space"},"EVM \u8de8\u56de Native Space"),Object(r.b)("p",null,"\u5c06 CFX \u4ece EVM Space \u8de8\u56de Native Space \u9700\u8981\u5206\u6210\u4e24\u6b65\u6765\u5b8c\u6210\u3002"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u5728 EVM Space \u5c06 CFX \u8f6c\u5230 Native Space \u63a5\u53d7\u5730\u5740\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"EVM Space \u6620\u5c04\u5730\u5740")),Object(r.b)("li",{parentName:"ol"},"\u5728 Native Space \u4f7f\u7528\u63a5\u53d7\u5730\u5740\u8c03\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"CrossSpaceCall.withdrawFromMapped(amount)")," \u5373\u53ef\u53d6\u56de CFX")),Object(r.b)("h4",{id:"\u6620\u5c04\u5730\u5740"},"\u6620\u5c04\u5730\u5740"),Object(r.b)("p",null,"\u6620\u5c04\u5730\u5740\u662f\u901a\u8fc7 Native Space \u8d26\u6237\u7684 base32 \u5730\u5740\u8ba1\u7b97\u51fa\u6765\u7684\uff0c\u8ba1\u7b97\u89c4\u5219\u5982\u4e0b\uff1a"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u5c06 base32 \u5730\u5740\u8f6c\u6362\u4e3a hex \u683c\u5f0f\uff0c\u8fdb\u800c\u8f6c\u6362\u4e3a bytes \u7c7b\u578b"),Object(r.b)("li",{parentName:"ol"},"\u5bf9\u4e0a\u4e00\u6b65\u7684 bytes \u8fdb\u884c keccak \u8ba1\u7b97\u5f97\u5230 hash"),Object(r.b)("li",{parentName:"ol"},"\u53d6 hash \u7684\u540e 160 \u4f4d\uff0c\u7136\u540e\u8f6c\u6362\u4e3a hex40 \u683c\u5f0f\uff0c\u5373\u4e3a\u5728 EVM Space \u7684\u6620\u5c04\u5730\u5740\u3002")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"js-conflux-sdk v2.0")," \u63d0\u4f9b\u4e86\u65b9\u6cd5\uff0c\u83b7\u53d6 base32 \u5730\u5740\u7684\u6620\u5c04\u5730\u5740"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const { address } = require('js-conflux-sdk');\nconst base32Address = 'cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91';\nconst mappedAddress = address.cfxMappedEVMSpaceAddress(base32Address);\n// 0x12Bf6283CcF8Ad6ffA63f7Da63EDc217228d839A\n")),Object(r.b)("p",null,"\u5173\u4e8e\u6620\u5c04\u5730\u5740\u9700\u8981\u6ce8\u610f\u7684\u51e0\u4e2a\u5730\u65b9\uff1a"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u6620\u5c04\u5730\u5740\u662f\u4e00\u4e2a EVM Space \u5730\u5740\uff0c\u6240\u4ee5\u683c\u5f0f\u4e3a hex40"),Object(r.b)("li",{parentName:"ol"},"\u6620\u5c04\u5730\u5740\u7684\u4f5c\u7528\u662f\u5728 CFX \u8de8\u56de Native Space \u65f6\u4f5c\u4e3a\u4e2d\u8f6c\u5730\u5740"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"\u5207\u8bb0",Object(r.b)("inlineCode",{parentName:"strong"},"\u4e0d\u8981"),"\u76f4\u63a5\u628a base32 \u5730\u5740\u8f6c\u6362\u4e3a hex40 \u683c\u5f0f\u4f5c\u4e3a\u6620\u5c04\u5730\u5740\uff0c\u6b64\u64cd\u4f5c\u4f1a\u5bfc\u81f4\u8d44\u4ea7\u4e22\u5931"))),Object(r.b)("p",null,"\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"js-conflux-sdk v2")," \u8de8\u56de CFX \u7684\u4f8b\u5b50\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// Check above init code\nasync function main() {\n  const receipt = await CrossSpaceCall\n    .withdrawFromMapped(Drip.fromCFX(1))\n    .sendTransaction({\n      from: account.address,\n    })\n    .executed();\n\n  console.log('Cross transfer: ', receipt.outcomeStatus === CONST.TX_STATUS.SUCCESS ? 'Success' : 'Fail');\n}\n\nmain().catch(console.log);\n")),Object(r.b)("p",null,"\u4ee5\u4e0a\u793a\u4f8b\u4e3b\u8981\u7528\u4e8e\u6f14\u793a CFX \u8de8 Space \u7684\u6280\u672f\u5b9e\u73b0\u7ec6\u8282\uff0c\u666e\u901a\u7528\u6237\u53ef\u4f7f\u7528 ",Object(r.b)("a",{parentName:"p",href:"https://evm.fluentwallet.com"},"Space Bridge Dapp")," \u76f4\u63a5\u901a\u8fc7\u94b1\u5305\u5b9e\u73b0 CFX \u4e92\u8de8\u3002"))}i.isMDXComponent=!0}}]);
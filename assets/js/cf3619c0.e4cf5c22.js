(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),c=n(7),o=(n(0),n(192)),i={title:"Getting Started with MetaMask",id:"user_metamask_interact_evmspace",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/en/use-metamask-to-interact-evmspace.md",keywords:["MetaMask","EVMSpace"]},r={unversionedId:"guides/en/user_metamask_interact_evmspace",id:"guides/en/user_metamask_interact_evmspace",isDocsHomePage:!1,title:"Getting Started with MetaMask",description:"Introduction",source:"@site/docs/guides/en/use-metamask-to-interact-evmspace.md",sourceDirName:"guides/en",slug:"/guides/en/user_metamask_interact_evmspace",permalink:"/guides/en/user_metamask_interact_evmspace",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/en/use-metamask-to-interact-evmspace.md",version:"current",frontMatter:{title:"Getting Started with MetaMask",id:"user_metamask_interact_evmspace",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/en/use-metamask-to-interact-evmspace.md",keywords:["MetaMask","EVMSpace"]},sidebar:"evmSpace",previous:{title:"Conflux eSpace Guide",permalink:"/v2-hardfork/evm_space_guide"},next:{title:"Using Ledger with MetaMask on Conflux eSpace",permalink:"/guides/en/using_ledger_on_espace"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Connecting MetaMask to Conflux eSpace",id:"connecting-metamask-to-conflux-espace",children:[]},{value:"Deploying an ERC-20 Token using Remix",id:"deploying-an-erc-20-token-using-remix",children:[]},{value:"Adding an ERC-20 Token to MetaMask",id:"adding-an-erc-20-token-to-metamask",children:[]},{value:"Transferring an ERC-20 Token with MetaMask",id:"transferring-an-erc-20-token-with-metamask",children:[]},{value:"Summary",id:"summary",children:[]}],l={toc:s};function b(e){var t=e.components,i=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://metamask.io"},"MetaMask")," is a convenient UI for interacting with Ethereum-compatible blockchains (such as Conflux eSpace).\nFor the purpose of this guide, we will assume you are already familiar with MetaMask and have it installed.\nIf you need help getting started with MetaMask itself, ",Object(o.b)("a",{parentName:"p",href:"https://metamask.io/faqs.html"},"check out their documentation"),"."),Object(o.b)("p",null,"In this tutorial we will walk through connecting MetaMask to the Conflux eSpace Testnet , deploying a simple ERC-20 contract using ",Object(o.b)("a",{parentName:"p",href:"https://remix.ethereum.org"},"Remix"),", and transferring the new token using MetaMask."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Screenshots in this tutorial are taken from the MetaMask browser extension version 10.8.1."))),Object(o.b)("h2",{id:"connecting-metamask-to-conflux-espace"},"Connecting MetaMask to Conflux eSpace"),Object(o.b)("p",null,"You can add the Conflux eSpace network to your MetaMask wallet by following these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open your browser and navigate to ",Object(o.b)("a",{parentName:"li",href:"https://chainlist.org"},"https://chainlist.org"),"."),Object(o.b)("li",{parentName:"ol"},'Search for "Conflux eSpace".'),Object(o.b)("li",{parentName:"ol"},'Click "Connect Wallet" under "Conflux eSpace" to allow this site to send requests to Metamask.'),Object(o.b)("li",{parentName:"ol"},'Click "Add to Metamask" under "Conflux eSpace".'),Object(o.b)("li",{parentName:"ol"},'When MetaMask prompts "Allow this site to add a network?", click "Approve".'),Object(o.b)("li",{parentName:"ol"},'When MetaMask prompts "Allow this site to switch the network?", click "Approve".')),Object(o.b)("p",null,"Your MetaMask wallet is now connected to Conflux eSpace. You can switch to other networks anytime through the network selection dropdown menu in MetaMask."),Object(o.b)("p",null,'Alternatively, you can add Conflux eSpace to MetaMask manually by selecting "Add Network" (or "Custom RPC") in the network selection drop-down menu:'),Object(o.b)("p",null,Object(o.b)("img",{alt:"MetaMask-network-select",src:n(294).default})),Object(o.b)("p",null,"For the eSpace ",Object(o.b)("strong",{parentName:"p"},"mainnet"),", please use the following configuration values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Network Name"),": Conflux eSpace"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"New RPC URL"),": ",Object(o.b)("a",{parentName:"li",href:"https://evm.confluxrpc.com"},"https://evm.confluxrpc.com")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Chain ID"),": 1030"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Currency Symbol"),": CFX"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Block Explorer URL"),": ",Object(o.b)("a",{parentName:"li",href:"https://evm.confluxscan.net"},"https://evm.confluxscan.net"))),Object(o.b)("p",null,"For the eSpace ",Object(o.b)("strong",{parentName:"p"},"testnet"),", please use the following configuration values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Network Name"),": Conflux eSpace (Testnet)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"New RPC URL"),": ",Object(o.b)("a",{parentName:"li",href:"https://evmtestnet.confluxrpc.com"},"https://evmtestnet.confluxrpc.com")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Chain ID"),": 71"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Currency Symbol"),": CFX"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Block Explorer URL"),": ",Object(o.b)("a",{parentName:"li",href:"https://evmtestnet.confluxscan.net"},"https://evmtestnet.confluxscan.net"))),Object(o.b)("p",null,Object(o.b)("img",{alt:"MetaMask-create-EVM-Space-rpc",src:n(295).default})),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"All the Conflux eSpace RPC endpoint URLs and chain IDs can be found on our ",Object(o.b)("a",{parentName:"p",href:"/conflux-doc/docs/EVM-Space/evm_space_networks"},"Networks")," page."))),Object(o.b)("p",null,"Click ",Object(o.b)("inlineCode",{parentName:"p"},"Save"),", and you should see ",Object(o.b)("inlineCode",{parentName:"p"},"Conflux eSpace")," is now the network selected in MetaMask.\nTo see MetaMask in action, we will connect it to ",Object(o.b)("a",{parentName:"p",href:"https://remix.ethereum.org"},"Remix")," and perform some transactions.\nThe rest of this guide will assume your MetaMask is connected to ",Object(o.b)("inlineCode",{parentName:"p"},"Conflux eSpace (Testnet)"),"."),Object(o.b)("h2",{id:"deploying-an-erc-20-token-using-remix"},"Deploying an ERC-20 Token using Remix"),Object(o.b)("p",null,"In a new tab, open the Remix IDE at ",Object(o.b)("a",{parentName:"p",href:"https://remix.ethereum.org"},"remix.ethereum.org"),".\nIt might take a minute to load, but once it has, create a new file ",Object(o.b)("inlineCode",{parentName:"p"},"ERC20Token.sol")," in the workspace panel on the left:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Remix-new-file",src:n(296).default})),Object(o.b)("p",null,"Copy and paste the following code into the central editor panel:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/ERC20.sol";\n\ncontract MyToken is ERC20 {\n    constructor (string memory name, string memory symbol) ERC20(name, symbol) {\n        // Mint 10000 tokens to msg.sender\n        // Similar to how 1 dollar = 100 cents\n        // 1 token = 1 * (10 ** decimals)\n        _mint(msg.sender, 10000 * 10 ** uint(decimals()));\n    }\n}\n')),Object(o.b)("p",null,"Click the ",Object(o.b)("inlineCode",{parentName:"p"},"Solidity Compile")," button on the far left panel (the second icon down);\nensure your selected Solidity compiler version is 0.8 (minor versions within 0.8, e.g., 0.8.4 work too), and click ",Object(o.b)("inlineCode",{parentName:"p"},"Compile ERC20Token.sol"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Remix-solidity-compile",src:n(297).default})),Object(o.b)("p",null,"Once the contract is compiled, click the ",Object(o.b)("inlineCode",{parentName:"p"},"Deploy & run transactions")," button in the far left panel (the icon below the Solidity compiler).\nIn the ",Object(o.b)("inlineCode",{parentName:"p"},"ENVIRONMENT")," drop-down select ",Object(o.b)("inlineCode",{parentName:"p"},"Injected Web3"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Remix-inject-web3",src:n(298).default})),Object(o.b)("p",null,"You will see a MetaMask pop-up window asking you to give the Remix IDE permission to access it.\nClick ",Object(o.b)("inlineCode",{parentName:"p"},"Next")," and then ",Object(o.b)("inlineCode",{parentName:"p"},"Connect")," to grant access."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Remix-connect-metamask",src:n(299).default})),Object(o.b)("p",null,"Back in the Remix interface, click the arrow next to the ",Object(o.b)("inlineCode",{parentName:"p"},"DEPLOY")," section of the left panel.\nFill in the token details with whatever you like (",Object(o.b)("inlineCode",{parentName:"p"},"GoldenToken")," and ",Object(o.b)("inlineCode",{parentName:"p"},"GLD")," in the example), and click ",Object(o.b)("inlineCode",{parentName:"p"},"transact"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Remix-deploy-contract",src:n(300).default})),Object(o.b)("p",null,"Another MetaMask pop-up will appear asking you to confirm the transaction.\nClick ",Object(o.b)("inlineCode",{parentName:"p"},"Confirm"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Remix-deploy-contract-metamask-confirm",src:n(301).default})),Object(o.b)("p",null,"After a few moments the transaction will be confirmed by the network.\nYou will see a success message in the bottom panel and the contract listed under ",Object(o.b)("inlineCode",{parentName:"p"},"Deployed Contracts")," on the left panel.\nClick the copy button to copy the address of the newly deployed contract."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Remix-deploy-contract-confirmed",src:n(302).default})),Object(o.b)("p",null,"Now that the contract is deployed on the Conflux eSpace, we can interact with it via MetaMask."),Object(o.b)("h2",{id:"adding-an-erc-20-token-to-metamask"},"Adding an ERC-20 Token to MetaMask"),Object(o.b)("p",null,"In the MetaMask interface (with the Conflux EVM Testnet network still selected), click the ",Object(o.b)("inlineCode",{parentName:"p"},"Add Token")," button:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"MetaMask-add-token-button",src:n(303).default})),Object(o.b)("p",null,"Paste the token address copied from Remix in the previous step.\nThe remaining token details should fill in automatically as MetaMask finds the contract on-chain.\nClick ",Object(o.b)("inlineCode",{parentName:"p"},"Next"),":"),Object(o.b)("p",null,Object(o.b)("img",{alt:"MetaMask-add-token",src:n(304).default})),Object(o.b)("p",null,"On the next screen you see the balance (100 tokens), as minted in our contract constructor.\nClick ",Object(o.b)("inlineCode",{parentName:"p"},"Add Tokens"),":"),Object(o.b)("p",null,Object(o.b)("img",{alt:"MetaMask-add-token-confirm",src:n(305).default})),Object(o.b)("p",null,"The token has now been added to MetaMask and we can use the MetaMask interface to view the token balance and to transfer the token to others."),Object(o.b)("h2",{id:"transferring-an-erc-20-token-with-metamask"},"Transferring an ERC-20 Token with MetaMask"),Object(o.b)("p",null,"Continuing from the previous step, click the ",Object(o.b)("inlineCode",{parentName:"p"},"Send")," button in the MetaMask interface:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"MetaMask-my-token",src:n(306).default})),Object(o.b)("p",null,"Select a recipient (if you have multiple accounts in MetaMask you can simply select another account), and an amount of tokens to send.\nClick ",Object(o.b)("inlineCode",{parentName:"p"},"Next"),":"),Object(o.b)("p",null,Object(o.b)("img",{alt:"MetaMask-send-my-token",src:n(307).default})),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Once again the gas price should be set to zero, but this will change going forward."))),Object(o.b)("p",null,"Click ",Object(o.b)("inlineCode",{parentName:"p"},"Confirm")," to send the transaction to the network:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"MetaMask-send-my-token-confirm",src:n(308).default})),Object(o.b)("p",null,"After a few moments the transaction will be confirmed by the network.\nYou can see the updated balance your account holds in the MetaMask interface:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"MetaMask-my-token-sent-account1",src:n(309).default})),Object(o.b)("p",null,"If you transferred to another MetaMask account you hold then you can follow the aforementioned instructions for adding the token to MetaMask on the other account, and view its balance also."),Object(o.b)("p",null,Object(o.b)("img",{alt:"MetaMask-add-token-account2",src:n(310).default})),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("p",null,"In this tutorial we connected MetaMask to the Conflux EVM Testnet, deployed an ERC-20 token contract using Remix, and transferred that token using MetaMask.\nThe only difference to doing this on the original Ethereum network was setting the RPC endpoint to be Conflux eSpace's."))}b.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),c=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),b=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=b(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?c.a.createElement(u,r(r({ref:t},l),{},{components:n})):c.a.createElement(u,r({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var l=2;l<o;l++)i[l]=n[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},294:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/metamask_choose_network-0d3034f88dcd7bc92f61df7d1be9bb7c-0d3034f88dcd7bc92f61df7d1be9bb7c.png"},295:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/metamask_add_network-cec2c8b22ca4e27c6b253415ff8f2244.png"},296:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/remix_new_file-15cadba3e578d16df451448175231e8b-15cadba3e578d16df451448175231e8b.png"},297:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/remix_solidity_compile-1f459820c9caef73c47d3af1c87e71a6-1f459820c9caef73c47d3af1c87e71a6.png"},298:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/remix_injected_web3-dbb0d671a1703239451d7d4e133f68ba-dbb0d671a1703239451d7d4e133f68ba.png"},299:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/remix_connect_with_metamask-9d8214740f372d3b41e489cbe23c5884-9d8214740f372d3b41e489cbe23c5884.png"},300:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/remix_deploy_contract-6423d60330003a7ffc0dc28ee5cd8178-6423d60330003a7ffc0dc28ee5cd8178.png"},301:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/remix_deploy_contract_metamask_confirm-6b4f8c2a751ec4a4b6ad9df96584c623-6b4f8c2a751ec4a4b6ad9df96584c623.png"},302:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/remix_deploy_contract_confirmed-59390e985747c30736f46356a88b4ff1-59390e985747c30736f46356a88b4ff1.png"},303:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/metam-import-token-b2a756a7a4ed3ac17f1a75fca77bf738.png"},304:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mm-import-token-short-1-71f005c4fdb996d2a4b5651ceb6bc7bd.png"},305:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mm-import-token-short-2-675291201c0f55a6a0603edad9544335.png"},306:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/start-send-gld-b56abfa83bb02864b94c3a5adcbcc0d0.jpeg"},307:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/send-gld-1-da8b6feee94ca0dfe89afc5118267c89.jpeg"},308:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/send-gld-confirm-7789e263d3d53e45e2e4bebbf1d057cb.jpeg"},309:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/token-transfer-balance-changed-24a5b4588118295da68d10d9a3cea0cf.jpeg"},310:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mm-token-balance-changed-c59c6e2434009c0dcb6e03ef79ba5e60.png"}}]);
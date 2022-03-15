(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{179:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return d}));var n=o(3),a=o(7),l=(o(0),o(188)),r=o(192),i={id:"pos_staking",title:"POS Staking Pool node management",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/run-a-node/en/pos-staking.md",keywords:["node","pos","pool","staking"]},c={unversionedId:"run-a-node/en/pos_staking",id:"run-a-node/en/pos_staking",isDocsHomePage:!1,title:"POS Staking Pool node management",description:"In this tutorial we present a guide for how to deploy, configure and manage a POS Pool that will allow CONFLUX holders to join to the PoS protocol just interacting with the front-end application of the PoS Pool and without dealing with the technical complexities.",source:"@site/docs/run-a-node/en/pos-staking.md",sourceDirName:"run-a-node/en",slug:"/run-a-node/en/pos_staking",permalink:"/run-a-node/en/pos_staking",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/run-a-node/en/pos-staking.md",version:"current",frontMatter:{id:"pos_staking",title:"POS Staking Pool node management",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/run-a-node/en/pos-staking.md",keywords:["node","pos","pool","staking"]},sidebar:"docs",previous:{title:"Official bootnodes",permalink:"/run-a-node/en/official_bootnodes"},next:{title:"My First Transaction",permalink:"/conflux-doc/docs/send_transaction"}},p=[{value:"Reference Architecture",id:"reference-architecture",children:[]},{value:"Main contracts",id:"main-contracts",children:[]},{value:"Deploy process",id:"deploy-process",children:[]},{value:"Bootstrap",id:"bootstrap",children:[]},{value:"CLI",id:"cli",children:[{value:"Step 1 - Deploy PoolManager",id:"step-1---deploy-poolmanager",children:[]},{value:"Step 2 - Deploy PoSPool contract",id:"step-2---deploy-pospool-contract",children:[]},{value:"Step 3 - Deploy PoSPoolProxy1967 contract",id:"step-3---deploy-pospoolproxy1967-contract",children:[]},{value:"Step 4 - Set poolName",id:"step-4---set-poolname",children:[]},{value:"Step 5 - Regist pool",id:"step-5---regist-pool",children:[]},{value:"Step 6 - Add pool to poolManager",id:"step-6---add-pool-to-poolmanager",children:[]}]},{value:"Pool deploy and setup scripts",id:"pool-deploy-and-setup-scripts",children:[]},{value:"Check PoS node&#39;s status",id:"check-pos-nodes-status",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Available Scripts",id:"available-scripts",children:[{value:"<code>yarn start</code>",id:"yarn-start",children:[]},{value:"<code>yarn build</code>",id:"yarn-build",children:[]},{value:"add i18n text",id:"add-i18n-text",children:[]}]}],s={toc:p};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this tutorial we present a guide for how to deploy, configure and manage a POS Pool that will allow CONFLUX holders to join to the PoS protocol just interacting with the front-end application of the PoS Pool and without dealing with the technical complexities. "),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Prerequisites"),": "),Object(l.b)("p",null,"The POS Pool operator needs to have the infrastructure to run the following: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A full/archive node "),Object(l.b)("li",{parentName:"ul"},"A Web Server Farm, or a single web server to run the POS Pool application ")),Object(l.b)("h2",{id:"reference-architecture"},"Reference Architecture"),Object(l.b)("img",{alt:"PoS-Reference Architecture",src:Object(r.a)("/img/PoSReferenceArchitecture.png")}),Object(l.b)("p",null,"Please note this configuration guide is to do the technical setup of the PoS Pool staking environment. "),Object(l.b)("p",null,"Conflux PoS Pool configuration has two major components: Interface application and full node. It needs technical knowledge for configuration of instances, ports, contracts deployment and storage configuration. "),Object(l.b)("p",null,"The configuration of a reverse proxy and a firewall is recommended but is out of the scope of this guide. "),Object(l.b)("p",null,"For the Conflux\u2019s full node configuration, you need to have in place the following: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A Server with Ubuntu (recommended) or Windows  "),Object(l.b)("li",{parentName:"ul"},"Hard disk with 500GB of available space, ideally a SSD with NVMe drivers "),Object(l.b)("li",{parentName:"ul"},"Nodejs and Yarn frameworks installed in the server "),Object(l.b)("li",{parentName:"ul"},"Configure the server following the full node configuration ",Object(l.b)("a",{parentName:"li",href:"https://developer.confluxnetwork.org/conflux-doc/docs/get_started"},"guide"))),Object(l.b)("p",null,"It\u2019s important to have the latest release of Conflux, you can download the node client from: ",Object(l.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/releases"},"https://github.com/Conflux-Chain/conflux-rust/releases")," "),Object(l.b)("h1",{id:"pospool-contract"},"PoSPool contract"),Object(l.b)("p",null,"This is the contract code of PoS pool, which are developed by Solidity. Featured with:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Pool share ratio configuable"),Object(l.b)("li",{parentName:"ul"},"Upgradeable"),Object(l.b)("li",{parentName:"ul"},"Provide ",Object(l.b)("inlineCode",{parentName:"li"},"PoolManager")," to manage serveral PoS pool")),Object(l.b)("p",null,"Note: To operation a PoS pool, a stable Conflux PoS node is required. ",Object(l.b)("strong",{parentName:"p"},"Especially do not let your PoS node forceRetired"),"\nIf your Pool PoS Node is force retired you need manually ",Object(l.b)("a",{parentName:"p",href:"./PoolForceRetired.md"},"do some operation")," to correct the Pool's vote state."),Object(l.b)("h2",{id:"main-contracts"},"Main contracts"),Object(l.b)("p",null,"All contracts are in the ",Object(l.b)("inlineCode",{parentName:"p"},"contracts")," folder:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PoSPool.sol"),": This is the pool logic methods"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PoSPoolProxy1967.sol"),": This is the pool proxy contract, used to make the pool logic upgradable."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PoolManager.sol"),": A simple manager contract just store pool's address.")),Object(l.b)("h2",{id:"deploy-process"},"Deploy process"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Deploy ",Object(l.b)("inlineCode",{parentName:"li"},"PoolManager.sol")," then get pool manager's address ",Object(l.b)("inlineCode",{parentName:"li"},"PMA"),"."),Object(l.b)("li",{parentName:"ol"},"Deploy ",Object(l.b)("inlineCode",{parentName:"li"},"PoSPool.sol")," then get pool's address ",Object(l.b)("inlineCode",{parentName:"li"},"P"),"."),Object(l.b)("li",{parentName:"ol"},"Deploy ",Object(l.b)("inlineCode",{parentName:"li"},"PoSPoolProxy1967.sol"),", use ",Object(l.b)("inlineCode",{parentName:"li"},"P")," as constructor's parameter, then get poolProxy's address ",Object(l.b)("inlineCode",{parentName:"li"},"PA"),"."),Object(l.b)("li",{parentName:"ol"},"Invoke ",Object(l.b)("inlineCode",{parentName:"li"},"PA"),"'s ",Object(l.b)("inlineCode",{parentName:"li"},"setPoolName")," to set pool's name"),Object(l.b)("li",{parentName:"ol"},"Invoke ",Object(l.b)("inlineCode",{parentName:"li"},"PA"),"'s register method (with ",Object(l.b)("inlineCode",{parentName:"li"},"PoSPool"),"'s ABI) to regist it in PoS, the votePower is ",Object(l.b)("inlineCode",{parentName:"li"},"1 vote"),", which mean ",Object(l.b)("inlineCode",{parentName:"li"},"1000 CFX")),Object(l.b)("li",{parentName:"ol"},"Invoke ",Object(l.b)("inlineCode",{parentName:"li"},"PMA"),"'s ",Object(l.b)("inlineCode",{parentName:"li"},"addPool")," method to add ",Object(l.b)("inlineCode",{parentName:"li"},"PA")," to PoolManager.")),Object(l.b)("p",null,"If want to add more pool to PoolManager then walk through step ",Object(l.b)("inlineCode",{parentName:"p"},"2-6"),"."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"PoSPool.sol")," have several method to config Pool's contract:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"setPoolUserShareRatio")," to set poolUserShareRatio, which's default value is 90%"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"setLockPeriod")," to set pool stake&unstake lock period, which's default value is ",Object(l.b)("inlineCode",{parentName:"li"},"7 day block number"),"(",Object(l.b)("inlineCode",{parentName:"li"},"2 * 3600 * 24 * 7"),")")),Object(l.b)("h2",{id:"bootstrap"},"Bootstrap"),Object(l.b)("p",null,"Clone the code, and install the dependencies with npm"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/conflux-fans/pos-pool.git\n$ cd contract\n$ npm install\n")),Object(l.b)("p",null,"Then compile the contracts"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"$ npx hardhat compile\n")),Object(l.b)("h2",{id:"cli"},"CLI"),Object(l.b)("p",null,"There is a CLI in ",Object(l.b)("inlineCode",{parentName:"p"},"bin"),", which can used to deploy contract and setup them."),Object(l.b)("p",null,"First you need create a ",Object(l.b)("inlineCode",{parentName:"p"},".env")," from it's template ",Object(l.b)("inlineCode",{parentName:"p"},".env.example")," and set the ",Object(l.b)("inlineCode",{parentName:"p"},"CFX_RPC_URL"),", ",Object(l.b)("inlineCode",{parentName:"p"},"CFX_NETWORK_ID"),", ",Object(l.b)("inlineCode",{parentName:"p"},"PRIVATE_KEY")," and make sure the ",Object(l.b)("inlineCode",{parentName:"p"},"PRIVATE_KEY"),"'s address have enough CFX."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"To gain a performance boost install @conflux-dev/conflux-address-rust\nUsage: pool [options] [command]\n\nOptions:\n  -V, --version                      output the version number\n  -d, --debug                        output extra debugging\n  -h, --help                         display help for command\n\nCommands:\n  chainStatus [type]\n  poolStatus [address]\n  registerPool\n  setLockPeriod <number>\n  setPoolName <name>\n  Pool <method> [arg] [value]\n  restake <amount>\n  retireUserStake <user> <endBlock>\n  deploy <ContractName>\n  deployProxy <logicAddress>\n  deployDebugPool\n  upgradePoolContract <address>\n  QueryPoolProxy\n  QueryPool <method> [arg]\n  QueryPoolManager <method>\n  PoolManager <method> <arg>\n  help [command]                     display help for command\n")),Object(l.b)("h3",{id:"step-1---deploy-poolmanager"},"Step 1 - Deploy PoolManager"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"$ bin/pool.js deploy PoolManager\nDeploy success: NET8888:TYPE.CONTRACT:ACC7ANC643M4W2VUHRNP5F0ZGZHUW8ZK6AENY2XB11\n")),Object(l.b)("p",null,"Config ",Object(l.b)("inlineCode",{parentName:"p"},"POOL_MANAGER_ADDRESS")," with new deployed ",Object(l.b)("inlineCode",{parentName:"p"},"PoolManager")," address in ",Object(l.b)("inlineCode",{parentName:"p"},".env")),Object(l.b)("h3",{id:"step-2---deploy-pospool-contract"},"Step 2 - Deploy PoSPool contract"),Object(l.b)("p",null,"Then you can deploy the ",Object(l.b)("inlineCode",{parentName:"p"},"PoSPool")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"$ bin/pool.js deploy Pool\nDeploy success: NET8888:TYPE.CONTRACT:ACED7ZXFESKFFVR595J9KVS702C7D66SCUAMGHDPAA\n")),Object(l.b)("h3",{id:"step-3---deploy-pospoolproxy1967-contract"},"Step 3 - Deploy PoSPoolProxy1967 contract"),Object(l.b)("p",null,"Then you can deploy the ",Object(l.b)("inlineCode",{parentName:"p"},"PoSPoolProxy1967")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"$ bin/pool.js deployProxy NET8888:TYPE.CONTRACT:ACED7ZXFESKFFVR595J9KVS702C7D66SCUAMGHDPAA\nDeploy success: NET8888:TYPE.CONTRACT:ACF0H9U3WYZ1EUSH5EW04MPK6GN43HA1A6FWG7ZB0W\n")),Object(l.b)("p",null,"Config ",Object(l.b)("inlineCode",{parentName:"p"},"POOL_ADDRESS")," with new deployed ",Object(l.b)("inlineCode",{parentName:"p"},"PoolProxy1967")," address in ",Object(l.b)("inlineCode",{parentName:"p"},".env")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note POOL_ADDRESS is configured to PoolProxy address")),Object(l.b)("h3",{id:"step-4---set-poolname"},"Step 4 - Set poolName"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"$ bin/pool.js Pool setPoolName YourChoosePoolName\n")),Object(l.b)("h3",{id:"step-5---regist-pool"},"Step 5 - Regist pool"),Object(l.b)("p",null,"Set your PoS node's register data and set ",Object(l.b)("inlineCode",{parentName:"p"},"POS_REGIST_DATA")," in ",Object(l.b)("inlineCode",{parentName:"p"},".env"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"$ bin/pool.js registerPool\n")),Object(l.b)("h3",{id:"step-6---add-pool-to-poolmanager"},"Step 6 - Add pool to poolManager"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"$ bin/pool.js PoolManager addPool NET8888:TYPE.CONTRACT:ACF0H9U3WYZ1EUSH5EW04MPK6GN43HA1A6FWG7ZB0W\n")),Object(l.b)("h2",{id:"pool-deploy-and-setup-scripts"},"Pool deploy and setup scripts"),Object(l.b)("p",null,"There is also a scripts can quickly deply a new PoS pool and regist it, also add it to PoolManager"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"$ node scripts/deployPool.js THE-REGISTER-DATA\n")),Object(l.b)("p",null,"You need set PoS pool name manually."),Object(l.b)("h2",{id:"check-pos-nodes-status"},"Check PoS node's status"),Object(l.b)("p",null,"If one PoS node is force retired for some reason, all it's votes will be force retired. In this case the pool runner need ",Object(l.b)("strong",{parentName:"p"},"manually call PoS pool contract's ",Object(l.b)("inlineCode",{parentName:"strong"},"_retireUserStakes")," method to unlock user's votes in contract"),"."),Object(l.b)("p",null,"There also is a scripts can do this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"$ node scripts/unLockUserVotes.js\n")),Object(l.b)("p",null,"So it is necessary to have some way monitor your PoS node's status."),Object(l.b)("h1",{id:"pos-pool-interface"},"Pos Pool Interface"),Object(l.b)("p",null,"This project was bootstrapped with ",Object(l.b)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"Create React App"),"."),Object(l.b)("h2",{id:"setup"},"Setup"),Object(l.b)("p",null,"First we need to install the project dependencies."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"$ cd interface\n$ yarn # install the npm packages\n")),Object(l.b)("p",null,"Second a config file ",Object(l.b)("inlineCode",{parentName:"p"},"pool.config.js")," is need to create"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"$ cp pool.config.sample.js pool.config.js\n")),Object(l.b)("p",null,"The config.sample file's content is like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  defaultLang: 'en',\n  testnet: {\n    poolManagerAddress: 'cfxtest:xxxxxxxxxxxxxxxxxxxxxxxxxx',\n    RPC: 'https://test.confluxrpc.com',\n    networkId: 1\n  },\n  mainnet: {\n    poolManagerAddress: 'cfx:xxxxxxxxxxxxxxxxxxxxxx',\n    RPC: 'https://main.confluxrpc.com',\n    networkId: 1029\n  }\n}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note: The ",Object(l.b)("inlineCode",{parentName:"strong"},"poolManagerAddress")," need to replace with your deployed PoolManagerContract address.")),Object(l.b)("p",null,"The dev mode (yarn start) will use the ",Object(l.b)("inlineCode",{parentName:"p"},"testnet")," config"),Object(l.b)("h2",{id:"available-scripts"},"Available Scripts"),Object(l.b)("p",null,"In the project directory, you can run:"),Object(l.b)("h3",{id:"yarn-start"},Object(l.b)("inlineCode",{parentName:"h3"},"yarn start")),Object(l.b)("p",null,"Runs the app in the development mode.\\\nOpen ",Object(l.b)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," to view it in the browser."),Object(l.b)("p",null,"The page will reload if you make edits.\\\nYou will also see any lint errors in the console."),Object(l.b)("h3",{id:"yarn-build"},Object(l.b)("inlineCode",{parentName:"h3"},"yarn build")),Object(l.b)("p",null,"Builds the app for production to the ",Object(l.b)("inlineCode",{parentName:"p"},"build")," folder.\\\nIt correctly bundles React in production mode and optimizes the build for the best performance."),Object(l.b)("p",null,"The build is minified and the filenames include the hashes.\\\nYour app is ready to be deployed!"),Object(l.b)("p",null,"See the section about ",Object(l.b)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/docs/deployment"},"deployment")," for more information."),Object(l.b)("h3",{id:"add-i18n-text"},"add i18n text"),Object(l.b)("p",null,"First, add a folder named target language key to the interface/public/locales folder.\ncopy the translation.json file from the locales/en folder."),Object(l.b)("p",null,"Then change the value in the copied translation.json file to the translation of the target language."),Object(l.b)("p",null,"Next, import the new language file in locales/index.js and add it to the resources field.\n(You can change the default language by modifying the lng field.)"),Object(l.b)("p",null,"Finally, in Interface/src/pages/components/Header/index.js, add an Option corresponding to the language key under Language Select."))}d.isMDXComponent=!0},188:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return m}));var n=o(0),a=o.n(n);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(o),u=n,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||l;return o?a.a.createElement(m,i(i({ref:t},p),{},{components:o})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,r=new Array(l);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var p=2;p<l;p++)r[p]=o[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},192:function(e,t,o){"use strict";o.d(t,"b",(function(){return l})),o.d(t,"a",(function(){return r}));var n=o(16),a=o(195);function l(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,o=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,o,n){var l=void 0===n?{}:n,r=l.forcePrependBaseUrl,i=void 0!==r&&r,c=l.absolute,p=void 0!==c&&c;if(!o)return o;if(o.startsWith("#"))return o;if(Object(a.b)(o))return o;if(i)return t+o;var s=o.startsWith(t)?o:t+o.replace(/^\//,"");return p?e+s:s}(l,o,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},195:function(e,t,o){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return a}))}}]);
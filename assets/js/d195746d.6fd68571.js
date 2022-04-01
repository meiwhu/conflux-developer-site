(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{175:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(189)),c={id:"how_to_deploy_erc20_token",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/en/how-to-deploy-token.md",keywords:["erc20","cfxtruffle"]},i={unversionedId:"guides/en/how_to_deploy_erc20_token",id:"guides/en/how_to_deploy_erc20_token",isDocsHomePage:!1,title:"How to Quickly Deploy a CRC20 Token",description:"Conflux provides a compatible EVM virtual machine so that the Ethereum contracts can be quickly deployed on the Conflux network. The Conflux's token standard CRC20 and CRC721 are also compatible with Ethereum's, meaning that an ERC20 contract that can be used directly to create a CRC20 Token on the Conflux network.",source:"@site/docs/guides/en/how-to-deploy-token.md",sourceDirName:"guides/en",slug:"/guides/en/how_to_deploy_erc20_token",permalink:"/guides/en/how_to_deploy_erc20_token",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/en/how-to-deploy-token.md",version:"current",frontMatter:{id:"how_to_deploy_erc20_token",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/en/how-to-deploy-token.md",keywords:["erc20","cfxtruffle"]}},l=[{value:"Environment preparation",id:"environment-preparation",children:[{value:"Node.js",id:"nodejs",children:[]},{value:"conflux-truffle",id:"conflux-truffle",children:[]},{value:"Account Private Key",id:"account-private-key",children:[]}]},{value:"Instruction",id:"instruction",children:[{value:"Creating a project",id:"creating-a-project",children:[]},{value:"Configuring the project",id:"configuring-the-project",children:[]},{value:"Adding a contract",id:"adding-a-contract",children:[]},{value:"Compiling Contracts",id:"compiling-contracts",children:[]},{value:"Deploying contracts",id:"deploying-contracts",children:[]},{value:"Interacting with the Wallet",id:"interacting-with-the-wallet",children:[]}]},{value:"Reference",id:"reference",children:[]}],s={toc:l};function u(e){var n=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,c,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Conflux provides a compatible EVM virtual machine so that the Ethereum contracts can be quickly deployed on the Conflux network. The Conflux's token standard CRC20 and CRC721 are also compatible with Ethereum's, meaning that an ERC20 contract that can be used directly to create a CRC20 Token on the Conflux network.\nThis article will demonstrate how to quickly deploy a CRC20 contract on the Conflux testnet using ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/conflux-truffle"},"conflux-truffle"),"."),Object(a.b)("h2",{id:"environment-preparation"},"Environment preparation"),Object(a.b)("h3",{id:"nodejs"},"Node.js"),Object(a.b)("p",null,"conflux-truffle is a contract development tool written in Node.js. We need to first install the Node.js environment on our computer: you can download and install it directly from the ",Object(a.b)("a",{parentName:"p",href:"https://nodejs.org/en/"},"official website")," or use the Node version management tool ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," to install it."),Object(a.b)("h3",{id:"conflux-truffle"},"conflux-truffle"),Object(a.b)("p",null,"Once Node.js is installed, you can install conflux-truffle using npm and run the  cfxtruffle command in the terminal:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# Check the current node version \n$ node -v\nv14.5.0\n# install conflux-truffle\n$ npm install -g conflux-truffle\n# Check the conflux-truffle version\n$ cfxtruffle version\nConflux-Truffle v1.0.0-beta11 (core: 5.2.2)\nSolidity v0.5.16 (solc-js)\nNode v14.15.0\nWeb3.js v1.2.9\n")),Object(a.b)("h3",{id:"account-private-key"},"Account Private Key"),Object(a.b)("p",null,"Since we are demonstrating the deployment of Token contracts on the test-net, we need to have an account private key with CFX in it. You can use ",Object(a.b)("a",{parentName:"p",href:"/guides/en/how_to_use_cfx_faucet"},"Faucet")," to get the test CFX and export the private key."),Object(a.b)("h2",{id:"instruction"},"Instruction"),Object(a.b)("h3",{id:"creating-a-project"},"Creating a project"),Object(a.b)("p",null,"First, we need to create an empty project with  cfxtruffle"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ mkdir simple-crc20\n$ cd simple-crc20\n$ cfxtruffle init\n\nStarting init...\n================\n\n> Copying project files to /Users/xxxx/simple-crc20\n\nInit successful, sweet!\n$ tree\n.\n\u251c\u2500\u2500 contracts # contract code folder\n\u2502\xa0\xa0 \u2514\u2500\u2500 Migrations.sol\n\u251c\u2500\u2500 migrations  # contract deployment migration script directory\n\u2502\xa0\xa0 \u2514\u2500\u2500 1_initial_migration.js\n\u251c\u2500\u2500 test # test catalog\n\u2514\u2500\u2500 truffle-config.js  # project configuration file\n\n3 directories, 3 files\n")),Object(a.b)("p",null,"Three folders and one file are created after the project is initialized:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"contracts"),":  Solidity contract folder"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"migrations"),": Contract deployment scripts folder"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"test"),": Test scripts folder"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"truffle-config.js"),": Project configuration file")),Object(a.b)("p",null,"The initial project comes with a  ",Object(a.b)("inlineCode",{parentName:"p"},"Migrations.sol")," contract and a deployment script  ",Object(a.b)("inlineCode",{parentName:"p"},"1_initial_migration.js")," for that contract, which is used to record the progress of the project's contract deployment."),Object(a.b)("h3",{id:"configuring-the-project"},"Configuring the project"),Object(a.b)("p",null," ",Object(a.b)("inlineCode",{parentName:"p"},"truffle-config.js")," is the ",Object(a.b)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/reference/configuration"},"configuration file")," of the truffle project. You can use this to configure the project's network, solidity compiler, etc. In this case we will set the following configuration\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  networks: {\n    testnet: {\n     host: "test.confluxrpc.com",     // Conflux provides public RPC services for testnet\n     port: 80,\n     network_id: 1,       // Conflux testnet networkId is 1\n     privateKeys: [process.env.PRIVATE_KEY]  //  Adding the account private key used for sending transactions\n    },\n  },\n\n  compilers: {\n    solc: {\n      version: "0.6.9",    // This contract needs to be compiled with the 0.6.9 version compiler\n    }\n  },\n};\n')),Object(a.b)("p",null,"Note: users should fill their own private key in ",Object(a.b)("inlineCode",{parentName:"p"},"privateKeys")," field."),Object(a.b)("h3",{id:"adding-a-contract"},"Adding a contract"),Object(a.b)("p",null,"Next, we need to add a contract file using cfxtruffle's  create command."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"$ cfxtruffle create contract CDTE\n")),Object(a.b)("p",null,"After the command is executed, a Solidity contract file  CDTE.sol will be created in the contracts directory. We can add the following contract code to the file\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'// SPDX-License-Identifier: MIT\npragma solidity >=0.4.22 <0.9.0;\n\n// ERC20 interface\ninterface IERC20 {\n    function totalSupply() external view returns (uint256);\n\n    function balanceOf(address account) external view returns (uint256);\n\n    function allowance(address owner, address spender) external view returns (uint256);\n\n    function transfer(address recipient, uint256 amount) external returns (bool);\n\n    function approve(address spender, uint256 amount) external returns (bool);\n\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\n\n    event Transfer(address indexed from, address indexed to, uint256 value);\n    \n    event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n\n// CDTE contract\ncontract CDTE is IERC20 {\n    string public constant name = "ConfluxDeveloperTokenExample";\n    string public constant symbol = "CDTE";\n    uint8 public constant decimals = 18;\n\n    event Approval(address indexed tokenOwner, address indexed spender, uint256 tokens);\n    event Transfer(address indexed from, address indexed to, uint256 tokens);\n\n    mapping(address => uint256) balances;\n\n    mapping(address => mapping(address => uint256)) allowed;\n\n    uint256 totalSupply_;\n\n    using SafeMath for uint256;\n\n    constructor(uint256 total) public {\n        totalSupply_ = total;\n        balances[msg.sender] = totalSupply_;\n    }\n\n    function totalSupply() public view override returns (uint256) {\n        return totalSupply_;\n    }\n\n    function balanceOf(address tokenOwner) public view override returns (uint256) {\n        return balances[tokenOwner];\n    }\n\n    function transfer(address receiver, uint256 numTokens) public override returns (bool) {\n        require(numTokens <= balances[msg.sender]);\n        balances[msg.sender] = balances[msg.sender].sub(numTokens);\n        balances[receiver] = balances[receiver].add(numTokens);\n        emit Transfer(msg.sender, receiver, numTokens);\n        return true;\n    }\n\n    function approve(address delegate, uint256 numTokens) public override returns (bool) {\n        allowed[msg.sender][delegate] = numTokens;\n        emit Approval(msg.sender, delegate, numTokens);\n        return true;\n    }\n\n    function allowance(address owner, address delegate) public view override returns (uint256) {\n        return allowed[owner][delegate];\n    }\n\n    function transferFrom(address owner, address buyer, uint256 numTokens) public override returns (bool) {\n        require(numTokens <= balances[owner]);\n        require(numTokens <= allowed[owner][msg.sender]);\n\n        balances[owner] = balances[owner].sub(numTokens);\n        allowed[owner][msg.sender] = allowed[owner][msg.sender].sub(numTokens);\n        balances[buyer] = balances[buyer].add(numTokens);\n        emit Transfer(owner, buyer, numTokens);\n        return true;\n    }\n}\n\nlibrary SafeMath {\n    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n        assert(b <= a);\n        return a - b;\n    }\n\n    function add(uint256 a, uint256 b) internal pure returns (uint256) {\n        uint256 c = a + b;\n        assert(c >= a);\n        return c;\n    }\n}\n\n')),Object(a.b)("h3",{id:"compiling-contracts"},"Compiling Contracts"),Object(a.b)("p",null,"The contract code can not be directly used for deployment and needs to be compiled into  bytecode and  abi using solc. cfxtruffle integrates with Solidity's compilation features:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ cfxtruffle compile\n\nCompiling your contracts...\n===========================\n> Compiling ./contracts/Migrations.sol\n> Compiling ./contracts/CDTE.sol\n> Artifacts written to /Users/xxxx/simple-crc20/build/contracts\n> Compiled successfully using:\n   - solc: 0.6.9+commit.3e3065ac.Emscripten.clang\n")),Object(a.b)("p",null,"After compilation, a new directory  build will be created, which contains several json files, one for each contract. The json files contain various meta-information regarding the contract: name, abi, bytecode, compiler, etc."),Object(a.b)("h3",{id:"deploying-contracts"},"Deploying contracts"),Object(a.b)("p",null,"In cfxtruffle,  migration is used to manage the deployment of the contract. Each contract requires a migration script to be deployed. We cn also use  create commend and create a migration:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ cfxtruffle create migration CDTE\n")),Object(a.b)("p",null,"Note: The migration script name created by the create command is prefixed with a time stamp such as  1620979361",Object(a.b)("em",{parentName:"p"},"c_d_t_e.js, we need to manually change the prefix serial number of the script name. For example, change  1620979361_c_d_t_e.js to  2_CDTE")," migration.js. This is because the order of deployment is consistent with the prefix number of the migration script file name."),Object(a.b)("p",null,"You can code the logic of contract's deployment in the Migration script usually by using artifacts to import the contract objects and deployit by using _deployer's ",Object(a.b)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations#deployer-deploy-contract-args-options-"},"deploy"),". If the contract constructor has parameters, they can also be set via the deploy method. In our example, for the token constructor we deployed, we need to set the parameter ",Object(a.b)("inlineCode",{parentName:"p"},"issurance amount"),". "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const CDTE = artifacts.require("CDTE");\n\nmodule.exports = function(_deployer) {\n  // Set initial supply to 2100w\n  const totalSupploy = BigInt(2100 * 10000) * BigInt(1e18);\n  _deployer.deploy(CDTE, `0x${totalSupploy.toString(16)}`);\n};\n')),Object(a.b)("p",null,"Once the Migration script is written, you can run the ",Object(a.b)("inlineCode",{parentName:"p"},"deploy")," command to deploy the contract."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ cfxtruffle deploy --network testnet\nCompiling your contracts...\n===========================\n> Compiling ./contracts/CDTE.sol\n> Artifacts written to /Users/xxx/simple-crc20/build/contracts\n> Compiled successfully using:\n   - solc: 0.6.9+commit.3e3065ac.Emscripten.clang\n\n\n\nStarting migrations...\n======================\n> Network name:    'development'\n> Network id:      1\n> Block gas limit: 30000000 (0x1c9c380)\n\n\n1_initial_migration.js\n======================\n\n   Deploying 'Migrations'\n   ----------------------\n   > transaction hash:    0x0d06376b3ea86409ebfa6b5d9465dd72d3faded43e5697beec89f8571a037802\n   > Blocks: 9            Seconds: 4\n   > contract address:    CFXTEST:TYPE.CONTRACT:ACGBUDPHE2UWTW3PG139CBKM3B781JVEVUM80YAAJZ\n   > block number:        26192247\n   > block timestamp:     1620979778\n   > account:             CFXTEST:TYPE.USER:AAK2RRA2NJVD77EZWJVX04KKDS9FZAGFE6D5R8E957\n   > balance:             46.624999999998842876\n   > gas used:            206555 (0x326db)\n   > gas price:           0.000000001 GDrip\n   > storage collateralized: 0.5625 CFX\n   > value sent:          0 CFX\n   > total cost:          0.562500000000206555 CFX\n\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:     0.562500000000206555 CFX\n\n\n2_cdte_migration.js\n===================\n\n   Deploying 'CDTE'\n   ----------------\n   > transaction hash:    0x794540ccd40d3d40fc09c93ff8253bfc0ffc99eb302afe3591c094762664f382\n   > Blocks: 6            Seconds: 4\n   > contract address:    CFXTEST:TYPE.CONTRACT:ACHYD5GKND31UPUZ2NM6TAZNK1E0DZVMZUK5WBXM5G\n   > block number:        26192269\n   > block timestamp:     1620979790\n   > account:             CFXTEST:TYPE.USER:AAK2RRA2NJVD77EZWJVX04KKDS9FZAGFE6D5R8E957\n   > balance:             44.437499999997921785\n   > gas used:            894093 (0xda48d)\n   > gas price:           0.000000001 GDrip\n   > storage collateralized: 2.125 CFX\n   > value sent:          0 CFX\n   > total cost:          2.125000000000894093 CFX\n\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:     2.125000000000894093 CFX\n\n\nSummary\n=======\n> Total deployments:   2\n> Final cost:          2.687500000001100648 CFX\n")),Object(a.b)("p",null,"The first deployment will deploy the  ",Object(a.b)("inlineCode",{parentName:"p"},"Migrations")," contract first, which is used to record the deployment progress of the project contract. We will deploy our written CRC20 contract ",Object(a.b)("inlineCode",{parentName:"p"},"CDTE")," in the second step. The terminal will print out information about the deployment process, including\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"transaction hash: deployed transaction hash"),Object(a.b)("li",{parentName:"ul"},"contract address: ",Object(a.b)("inlineCode",{parentName:"li"},"CFXTEST:TYPE.CONTRACT:ACHYD5GKND31UPUZ2NM6TAZNK1E0DZVMZUK5WBXM5G")),Object(a.b)("li",{parentName:"ul"},"account: deployed account"),Object(a.b)("li",{parentName:"ul"},"balance: deployed account balance"),Object(a.b)("li",{parentName:"ul"},"cost(gas used, gas price, storage collateralized): Deployment cost of gas and storage collateral")),Object(a.b)("p",null,"The contract address output from the terminal is the contract address of the token."),Object(a.b)("h3",{id:"interacting-with-the-wallet"},"Interacting with the Wallet"),Object(a.b)("p",null,"Interacting with the Fluent Wallet"),Object(a.b)("p",null,Object(a.b)("img",{src:t(306).default})),Object(a.b)("p",null,"Note: before adding,  you need to switch the network of the Fluent to ",Object(a.b)("inlineCode",{parentName:"p"},"test network")),Object(a.b)("h2",{id:"reference"},"Reference"),Object(a.b)("ol",{start:0},Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-20/"},"ERC-20 TOKEN STANDARD")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://ethereum.org/en/developers/tutorials/understand-the-erc-20-token-smart-contract/"},"UNDERSTAND THE ERC-20 TOKEN SMART CONTRACT")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/conflux-truffle"},"conflux-truffle")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://www.trufflesuite.com/docs/truffle/overview"},"truffle documentation")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://github.com/conflux-fans/cfxtruffle-crc20"},"Source Code of This Project"))))}u.isMDXComponent=!0},189:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return t?o.a.createElement(f,i(i({ref:n},s),{},{components:t})):o.a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},306:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/add-assets-merge-73b98f34dbbd010e4ca597e4cc750a0e.png"}}]);
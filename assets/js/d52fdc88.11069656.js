(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{175:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(3),a=t(7),c=(t(0),t(188)),r={id:"conflux_sdks",title:"SDKs",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/sdks.md",keywords:["SDK"]},i={unversionedId:"sdks-and-tools/en/conflux_sdks",id:"sdks-and-tools/en/conflux_sdks",isDocsHomePage:!1,title:"SDKs",description:"Conflux has SDKs for mainstream programming languages, including JavaScript, Golang, Java and Python. This is just a short introduction to the SDKs, for detailed usage info, check their respective documentation.",source:"@site/docs/sdks-and-tools/en/sdks.md",sourceDirName:"sdks-and-tools/en",slug:"/sdks-and-tools/en/conflux_sdks",permalink:"/sdks-and-tools/en/conflux_sdks",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/sdks.md",version:"current",frontMatter:{id:"conflux_sdks",title:"SDKs",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/sdks.md",keywords:["SDK"]},sidebar:"docs",previous:{title:"Introduction to Smart Contracts",permalink:"/contract/en/contract_introduction"},next:{title:"Tools",permalink:"/sdks-and-tools/en/conflux_tools"}},l=[{value:"Official SDKs",id:"official-sdks",children:[{value:"js-conflux-sdk",id:"js-conflux-sdk",children:[]},{value:"go-conflux-sdk",id:"go-conflux-sdk",children:[]},{value:"java-conflux-sdk",id:"java-conflux-sdk",children:[]},{value:"python-conflux-sdk",id:"python-conflux-sdk",children:[]}]},{value:"Solidity SDKs",id:"solidity-sdks",children:[{value:"Conflux-contracts",id:"conflux-contracts",children:[]},{value:"OpenZeppelin",id:"openzeppelin",children:[]}]},{value:"Community developed SDKs",id:"community-developed-sdks",children:[{value:"cpp-conflux-sdk",id:"cpp-conflux-sdk",children:[]},{value:".NET SDK",id:"net-sdk",children:[]},{value:"Swift SDK",id:"swift-sdk",children:[]}]}],s={toc:l};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Conflux has SDKs for mainstream programming languages, including ",Object(c.b)("inlineCode",{parentName:"p"},"JavaScript"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Golang"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Java")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Python"),". This is just a short introduction to the SDKs, for detailed usage info, check their respective documentation."),Object(c.b)("h2",{id:"official-sdks"},"Official SDKs"),Object(c.b)("h3",{id:"js-conflux-sdk"},Object(c.b)("a",{parentName:"h3",href:"https://confluxnetwork.gitbook.io/js-conflux-sdk/"},"js-conflux-sdk")),Object(c.b)("p",null,"If you are familiar with JavaScript or Node.js, or if you want to build a web site to interact with your contract, ",Object(c.b)("inlineCode",{parentName:"p"},"js-conflux-sdk")," is right for you. It has a lot of useful features."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const {Conflux} = require(\'js-conflux-sdk\');\n\nasync function main() {\n  let cfx = new Conflux({\n    url: "https://test.confluxrpc.com",\n    networkId: 1,\n  });\n\n  let balance = await cfx.getBalance("cfxtest:aakkfzezns4h8ymx1cgmcnd4x3aev6e2he38nnu8sv");\n  console.log("balance: ", balance);\n}\n\nmain().catch(console.log);\n')),Object(c.b)("h3",{id:"go-conflux-sdk"},Object(c.b)("a",{parentName:"h3",href:"https://github.com/conflux-chain/go-conflux-sdk"},"go-conflux-sdk")),Object(c.b)("p",null,"Golang is a great language: fast, easy to use, and stable. In blockchain world a lot projects are developing with Go. If you want to develop a backend service which needs to communicate with Conflux network, ",Object(c.b)("inlineCode",{parentName:"p"},"go-conflux-sdk")," suits for you."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    conflux "github.com/Conflux-Chain/go-conflux-sdk"\n)\n\nfunc main() {\n    client, err := conflux.NewClient("https://test.confluxrpc.com")\n    if err != nil {\n        fmt.Println("failed to create client:", err)\n        return\n    }\n    defer client.Close()\n\n    epoch, err := client.GetEpochNumber()\n    if err != nil {\n        fmt.Println("failed to get epoch number:", err)\n        return\n    }\n\n    fmt.Println("Current epoch number:", epoch)\n}\n\n')),Object(c.b)("h3",{id:"java-conflux-sdk"},Object(c.b)("a",{parentName:"h3",href:"https://github.com/conflux-chain/java-conflux-sdk"},"java-conflux-sdk")),Object(c.b)("p",null,"Java is really a long live programming language. ",Object(c.b)("inlineCode",{parentName:"p"},"java-conflux-sdk")," can be used to talk to a Conflux node. It is evolved from the ",Object(c.b)("a",{parentName:"p",href:"https://docs.web3j.io/"},"web3j")," library. Some of web3j's utility functions also work on the Conflux network."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'package conflux.sdk.examples;\nimport java.math.BigInteger;\nimport conflux.web3j.Cfx;\n\npublic class App {\n  public static void main(String[] args) throws Exception {\n    int retry = 3;\n    int intervalMills = 1000;  // interval(milliseconds) between retry\n    Cfx cfx = Cfx.create("https://test.confluxrpc.com", retry, intervalMills);\n    BigInteger epoch = cfx.getEpochNumber().sendAndGet();\n    System.out.println("Current epoch: " + epoch);\n  }\n}\n')),Object(c.b)("h3",{id:"python-conflux-sdk"},Object(c.b)("a",{parentName:"h3",href:"https://github.com/conflux-chain/python-conflux-sdk"},"python-conflux-sdk")),Object(c.b)("p",null,"Python is the first choice for a lot of developers, we also have ",Object(c.b)("inlineCode",{parentName:"p"},"python-conflux-sdk")," for you."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"from conflux import (\n    Conflux,\n    HTTPProvider,\n)\nprovider = HTTPProvider('https://test.confluxrpc.com')\nc = Conflux(provider)\n\n# get RPC's clientVersion\nprint(c.clientVersion)\n\ntest_address = 'cfxtest:aak7fsws4u4yf38fk870218p1h3gxut3ku00u1k1da'\nbalance = c.cfx.getBalance(test_address)\nprint(balance)\n")),Object(c.b)("h2",{id:"solidity-sdks"},"Solidity SDKs"),Object(c.b)("h3",{id:"conflux-contracts"},Object(c.b)("a",{parentName:"h3",href:"https://github.com/conflux-fans/conflux-contracts"},"Conflux-contracts")),Object(c.b)("p",null,"This is a Solidity package including common useful contracts in Conflux DAPP developments. Which is kindly like OpenZeppelin. Currenlty most used is ",Object(c.b)("inlineCode",{parentName:"p"},"Conflux InternalContracts"),"."),Object(c.b)("h3",{id:"openzeppelin"},Object(c.b)("a",{parentName:"h3",href:"https://docs.openzeppelin.com/contracts/4.x/"},"OpenZeppelin")),Object(c.b)("p",null,"This is the famous library for secure smart contract development. Build on a solid foundation of community-vetted code."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Implementations of standards like ERC20 and ERC721."),Object(c.b)("li",{parentName:"ul"},"Flexible role-based permissioning scheme."),Object(c.b)("li",{parentName:"ul"},"Reusable Solidity components to build custom contracts and complex decentralized systems.")),Object(c.b)("h2",{id:"community-developed-sdks"},"Community developed SDKs"),Object(c.b)("h3",{id:"cpp-conflux-sdk"},Object(c.b)("a",{parentName:"h3",href:"https://csyangbinbin.github.io/cpp-conflux-sdk/"},"cpp-conflux-sdk")),Object(c.b)("p",null,"The Conflux C++ API allows any C++ client to interact with a local or remote Conflux node based on JSON-RPC 2.0 protocol. With Conflux C++ API, user can easily manage accounts, send transactions, deploy smart contracts and query blockchain information."),Object(c.b)("p",null,Object(c.b)("img",{src:t(306).default})),Object(c.b)("h3",{id:"net-sdk"},Object(c.b)("a",{parentName:"h3",href:"https://github.com/Nconflux/Conflux.net.SDK"},".NET SDK")),Object(c.b)("p",null,"Nconflux is the .Net integration library for Conflux, simplifying the access and smart contract interaction with Conflux nodes."),Object(c.b)("p",null,"Nconflux is developed targeting netcore 3.1 and .net 5, hence it is compatible with all the operating systems (Windows, Linux, MacOS, Android and OSX) and has been tested on cloud, mobile, desktop, Xbox, hololens and windows IoT."),Object(c.b)("h3",{id:"swift-sdk"},Object(c.b)("a",{parentName:"h3",href:"https://github.com/Conflux-Chain/swift-conflux-wallet-sdk"},"Swift SDK")))}u.isMDXComponent=!0},188:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var o=t(0),a=t.n(o);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,b=d["".concat(r,".").concat(f)]||d[f]||p[f]||c;return t?a.a.createElement(b,i(i({ref:n},s),{},{components:t})):a.a.createElement(b,i({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,r=new Array(c);r[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<c;s++)r[s]=t[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},306:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/CPP-SDK-shot-770c42fdeeafccff6890ad2ff1b1087e.png"}}]);
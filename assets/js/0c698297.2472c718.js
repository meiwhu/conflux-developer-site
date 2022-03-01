(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{185:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?r.a.createElement(h,l(l({ref:t},u),{},{components:n})):r.a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(185)),i={id:"how_to_get",title:"Get Conflux Client",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/run-a-node/en/how-to-get.md",keywords:["node"]},l={unversionedId:"run-a-node/en/how_to_get",id:"run-a-node/en/how_to_get",isDocsHomePage:!1,title:"Get Conflux Client",description:"Conflux-rust is a high-performance implementation of the Conflux protocol developed by the foundation with the Rust language. Conflux-rust is a Conflux node that connects to other nodes on the Conflux network and provides an RPC interface that you can use to query and interact with the blockchain. It is also a command-line tool that manages local accounts and conducts RPC interaction with nodes. You can download the released package through any of the ways listed:",source:"@site/docs/run-a-node/en/how-to-get.md",sourceDirName:"run-a-node/en",slug:"/run-a-node/en/how_to_get",permalink:"/run-a-node/en/how_to_get",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/run-a-node/en/how-to-get.md",version:"current",frontMatter:{id:"how_to_get",title:"Get Conflux Client",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/run-a-node/en/how-to-get.md",keywords:["node"]},sidebar:"docs",previous:{title:"V2 InternalContracts",permalink:"/v2-hardfork/new_introduced_contracts"},next:{title:"Compile from Source",permalink:"/conflux-doc/docs/installation"}},c=[{value:"Download pre-built binaries",id:"download-pre-built-binaries",children:[]},{value:"Docker",id:"docker",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/conflux-chain/conflux-rust"},"Conflux-rust")," is a high-performance implementation of the Conflux protocol developed by the foundation with the Rust language. Conflux-rust is a Conflux node that connects to other nodes on the Conflux network and provides an RPC interface that you can use to query and interact with the blockchain. It is also a command-line tool that manages local accounts and conducts RPC interaction with nodes. You can download the released package through any of the ways listed:"),Object(a.b)("h2",{id:"download-pre-built-binaries"},"Download pre-built binaries"),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/releases"},"release")," page on the conflux-rust GitHub repository providers pre-built binaries that you can download and run directly. There are two versions for the mainnet and the testnet: the mainnet version is Conflux ",Object(a.b)("inlineCode",{parentName:"p"},"vx.x.x"),", while the version for testnet is ",Object(a.b)("inlineCode",{parentName:"p"},"Conflux vx.x.x-testnet")," (which has a suffix of ",Object(a.b)("inlineCode",{parentName:"p"},"testnet"),"). Each program will be provided for Linux, Windows10, and macOS."),Object(a.b)("p",null,"On the Release page, each version will have a version update description and ",Object(a.b)("inlineCode",{parentName:"p"},"Assets")," that you can download. After selecting the corresponding platform, you can click the link to download the zip package. For example, when unzipping the ",Object(a.b)("inlineCode",{parentName:"p"},"conflux_linux_v1.1.2.zip")," file, a ",Object(a.b)("inlineCode",{parentName:"p"},"run")," folder that contains node programs, configuration files, and startup scripts will appear. The specific documents include:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"\u279c  run tree\n.\n\u251c\u2500\u2500 conflux\n\u251c\u2500\u2500 log.yaml\n\u251c\u2500\u2500 start.bat\n\u251c\u2500\u2500 start.sh\n\u251c\u2500\u2500 tethys.toml (or hydra.toml)\n\u2514\u2500\u2500 throttling.toml\n\n0 directories, 6 files\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"conflux")," Node program"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"tethys.toml (or hydra.toml)")," Mainnet configuration file (If you download the testnet program, the configuration file is testnet.toml)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"log.yaml")," Log configuration file"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"throttling.toml")," Internet speed flow limit configuration file (used for development and testing) "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"start.sh")," Linux system startup script"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"start.bat")," Windows system startup script")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Make sure you only run binaries downloaded from the official Conflux-Chain/conflux-rust GitHub repository.")),Object(a.b)("h2",{id:"docker"},"Docker"),Object(a.b)("p",null,"Conflux provides an official ",Object(a.b)("a",{parentName:"p",href:"https://hub.docker.com/r/confluxchain/conflux-rust"},"Docker image of conflux-rust"),". You can use it to quickly start a node. You can start a node within two steps:  Download image and  Run container."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ docker pull confluxchain/conflux-rust\n$ docker run -p 12537:12537 --name cfx-node confluxchain/conflux-rust\n")),Object(a.b)("p",null,"So far, there are three tag lines in the officially released image:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"x.x.x"),Object(a.b)("li",{parentName:"ol"},"x.x.x-mainnet"),Object(a.b)("li",{parentName:"ol"},"x.x.x-testnet")),Object(a.b)("p",null,"The first type of image will run a private chain node in dev mode by default. The chainId and miner account will be randomly generated. At the same time, 10 genesis accounts will be created (the defult password is ",Object(a.b)("inlineCode",{parentName:"p"},"123456"),"), and 1000 CFX will be distributed to each account for developing and testing."),Object(a.b)("p",null,"The image with mainnet/testnet suffix tag will activate the nodes of the main network/test network by default. The nodes will start to synchronize data from Epoch 0 through the network. (The process of sychronizing might take a long time, and the transaction sending request won't be processed.)"),Object(a.b)("p",null,"They all support the use of custom configuration files and data directories through mounting directories. You can check the tutorial at:\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/conflux-chain/conflux-docker"},"Conflux-rust docker file on Github")))}s.isMDXComponent=!0}}]);
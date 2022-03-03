(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{186:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=d(a),b=n,f=l["".concat(s,".").concat(b)]||l[b]||u[b]||o;return a?r.a.createElement(f,c(c({ref:t},i),{},{components:a})):r.a.createElement(f,c({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=a[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(186)),s={},c={unversionedId:"conflux-doc/docs/EVM-Space/account_explain",id:"conflux-doc/docs/EVM-Space/account_explain",isDocsHomePage:!1,title:"Overview of Core and eSpace Addresses",description:"Correspondence between Conflux Core and Conflux eSpace Addresses",source:"@site/docs/conflux-doc/docs/EVM-Space/account_explain.md",sourceDirName:"conflux-doc/docs/EVM-Space",slug:"/conflux-doc/docs/EVM-Space/account_explain",permalink:"/conflux-doc/docs/EVM-Space/account_explain",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-doc/docs/EVM-Space/account_explain.md",version:"current",frontMatter:{},sidebar:"evmSpace",previous:{title:"EVM space faucet",permalink:"/conflux-doc/docs/EVM-Space/evm_space_faucet"},next:{title:"The CrossSpaceCall Internal Contract",permalink:"/conflux-doc/docs/EVM-Space/cross_space_call"}},p=[{value:"Mapped Addresses in Cross-Space Operations",id:"mapped-addresses-in-cross-space-operations",children:[]}],i={toc:p};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Correspondence between Conflux Core and Conflux eSpace Addresses"),Object(o.b)("p",null,"The eSpace introduced in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90")," is an independent space that is logically isolated from the Core space.  Accounts in the eSpace have their own balance and status."),Object(o.b)("p",null,"Interacting with the Core space requires base32 account addresses. Interacting with the eSpace requires hex40 addresses. The same private key can be used in both spaces simultaneously. However, one private key will correspond to two distinct accounts in the two spaces."),Object(o.b)("p",null,"Note: Base32 addresses can be converted to hex40 format. However, if you import the same private key into a Conflux wallet (e.g. Fluent) and an Ethereum wallet (e.g. MetaMask), this will most likely result in two different addresses. ",Object(o.b)("strong",{parentName:"p"},"Therefore, if you are not familiar with the correspondence between these two addresses (two accounts), do not mix them in the same format"),"."),Object(o.b)("h2",{id:"mapped-addresses-in-cross-space-operations"},"Mapped Addresses in Cross-Space Operations"),Object(o.b)("p",null,"Although the two spaces are independent, atomic-crossing of CFX and data can be achieved through the ",Object(o.b)("inlineCode",{parentName:"p"},"CrossSpaceCall")," internal contract. The following three methods of this contract allow CFX transfers between the two spaces. Note that ",Object(o.b)("inlineCode",{parentName:"p"},"CrossSpaceCall")," (like other internal contracts) can only be accessed in the Conflux Core space."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function transferEVM(bytes20 to) external payable returns (bytes memory output);\nfunction mappedBalance(address addr) external view returns (uint256);\nfunction withdrawFromMapped(uint256 value) external;\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Core to eSpace"),": To transfer CFX from Conflux Core to Conflux eSpace, the ",Object(o.b)("inlineCode",{parentName:"p"},"transferEVM(bytes20 to)")," method of this contract needs to be called. The destination address of this transfer is specified by the method parameter ",Object(o.b)("inlineCode",{parentName:"p"},"to"),". The cross-space transfer will be executed in a single atomic step."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"eSpace to Core"),": Each account in Core Space has a ",Object(o.b)("strong",{parentName:"p"},"mapped account")," (hex40) in eSpace. To transfer CFX from Conflux eSpace to Conflux Core, two steps are required. First, transfer CFX to the mapped account (eSpace) that belongs to the destination account (Core Space). This action requires an eSpace transaction. Second, call the ",Object(o.b)("inlineCode",{parentName:"p"},"withdrawFromMapped(uint256 value)")," method of the ",Object(o.b)("inlineCode",{parentName:"p"},"CrossSpaceCall")," internal contract. This call with transfer the CFX from the mapped account back to the corresponding destination address."),Object(o.b)("p",null,"The mapped address is calculated from the base32 address in Conflux Core through the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Convert the base32 address to hex format, and then convert to bytes type."),Object(o.b)("li",{parentName:"ol"},"Keccak the bytes from the previous step to get the hash."),Object(o.b)("li",{parentName:"ol"},"Take the last 160 bits of the hash and convert it to hex40 format, which is the mapped eSpace address.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"js-conflux-sdk v2.0")," provides a method to get the mapped address of the base32 address:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const { address } = require('js-conflux-sdk');\nconst base32Address = 'cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91';\nconst mappedAddress = address.cfxMappedEVMSpaceAddress(base32Address);\n// 0x12Bf6283CcF8Ad6ffA63f7Da63EDc217228d839A\n")),Object(o.b)("p",null,"Notes about the mapped address:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The mapped address is an address in eSpace, so it has a hex40 format."),Object(o.b)("li",{parentName:"ol"},"The purpose of the mapped address is to serve as a transit address when crossing CFX back to Core space."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Remember NOT to convert the base32 address directly to hex40 format as the mapped address. This action will result in the loss of your assets"))))}d.isMDXComponent=!0}}]);
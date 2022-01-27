(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(176)),c={id:"intro_of_evm_space",title:"Introduction",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/intro.md",keywords:["Introduction"]},i={unversionedId:"conflux-doc/docs/EVM-Space/intro_of_evm_space",id:"conflux-doc/docs/EVM-Space/intro_of_evm_space",isDocsHomePage:!1,title:"Introduction",description:"Conflux has a virtual machine that is similar to EVM. However, there are still some differences between Conflux VM and Ethereum VM. Conflux has a different transaction format and a different rule for generating addresses from public keys. This impedes the EVM compatible dApps porting to Conflux. The previous CIP-72 and CIP-80 try to solve these obstacles. But that will influence the current applications. So the CIP-90 introduces a new space to construct a space that is fully EVM-compatible without changing the existing accounts and transactions.",source:"@site/docs/conflux-doc/docs/EVM-Space/intro.md",sourceDirName:"conflux-doc/docs/EVM-Space",slug:"/conflux-doc/docs/EVM-Space/intro_of_evm_space",permalink:"/conflux-doc/docs/EVM-Space/intro_of_evm_space",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/intro.md",version:"current",frontMatter:{id:"intro_of_evm_space",title:"Introduction",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/EVM-Space/intro.md",keywords:["Introduction"]},sidebar:"evmSpace",next:{title:"Network Endpoints",permalink:"/conflux-doc/docs/EVM-Space/evm_space_networks"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Conflux has a virtual machine that is similar to EVM. However, there are still some differences between Conflux VM and Ethereum VM. Conflux has a different transaction format and a different rule for generating addresses from public keys. This impedes the EVM compatible dApps porting to Conflux. The previous CIP-72 and CIP-80 try to solve these obstacles. But that will influence the current applications. So the CIP-90 introduces a new space to construct a space that is fully EVM-compatible without changing the existing accounts and transactions."),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90")," has introduced a new fully EVM-compatible space. The new space is called ",Object(a.b)("inlineCode",{parentName:"p"},"EVM Space"),", and the current space is called ",Object(a.b)("inlineCode",{parentName:"p"},"Native Space"),". The EVM Space follows the same rule as EVM and supports eth rpc like eth_getBalance, so the tools from ethereum ecosystem can be used on Conflux directly."),Object(a.b)("p",null,"The accounts in two spaces are ",Object(a.b)("inlineCode",{parentName:"p"},"separated"),". A native space account can only interact with the other accounts in native space with the original conflux transaction type. An EVM space account can only interact with the other accounts in EVM space with Ethereum transaction type ",Object(a.b)("inlineCode",{parentName:"p"},"EIP-155"),". A new internal contract will be deployed for ",Object(a.b)("inlineCode",{parentName:"p"},"assets and data cross-space"),". Unlike cross-chain operations, the cross-space operations are ",Object(a.b)("inlineCode",{parentName:"p"},"atomic")," and with ",Object(a.b)("inlineCode",{parentName:"p"},"layer 1 security"),"."))}p.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
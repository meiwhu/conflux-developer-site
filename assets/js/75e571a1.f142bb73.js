(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{130:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),c=(t(0),t(176)),o={},s={unversionedId:"conflux-doc/docs/EVM-Space/cross_space_call",id:"conflux-doc/docs/EVM-Space/cross_space_call",isDocsHomePage:!1,title:"cross_space_call",description:"`js",source:"@site/docs/conflux-doc/docs/EVM-Space/cross_space_call.md",sourceDirName:"conflux-doc/docs/EVM-Space",slug:"/conflux-doc/docs/EVM-Space/cross_space_call",permalink:"/conflux-doc/docs/EVM-Space/cross_space_call",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-doc/docs/EVM-Space/cross_space_call.md",version:"current",frontMatter:{}},i=[],u={toc:i};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"// SPDX-License-Identifier: MIT\npragma solidity >=0.5.0;\n\ninterface CrossSpaceCall {\n\n    event Call(bytes20 indexed sender, bytes20 indexed receiver, uint256 value, uint256 nonce, bytes data);\n\n    event Create(bytes20 indexed sender, bytes20 indexed contract_address, uint256 value, uint256 nonce, bytes init);\n\n    event Withdraw(bytes20 indexed sender, address indexed receiver, uint256 value, uint256 nonce);\n\n    event Outcome(bool success);\n\n    function createEVM(bytes calldata init) external payable returns (bytes20);\n    \n    function transferEVM(bytes20 to) external payable returns (bytes memory output);\n\n    function callEVM(bytes20 to, bytes calldata data) external payable returns (bytes memory output);\n\n    function staticCallEVM(bytes20 to, bytes calldata data) external view returns (bytes memory output);\n\n    // function deployEip1820() external;\n\n    function withdrawFromMapped(uint256 value) external;\n\n    function mappedBalance(address addr) external view returns (uint256);\n\n    function mappedNonce(address addr) external view returns (uint256);\n}\n")))}l.isMDXComponent=!0},176:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return y}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,y=d["".concat(o,".").concat(f)]||d[f]||p[f]||c;return t?a.a.createElement(y,s(s({ref:n},u),{},{components:t})):a.a.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<c;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);
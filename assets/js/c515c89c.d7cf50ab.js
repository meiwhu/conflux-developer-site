(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{169:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(7),a=(r(0),r(187)),c={},i={unversionedId:"conflux-rust/core/src/pos/config/management/README",id:"conflux-rust/core/src/pos/config/management/README",isDocsHomePage:!1,title:"Diem Management tools",description:"The diem-management crate provides a framework for building CLI tools for various",source:"@site/docs/conflux-rust/core/src/pos/config/management/README.md",sourceDirName:"conflux-rust/core/src/pos/config/management",slug:"/conflux-rust/core/src/pos/config/management/README",permalink:"/conflux-rust/core/src/pos/config/management/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-rust/core/src/pos/config/management/README.md",version:"current",frontMatter:{}},s=[{value:"The Tools",id:"the-tools",children:[]}],u={toc:s};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"diem-management")," crate provides a framework for building CLI tools for various\npurposes.  The purpose of breaking these into multiple tools is to simplify the user\nexperience, and prevent confusion between the different use cases."),Object(a.b)("h3",{id:"the-tools"},"The Tools"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"diem-management\n|-> diem-genesis-tool = A tool for performing the genesis ceremony for the Diem blockchain.\n|-> diem-operational-tool = A tool for performing management operations on the Diem blockchain.\n")),Object(a.b)("p",null,"There are README's for each tool individually."))}l.isMDXComponent=!0},187:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=t,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return r?o.a.createElement(d,i(i({ref:n},u),{},{components:r})):o.a.createElement(d,i({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
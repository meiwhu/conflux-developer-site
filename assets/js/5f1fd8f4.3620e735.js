(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),o=(r(0),r(184)),a={id:"secure_storage",title:"Secure Storage",custom_edit_url:"https://github.com/diem/diem/edit/main/secure/storage/README.md"},s={unversionedId:"conflux-rust/core/src/pos/secure/storage/secure_storage",id:"conflux-rust/core/src/pos/secure/storage/secure_storage",isDocsHomePage:!1,title:"Secure Storage",description:"Secure storage provides a secure, persistent data store for sensitive data in the Diem",source:"@site/docs/conflux-rust/core/src/pos/secure/storage/README.md",sourceDirName:"conflux-rust/core/src/pos/secure/storage",slug:"/conflux-rust/core/src/pos/secure/storage/secure_storage",permalink:"/conflux-rust/core/src/pos/secure/storage/secure_storage",editUrl:"https://github.com/diem/diem/edit/main/secure/storage/README.md",version:"current",frontMatter:{id:"secure_storage",title:"Secure Storage",custom_edit_url:"https://github.com/diem/diem/edit/main/secure/storage/README.md"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Implementation Details",id:"implementation-details",children:[]},{value:"How is this module organized?",id:"how-is-this-module-organized",children:[]}],u={toc:c};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Secure storage provides a secure, persistent data store for sensitive data in the Diem\nblockchain. Examples of sensitive data here include information required for safety and\nidentity within Diem, such as cryptographic keys and consensus safety rules, as well as\nrun-time configuration data."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"For a design overview of secure storage, including the APIs, error types and policies, refer\nto the secure storage specification:\n","[TODO(joshlind): publish the secure storage spec!]"),Object(o.b)("h2",{id:"implementation-details"},"Implementation Details"),Object(o.b)("p",null,"This crate defines the secure storage API, made up of two separate Rust traits (interfaces):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"KVStorage"),": The KVStorage trait offers a key-value storage abstraction (e.g., to get\nand set key-value pairs)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CryptoStorage"),": The CryptoStorage trait offers a cryptographic-key based storage\nabstraction for Ed25519 keys (e.g., key creation, rotation and signing).")),Object(o.b)("p",null,"This crate provides four different secure storage implementations, each of which implements\nboth ",Object(o.b)("inlineCode",{parentName:"p"},"KVStorage")," and ",Object(o.b)("inlineCode",{parentName:"p"},"CryptoStorage"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Github"),": The Github secure storage implementation provides a storage backend using a\nGithub repository."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Vault"),": The Vault secure storage implementation uses the Vault Storage Engine (an engine\noffered by HashiCorp: ",Object(o.b)("a",{parentName:"li",href:"https://www.vaultproject.io/"},"https://www.vaultproject.io/"),"). The Vault secure storage implementation\nis the one primarily used in production environments by nodes in the Diem blockchain."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"InMemory"),": The InMemory secure storage implementation provides a simple in-memory storage\nengine. This engine should only be used for testing, as it does not offer any persistence, or\nsecurity (i.e., data is simply held in DRAM and may be lost on a crash, or restart)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"OnDisk"),": Similar to InMemory, the OnDisk secure storage implementation provides another\nuseful testing implementation: an on-disk storage engine, where the storage backend is\nimplemented using a single file written to local disk. In a similar fashion to the in-memory\nstorage, on-disk should not be used in production environments as it provides no security\nguarantees (e.g., encryption before writing to disk). Moreover, OnDisk storage does not\ncurrently support concurrent data accesses.")),Object(o.b)("p",null,"In addition, this crate also offers a ",Object(o.b)("inlineCode",{parentName:"p"},"NamespacedStorage")," wrapper around secure storage\nimplementations. Using the NamespacedStorage wrapper, different entities can share the\nsame secure storage instance, under different namespaces, providing an abstraction that\neach entity has its own secure storage backend."),Object(o.b)("h2",{id:"how-is-this-module-organized"},"How is this module organized?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"    secure/storage/\n    \u251c\u2500\u2500 github             # Contains the secure storage implementation based on Github.\n    \u251c\u2500\u2500 src                # Contains the definitions for secure storage (e.g., API and error types),\n                                as well as lightweight implementations for testing (e.g in-memory and on-disk).\n    |\u2500\u2500 src/tests          # Contains the testsuite for all secure storage implementations.\n    \u251c\u2500\u2500 vault              # Contains the secure storage implementation based on Vault, including the client\n                                add fuzzing helper functions.\n")))}l.isMDXComponent=!0},184:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return g}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,g=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return r?i.a.createElement(g,s(s({ref:t},u),{},{components:r})):i.a.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
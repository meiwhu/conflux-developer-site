(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{188:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return f}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(o),p=n,f=u["".concat(i,".").concat(p)]||u[p]||h[p]||a;return o?r.a.createElement(f,l(l({ref:t},c),{},{components:o})):r.a.createElement(f,l({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},206:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/storage-formula-635173b54f6e13ba21a689cc691d4ecd.png"},99:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return d}));var n=o(3),r=o(7),a=(o(0),o(188)),i={id:"conflux_storage",title:"Storage",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/storage.md",keywords:["storage"]},l={unversionedId:"introduction/en/conflux_storage",id:"introduction/en/conflux_storage",isDocsHomePage:!1,title:"Storage",description:"Conflux introduced the Collateral for storage (CFS) mechanism as a pricing method for using storage. Compared with the one-time storage fee in Ethereum, the CFS mechanism will be more fair and reasonable. In principle, this mechanism requires a certain amount of funds to be locked as collateral to occupy storage space. Before the corresponding storage space is released or covered by others, the collateral will be locked, and the corresponding interest generated by the locked collateral will be directly allocated to the miners for the maintenance of the storage space. Therefore, the storage cost of Conflux also depends on the length of time the storage space is occupied. Conflux specifically introduced this mechanism in detail in chaper 7 of its ConfluxProtocolSpecification.",source:"@site/docs/introduction/en/storage.md",sourceDirName:"introduction/en",slug:"/introduction/en/conflux_storage",permalink:"/introduction/en/conflux_storage",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/storage.md",version:"current",frontMatter:{id:"conflux_storage",title:"Storage",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/storage.md",keywords:["storage"]},sidebar:"docs",previous:{title:"Internal Contract",permalink:"/conflux-rust/internal_contract/internal_contract"},next:{title:"Papers",permalink:"/introduction/en/conflux_papers"}},s=[{value:"How to use storage collateral",id:"how-to-use-storage-collateral",children:[]}],c={toc:s};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Conflux introduced the Collateral for storage (CFS) mechanism as a pricing method for using storage. Compared with the one-time storage fee in Ethereum, the CFS mechanism will be more fair and reasonable. In principle, this mechanism requires a certain amount of funds to be locked as collateral to occupy storage space. Before the corresponding storage space is released or covered by others, the collateral will be locked, and the corresponding interest generated by the locked collateral will be directly allocated to the miners for the maintenance of the storage space. Therefore, the storage cost of Conflux also depends on the length of time the storage space is occupied. Conflux specifically introduced this mechanism in detail in chaper 7 of its ",Object(a.b)("a",{parentName:"p",href:"https://confluxnetwork.org/files/Conflux_Protocol_Specification_20201020.pdf"},"Conflux_Protocol_Specification"),"."),Object(a.b)("p",null,"In the Conflux network, each storage entry occupies a space of 64B (B is Bytes, byte), which is also the size of the key/value pair in the world state. It should be noted that the key in the blockchain is generally 256bits long and the value It is also 256bits long (each is 32B long, and the total is 64B long). The deposit required for storage is proportional to the minimum multiple of 64B that can cover all stored items. For each storage entry, the last account that writes to the entry is called the owner of the storage entry. If a storage item is written during the execution of contract C, and a guarantor provides guarantee for it, then C is regarded as the writer of the item and accordingly becomes the owner of the item (see section 7.1 for details). In the world state, during the entire life cycle of a storage item, the owner of the item must lock a fixed amount of CFX as a storage deposit for the storage space. Specifically, for each storage entry with a size of 64B, its owner will be locked by 1/16CFX. For occupying ",Object(a.b)("inlineCode",{parentName:"p"},"1KB")," space, you will pay ",Object(a.b)("inlineCode",{parentName:"p"},"1CFX")," as a deposit, and the corresponding formula is as follows:"),Object(a.b)("p",null,Object(a.b)("img",{src:o(206).default})),Object(a.b)("p",null,"When account \u03b1 becomes the owner of a stored entry (whether it is created or modified), \u03b1 should immediately lock 1/16 CFX for the entry. If \u03b1 has enough balance, then the required deposit will be automatically locked, otherwise if \u03b1 does not have enough balance, the operation will fail and \u03b1 cannot create or modify the entry."),Object(a.b)("p",null,'When a storage item is deleted from the world state, the corresponding 1/16 CFX deposit will be unlocked and returned to the item owner\'s balance. If the ownership of a storage item changes, the 1/16 CFX deposit of the old owner is unlocked, and the new owner must lock 1/16 CFX as the deposit at the same time. It is worth mentioning that the deposit refund is "quietly" added to the balance, and there is no transfer transaction available for inquiry.'),Object(a.b)("h2",{id:"how-to-use-storage-collateral"},"How to use storage collateral"),Object(a.b)("p",null,"When users send a Conflux transaction, they need to fill in a ",Object(a.b)("inlineCode",{parentName:"p"},"storageLimit")," field (in bytes). Storage limit plays the same role for storage as gas limit does for execution. The upper limit stipulates that the deposit increase of the deposit payer before and after the transaction is executed shall not exceed the ",Object(a.b)("inlineCode",{parentName:"p"},"storage upper limit")," multiplied by 1/1024 CFX. If this value is filled in too low, it will cause the deposit to exceed the upper limit after execution and the execution will fail. Therefore, in general, this field needs to be set to a value larger than the actual usage, and the excess part will not generate storage mortgage. However, it is not recommended to fill in too high, because it may cause the sender's balance to be insufficient to pay the deposit, which may result in transaction failure. Fullnode provides the RPC method ",Object(a.b)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," to estimate the storage size that a transaction will use."),Object(a.b)("p",null,"After the transaction is executed, the ",Object(a.b)("inlineCode",{parentName:"p"},"Receipt")," contains several fields about storage changes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"storageCollateralized")," This is the amount of data that is stored and collateralized"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"storageCoveredBySponsor")," Whether the storage mortgage for this transaction is sponsored by the sponsor"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"storageReleased")," The storage released by this transaction")),Object(a.b)("p",null,"You can use the ",Object(a.b)("inlineCode",{parentName:"p"},"cfx_getCollateralForStorage")," method to query the storage size currently mortgaged by an address, the unit is bytes, and the value divided by 1024 is the amount of CFX storage mortgaged. In addition, it can also be obtained through the ",Object(a.b)("inlineCode",{parentName:"p"},"cfx_getAccount")," method, and the returned information contains the ",Object(a.b)("inlineCode",{parentName:"p"},"collateralForStorage")," field."))}d.isMDXComponent=!0}}]);
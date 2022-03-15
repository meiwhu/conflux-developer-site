(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),o=(r(0),r(188)),a={id:"crypto",title:"Crypto",custom_edit_url:"https://github.com/diem/diem/edit/main/crypto/crypto/README.md"},c={unversionedId:"conflux-rust/core/src/pos/crypto/crypto/crypto",id:"conflux-rust/core/src/pos/crypto/crypto/crypto",isDocsHomePage:!1,title:"Crypto",description:"The crypto component hosts all the implementations of cryptographic primitives we use in Diem: hashing, signing, and key derivation/generation. The parts of the library using traits.rs contains the crypto API enforcing type safety, verifiable random functions, EdDSA & MultiEdDSA signatures.",source:"@site/docs/conflux-rust/core/src/pos/crypto/crypto/README.md",sourceDirName:"conflux-rust/core/src/pos/crypto/crypto",slug:"/conflux-rust/core/src/pos/crypto/crypto/crypto",permalink:"/conflux-rust/core/src/pos/crypto/crypto/crypto",editUrl:"https://github.com/diem/diem/edit/main/crypto/crypto/README.md",version:"current",frontMatter:{id:"crypto",title:"Crypto",custom_edit_url:"https://github.com/diem/diem/edit/main/crypto/crypto/README.md"}},s=[{value:"Overview",id:"overview",children:[]},{value:"How is this module organized?",id:"how-is-this-module-organized",children:[]}],p={toc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The crypto component hosts all the implementations of cryptographic primitives we use in Diem: hashing, signing, and key derivation/generation. The parts of the library using traits.rs contains the crypto API enforcing type safety, verifiable random functions, EdDSA & MultiEdDSA signatures."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Diem makes use of several cryptographic algorithms:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"SHA-3 as the main hash function. It is standardized in ",Object(o.b)("a",{parentName:"li",href:"https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf"},"FIPS 202"),". It is based on the ",Object(o.b)("a",{parentName:"li",href:"https://docs.rs/tiny-keccak/1.4.2/tiny_keccak/"},"tiny_keccak")," library."),Object(o.b)("li",{parentName:"ul"},"HKDF: HMAC-based Extract-and-Expand Key Derivation Function (HKDF) based on ",Object(o.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc5869"},"RFC 5869"),". It is used to generate keys from a salt (optional), seed, and application-info (optional)."),Object(o.b)("li",{parentName:"ul"},"traits.rs introduces new abstractions for the crypto API."),Object(o.b)("li",{parentName:"ul"},"Ed25519 performs signatures using the new API design based on ",Object(o.b)("a",{parentName:"li",href:"https://docs.rs/ed25519-dalek/1.0.0-pre.1/ed25519_dalek/"},"ed25519-dalek")," library with additional security checks (e.g. for malleability)."),Object(o.b)("li",{parentName:"ul"},"X25519 to perform key exchanges. It is used to secure communications between validators via the ",Object(o.b)("a",{parentName:"li",href:"http://www.noiseprotocol.org/noise.html"},"Noise Protocol Framework"),". It is based on the x25519-dalek library.")),Object(o.b)("h2",{id:"how-is-this-module-organized"},"How is this module organized?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"    crypto/src\n    \u251c\u2500\u2500 hash.rs             # Hash function (SHA-3)\n    \u251c\u2500\u2500 hkdf.rs             # HKDF implementation (HMAC-based Extract-and-Expand Key Derivation Function based on RFC 5869)\n    \u251c\u2500\u2500 macros/             # Derivations for SilentDebug and SilentDisplay\n    \u251c\u2500\u2500 utils.rs            # Serialization utility functions\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 ed25519.rs          # Ed25519 implementation of the signing/verification API in traits.rs\n    \u251c\u2500\u2500 multi_ed25519.rs    # MultiEd25519 implementation of the signing/verification API in traits.rs\n    \u251c\u2500\u2500 x25519.rs           # X25519 wrapper\n    \u251c\u2500\u2500 test_utils.rs\n    \u251c\u2500\u2500 traits.rs           # New API design and the necessary abstractions\n    \u2514\u2500\u2500 unit_tests/         # Tests\n")),Object(o.b)("p",null,"Note: This crate historically had support for BLS12381, ECVRF, and SlIP-0010, though were removed due to lack of use. The last git revision before there removal is 00301524."))}l.isMDXComponent=!0},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||o;return r?i.a.createElement(f,c(c({ref:t},p),{},{components:r})):i.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
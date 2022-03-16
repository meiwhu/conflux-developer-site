(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{187:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(187)),i={},c={unversionedId:"conflux-rust/changelogs/CHANGELOG-2.0.x",id:"conflux-rust/changelogs/CHANGELOG-2.0.x",isDocsHomePage:!1,title:"2.0.1",description:"Improvements",source:"@site/docs/conflux-rust/changelogs/CHANGELOG-2.0.x.md",sourceDirName:"conflux-rust/changelogs",slug:"/conflux-rust/changelogs/CHANGELOG-2.0.x",permalink:"/conflux-rust/changelogs/CHANGELOG-2.0.x",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-rust/changelogs/CHANGELOG-2.0.x.md",version:"current",frontMatter:{}},l=[],u={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Improvements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add config parameter ",Object(a.b)("inlineCode",{parentName:"li"},"get_logs_filter_max_block_number_range")," for limiting the maximum gap between ",Object(a.b)("inlineCode",{parentName:"li"},"from_block")," and ",Object(a.b)("inlineCode",{parentName:"li"},"to_block")," during Core space log filtering (",Object(a.b)("inlineCode",{parentName:"li"},"cfx_getLogs"),"). Note: eSpace blocks correspond to epochs in Core space, so the range in ",Object(a.b)("inlineCode",{parentName:"li"},"eth_getLogs")," can be limited using ",Object(a.b)("inlineCode",{parentName:"li"},"get_logs_filter_max_epoch_range"),"."),Object(a.b)("li",{parentName:"ul"},"Report error in ",Object(a.b)("inlineCode",{parentName:"li"},"cfx_getLogs")," and ",Object(a.b)("inlineCode",{parentName:"li"},"eth_getLogs")," if ",Object(a.b)("inlineCode",{parentName:"li"},"get_logs_filter_max_limit")," is configured but the query would return more logs. The previous behavior of ",Object(a.b)("inlineCode",{parentName:"li"},"cfx_getLogs")," was to silently truncate the result. The previous behavior of ",Object(a.b)("inlineCode",{parentName:"li"},"eth_getLogs")," was to raise an error when ",Object(a.b)("inlineCode",{parentName:"li"},"filter.limit")," is too low, regardless of how many logs the query would result in."),Object(a.b)("li",{parentName:"ul"},"Add config parameter ",Object(a.b)("inlineCode",{parentName:"li"},"min_phase_change_normal_peer_count")," to set the number of normal-phase peers needed for phase change. The default value is set to 3 to make it more robust.")))}s.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{188:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(188)),i={},l={unversionedId:"conflux-rust/changelogs/CHANGELOG-2.0.x",id:"conflux-rust/changelogs/CHANGELOG-2.0.x",isDocsHomePage:!1,title:"2.0.1",description:"Improvements",source:"@site/docs/conflux-rust/changelogs/CHANGELOG-2.0.x.md",sourceDirName:"conflux-rust/changelogs",slug:"/conflux-rust/changelogs/CHANGELOG-2.0.x",permalink:"/conflux-rust/changelogs/CHANGELOG-2.0.x",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-rust/changelogs/CHANGELOG-2.0.x.md",version:"current",frontMatter:{}},c=[{value:"RPC Improvements",id:"rpc-improvements",children:[]},{value:"Configuration Improvements",id:"configuration-improvements",children:[]},{value:"Transaction Pool Improvements",id:"transaction-pool-improvements",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Improvements"),Object(o.b)("h3",{id:"rpc-improvements"},"RPC Improvements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Report error in ",Object(o.b)("inlineCode",{parentName:"li"},"cfx_getLogs")," and ",Object(o.b)("inlineCode",{parentName:"li"},"eth_getLogs")," if ",Object(o.b)("inlineCode",{parentName:"li"},"get_logs_filter_max_limit")," is configured but the query would return more logs. The previous behavior of ",Object(o.b)("inlineCode",{parentName:"li"},"cfx_getLogs")," was to silently truncate the result. The previous behavior of ",Object(o.b)("inlineCode",{parentName:"li"},"eth_getLogs")," was to raise an error when ",Object(o.b)("inlineCode",{parentName:"li"},"filter.limit")," is too low, regardless of how many logs the query would result in."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"eth_gasPrice")," now estimate gas prices accurately instead of returning a fixed value."),Object(o.b)("li",{parentName:"ul"},"Support phantom transactions and return correct fields in eSpace ",Object(o.b)("inlineCode",{parentName:"li"},"trace")," RPCs."),Object(o.b)("li",{parentName:"ul"},"Add fields ",Object(o.b)("inlineCode",{parentName:"li"},"valid")," and ",Object(o.b)("inlineCode",{parentName:"li"},"createType")," for eSpace ",Object(o.b)("inlineCode",{parentName:"li"},"trace")," RPCs."),Object(o.b)("li",{parentName:"ul"},"Add RPC ",Object(o.b)("inlineCode",{parentName:"li"},"rpc_methods")," to return all available methods and ",Object(o.b)("inlineCode",{parentName:"li"},"rpc_modules")," to return all RPC modules."),Object(o.b)("li",{parentName:"ul"},"Add ",Object(o.b)("inlineCode",{parentName:"li"},"total_espace_tokens")," in the response of ",Object(o.b)("inlineCode",{parentName:"li"},"cfx_getSupplyInfo"),"."),Object(o.b)("li",{parentName:"ul"},"Add local RPCs ",Object(o.b)("inlineCode",{parentName:"li"},"pos_start_voting"),", ",Object(o.b)("inlineCode",{parentName:"li"},"pos_stop_voting"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"pos_voting_status"),". Check #2438 for details.")),Object(o.b)("h3",{id:"configuration-improvements"},"Configuration Improvements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Allow PoS voting nodes to have running backups. #2438 includes an introduction."),Object(o.b)("li",{parentName:"ul"},"Add config parameter ",Object(o.b)("inlineCode",{parentName:"li"},"get_logs_filter_max_block_number_range")," for limiting the maximum gap between ",Object(o.b)("inlineCode",{parentName:"li"},"from_block")," and ",Object(o.b)("inlineCode",{parentName:"li"},"to_block")," during Core space log filtering (",Object(o.b)("inlineCode",{parentName:"li"},"cfx_getLogs"),"). Note: eSpace blocks correspond to epochs in Core space, so the range in ",Object(o.b)("inlineCode",{parentName:"li"},"eth_getLogs")," can be limited using ",Object(o.b)("inlineCode",{parentName:"li"},"get_logs_filter_max_epoch_range"),"."),Object(o.b)("li",{parentName:"ul"},"Add config parameter ",Object(o.b)("inlineCode",{parentName:"li"},"min_phase_change_normal_peer_count")," to set the number of normal-phase peers needed for phase change. The default value is set to 3 to make it more robust."),Object(o.b)("li",{parentName:"ul"},"Add environment variable ",Object(o.b)("inlineCode",{parentName:"li"},"CFX_POS_KEY_ENCRYPTION_PASSWORD")," to configure pos key encryption password.")),Object(o.b)("h3",{id:"transaction-pool-improvements"},"Transaction Pool Improvements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Allow pending transactions to be replaced unconditionally after 200000 epochs.")),Object(o.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fix an issue that phantom transactions may have the same hash. Now all phantom transactions have different hashes after this fix."),Object(o.b)("li",{parentName:"ul"},"Create PoS log file directory if it does not exist. "),Object(o.b)("li",{parentName:"ul"},"Fix a panic issue when the node is started with ",Object(o.b)("inlineCode",{parentName:"li"},"stdout")," unavailable."),Object(o.b)("li",{parentName:"ul"},"Fix an issue that an old transaction is not replaced according to a higher ",Object(o.b)("inlineCode",{parentName:"li"},"epoch_height"),".")))}p.isMDXComponent=!0}}]);
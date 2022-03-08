(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{148:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return h}));var n=o(3),a=o(7),r=(o(0),o(187)),i={id:"why_pos",title:"Why Introducing PoS",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/v2-hardfork/why-PoS.md",keywords:["pos","why"]},s={unversionedId:"v2-hardfork/why_pos",id:"v2-hardfork/why_pos",isDocsHomePage:!1,title:"Why Introducing PoS",description:"Let's start by explaining the reality that Conflux will have to consider the risk of a 51% attack in quite a long period of time:Due to the huge mining revenue of Ethereum and the increasing demands of graphics cards, miners have already purchased a lot of graphics cards, forming a huge pool of hashing power.",source:"@site/docs/v2-hardfork/why-PoS.md",sourceDirName:"v2-hardfork",slug:"/v2-hardfork/why_pos",permalink:"/v2-hardfork/why_pos",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/v2-hardfork/why-PoS.md",version:"current",frontMatter:{id:"why_pos",title:"Why Introducing PoS",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/v2-hardfork/why-PoS.md",keywords:["pos","why"]},sidebar:"docs",previous:{title:"PoS Overview",permalink:"/v2-hardfork/pos_overview"},next:{title:"PoS FAQs",permalink:"/v2-hardfork/pos_faqs"}},c=[{value:"PoW + PoS Hybrid Consensus?",id:"pow--pos-hybrid-consensus",children:[]}],l={toc:c};function h(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Let's start by explaining the reality that Conflux will have to consider the risk of a 51% attack in quite a long period of time:Due to the huge mining revenue of Ethereum and the increasing demands of graphics cards, miners have already purchased a lot of graphics cards, forming a huge pool of hashing power."),Object(r.b)("p",null,"Conflux also uses graphics cards for mining, and the hashing power of graphics cards to maintain the security of Conflux is still far behind that of Ethereum. Therefore, there is a risk that a large number of graphics cards will switch to Conflux in a short period of time to complete a 51% attack."),Object(r.b)("p",null,'Similar risks of 51% attack exist not only in other PoW public chains with graphics card mining, but also exist in blockchains like BCH, which uses the same ASIC mining as BTC but with significantly lower computing power. To address the 51% attack risk, BCH has even gone so far as to adopt a "less elegant" solution by limiting the rollback length.'),Object(r.b)("p",null,"In theory, a public chain with PoW can never completely eliminate the risk of 51% attack. In practice, whether or not an attacker launches a 51% attack largely depends on the benefits and costs of the attack.\xa0In terms of the attacker's gain: a successful 51% attack will not harm the mining profit. The attacker's gain may be reduced mainly for two reasons. One is the loss caused by the collapse of the token value after a successful attack; the other is the community may reach a consensus to roll back the state through a hard fork to eliminate the attacker's gain. However, nowadays blockchains have supported multiple on-chain assets and provided cross-chain services, so it is now difficult to eliminate the impact caused by a double-spending attack through a simple hard fork, which is quite different from the situation when ETC were forked from ETH."),Object(r.b)("p",null,"In terms of increasing the cost to the 51% attackers, there are now three response options available:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Avoiding all large-scale hashing power pools. Specifically, abandon graphics card mining and change to specialized ASIC mining."),Object(r.b)("li",{parentName:"ol"},"Getting Conflux's network hashing power approaching or even exceeding Ethereum. This requires increasing the total mining revenue of Conflux to a level comparable to that of Ethereum. The current mining issuance of Ethereum is about 2.6 ETH every 13 seconds, or an average of 0.2 ETH per second. Based on the market price of 3400 USD/ETH, that gives Ethereum a mining revenue of about 680 USD per second, or about 58,752,000 USD per day. To raise Conflux's mining revenue to this level, it would require a boost of about 170 times. This means increasing the revenue of each block to $340,\xa0 that is, increasing the reward per block to over 340 CFX while maintaining the price of 1USD/CFX, or increasing the unit price of CFX by 170 times while maintaining the output. Achieving this goal in the short term may require Elon Musk to send a tweet for CFX every week or even every day."),Object(r.b)("li",{parentName:"ol"},"Introducing a PoS mechanism to counter 51% attacks. The PoS decision makes it impossible for an attacker to achieve a double-spending attack based solely on the advantage of computing power, unless the attacker additionally invests enough CFX to influence the PoS decision.")),Object(r.b)("p",null,"Of these three options, we believe that only the last one is actually feasible."),Object(r.b)("p",null,"As for the team's technical roadmap, Conflux's goal is to achieve a \"decentralized public chain platform that is accessible and affordable to everyone\", rather than a \"public chain with a specific PoW consensus protocol\". The technical approach is only a means to serve the goal, not the goal itself. For this reason, adding PoS finality decisions to Conflux's existing PoW consensus mechanism to improve confirmation speed and resist potential 51% attacks is in line with Conflux's goals. In addition, to reduce the complexity and potential risk of adding PoS finality mechanism, we choose to leave the selection and packaging of transactions entirely to PoW miners, and the ordering of blocks still follows the Tree-Graph ordering rules, with PoS voting only on the finality of blocks generated by PoW miners."),Object(r.b)("p",null,"Regarding the understanding of PoW and PoS, we have never changed: PoW is more secure but slower to confirm; PoS is faster to confirm but less secure. The combination of PoW and PoS has the potential to be a more desirable consensus protocol"),Object(r.b)("h2",{id:"pow--pos-hybrid-consensus"},"PoW + PoS Hybrid Consensus?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The advantages of PoW consensus - security and reliability"),Object(r.b)("li",{parentName:"ul"},"Advantages of PoS consensus - efficiency (fast confirmation, low energy consumption)"),Object(r.b)("li",{parentName:"ul"},"Both can achieve throughput close to the network capacity limit",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Further expansion requires infrastructure upgrade or layer2 solutions"))),Object(r.b)("li",{parentName:"ul"},"How to combine the advantages of both?",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"High security"),Object(r.b)("li",{parentName:"ul"},"Fast confirmation"),Object(r.b)("li",{parentName:"ul"},"Reasonable energy consumption")))))}h.isMDXComponent=!0},187:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return f}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=a.a.createContext({}),h=function(e){var t=a.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=h(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=h(o),d=n,f=u["".concat(i,".").concat(d)]||u[d]||p[d]||r;return o?a.a.createElement(f,s(s({ref:t},l),{},{components:o})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);
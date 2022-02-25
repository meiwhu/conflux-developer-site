(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{173:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return h}));var n=o(3),a=o(7),i=(o(0),o(184)),r={id:"pos_faqs",title:"PoS FAQs",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/v2-hardfork/PoS-faq.md",keywords:["pos","faq"]},c={unversionedId:"v2-hardfork/pos_faqs",id:"v2-hardfork/pos_faqs",isDocsHomePage:!1,title:"PoS FAQs",description:"What is the new Proof-of-Stake chain for Conflux?",source:"@site/docs/v2-hardfork/PoS-faq.md",sourceDirName:"v2-hardfork",slug:"/v2-hardfork/pos_faqs",permalink:"/v2-hardfork/pos_faqs",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/v2-hardfork/PoS-faq.md",version:"current",frontMatter:{id:"pos_faqs",title:"PoS FAQs",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/v2-hardfork/PoS-faq.md",keywords:["pos","faq"]},sidebar:"docs",previous:{title:"Why Introducing PoS",permalink:"/v2-hardfork/why_pos"},next:{title:"V2 InternalContracts",permalink:"/v2-hardfork/new_introduced_contracts"}},l=[{value:"What is the new Proof-of-Stake chain for Conflux?",id:"what-is-the-new-proof-of-stake-chain-for-conflux",children:[]},{value:"How is PoS in Conflux different from other PoS-based chains?",id:"how-is-pos-in-conflux-different-from-other-pos-based-chains",children:[]},{value:"When will the PoS upgrade be released?",id:"when-will-the-pos-upgrade-be-released",children:[]},{value:"Will the PoS upgrade break compatibility?",id:"will-the-pos-upgrade-break-compatibility",children:[]},{value:"How can I become a validator in the PoS chain?",id:"how-can-i-become-a-validator-in-the-pos-chain",children:[]},{value:"What are the main advantages of the PoS chain?",id:"what-are-the-main-advantages-of-the-pos-chain",children:[]},{value:"I&#39;m a developer, how will the PoS upgrade affect me?",id:"im-a-developer-how-will-the-pos-upgrade-affect-me",children:[]},{value:"What is CIP-43 doing?",id:"what-is-cip-43-doing",children:[]},{value:"Will Conflux become a PoS chain after CIP-43?",id:"will-conflux-become-a-pos-chain-after-cip-43",children:[]},{value:"Conflux does not recognize PoS, so why did it choose to introduce it?",id:"conflux-does-not-recognize-pos-so-why-did-it-choose-to-introduce-it",children:[]},{value:"Does PoS increase the complexity of transaction confirmation?",id:"does-pos-increase-the-complexity-of-transaction-confirmation",children:[]}],s={toc:l};function h(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-the-new-proof-of-stake-chain-for-conflux"},"What is the new Proof-of-Stake chain for Conflux?"),Object(i.b)("p",null,"The PoS chain is an overlay chain that works alongside the PoW chain. The PoS chain will bring \tadded security to the PoW chain and provide finality to trasactions. "),Object(i.b)("h2",{id:"how-is-pos-in-conflux-different-from-other-pos-based-chains"},"How is PoS in Conflux different from other PoS-based chains?"),Object(i.b)("p",null,"Conflux will use a hybrid PoW-PoS chain. There is currently no plan to do a full migration to a PoS chain. "),Object(i.b)("h2",{id:"when-will-the-pos-upgrade-be-released"},"When will the PoS upgrade be released?"),Object(i.b)("p",null,"The PoS upgrade will be deployed in February. You can join the tests here. "),Object(i.b)("h2",{id:"will-the-pos-upgrade-break-compatibility"},"Will the PoS upgrade break compatibility?"),Object(i.b)("p",null,"Yes. Users running Conflux nodes will need to update their clients to be able to run the PoS chain. "),Object(i.b)("h2",{id:"how-can-i-become-a-validator-in-the-pos-chain"},"How can I become a validator in the PoS chain?"),Object(i.b)("p",null,"For instructions on how to join the PoS public tests, check the Mining section of the forum or ",Object(i.b)("a",{parentName:"p",href:"https://forum.conflux.fun/c/English/mining"},"click here"),". "),Object(i.b)("h2",{id:"what-are-the-main-advantages-of-the-pos-chain"},"What are the main advantages of the PoS chain?"),Object(i.b)("p",null,"There are two main advantages to the PoS chain: increased security and transaction finality."),Object(i.b)("p",null,"With the upgrade, the network can sustain a 51% attack without risking the integrity of the pivot chain."),Object(i.b)("p",null,"In a scenario where an attacker successfully takes over 17% of the committee members, the PoW chain will continue to operate as usual, but it transactions won't be finalized until the attacker disappears."),Object(i.b)("p",null,"To conduct a successful attack where the pivot chain can diverge, an attacker will need to to control at least 84% of the committee members."),Object(i.b)("h2",{id:"im-a-developer-how-will-the-pos-upgrade-affect-me"},"I'm a developer, how will the PoS upgrade affect me?"),Object(i.b)("p",null,"The PoS upgrade won't affect the execution environment of smart contracts. "),Object(i.b)("h2",{id:"what-is-cip-43-doing"},"What is CIP-43 doing?"),Object(i.b)("p",null,"CIP-43 introduces a PoS chain as the witness chain to prevent 51% attacks."),Object(i.b)("h2",{id:"will-conflux-become-a-pos-chain-after-cip-43"},"Will Conflux become a PoS chain after CIP-43?"),Object(i.b)("p",null,"In CIP-43, PoS requires the consensus from at least 84% of the PoS participants to interfere with the PoW chain's behavior. Also need to mention that according to the protocol, PoS nodes should only sign blocks that have been confirmed by the PoW consensus."),Object(i.b)("p",null,"This means that unless more than 84% of staking voters unite to attack the network, Conflux acts no differently than running with only the PoW chain if there are no PoW attacks. Transaction packaging, transaction executing, and block sorting are still done by the miners."),Object(i.b)("p",null,"If users believe that at least 17% of the PoS nodes are honest, then they only need to consider the PoW rules. "),Object(i.b)("h2",{id:"conflux-does-not-recognize-pos-so-why-did-it-choose-to-introduce-it"},"Conflux does not recognize PoS, so why did it choose to introduce it?"),Object(i.b)("p",null,"In a PoS chain, a group with more than 34% of the Stake can prevent any transaction from being recorded to the chain and thus stop the chain. A group with more than 67% of the Stake can take full control of the chain and launch a double-spend attack at will. In Long Range Attacks, the attacker can rewrite the whole history by buying the private keys of the investors who made a sell-off."),Object(i.b)("p",null,"Then what does CIP-43 look like? Without a 51% attack, 34% of the Stake can't do anything, and 67% of the Stake still can't do anything either. (17% of the Stake can stop the PoS chain, but the PoW chain can still run as usual, just like how it behaves without CIP-43). It takes at least 84% of the Stake (>5/6) to have a tangible impact on the PoW chain, and the Long Range Attacks of PoS have almost no effects here as well."),Object(i.b)("p",null,"Overall, the dependency of CIP-43 on Staking nodes is completely different from that of a pure PoS chain."),Object(i.b)("h2",{id:"does-pos-increase-the-complexity-of-transaction-confirmation"},"Does PoS increase the complexity of transaction confirmation?"),Object(i.b)("p",null,"Firstly, due to the special nature of the Conflux consensus, the transaction confirmation  cannot be achieved by simply counting the number of confirmed blocks. If you know anything about GHOST, the GHOST protocol requires comparing the size of each level of subtrees and sibling subtrees. Conflux's GHAST protocol is even more complex. Conflux transaction confirmation rules are listed below. The process in which you saw the flashing of the \u201csecurity level\u201d icon on ConfluxScan is in fact supported by these mathematical formulas in behind. "),Object(i.b)("p",null,"Compared with these formulas, it is not very expensive to take an extra look at the state of the PoS chain."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://forum.conflux.fun/uploads/default/original/2X/a/afd169912d5eb617895e52115995aca3a283d6b8.png",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://forum.conflux.fun/uploads/default/original/2X/8/88fe6decd88e7e38f42f4995179fd013242849e4.png",alt:null})))}h.isMDXComponent=!0},184:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return p}));var n=o(0),a=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=a.a.createContext({}),h=function(e){var t=a.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=h(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=h(o),d=n,p=u["".concat(r,".").concat(d)]||u[d]||f[d]||i;return o?a.a.createElement(p,c(c({ref:t},s),{},{components:o})):a.a.createElement(p,c({ref:t},s))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<i;s++)r[s]=o[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);
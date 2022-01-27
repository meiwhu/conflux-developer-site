(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{177:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=u(n),b=o,p=h["".concat(r,".").concat(b)]||h[b]||d[b]||a;return n?i.a.createElement(p,l(l({ref:t},s),{},{components:n})):i.a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),i=n(7),a=(n(0),n(177)),r={id:"pos_overview",title:"Conflux PoS hardfork overview",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/v2-hardfork/PoS-overview.md",keywords:["pos","overview"]},l={unversionedId:"v2-hardfork/pos_overview",id:"v2-hardfork/pos_overview",isDocsHomePage:!1,title:"Conflux PoS hardfork overview",description:"This document is to introduce Conflux PoS Finality without practical details. It is to help readers understand PoS in general, and it is essential for reading other technical documents.",source:"@site/docs/v2-hardfork/PoS-overview.md",sourceDirName:"v2-hardfork",slug:"/v2-hardfork/pos_overview",permalink:"/v2-hardfork/pos_overview",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/v2-hardfork/PoS-overview.md",version:"current",frontMatter:{id:"pos_overview",title:"Conflux PoS hardfork overview",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/v2-hardfork/PoS-overview.md",keywords:["pos","overview"]},sidebar:"docs",previous:{title:"Upgraded CIPs",permalink:"/v2-hardfork/upgrade_list"},next:{title:"Why introducing PoS",permalink:"/v2-hardfork/why_pos"}},c=[{value:"PoS Account",id:"pos-account",children:[{value:"Address",id:"address",children:[]},{value:"Wallet",id:"wallet",children:[]},{value:"Become a consensus node",id:"become-a-consensus-node",children:[]}]},{value:"Participating in PoS Consensus",id:"participating-in-pos-consensus",children:[{value:"Get voting rights",id:"get-voting-rights",children:[]},{value:"Withdraw voting rights",id:"withdraw-voting-rights",children:[]},{value:"Example",id:"example",children:[]}]},{value:"The Work of PoS Consensus",id:"the-work-of-pos-consensus",children:[{value:"Candidate committee",id:"candidate-committee",children:[]},{value:"As a member",id:"as-a-member",children:[]},{value:"Incentive Plan",id:"incentive-plan",children:[]},{value:"Points composition",id:"points-composition",children:[]},{value:"Accrued interest",id:"accrued-interest",children:[]}]},{value:"Risk Reminder",id:"risk-reminder",children:[{value:"Principal Loss",id:"principal-loss",children:[]},{value:"Liquidity Risk",id:"liquidity-risk",children:[]},{value:"Revenue Loss",id:"revenue-loss",children:[]}]}],s={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document is to introduce Conflux PoS Finality without practical details. It is to help readers understand PoS in general, and it is essential for reading other technical documents."),Object(a.b)("p",null,"There might be a ",Object(a.b)("inlineCode",{parentName:"p"},"51%")," attack problem in the early stage of a PoW chain when the hashing power is low. This became an even more significant issue when hashpower rental platforms emerged along with the development of public blockchains. Ethereum Classic, Grin, and Verge have all been the victims of the 51% attack last year."),Object(a.b)("p",null,"To deal with the threats caused by 51% attacks, Conflux will introduce a stand-alone PoS chain. The consensus participants of the PoS chain will sign the pivot of the tree structure regularly. All PoW miners should select the pivot with enough signatures into the pivot chain, even if its sibling blocks have higher weights. Briefly speaking, the PoS chain specifies a pivot block, and all PoW miners should follow that block."),Object(a.b)("p",null,"This means as long as the PoS consensus votes to a pivot block, even if the 51% attackers try to reverse the block, it won\u2019t be recognized by the PoW nodes."),Object(a.b)("p",null,"Conflux requires the PoS consensus to use the power of specifying pivot blocks in a restrictive manner. A block must be confirmed for a few minutes under the PoW rules before the honest PoS nodes will sign it. This means that the block sorting and confirmation of the tree graph are still accomplished by the PoW miners."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The PoS chain is only used to deal with 51% of attacks. Therefore, it only includes basic features such as pivot block voting and voting committee election. It does not include the functionalities of general blockchains such as transactions and contract executions"),Object(a.b)("li",{parentName:"ul"},"The PoS chain features are built-in functionalities in the nodes of Conflux. Externally, there is still only one program: conflux-rust."),Object(a.b)("li",{parentName:"ul"},"In this document, the Conflux chain refers to the running blockchain, and the PoS chain refers to the newly introduced chain."),Object(a.b)("li",{parentName:"ul"},"There is approximately 1 PoS block generated per minute. All the times stated below are corresponding to the number of blocks.")),Object(a.b)("h2",{id:"pos-account"},"PoS Account"),Object(a.b)("h3",{id:"address"},"Address"),Object(a.b)("p",null,"Generally speaking, the account model on a blockchain is: a private key creates a public key, and a public key produces an address. The accounts on the PoS chain are similar, but there are two private keys called the BLS private key and the VRF private key, corresponding to the BLS public key and the VRF public key respectively. The two public keys are hashed to obtain the PoS address, which is currently 256-bit long. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"0xd731d7633dd38c47769c2a62926b9a54d288a5e664f4d2108ac5bb6601bb30f5\n")),Object(a.b)("h3",{id:"wallet"},"Wallet"),Object(a.b)("p",null,"The primary responsibility of a PoS account is to maintain the Conflux consensus protocol. Each PoS account should run an independent Conflux node. Thus, the Conflux core code has the built-in wallet functionality for PoS accounts, including:\nWhen the Conflux node is launched for the first time and is running in the PoS account mode, it will automatically generate the PoS private key and require users to provide the password. The private key that is encrypted by the supplied password is stored locally."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"When the Conflux node restarts, the user is required to enter the password to unlock the private key file if the encrypted private key file is detected. "),Object(a.b)("li",{parentName:"ul"},"The transactions are automatically processed under the consensus protocol of PoS during operation, without user intervention."),Object(a.b)("li",{parentName:"ul"},"Since the wallet is implemented by a full node, the interaction with the wallet is primitive, which may involve copying files manually, etc.")),Object(a.b)("h3",{id:"become-a-consensus-node"},"Become a consensus node"),Object(a.b)("p",null,"After a PoS account is created, it can only become a legal consensus node by staking and registering on the PoW chain."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Staking: no difference from the current staking process."),Object(a.b)("li",{parentName:"ul"},"Registration: interact with specific internal contact on the Conflux chain; submit relevant information provided by the full node; lock the staked amount, one vote per ",Object(a.b)("inlineCode",{parentName:"li"},"1000")," locked CFX.")),Object(a.b)("p",null,"After completing the registration, the PoW account that staked and the PoS account form a one-to-one binding relationship. The PoS account cannot change its bound PoW account. The PoW account can bind to another PoS account as long as it releases the previous binding relationship."),Object(a.b)("h2",{id:"participating-in-pos-consensus"},"Participating in PoS Consensus"),Object(a.b)("h3",{id:"get-voting-rights"},"Get voting rights"),Object(a.b)("p",null,"PoS accounts can get voting rights by locking CFX. (refer to chapter \u201cBecome a consensus node\u201d)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Conflux-rust will automatically monitor the registration information. Therefore, after the PoS account is registered, it will perform corresponding operations without the user\u2019s intervention."),Object(a.b)("li",{parentName:"ul"},"Users can lock more CFX tokens on the Conflux chain at any time to obtain more voting rights."),Object(a.b)("li",{parentName:"ul"},"After the token is locked, it takes about ",Object(a.b)("inlineCode",{parentName:"li"},"10 minutes")," to synchronize the state from the Conflux chain to the PoS chain. The user will get the voting rights after the synchronization.")),Object(a.b)("h3",{id:"withdraw-voting-rights"},"Withdraw voting rights"),Object(a.b)("p",null,"The PoS account can withdraw the voting rights and unlock CFX."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Users need to use the bound PoW account to send transactions on the Conflux chain to apply for unlocking tokens (referred to as \u2018retirement\u2019 in the code). Users can unlock any number of locked tokens."),Object(a.b)("li",{parentName:"ul"},"Users can apply for unlocking at any time. Once the unlock is requested, the corresponding voting rights will become invalid immediately. However, the tokens will be unlocked only when the following conditions are met: ",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"The tokens have been locked for at least 14 days."),Object(a.b)("li",{parentName:"ol"},"The request for unlocking has passed for 7 days"))),Object(a.b)("li",{parentName:"ul"},"If there are multiple transactions locking tokens, they will be unlocked in chronological order until the required unlocking quantity is met.")),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"Suppose that user A locks 2000 CFX on Jan 1st, 3rd, and 5th, respectively, and applies to unlock 3000 CFX on Jan 9th."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The 2000 CFX locked on Jan 1st will unlock first."),Object(a.b)("li",{parentName:"ul"},"14-day requirement for locking: Jan 1st + 14 days = Jan 15th."),Object(a.b)("li",{parentName:"ul"},"7-day requirement after unlocking request: Jan 9th + 7 days = Jan 16th."),Object(a.b)("li",{parentName:"ul"},"Therefore, there will be 2000 CFX unlocked on Jan 16th."),Object(a.b)("li",{parentName:"ul"},"After that, 1000 CFX on Jan 3rd will unlock."),Object(a.b)("li",{parentName:"ul"},"14-day requirement for locking: Jan 3rd + 14 days = Jan 17th."),Object(a.b)("li",{parentName:"ul"},"7-day requirement after unlocking request: Jan 9th + 7 days = Jan 16th."),Object(a.b)("li",{parentName:"ul"},"Therefore, there will be 1000 CFX unlocked on Jan 17th, which will satisfy the requested unlocking amount, 3000.")),Object(a.b)("p",null,"At the end, the user is left with 1000 CFX locked on Jan 3rd and 2000 CFX locked on Jan 5th."),Object(a.b)("h2",{id:"the-work-of-pos-consensus"},"The Work of PoS Consensus"),Object(a.b)("p",null,"The following content is about what the PoS node does automatically, for your information."),Object(a.b)("h3",{id:"candidate-committee"},"Candidate committee"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The PoS account will join the election of a committee of up to ",Object(a.b)("inlineCode",{parentName:"li"},"300")," seats through VRF."),Object(a.b)("li",{parentName:"ul"},"The committee consists of 6 groups of members, each with 50 seats."),Object(a.b)("li",{parentName:"ul"},"Every hour, one of the 6 groups that served the longest time will retire, and a new group succeeds."),Object(a.b)("li",{parentName:"ul"},"The election starts 1.5 hours in advance and ends half an hour in advance."),Object(a.b)("li",{parentName:"ul"},"The vote of each PoS account is regarded as an independent candidate at the time of election. If a PoS account has 10 votes, it will be considered as 10 different candidates participating in the election. If 2 votes of this account have been elected, it will occupy 2 seats in this committee, and the remaining 8 votes can participate in the next election."),Object(a.b)("li",{parentName:"ul"},"The PoS account submits the result of the VRF during the election period. The hash value is calculated based on the result, and the 50 votes with the smallest hash value will be selected.")),Object(a.b)("p",null,"For instance, if the VRF result is x, and the PoS account has 5 votes, then the hash value is hash(x, 0) ~ hash(x, 4)."),Object(a.b)("h3",{id:"as-a-member"},"As a member"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The members of the committee will participate in the PoS consensus and vote on the pivot block of the Conflux chain.")),Object(a.b)("h3",{id:"incentive-plan"},"Incentive Plan"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"The existing staking interest for Conflux will be cancelled.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"After the PoS account participates in the election or becomes a committee member, points will be awarded based on different actions it takes. The total point is 6,000,000."),Object(a.b)("li",{parentName:"ul"},"The points are settled when the committee changes (every 60 blocks). The interest generated by the Conflux chain during this period will be divided into 6,000,000 shares evenly. The interest will be distributed to the PoW accounts that are bound to the PoS accounts according to the points they have."),Object(a.b)("li",{parentName:"ul"},"The points produced by a committee may be less than 6,000,000. The interest that is not distributed will be burned.")),Object(a.b)("h3",{id:"points-composition"},"Points composition"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The 10000 votes that participate in the election and have the smallest hash value get 120 points each, forming a total of 1.2M points."),Object(a.b)("li",{parentName:"ul"},"15,000 points will be awarded to PoS accounts per elected vote. There will be a total of 4.5M points for 300 committee votes."),Object(a.b)("li",{parentName:"ul"},"Becoming the leader of a PoS block will be awarded 3,000 points. There are 60 blocks for a total of 180,000 points."),Object(a.b)("li",{parentName:"ul"},"Each PoS block requires 201 out of 300 signatures, but the leader can pack more than 200 signatures. Starting with the 200th signature, each additional signature will receive 20 points up to 2,000 points. There are 60 blocks for a maximum of 120,000 points.")),Object(a.b)("h3",{id:"accrued-interest"},"Accrued interest"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Since the amount of staking and the total issuance of CFX are changing, the interest generated by each Conflux chain block is also changing. The interest generated by each block on the Conflux chain is:  sqrt(total staking amount / total CFX circulating) * 4% / number of blocks per year."),Object(a.b)("li",{parentName:"ul"},"No interest will be accrued if the PoS committee has not been changed after 7,200 consecutive blocks on the Conflux chain. Interest accruing will resume only after the current interest is distributed. This is to prevent PoS nodes from deliberately slowing down the consensus to obtain more interest.")),Object(a.b)("h2",{id:"risk-reminder"},"Risk Reminder"),Object(a.b)("h3",{id:"principal-loss"},"Principal Loss"),Object(a.b)("p",null,"If a PoS account signs two different PoS blocks with the same height, its CFX tokens will be locked permanently. This situation may occur when:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The account attacks the consensus protocol by modifying the Conflux node;"),Object(a.b)("li",{parentName:"ul"},"Using the same PoS account on multiple Conflux nodes. (This will cause the same account to perform conflicting operations, which is considered as an attack to the consensus protocol.)"),Object(a.b)("li",{parentName:"ul"},"Losing PoS private key files.")),Object(a.b)("h3",{id:"liquidity-risk"},"Liquidity Risk"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"All the locked votes will unlock automatically if a candidate is elected to join the committee but does not participate in signing between two elections. All newly locked votes will unlock automatically in the next ",Object(a.b)("inlineCode",{parentName:"li"},"7")," days as well.")),Object(a.b)("h3",{id:"revenue-loss"},"Revenue Loss"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If the node bound to the PoS account is not launched successfully, there may be no gains.")))}u.isMDXComponent=!0}}]);
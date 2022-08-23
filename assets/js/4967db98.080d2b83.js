(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),i=(n(0),n(192)),r={id:"why_tx_is_pending",title:"Why Transaction is Pending?",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/why-tx-pending.md",keywords:["transaction"]},s={unversionedId:"sending-tx/en/why_tx_is_pending",id:"sending-tx/en/why_tx_is_pending",isDocsHomePage:!1,title:"Why Transaction is Pending?",description:"Because today\u2019s blockchain systems may have problems such as low throughput and high entry barriers, it is inevitable that some transactions will not be packaged when sent through the blockchain. Take Conflux as an example, the Conflux network normally produces two blocks per second. After a transaction is successfully sent, it should be packaged and executed within 20 seconds depending on the network congestion level. If the transaction is not packaged for a long time, it\u2019s very likely that something went wrong, and requires the sender to manually intervene.",source:"@site/docs/sending-tx/en/why-tx-pending.md",sourceDirName:"sending-tx/en",slug:"/sending-tx/en/why_tx_is_pending",permalink:"/sending-tx/en/why_tx_is_pending",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/why-tx-pending.md",version:"current",frontMatter:{id:"why_tx_is_pending",title:"Why Transaction is Pending?",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/why-tx-pending.md",keywords:["transaction"]},sidebar:"docs",previous:{title:"Transaction Stages",permalink:"/sending-tx/en/transaction_stage"},next:{title:"Sending TX Common Error",permalink:"/sending-tx/en/transaction_send_common_error"}},c=[{value:"How to determine the reason for a pending transaction",id:"how-to-determine-the-reason-for-a-pending-transaction",children:[{value:"Wrong nonce",id:"wrong-nonce",children:[]},{value:"Insufficient balance",id:"insufficient-balance",children:[]},{value:"Ready to pack",id:"ready-to-pack",children:[]}]},{value:"How to set gasPrice correctly",id:"how-to-set-gasprice-correctly",children:[]}],l={toc:c};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Because today\u2019s blockchain systems may have problems such as low throughput and high entry barriers, it is inevitable that some transactions will not be packaged when sent through the blockchain. Take Conflux as an example, the Conflux network normally produces two blocks per second. After a transaction ",Object(i.b)("inlineCode",{parentName:"p"},"is successfully sent"),", it should be packaged and executed within ",Object(i.b)("inlineCode",{parentName:"p"},"20 seconds")," depending on the network congestion level. If the transaction is not packaged for a long time, it\u2019s very likely that something went wrong, and requires the sender to manually intervene."),Object(i.b)("p",null,Object(i.b)("img",{src:n(283).default})),Object(i.b)("h2",{id:"how-to-determine-the-reason-for-a-pending-transaction"},"How to determine the reason for a pending transaction"),Object(i.b)("p",null,"If the pending transaction is successfully inserted into the transaction pool of the node used by Scan, the transaction can be searched by hash on Scan, and the status of the transaction can be seen as ",Object(i.b)("inlineCode",{parentName:"p"},"Pending")," on the transaction details page. "),Object(i.b)("p",null,Object(i.b)("img",{src:n(284).default})),Object(i.b)("p",null," At this time, we can go to the ",Object(i.b)("inlineCode",{parentName:"p"},"account details page")," of the transaction sender, and view the pending transactions of the user through the ",Object(i.b)("inlineCode",{parentName:"p"},"View Pending Txns")," tab on the account page."),Object(i.b)("p",null,Object(i.b)("img",{src:n(285).default})),Object(i.b)("p",null,"In this tab, you can see the total number of pending transactions of this user and the earliest pending transactions (up to 10). The most important thing is that you can also see the pending reasons for the first pending transaction. There are three possible reasons:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Wrong nonce"),Object(i.b)("li",{parentName:"ul"},"Insufficient balance"),Object(i.b)("li",{parentName:"ul"},"Ready to pack")),Object(i.b)("p",null,Object(i.b)("img",{src:n(286).default})),Object(i.b)("p",null,"This page uses the RPC method ",Object(i.b)("a",{parentName:"p",href:"http://developer.confluxnetwork.org/conflux-doc/docs/json_rpc/#cfx_getaccountpendingtransactions"},Object(i.b)("inlineCode",{parentName:"a"},"cfx_getAccountPendingTransactions"))," to obtain the current pending transaction information of an account."),Object(i.b)("h3",{id:"wrong-nonce"},"Wrong nonce"),Object(i.b)("p",null,"This kind of error means that the sent transaction used the wrong nonce. Normally, the transaction needs to be executed one by one in the order of nonce. If there are transactions with a smaller nonce pending in the queue, this transaction will wait until all previous transactions are successfully executed."),Object(i.b)("p",null,"In this case, we need to resend the transaction with the correct nonce. It should be noted that the pending transaction will be automatically executed after all previous transactions are executed (and the balance is sufficient)."),Object(i.b)("h3",{id:"insufficient-balance"},"Insufficient balance"),Object(i.b)("p",null,"On the Conflux network, if the sender of a transaction does not have enough balance to pay the amount of a transaction + handling fee, the transaction can also be successfully sent to the transaction pool, but it will be in the pending state and will not be packaged for execution. In this case, you only need to transfer enough CFX to the account."),Object(i.b)("h3",{id:"ready-to-pack"},"Ready to pack"),Object(i.b)("p",null,"This situation is quite special, which means that the transaction itself has reached the conditions that can be packaged, but because the entire network is relatively congested or for other reasons, it has not been packaged."),Object(i.b)("p",null,"If the transaction is in this state for a long time, the gasPrice of the transaction can be increased appropriately to resend the transaction, which can improve the speed to package and execute a transaction."),Object(i.b)("h2",{id:"how-to-set-gasprice-correctly"},"How to set gasPrice correctly"),Object(i.b)("p",null,"The speed to package and execute a transaction is mainly affected by the gasPrice of the transaction. The higher the gasPrice, the faster it is packaged by miners, so it is very important to set the gasPrice correctly."),Object(i.b)("p",null,"You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_gasPrice")," RPC method of fullnode to get a suggested gasPrice value. This method will give a recommended value based on the gas usage of a certain number of the latest blocks and the gasPrice of the transactions in it."),Object(i.b)("p",null,"The current (2021-12-21) network recommended gasPrice is ",Object(i.b)("inlineCode",{parentName:"p"},"1M to 1G")," drip."))}d.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,b=u["".concat(r,".").concat(h)]||u[h]||p[h]||i;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},283:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tx-pending-b1f2e9964d8aa9c0d65c697a7db0f236.png"},284:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/scan-pending-detail-2e688fd1d0d2ab438274b226aefc545b.png"},285:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/scan-pending-entry-e49e27948df9341d61ad8a37d684b048.jpeg"},286:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/scan-pending-tx-list-44522efa4034f309163b830b27a9e345.jpeg"}}]);
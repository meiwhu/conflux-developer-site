(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),i=(n(0),n(189)),r={id:"transaction_faqs",title:"Transaction FAQs",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/tx-faq.md",keywords:["transaction"]},s={unversionedId:"sending-tx/en/transaction_faqs",id:"sending-tx/en/transaction_faqs",isDocsHomePage:!1,title:"Transaction FAQs",description:"How to send a transaction?",source:"@site/docs/sending-tx/en/tx-faqs.md",sourceDirName:"sending-tx/en",slug:"/sending-tx/en/transaction_faqs",permalink:"/sending-tx/en/transaction_faqs",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/tx-faq.md",version:"current",frontMatter:{id:"transaction_faqs",title:"Transaction FAQs",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/tx-faq.md",keywords:["transaction"]},sidebar:"docs",previous:{title:"Sending TX Common Error",permalink:"/sending-tx/en/transaction_send_common_error"},next:{title:"Introduction to Smart Contracts",permalink:"/contract/en/contract_introduction"}},c=[{value:"How to send a transaction?",id:"how-to-send-a-transaction",children:[]},{value:"What are the gas and storage fees when sending a transaction?",id:"what-are-the-gas-and-storage-fees-when-sending-a-transaction",children:[]},{value:"What information (parameters) need to be specified when using the SDK to send transactions\uff1f",id:"what-information-parameters-need-to-be-specified-when-using-the-sdk-to-send-transactions\uff1f",children:[]},{value:"In addition to <code>from</code>, <code>to</code>, <code>value</code>, what information does a TX contain?",id:"in-addition-to-from-to-value-what-information-does-a-tx-contain",children:[]},{value:"How to get the correct nonce?",id:"how-to-get-the-correct-nonce",children:[]},{value:"When will the nonce increase by 1? Will the nonce increase by 1 if the transaction fails? Why has the nonce not changed when the transaction has been sent?",id:"when-will-the-nonce-increase-by-1-will-the-nonce-increase-by-1-if-the-transaction-fails-why-has-the-nonce-not-changed-when-the-transaction-has-been-sent",children:[]},{value:"How to calculate the gas fee actually used in the transaction?",id:"how-to-calculate-the-gas-fee-actually-used-in-the-transaction",children:[]},{value:"How to release the storage deposit?",id:"how-to-release-the-storage-deposit",children:[]},{value:"Why has the balance not changed after interacting with a contract and the gas fee is paid for this transaction?",id:"why-has-the-balance-not-changed-after-interacting-with-a-contract-and-the-gas-fee-is-paid-for-this-transaction",children:[]},{value:"If you want to send transactions in batches, how to manage nonce?",id:"if-you-want-to-send-transactions-in-batches-how-to-manage-nonce",children:[]},{value:"How to know the amount of gas and storage used by a transaction?",id:"how-to-know-the-amount-of-gas-and-storage-used-by-a-transaction",children:[]},{value:"How do I know that a transaction has been successfully executed?",id:"how-do-i-know-that-a-transaction-has-been-successfully-executed",children:[]},{value:"How to determine whether a transaction is safe and confirmed?",id:"how-to-determine-whether-a-transaction-is-safe-and-confirmed",children:[]},{value:"What is a receipt, and what information does it contain?",id:"what-is-a-receipt-and-what-information-does-it-contain",children:[]},{value:"How does the status of the transaction change?",id:"how-does-the-status-of-the-transaction-change",children:[]},{value:"Why does a transaction fail?",id:"why-does-a-transaction-fail",children:[]},{value:"Why does a transaction keep on waiting to be packaged?",id:"why-does-a-transaction-keep-on-waiting-to-be-packaged",children:[]},{value:"Why would a transaction execution fail?",id:"why-would-a-transaction-execution-fail",children:[]}],h={toc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"how-to-send-a-transaction"},"How to send a transaction?"),Object(i.b)("p",null,"The easiest way to send a transaction is to use a wallet such as Conflux Portal, and click \u201csend\u201d to directly set the amount. If you are a developer, you can use the Conflux SDK (JS, Java, Go) to construct the transaction yourself, and then send it to the chain via the node RPC."),Object(i.b)("h3",{id:"what-are-the-gas-and-storage-fees-when-sending-a-transaction"},"What are the gas and storage fees when sending a transaction?"),Object(i.b)("p",null,"The gas fee is a fee required for transaction execution. Miners need to charge a certain amount of fee for packaging and executing the transaction. The way to calculate the gas fee is gasFee = gasPrice * gasUsed.\nAdditionally, the execution of the transaction may occupy new storage space. Even though you don't need to pay for the occupation of this space, a certain amount of CFX needs to be staked for the use of this storage. As the storage is released, the staked CFX will be returned.\nThe storage fee refers to the amount of staked CFX for the storage used, and 1 CFX is required per 1024 bytes used."),Object(i.b)("h3",{id:"what-information-parameters-need-to-be-specified-when-using-the-sdk-to-send-transactions\uff1f"},"What information (parameters) need to be specified when using the SDK to send transactions\uff1f"),Object(i.b)("p",null,"If you make simple CFX transfers using JS-SDK, you only need to specify ",Object(i.b)("inlineCode",{parentName:"p"},"from")," (transfer from which account), ",Object(i.b)("inlineCode",{parentName:"p"},"to")," (send to which account), ",Object(i.b)("inlineCode",{parentName:"p"},"value")," (quantity to send, unit: Drip)."),Object(i.b)("h3",{id:"in-addition-to-from-to-value-what-information-does-a-tx-contain"},"In addition to ",Object(i.b)("inlineCode",{parentName:"h3"},"from"),", ",Object(i.b)("inlineCode",{parentName:"h3"},"to"),", ",Object(i.b)("inlineCode",{parentName:"h3"},"value"),", what information does a TX contain?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from"),": the address of the transaction sender. It cannot be empty, and can only be an externally owned account, not a smart contract\u2019s address."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"to"),": the recipient of the transaction, which can be empty. If it is empty, the information in ",Object(i.b)("inlineCode",{parentName:"li"},"data")," will be used to create a smart contract. The address of the newly created contract can be found in the transaction receipt."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"value"),": transaction amount (unit: Drip)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"nonce"),": the serial number of the transaction execution. Usually, the counting of the number starts from 0 and increases by 1 when every transaction is sent. The execution of the transaction will also be processed in an increasing order without skipping. You can get the next nonce of an address using ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getNextNonce"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gas"),": the upper limit of the amount of gas fee that can be consumed for transaction execution."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gasPrice"),": the price of the transaction gas (unit: Drip)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"storageLimit"),": the maximum storage limit that can be paid for transaction execution."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"chainId"),": the ID of the chain. It\u2019s used to distinguish transactions between different chains. Mainnet\u2019s is 1029, and testnet\u2019s is 1."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"epochHeight"),": it\u2019s used to specify the epoch range to execute the transaction (epochHeight, epochHeight + 10000). Transactions beyond this range will not be packaged."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data"),": transaction data, which can be remarks, creation ByteCode of a contract, or interaction data of a contract.")),Object(i.b)("h3",{id:"how-to-get-the-correct-nonce"},"How to get the correct nonce?"),Object(i.b)("p",null,"\\\nThrough the  ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getNextNonce")," RPC, the next available nonce of an account can be obtained. The used nonce cannot be used again. The transaction will not be packaged if using a nonce with a value greater than the current nonce."),Object(i.b)("h3",{id:"when-will-the-nonce-increase-by-1-will-the-nonce-increase-by-1-if-the-transaction-fails-why-has-the-nonce-not-changed-when-the-transaction-has-been-sent"},"When will the nonce increase by 1? Will the nonce increase by 1 if the transaction fails? Why has the nonce not changed when the transaction has been sent?"),Object(i.b)("p",null,"The nonce increases once the transaction is executed, whether it succeeds or fails.\nAfter the transaction is sent, the nonce queried through ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getNextNonce")," stays unchanged because the transaction has not been executed. At this time, the transaction may be in the transaction pool and has not been packed, or it may have just been packed and be in the ",Object(i.b)("inlineCode",{parentName:"p"},"defer")," state, waiting to be executed."),Object(i.b)("h3",{id:"how-to-calculate-the-gas-fee-actually-used-in-the-transaction"},"How to calculate the gas fee actually used in the transaction?"),Object(i.b)("p",null,"On ConfluxScan, users can view gas usage, gas price, gas fee, and other relevant information of a transaction, which is obtained through ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getTransactionReceipt"),": ",Object(i.b)("inlineCode",{parentName:"p"},"gasFee = gasCharged * gasPrice"),", but the gasCharged is not necessarily equal to gasUsed.\nThere is a rule in Conflux: ",Object(i.b)("inlineCode",{parentName:"p"},"gas")," is used to set the upper limit of gas that can be used in a transaction. It must be greater than the actual gas used value (gasUsed).\nFor the excessive part, at most, only 1/4 will be refunded: if the excessive part is less than 1/4 of the gasLimit, all will be refunded, but if it is greater than 1/4, only 1/4 will be returned. Hence, try to give an accurate gas value when sending a transaction."),Object(i.b)("h3",{id:"how-to-release-the-storage-deposit"},"How to release the storage deposit?"),Object(i.b)("p",null,"When the storage is released, the deposit is automatically refunded. For example, if the balance of the ERC20 token changes from non-zero to 0, the deposit will be refunded. If a contract is destroyed, the deposit generated by the interaction between all addresses and the contract will be refunded as well."),Object(i.b)("h3",{id:"why-has-the-balance-not-changed-after-interacting-with-a-contract-and-the-gas-fee-is-paid-for-this-transaction"},"Why has the balance not changed after interacting with a contract and the gas fee is paid for this transaction?"),Object(i.b)("p",null,"The Conflux network has a sponsor mechanism. If a contract has a sponsor, the gas and storage fees for this contract\u2019s interactions will be paid by the sponsor."),Object(i.b)("h3",{id:"if-you-want-to-send-transactions-in-batches-how-to-manage-nonce"},"If you want to send transactions in batches, how to manage nonce?"),Object(i.b)("p",null,"When sending transactions in batches, you need to manually manage the nonce. Every time you send a transaction, the nonce is manually incremented by one.\nIn this case, for a failed transaction of which nonce is not used, you need to manually adjust the transaction parameters to resend it.\nTherefore, you need to keep all transaction hashes and monitor the status of the transactions when sending in batches. "),Object(i.b)("h3",{id:"how-to-know-the-amount-of-gas-and-storage-used-by-a-transaction"},"How to know the amount of gas and storage used by a transaction?"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," RPC can be used to estimate the amount of gas and storage that a transaction needs to use, but the estimation is not 100% accurate.\nHence, the returned gas can be adjusted manually, such as multiplying by ",Object(i.b)("inlineCode",{parentName:"p"},"1.3"),"."),Object(i.b)("h3",{id:"how-do-i-know-that-a-transaction-has-been-successfully-executed"},"How do I know that a transaction has been successfully executed?"),Object(i.b)("p",null,"Check the ",Object(i.b)("inlineCode",{parentName:"p"},"status")," field of the transaction or the ",Object(i.b)("inlineCode",{parentName:"p"},"outcomeStatus")," field of the receipt to determine whether the transaction is successful, 0 means success and 1 means failure."),Object(i.b)("h3",{id:"how-to-determine-whether-a-transaction-is-safe-and-confirmed"},"How to determine whether a transaction is safe and confirmed?"),Object(i.b)("p",null,"If the epochNumber of the epoch that the transaction belongs to is less than the currently confirmed epochNumber, it is considered safe.\nYou can also get the confirmationRisk of the block that the transaction belongs to through the ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getConfirmationRiskByHash")," RPC.\nIf the obtained value is less than 1e-8, it is considered safe."),Object(i.b)("h3",{id:"what-is-a-receipt-and-what-information-does-it-contain"},"What is a receipt, and what information does it contain?"),Object(i.b)("p",null,"A receipt is the receipt information of a transaction. Through a receipt, you can know some results of the transaction execution, such as whether the transaction is successful, whether a contract is created, gas fee usage, eventLog generated by a transaction execution, etc.\n",Object(i.b)("a",{parentName:"p",href:"http://developer.confluxnetwork.org/docs/conflux-doc/docs/json_rpc/#cfx_gettransactionreceipt"},"Reference")),Object(i.b)("h3",{id:"how-does-the-status-of-the-transaction-change"},"How does the status of the transaction change?"),Object(i.b)("p",null,"After the transaction is submitted through RPC, it will go through several states: Waiting for packaging -> packaging -> execution -> confirmation.\n",Object(i.b)("a",{parentName:"p",href:"http://developer.confluxnetwork.org/docs/conflux-doc/docs/send_transaction/#track-my-transaction"},"Reference:")),Object(i.b)("h3",{id:"why-does-a-transaction-fail"},"Why does a transaction fail?"),Object(i.b)("p",null,"There are several reasons for a failure of a transaction:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Reuse an old nonce."),Object(i.b)("li",{parentName:"ol"},"Used a new nonce, but there is a transaction with the same nonce in the transaction pool. ")),Object(i.b)("h3",{id:"why-does-a-transaction-keep-on-waiting-to-be-packaged"},"Why does a transaction keep on waiting to be packaged?"),Object(i.b)("p",null,"If a transaction has not been packaged for a long time, it\u2019s likely that either the nonce is set incorrectly or the balance is not sufficient."),Object(i.b)("h3",{id:"why-would-a-transaction-execution-fail"},"Why would a transaction execution fail?"),Object(i.b)("p",null,"Transaction execution failures are roughly divided into the following situations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Vm reverted, Reason provided by the contract: \u2019xxxxx\u2019: the contract execution failed, and the contract returned detailed information"),Object(i.b)("li",{parentName:"ul"},"VmError(ExceedStorageLimit): the specified storage limit is not enough"),Object(i.b)("li",{parentName:"ul"},"NotEnoughCash {required: 22625000000010862646, got: 22062499999972687418, actual_gas_cost: 10862646, max_storage_limit_cost: 22625000000000000000}: insufficient balance"),Object(i.b)("li",{parentName:"ul"},"VmError(OutOfGas): the specified gas fee is not enough"),Object(i.b)("li",{parentName:"ul"},"VmError(BadInstruction {instruction: 238 }): contract deployment failed"),Object(i.b)("li",{parentName:"ul"},"Vm reverted: the contract execution failed, but the contract did not return detailed information")))}d.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=o.a.createContext({}),d=function(e){var t=o.a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return o.a.createElement(h.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),l=d(n),b=a,f=l["".concat(r,".").concat(b)]||l[b]||u[b]||i;return n?o.a.createElement(f,s(s({ref:t},h),{},{components:n})):o.a.createElement(f,s({ref:t},h))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var h=2;h<i;h++)r[h]=n[h];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
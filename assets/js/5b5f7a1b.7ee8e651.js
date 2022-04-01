(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),o=(n(0),n(189)),r={id:"conflux_basics",title:"Basics",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/basics.md",keywords:["conflux","basics"]},c={unversionedId:"introduction/en/conflux_basics",id:"introduction/en/conflux_basics",isDocsHomePage:!1,title:"Basics",description:"In an overview, the Conflux world-state consists of a list of accounts and the associated account states, and the global state is updated via transactions. The Conflux blockchain stores all processed transactions in blocks, together with necessary information in block headers which enables a total ordering of all blocks. Below are some concepts you should know about.",source:"@site/docs/introduction/en/basics.md",sourceDirName:"introduction/en",slug:"/introduction/en/conflux_basics",permalink:"/introduction/en/conflux_basics",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/basics.md",version:"current",frontMatter:{id:"conflux_basics",title:"Basics",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/basics.md",keywords:["conflux","basics"]},sidebar:"docs",previous:{title:"Overview",permalink:"/"},next:{title:"Internal Contract",permalink:"/conflux-rust/internal_contract/internal_contract"}},s=[{value:"CFX",id:"cfx",children:[]},{value:"chainId &amp; networkId",id:"chainid--networkid",children:[]},{value:"Address",id:"address",children:[]},{value:"Account",id:"account",children:[]},{value:"Transactions",id:"transactions",children:[{value:"Transaction Types",id:"transaction-types",children:[]},{value:"Transaction fields:",id:"transaction-fields",children:[]},{value:"Lifecycle of a transaction",id:"lifecycle-of-a-transaction",children:[]}]}],l={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In an overview, the Conflux world-state consists of a list of accounts and the associated account states, and the global state is updated via transactions. The Conflux blockchain stores all processed transactions in blocks, together with necessary information in block headers which enables a total ordering of all blocks. Below are some concepts you should know about."),Object(o.b)("h2",{id:"cfx"},"CFX"),Object(o.b)("p",null,"To incentivize the maintenance of the Conflux network and charge users for consumption of resources, Conflux has a native currency called the Conflux coin, simply denoted by CFX for short. The smallest subdenomination is denoted by Drip, in which all values processed in Conflux are integers. One Conflux is defined as 10^18 Drip. Frequently used subdenominations of Conflux are listed below:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Multiplier (in Drip)"),Object(o.b)("th",{parentName:"tr",align:"center"},"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"10^0"),Object(o.b)("td",{parentName:"tr",align:"center"},"Drip")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"10^9"),Object(o.b)("td",{parentName:"tr",align:"center"},"GDrip")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"10^12"),Object(o.b)("td",{parentName:"tr",align:"center"},"uCFX")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"10^18"),Object(o.b)("td",{parentName:"tr",align:"center"},"Conflux(CFX)")))),Object(o.b)("p",null,"As a native token of the Conflux network, CFX plays a very important role in the stability of the system."),Object(o.b)("p",null,"First of all, CFX is used to pay transaction fees and to store collateral. Transactions are packaged and executed by miners. In order to incentivize miners to keep participating in the bookkeeping and provide sufficient security for the network, each transaction is charged a (gas) fee calculated as gasPrice ",Object(o.b)("em",{parentName:"p"}," max(gasLimit ")," 3/4, gasUsed), which is paid by CFX. In addition, if the execution of a transaction takes up new storage space, a portion of the CFX is pledged for the use of the storage space (the pledged CFX can be released under certain condition)."),Object(o.b)("p",null,"Conflux introduces a ",Object(o.b)("a",{parentName:"p",href:"https://confluxnetwork.org/files/Conflux_Protocol_Specification_20201020.pdf"},"staking mechanism (Protocol Specification chapter 8.3)"),". The annualized income of collateralized CFX is around 4%. This mechanism also serves to construct the voting rights of Conflux decentralized governance. "),Object(o.b)("p",null,"For miners who participate in mining, a certain amount of CFX for each block mined. The collateral revenue generated by the collateralized CFX is also paid to the miners to cover the cost of storage. which provides an ",Object(o.b)("a",{parentName:"p",href:"https://confluxnetwork.org/files/Conflux_Protocol_Specification_20201020.pdf"},"incentive (Protocol Specification chapter 10)")," for miners to continue participating in bookkeeping, and thus ensuring security for the network. The block payout bonus consists of three parts:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"a fixed bonus of around 2CFX for the block"),Object(o.b)("li",{parentName:"ol"},"a fee for all transactions in the block"),Object(o.b)("li",{parentName:"ol"},"4% annualized return on all stored collateral ")),Object(o.b)("p",null,"Finally, CFX will be used for the decentralized governance of the Conflux network. Users who meet certain criteria can initiate a vote, and CFX holders can participate in the vote through staking and locking CFX. For further details, please refer to the ",Object(o.b)("a",{parentName:"p",href:"https://confluxnetwork.org/files/Conflux_Economic_Paper_20201230.pdf"},"Economics white paper"),". "),Object(o.b)("p",null,"For more information on the genesis creation, distribution, and release of CFX, please refer to the ",Object(o.b)("a",{parentName:"p",href:"https://confluxnetwork.org/files/Conflux_Economic_Paper_20201230.pdf"},"Economics white paper")," or ",Object(o.b)("a",{parentName:"p",href:"https://medium.com/conflux-network/the-role-of-the-cfx-token-in-the-conflux-network-5a56c2b43bb0"},"The Role of the CFX token in the Conflux Network"),". "),Object(o.b)("h2",{id:"chainid--networkid"},"chainId & networkId"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"chainId")," is a number indicating where a transaction is intended to be executed. It is used to prevent transaction replay attacks.\nThe chainId of Conflux is a constant, currently:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"mainnet: ",Object(o.b)("inlineCode",{parentName:"li"},"1029")),Object(o.b)("li",{parentName:"ul"},"testnet: ",Object(o.b)("inlineCode",{parentName:"li"},"1"))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"networkId")," is used to distinguish between blockchains at the network layer. Currently Conflux mainnet/testnet's ",Object(o.b)("inlineCode",{parentName:"p"},"networkId")," is same as ",Object(o.b)("inlineCode",{parentName:"p"},"chainId"),".\nYou can get both of these from the ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_getStatus")," RPC method."),Object(o.b)("h2",{id:"address"},"Address"),Object(o.b)("p",null,"Each account in Conflux is associated with a pair of public key and the private key (pubkey,prikey), which can be identified by an ",Object(o.b)("inlineCode",{parentName:"p"},"address"),". Addresses are a 160-bit identifier, which is the concatenation of a 4-bit ",Object(o.b)("inlineCode",{parentName:"p"},"type indicator")," and a 156-bit ",Object(o.b)("inlineCode",{parentName:"p"},"digest")," of the associated public key."),Object(o.b)("p",null,"Currently there are three types of ",Object(o.b)("inlineCode",{parentName:"p"},"type indicator"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[0001]"," for normal accounts (a.k.a. non-contract accounts)"),Object(o.b)("li",{parentName:"ul"},"[1000]"," for (Solidity) contracts"),Object(o.b)("li",{parentName:"ul"},"[0000]"," for internal contracts (a.k.a. \u201cprecompiled contracts\u201d)")),Object(o.b)("p",null,"Hex-encoded, the type indicator becomes::"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"1")," normal address"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"8")," contract address"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"0")," internal contract address")),Object(o.b)("p",null,"Addresses can be expressed as hex-encoded strings like this: 0x1292d4955bb47f5153b88ca12c7a9e4048f09839. However, addresses in this format are easy to mix up with addresses on Ethereum and some other blockchains, which might lead to asset loss.\nTo address this issue, Conflux introduced a new base32-encoded address format in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md"},"CIP37"),". For instance, the address above can be converted to the following base32 address: cfx:aakkfzezns4h8ymx1cgmcnd4x3aev6e2hexz250ym5. The new format contains a network prefix which makes it easy to distinguish Conflux addresses from other networks."),Object(o.b)("p",null,"It is important to understand that both addresses correspond to the same 160-bit identifier and thus to the same account. Each hex-address can be converted to a corresponding base32-address (and vice versa).\nCIP37 address is supported by ",Object(o.b)("inlineCode",{parentName:"p"},"Conflux-rust")," from version ",Object(o.b)("inlineCode",{parentName:"p"},"v1.1.1"),"."),Object(o.b)("p",null,"Note: mainnet and testnet addresses use different address prefixes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"mainnet: ",Object(o.b)("inlineCode",{parentName:"li"},"cfx")),Object(o.b)("li",{parentName:"ul"},"testnet: ",Object(o.b)("inlineCode",{parentName:"li"},"cfxtest"))),Object(o.b)("h2",{id:"account"},"Account"),Object(o.b)("p",null,"The Conflux global state is described in an account model, with the basic storage component called an account. Every actor, which is either a person or an entity that is able to interact with the Conflux world, has its necessary information stored in an account as a key/value pair (address, state) of address and corresponding states."),Object(o.b)("p",null,"The account state consists of five components (",Object(o.b)("inlineCode",{parentName:"p"},"basic"),", ",Object(o.b)("inlineCode",{parentName:"p"},"code"),", ",Object(o.b)("inlineCode",{parentName:"p"},"storage"),", ",Object(o.b)("inlineCode",{parentName:"p"},"deposit"),", ",Object(o.b)("inlineCode",{parentName:"p"},"vote"),"). The basic state is very important, it consists of the following fields:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nonce"),": A scalar counter recording the number of previous activities initiated by this account. For example, the number of transactions send from account's address, or the number of contract-creations if the account represents a smart contract."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"balance"),": A scalar value equal to the number of Drip owned by this account. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"codeHash"),": The hash of the EVM code that gets executed when address receives a message call. Unlike other fields, it\nis immutable once established. The actual code (a series of EVM instructions) is also stored in the global state. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stakingBalance"),": A scalar value equal to the number of Drip staked. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storageCollateral"),": A scalar value equal to the number of Drip used as collateral for storage, which will be returned to the account's balance if the corresponding storage is released. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"accumulatedInterestReturn"),": A scalar value equal to the number of Drip in accumulated interest return. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"admin"),": The address of the administrator"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sponsorInfo"),": The sponsor information contains five components: ",Object(o.b)("inlineCode",{parentName:"li"},"sponsor for gas"),", ",Object(o.b)("inlineCode",{parentName:"li"},"sponsor for collateral"),", ",Object(o.b)("inlineCode",{parentName:"li"},"sponsor gas\nlimit"),", ",Object(o.b)("inlineCode",{parentName:"li"},"sponsor balance for gas")," and ",Object(o.b)("inlineCode",{parentName:"li"},"sponsor balance for collateral"),". ")),Object(o.b)("h2",{id:"transactions"},"Transactions"),Object(o.b)("p",null,"A Conflux transaction is a single instruction composed by an external actor with a Conflux account, and this instruction is cryptographically signed using the sender account's private key. The authentication key, i.e. the sending account\u2019s associated public key, is also included in the transaction for verification."),Object(o.b)("h3",{id:"transaction-types"},"Transaction Types"),Object(o.b)("p",null,"There are two types of transactions depending on the \u201cdestinations\u201d:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"to an account address: these are normal transactions that may transfer value and/or result in message calls, known as\naction transactions;"),Object(o.b)("li",{parentName:"ol"},"to \u201cnowhere\u201d: these transactions are used to create new contracts, known as contract creation transactions.")),Object(o.b)("h3",{id:"transaction-fields"},"Transaction fields:"),Object(o.b)("p",null,"Both types of transactions share the following common fields:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"from"),": An address indicating the transaction sender."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"to"),": An address indicating the transaction receiver."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nonce"),": A scalar value equal to the number of previously sent transactions."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"gasPrice"),": A scalar value indicating the number of Drip to be paid per unit of gas that is consumed as a result of the\nexecution of transaction."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"gas"),": A scalar value indicating the total amount of gas paid for the cost of the execution of transaction. This is paid up-front,\nbefore any actual computation is done, and may not be increased or refunded later. The refundable amount of gas is the minimum of the legitimately remaining gas and a quarter of the ",Object(o.b)("inlineCode",{parentName:"li"},"gas"),". It is\nthe transaction sender\u2019s responsibility to avoid any extravagance caused by an unnecessarily high gasLimit."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"value"),": A scalar value equal to the amount of Drip that the transactions sender wants to transfer to the recipient, i.e. the\naccount specified in transaction or the newly created contract. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storageLimit"),": A scalar value indicating the maximum increment of storage used in the execution of the transaction, measured in\nbytes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"epochHeight"),": A scalar value specifying the range of epochs where transaction can be executed. Such that transaction can only be executed between the epochs of ","[Te \u2212 100000, Te + 100000]","."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"chainId"),": A scalar value indicating the ID of the chain where the transaction is intended to be executed."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"data"),": A byte array specifying the input data of the message call to an existing contract (or the contract code if it is a contract creation transaction). "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"v"),", ",Object(o.b)("inlineCode",{parentName:"li"},"r"),", ",Object(o.b)("inlineCode",{parentName:"li"},"s"),": Corresponding fields of the recoverable ECDSA signature of transaction.")),Object(o.b)("h3",{id:"lifecycle-of-a-transaction"},"Lifecycle of a transaction"),Object(o.b)("p",null,"A transaction is composed by external account, and sent to a node by calling its ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction")," RPC method. After sending, the transaction will go through several different states:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Accepted by the RPC"),": After the provider received the cfx_sendRawTransaction RPC call, it would attempt to do basic verification and ",Object(o.b)("inlineCode",{parentName:"li"},"insert it into the transaction pool"),". If there is an obvious error of the transaction, e.g., RLP decoding error, signature verification error, it will be rejected immediately. Otherwise, it will be inserted into the transaction pool and wait to be mined, and the RPC will return a transaction hash of the transaction."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Wait to be mined"),": A Conflux miner will choose valid transactions from its pool, whose nonce matches the ",Object(o.b)("inlineCode",{parentName:"li"},"expected one")," and the balance is enough to pay the ",Object(o.b)("inlineCode",{parentName:"li"},"value + gas * gasPrice + storage_limit * (10^18/1024)")," that will be included in the new block. If a transaction does not meet these two requirements, then it will get stuck in the transaction tool."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Mined"),": After mining, a tx will not be executed immediately, Conflux has a deferred execution mechanism. Nodes that receive the new block are only guaranteed to execute it 5 epochs later."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Executed (success or failure)"),": Not all executed transactions have succeeded, some have failed. You can check this out by the transaction's ",Object(o.b)("inlineCode",{parentName:"li"},"status")," or transaction receipt's ",Object(o.b)("inlineCode",{parentName:"li"},"outcomeStatus"),". ",Object(o.b)("inlineCode",{parentName:"li"},"0")," means success, ",Object(o.b)("inlineCode",{parentName:"li"},"1")," means failure."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Confirmed"),": If a transaction has been executed successfully, it may still be reverted, possibly due to a pivot chain reorganization. A transaction's status is only finalized once it has been confirmed. You can determine whether a transaction is confirmed by comparing its epoch number to the latest confirmed epoch number.")))}b.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,h=d["".concat(r,".").concat(p)]||d[p]||u[p]||o;return n?i.a.createElement(h,c(c({ref:t},l),{},{components:n})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),c=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var i=c.a.createContext({}),p=function(e){var n=c.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return c.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},s=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=p(t),s=a,m=d["".concat(l,".").concat(s)]||d[s]||u[s]||r;return t?c.a.createElement(m,o(o({ref:n},i),{},{components:t})):c.a.createElement(m,o({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=s;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<r;i++)l[i]=t[i];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},70:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(3),c=t(7),r=(t(0),t(192)),l={id:"contract_introduction",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/contract/zh/introduce.md",keywords:["contract introduction"]},o={unversionedId:"contract/zh/contract_introduction",id:"contract/zh/contract_introduction",isDocsHomePage:!1,title:"\u667a\u80fd\u5408\u7ea6\u4ecb\u7ecd",description:"\u4ec0\u4e48\u662f\u667a\u80fd\u5408\u7ea6",source:"@site/docs/contract/zh/introduce.md",sourceDirName:"contract/zh",slug:"/contract/zh/contract_introduction",permalink:"/contract/zh/contract_introduction",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/contract/zh/introduce.md",version:"current",frontMatter:{id:"contract_introduction",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/contract/zh/introduce.md",keywords:["contract introduction"]}},b=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",children:[]},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",children:[]},{value:"\u8c03\u7528",id:"\u8c03\u7528",children:[]}]},{value:"\u6df1\u5165\u5b66\u4e60",id:"\u6df1\u5165\u5b66\u4e60",children:[]}],i={toc:b};function p(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u4ec0\u4e48\u662f\u667a\u80fd\u5408\u7ea6\n\u667a\u80fd\u5408\u7ea6\u6982\u5ff5\u4e8e1995\u5e74\u7531Nick Szabo\u9996\u6b21\u63d0\u51fa\u3002\u667a\u80fd\u5408\u7ea6\uff08Smart contract \uff09\u662f\u4e00\u79cd\u65e8\u5728\u4ee5\u4fe1\u606f\u5316\u65b9\u5f0f\u4f20\u64ad\u3001\u9a8c\u8bc1\u6216\u6267\u884c\u5408\u540c\u7684\u8ba1\u7b97\u673a\u534f\u8bae\u3002\u667a\u80fd\u5408\u7ea6\u5141\u8bb8\u5728\u6ca1\u6709\u7b2c\u4e09\u65b9\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u53ef\u4fe1\u4ea4\u6613\uff0c\u8fd9\u4e9b\u4ea4\u6613\u53ef\u8ffd\u8e2a\u4e14\u4e0d\u53ef\u9006\u8f6c\u3002\n\u5176\u7684\u76ee\u7684\u662f\u63d0\u4f9b\u4f18\u4e8e\u4f20\u7edf\u5408\u7ea6\u7684\u5b89\u5168\u65b9\u6cd5\uff0c\u5e76\u51cf\u5c11\u4e0e\u5408\u7ea6\u76f8\u5173\u7684\u5176\u4ed6\u4ea4\u6613\u6210\u672c\u3002"),Object(r.b)("p",null,"\u5728Conflux\u94fe\u4e0a\uff0c\u201c\u667a\u80fd\u5408\u7ea6\u201d\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u7a0b\u5e8f\uff0c\u8fd0\u884c\u5728Conflux\u94fe\u4e0a\uff0c\u6bcf\u4e00\u4e2a\u667a\u80fd\u5408\u7ea6\u5b9e\u4f8b\u5c31\u662f\u4e00\u4e2a\u4ee3\u7801\u548c\u6570\u636e\u7684\u96c6\u5408\uff0c\u9a7b\u7559\u5728conflux\u94fe\u4e0a\u4e00\u4e2a\u7279\u5b9a\u7684\u5730\u5740\u4e0a\u3002\u7531\u4e8e\u533a\u5757\u94fe\u4e0a\u7684\u72b6\u6001\u90fd\u662f\u786e\u5b9a\u7684\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u4e3a\u6bcf\u4e2a\u8fd0\u884c\u5b83\u4eec\u7684\u4eba\u4ea7\u751f\u76f8\u540c\u7684\u7ed3\u679c\u3002\u800c\u7531\u4e8e\u667a\u80fd\u5408\u7ea6\u8fd0\u884c\u5728\u533a\u5757\u94fe\u4e0a\uff0c\u533a\u5757\u94fe\u7684\u53bb\u4e2d\u5fc3\u5316\u53ca\u4e0d\u53ef\u7be1\u6539\u7279\u6027\u4fdd\u8bc1\u4e86\u5408\u7ea6\u8fd0\u884c\u7684\u786e\u5b9a\u6027\u53ca\u5b89\u5168\u6027\u3002\u6240\u4ee5\u53ef\u4ee5\u57fa\u4e8e\u667a\u80fd\u5408\u7ea6\u521b\u5efa\u5e7f\u6cdb\u7684\u53bb\u4e2d\u5fc3\u5316\u5e94\u7528\u7a0b\u5e8f(DApps) \uff0c\u5176\u4e2d\u5305\u62ec\u6e38\u620f\u3001\u6570\u5b57\u6536\u85cf\u54c1\u3001\u5728\u7ebf\u6295\u7968\u7cfb\u7edf\u3001\u91d1\u878d\u4ea7\u54c1\u7b49\u3002"),Object(r.b)("p",null,"Conflux\u94fe\u4e0a\u6709\u4e24\u79cd\u8d26\u6237\u7c7b\u578b\uff0c\u666e\u901a\u8d26\u6237\u548c\u667a\u80fd\u5408\u7ea6\u8d26\u6237\uff1b\u667a\u80fd\u5408\u7ea6\u90e8\u7f72\u5b8c\u6210\u540e\u4f1a\u4e3a\u8be5\u5b9e\u4f8b\u521b\u5efa\u4e00\u4e2a\u667a\u80fd\u5408\u7ea6\u8d26\u6237\u3002\u667a\u80fd\u5408\u7ea6\u8d26\u6237\u4e5f\u6709CFX\u4f59\u989d\uff0c\u4e5f\u53ef\u4ee5\u4e0e\u5176\u5b83\u5408\u7ea6\u4ea4\u4e92\u3002\u4f46\u5b83\u4eec\u4e0d\u662f\u7531\u7528\u6237\u63a7\u5236\u7684\uff0c\u800c\u662f\u90e8\u7f72\u5230\u7f51\u7edc\u5e76\u6309\u7167\u7a0b\u5e8f\u8fd0\u884c\u7684\u3002\u7136\u540e\uff0c\u7528\u6237\u5e10\u6237\u53ef\u4ee5\u901a\u8fc7\u63d0\u4ea4\u6267\u884c\u667a\u80fd\u5408\u7ea6\u4e0a\u5b9a\u4e49\u7684\u51fd\u6570\u7684\u4ea4\u6613\u4e0e\u667a\u80fd\u5408\u7ea6\u8fdb\u884c\u4ea4\u4e92\u3002\u667a\u80fd\u5408\u7ea6\u53ef\u4ee5\u50cf\u4f20\u7edf\u7684\u5408\u540c\u4e00\u6837\u5b9a\u4e49\u89c4\u5219\uff0c\u5e76\u901a\u8fc7\u4ee3\u7801\u81ea\u52a8\u6267\u884c\u5b83\u4eec\u3002"),Object(r.b)("p",null,"Nick Szabo \u4f7f\u7528\u4e86\u81ea\u52a8\u552e\u8d27\u673a\u7684\u57fa\u672c\u4f8b\u5b50\u6765\u63cf\u8ff0\u5982\u4f55\u5c06\u73b0\u5b9e\u4e16\u754c\u7684\u5408\u540c\u4e49\u52a1\u7f16\u7a0b\u5230\u8f6f\u4ef6\u548c\u786c\u4ef6\u7cfb\u7edf\u4e2d\u3002\u6bcf\u4e2a\u4eba\u53ea\u8981\u628a\u6b63\u786e\u6570\u91cf\u7684\u786c\u5e01\u653e\u5165\u673a\u5668\uff0c\u5c31\u53ef\u4ee5\u671f\u671b\u5f97\u5230\u4e00\u4e2a\u4ea7\u54c1\u4f5c\u4e3a\u4ea4\u6362\u3002\u540c\u6837\uff0c\u5728 Conflux \u4e0a\uff0c\u667a\u80fd\u5408\u7ea6\u4e5f\u662f\u5728\u6ee1\u8db3\u67d0\u79cd\u7279\u5b9a\u7684\u6761\u4ef6\u5c31\u80fd\u6267\u884c\u6307\u5b9a\u7684\u4efb\u52a1\u5f97\u5230\u7279\u5b9a\u7684\u7ed3\u679c\u3002"),Object(r.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(r.b)("p",null,"\u6211\u4eec\u770b\u4e00\u4e2a\u6700\u7b80\u5355\u81ea\u52a8\u552e\u8d27\u673a\u667a\u80fd\u5408\u7ea6\u5b9e\u73b0"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'pragma solidity ^0.8.0;\n\ncontract VendingMachine {\n\n    // Declare state variables of the contract\n    address public owner;\n    mapping (address => uint) public cupcakeBalances;\n\n    // Declare event for record purchase event\n    event Purchase(address customer, uint amount);\n\n    // When \'VendingMachine\' contract is deployed:\n    // 1. set the deploying address as the owner of the contract\n    // 2. set the deployed smart contract\'s cupcake balance to 100\n    constructor() {\n        owner = msg.sender;\n        cupcakeBalances[address(this)] = 100;\n    }\n\n    // Get user\'s cupcake balance\n    function balanceOf(address user) public view returns(uint) {\n        return cupcakeBalances[user];\n    }\n\n    // Allow the owner to increase the smart contract\'s cupcake balance\n    function refill(uint amount) public {\n        require(msg.sender == owner, "Only the owner can refill.");\n        cupcakeBalances[address(this)] += amount;\n    }\n\n    // Allow anyone to purchase cupcakes\n    function purchase(uint amount) public payable {\n        require(msg.value >= amount * 1 ether, "You must pay at least 1 CFX per cupcake");\n        require(cupcakeBalances[address(this)] >= amount, "Not enough cupcakes in stock to complete this purchase");\n        cupcakeBalances[address(this)] -= amount;\n        cupcakeBalances[msg.sender] += amount;\n        emit Purchase(msg.sender,amount);\n    }\n}\n')),Object(r.b)("p",null,"\u8be5\u5408\u7ea6\u6709\u4e24\u4e2a\u529f\u80fd\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"refill"),"\u65b9\u6cd5\u5b9e\u73b0\u7ba1\u7406\u5458\u8865\u5145\u8d27\u7269\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"purchase"),"\u65b9\u6cd5\u5b9e\u73b0\u987e\u5ba2\u6295\u5e01\u4e70\u8d27\uff1b\u5c31\u50cf\u81ea\u52a8\u552e\u8d27\u673a\u6d88\u9664\u4e86\u5bf9\u552e\u8d27\u5458\u7684\u9700\u6c42\u4e00\u6837\uff0c\u667a\u80fd\u5408\u7ea6\u53ef\u4ee5\u53d6\u4ee3\u8bb8\u591a\u884c\u4e1a\u7684\u4e2d\u4ecb\u673a\u6784\u3002"),Object(r.b)("p",null,"\u667a\u80fd\u5408\u7ea6\u5c31\u662f\u4e00\u7ec4\u4ee3\u7801\uff08\u5408\u7ea6\u51fd\u6570) \u548c\u6570\u636e\uff08\u5408\u7ea6\u72b6\u6001\u53d8\u91cf\uff09, \u5982\u8bed\u53e5",Object(r.b)("inlineCode",{parentName:"p"},"mapping (address => uint) public cupcakeBalances;"),"\u662f\u58f0\u660e\u4e00\u4e2a\u540d\u79f0\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"cupcakeBalances"),", \u7c7b\u578b\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"mapping (address => uint)"),"\u7684\u72b6\u6001\u53d8\u91cf\uff0c\u4f60\u53ef\u4ee5\u8ba4\u4e3a\u5b83\u662f\u6570\u636e\u5e93\u91cc\u7684\u4e00\u4e2a\u8868\u3002\u800c\u5408\u7ea6\u51fd\u6570",Object(r.b)("inlineCode",{parentName:"p"},"refill"),"\u548c",Object(r.b)("inlineCode",{parentName:"p"},"purchase"),"\u7684\u4f5c\u7528\u5c31\u662f\u8bfb\u53d6\u6216\u4fee\u6539\u8be5\u6570\u636e\u5e93\u8868\u4e2d\u6570\u636e\u7684\u72b6\u6001\u3002"),Object(r.b)("p",null,"\u8be5\u5408\u7ea6\u7531",Object(r.b)("inlineCode",{parentName:"p"},"solidity"),"\u8bed\u8a00\u5b9e\u73b0\uff0c\u8bed\u6cd5\u4e0e",Object(r.b)("inlineCode",{parentName:"p"},"javascript"),"\u76f8\u4f3c\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pragma solidity ^0.8.0;"),"\u8868\u660e\u8be5\u5408\u7ea6\u9700\u8981\u7528",Object(r.b)("inlineCode",{parentName:"li"},">=0.8.0<0.9.0"),"\u7684\u7f16\u8bd1\u5668\u7f16\u8bd1\uff1b"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"contract VendingMachine"),"\u6307\u5b9a\u5408\u7ea6\u540d\u79f0\u4e3a",Object(r.b)("inlineCode",{parentName:"li"},"VendingMachine"),"\uff1b"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"address public owner;"),"\u5b9a\u4e49\u4e86\u540d\u79f0\u4e3a",Object(r.b)("inlineCode",{parentName:"li"},"owner"),"\uff0c\u7c7b\u578b\u4e3a",Object(r.b)("inlineCode",{parentName:"li"},"address"),"\u7684\u516c\u5f00\u72b6\u6001\u53d8\u91cf\uff1b"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"event Purchase(address customer, uint amount);"),"\u5b9a\u4e49\u4e86\u540d\u79f0\u4e3a",Object(r.b)("inlineCode",{parentName:"li"},"Purchase"),"\u7684",Object(r.b)("inlineCode",{parentName:"li"},"event"),"\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"event"),"\u7c7b\u4f3c\u4e8e\u5176\u4ed6\u8bed\u8a00\u7684\u65e5\u5fd7\u529f\u80fd\uff0c\u5176\u4f5c\u7528\u4e3b\u8981\u662f\u8bb0\u5f55\u5408\u7ea6\u6267\u884c\u65f6\u7684\u4e00\u4e9b\u91cd\u8981\u4fe1\u606f\u3002\u5982",Object(r.b)("inlineCode",{parentName:"li"},"Purchase"),"\u7528\u4e8e\u5728\u987e\u5ba2\u8d2d\u4e70\u5546\u54c1\u65f6\u4ea7\u751f\u8d2d\u4e70\u8bb0\u5f55\u7684event"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"constrctor"),"\u51fd\u6570\u4e3a\u6784\u9020\u51fd\u6570\uff0c\u5728\u4e14\u53ea\u5728\u90e8\u7f72\u5408\u7ea6\u65f6\u8fd0\u884c\uff1b"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"balanceOf"),"\u51fd\u6570\u7528",Object(r.b)("inlineCode",{parentName:"li"},"view"),"\u4fee\u6539\uff0c\u8868\u793a\u4e3a\u53ea\u8bfb\u51fd\u6570\uff0c\u4e0d\u80fd\u4fee\u6539\u5408\u7ea6\u72b6\u6001\uff1b"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"refill"),"\u51fd\u6570\u4e3a\u666e\u901a\u51fd\u6570\uff0c\u901a\u8fc7\u53d1\u9001\u4ea4\u6613\u7684\u65b9\u5f0f\u8c03\u7528\uff0c\u4f1a\u6539\u53d8\u5408\u7ea6\u88c5\u72b6\u6001\uff1b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"require(msg.sender == owner,..);"),"\u8868\u793a\u53ea\u6709\u6ee1\u8db3\u6761\u4ef6",Object(r.b)("inlineCode",{parentName:"li"},"msg.sender == owner"),"\u65f6\u5373\u8c03\u7528\u8005\u4e3a\u7ba1\u7406\u5458\u65f6\u624d\u80fd\u4fee\u6539\u5408\u7ea6\u53d8\u91cf",Object(r.b)("inlineCode",{parentName:"li"},"cupcakeBalances"),"\u7684\u72b6\u6001\uff0c\u5b8c\u6210\u8865\u8d27\uff1b"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"purchase"),"\u51fd\u6570\u6709",Object(r.b)("inlineCode",{parentName:"li"},"payable"),"\u5173\u952e\u5b57\u4fee\u9970\uff0c\u8868\u793a\u5728\u8c03\u7528\u8be5\u51fd\u6570\u65f6\u53ef\u4ee5\u540c\u65f6\u53d1\u9001CFX\uff0c\u7531\u4e8e\u987e\u5ba2\u9700\u8981\u652f\u4ed8CFX\u624d\u80fd\u8d2d\u4e70\u8d27\u7269\uff0c\u6240\u4ee5\u7528",Object(r.b)("inlineCode",{parentName:"li"},"payable"),"\u4fee\u9970",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"require(msg.value >= amount * 1 ether,..)"),"\u8868\u793a\u5fc5\u987b\u652f\u4ed8\u8db3\u989d\u7684CFX\u624d\u80fd\u8d2d\u4e70"),Object(r.b)("li",{parentName:"ul"},"\u8d2d\u4e70\u6210\u529f\u540e\u552e\u8d27\u673a\u6570\u91cf\u51cf\u5c11\uff0c\u7528\u6237\u62e5\u6709\u7684\u8d27\u7269\u6570\u91cf\u589e\u52a0\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"cupcakeBalances[msg.sender]"),"\u8868\u793a\u7528\u6237\u62e5\u6709\u7684\u8d27\u7269\u6570\u91cf")))),Object(r.b)("p",null,"\u5408\u7ea6\u4e66\u5199\u5b8c\u6210\u540e\u9700\u8981\u5148\u7f16\u8bd1\u3001\u7136\u540e\u901a\u8fc7\u53d1\u9001",Object(r.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions"},"\u4ea4\u6613"),"\u7684\u65b9\u5f0f\u90e8\u7f72\u5230conflux\u94fe\u4e0a\u3002\u7136\u540e\u5c31\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528\u5408\u7ea6\u7684\u65b9\u5f0f\u548c\u5408\u7ea6\u4ea4\u4e92\u4e86\u3002"),Object(r.b)("p",null,"\u5408\u7ea6\u4e00\u65e6\u90e8\u7f72\uff0c\u4efb\u4f55\u4eba\u53ef\u4ee5\u8c03\u7528\uff0c\u4f46\u53ea\u6709\u6ee1\u8db3\u6761\u4ef6\u624d\u80fd\u89e6\u53d1\u5408\u7ea6\u72b6\u6001\u6539\u53d8\u3002"),Object(r.b)("p",null,"\u66f4\u8be6\u7ec6\u7684solidity\u8bed\u6cd5\u4ecb\u7ecd\u8bf7\u53c2\u8003",Object(r.b)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.4/"},"solidity\u5b98\u65b9\u6587\u6863")),Object(r.b)("p",null,"\u4e0b\u9762\u4ecb\u7ecd\u7f16\u8bd1\u3001\u90e8\u7f72\u3001\u8c03\u7528\u53ca\u5408\u7ea6\u6267\u884c\u7684\u8fc7\u7a0b"),Object(r.b)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),Object(r.b)("p",null,"\u5408\u7ea6\u7f16\u8bd1\u5c31\u662f\u901a\u8fc7\u7f16\u8bd1\u5668\u5c06\u5408\u7ea6\u4ee3\u7801\u751f\u6210\u90e8\u7f72\u5408\u7ea6\u9700\u8981\u7684\u5143\u7d20\u7684\u8fc7\u7a0b\u3002\u7f16\u8bd1\u7ed3\u679c\u4e2d\u4e3b\u8981\u6709\u4e24\u90e8\u5206",Object(r.b)("inlineCode",{parentName:"p"},"abi"),"\u548c",Object(r.b)("inlineCode",{parentName:"p"},"bytecode"),"\u662f\u6211\u4eec\u9700\u8981\u7528\u5230\u7684\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Bytecode: \u667a\u80fd\u5408\u7ea6\u662f\u5728EVM\u4e2d\u6267\u884c\u7684\uff0cBytecode\u662fEVM\u53ef\u4ee5\u8bc6\u522b\u7684\u5408\u7ea6\u5bf9\u5e94\u768416\u8fdb\u5236\u503c\u3002")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"ABI: ABI\u5168\u79f0Application Binary Interface\uff0c\u5373\u5e94\u7528\u4e8c\u8fdb\u5236\u63a5\u53e3\u3002ABI\u7528JSON\u683c\u5f0f\u63cf\u8ff0\u4e86\u5408\u7ea6\u4e2d\u516c\u5f00\u51fd\u6570\u7684\u51fd\u6570\u540d\u3001\u4fee\u9970\u7b26\u3001\u53ef\u89c1\u6027\u3001\u53c2\u6570\u540d\u79f0\u53ca\u5176\u7c7b\u578b\u3001\u8fd4\u56de\u503c\u540d\u79f0\u53ca\u5176\u7c7b\u578b\uff0c\u4ee5\u53caEvent\u7684\u63cf\u8ff0\u3002\u76ee\u7684\u662f\u4e3a\u4e86\u6211\u4eec\u5728\u5916\u90e8\u8c03\u7528\u5408\u7ea6\u51fd\u6570\u65f6\u53ef\u4ee5\u6839\u636eABI\u4e2d\u8be5\u51fd\u6570\u7684\u63cf\u8ff0\u6309\u7167\u7279\u5b9a\u7684\u65b9\u6cd5\u8fdb\u884c\u7f16\u7801\u4ece\u800c\u5f97\u5230\u4e00\u4e2aEVM\u53ef\u4ee5\u8bc6\u522b\u7684\u503c\uff0c\u4ee516\u8fdb\u5236\u683c\u5f0f\u663e\u793a\uff1b\u4f7f\u7528\u8be5\u503c\u5c31\u53ef\u4ee5\u4e0e\u5408\u7ea6\u4ea4\u4e92\u3002"))),Object(r.b)("p",null,"\u7f16\u8bd1\u667a\u80fd\u5408\u7ea6\u53ef\u4ee5\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"p"},"solc"),", ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-truffle"},"conflux-truffle"),"\u7b49\u8fdb\u884c\u3002"),Object(r.b)("p",null,"\u8fd9\u91cc\u4ee5solc\u4e3a\u4f8b\u8bf4\u660e\u3002"),Object(r.b)("p",null,"\u5b89\u88c5solc"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm install -g solc\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u7f16\u8bd1\u5668\u7248\u672c\u9700\u8981\u4e0e\u5408\u7ea6\u6307\u5b9a\u7684\u7248\u672c\u5339\u914d\uff0c\u5982\u9700\u4e0b\u8f7d\u6307\u5b9a\u7248\u672cv0.6.12\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"p"},"npm install -g solc@v0.6.12"))),Object(r.b)("p",null,"\u7f16\u8bd1"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"solcjs ./VendingMachine.sol --bin --abi\n")),Object(r.b)("p",null,"\u5c06\u751f\u6210 ",Object(r.b)("inlineCode",{parentName:"p"},"bytecode")," \u6587\u4ef6 ",Object(r.b)("inlineCode",{parentName:"p"},"__...VendingMachine.bin")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"abi")," \u6587\u4ef6 ",Object(r.b)("inlineCode",{parentName:"p"},"__...VendingMachine.abi")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"__...VendingMachine.bin")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"60806040523480156100...bfea2646970667358221220761301cb41bc1e4c37cc823f17fd695c6c09521a3e09fe1e8a7c51f6e77181a464736f6c63430008000033\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"__...VendingMachine.abi")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'[\n    {\n      "inputs": [],\n      "stateMutability": "nonpayable",\n      "type": "constructor"\n    },\n    {\n      "anonymous": false,\n      "inputs": [\n        {\n          "indexed": false,\n          "internalType": "address",\n          "name": "customer",\n          "type": "address"\n        },\n        {\n          "indexed": false,\n          "internalType": "uint256",\n          "name": "amount",\n          "type": "uint256"\n        }\n      ],\n      "name": "Purchase",\n      "type": "event"\n    },\n    ......\n  ]\n')),Object(r.b)("h3",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),Object(r.b)("p",null,"\u5408\u7ea6\u90e8\u7f72\u5c31\u662f\u5728conflux\u533a\u5757\u94fe\u4e0a\u521b\u5efa\u4e00\u4e2a\u5408\u7ea6\u5b9e\u4f8b\uff0c\u901a\u8fc7\u53d1\u9001\u4e00\u7b14",Object(r.b)("inlineCode",{parentName:"p"},"data"),"\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"bytecode"),"\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"to"),"\u7559\u7a7a\u7684",Object(r.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions"},"\u4ea4\u6613"),"\u5373\u53ef\u5b9e\u73b0\u5408\u7ea6\u90e8\u7f72\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u5982\u679c\u6784\u9020\u51fd\u6570\u5e26\u53c2\u6570\uff0c\u5219",Object(r.b)("inlineCode",{parentName:"p"},"data"),"\u5e94\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"bytecode"),"\u4e0e\u5bf9",Object(r.b)("inlineCode",{parentName:"p"},"\u6784\u9020\u53c2\u6570"),"ABI\u7f16\u7801\u540e\u7ec4\u5408\u800c\u6210\u7684\u503c")),Object(r.b)("p",null,"\u8fd9\u91cc\u7528",Object(r.b)("inlineCode",{parentName:"p"},"js-conflux-sdk"),"\u4e3e\u4f8b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const { Conflux } = require("js-conflux-sdk");\n\n(async function () {\n    const cfx = await Conflux.create({ url: "https://test.confluxrpc.com" })\n    const account = cfx.wallet.addPrivateKey("0x2139FB4C55CB9AF7F0086CD800962C2E9013E2292BAE77978A9209E3BEE71D49")\n\n    // your bytecode\n    let bytecode = "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffff......0008000033"\n\n    let deployReceipt = await cfx.sendTransaction({\n        from: account.address,\n        data: bytecode\n    }).executed()\n\n    // or use contract instance\n    // let vendingMachine = cfx.Contract({ bytecode })\n    // let deployReceipt = await vendingMachine.constructor().sendTransaction({from:account.address}).executed()\n\n    console.log("deploy tx receipt:", deployReceipt)\n})()\n\n')),Object(r.b)("p",null,"\u5982\u793a\u4f8b\u6240\u793a\uff0c\u53d1\u9001\u4e00\u7b14data\u4e3abytecode\u7684",Object(r.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions"},"\u4ea4\u6613"),"\u5373\u5b9e\u73b0\u4e86\u5408\u7ea6\u90e8\u7f72\uff0c\u90e8\u7f72\u5b8c\u6210\u540e\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"transaction receipt")," \u7684",Object(r.b)("inlineCode",{parentName:"p"},"contractCreated")," \u5b57\u6bb5\u5c31\u662f\u90e8\u7f72\u5b8c\u6210\u7684\u5408\u7ea6\u5730\u5740"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"deploy tx receipt: {\n  blockHash: '0xe1b7f118447d3f945db4c2cf5752e592e542d4b9d24d0312b4ca5fce925c1ae5',\n  contractCreated: 'CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0',\n  epochNumber: 27675623,\n  from: 'CFXTEST:TYPE.USER:AAP9KTHVCTUNVF030RBKK9K7ZBZYZ12DAJP1U3SP4G',\n  gasCoveredBySponsor: false,\n  gasFee: 646047n,\n  gasUsed: 646047n,\n  index: 1,\n  logs: [],\n  logsBloom: '0x...',\n  outcomeStatus: 0,\n  stateRoot: '0xd2ada6e3c04d6e8260446deaf1b8289d57ba84e2d82387155bbb397be93e2a30',\n  storageCollateralized: 1664n,\n  storageCoveredBySponsor: false,\n  storageReleased: [],\n  to: null,\n  transactionHash: '0xe19d8a7527a7f655f0325374a5d483ed4459f465a2f7f9d3ac9a23a548eac5c4',\n  txExecErrorMsg: null\n}\n")),Object(r.b)("p",null,"\u8fd9\u91cc\u4e3a\u4e86\u66f4\u597d\u7684\u8bf4\u660e\u5408\u7ea6\u90e8\u7f72\u539f\u7406\u4f7f\u7528\u76f4\u63a5\u53d1",Object(r.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions"},"\u4ea4\u6613"),"\u7684\u65b9\u5f0f\uff0c\u5f53\u5408\u7ea6\u6709\u5e26\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570\u53c2\u6570\uff0c\u66f4\u53cb\u597d\u7684\u65b9\u5f0f\u662f\u4f7f\u7528",Object(r.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/js-conflux-sdk/blob/master/docs/interact_with_contract.md"},Object(r.b)("inlineCode",{parentName:"a"},"js-conflux-sdk")," ",Object(r.b)("inlineCode",{parentName:"a"},"contract")),"\u5bf9\u8c61\u8fdb\u884c\uff0c\u6216\u8005\u4f7f\u7528 ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-truffle"},Object(r.b)("inlineCode",{parentName:"a"},"conflux-truffle"))," \u7b49\u5408\u7ea6\u5f00\u53d1\u5de5\u5177\u90e8\u7f72\u3002"),Object(r.b)("h3",{id:"\u8c03\u7528"},"\u8c03\u7528"),Object(r.b)("p",null,"\u5408\u7ea6\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u5c31\u53ef\u4ee5\u8ddf\u5408\u7ea6\u4ea4\u4e92\u4e86\uff0c\u4ea4\u4e92\u65b9\u5f0f\u5206\u4e24\u79cd"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u4e00\u79cd\u8c03\u7528\u65b9\u5f0f\u662f\u901a\u8fc7 rpc ",Object(r.b)("inlineCode",{parentName:"p"},"cfx_call"),"\uff0c\u8fd9\u79cd\u53ea\u662f\u5728EVM\u4e2d\u6267\u884c\u8be5\u5408\u7ea6\u8c03\u7528\u4f46\u4e0d\u5b9e\u9645\u6539\u53d8\u72b6\u6001\uff0c\u901a\u5e38\u7528\u4e8e\u8c03\u7528\u53ea\u8bfb\u5408\u7ea6\u51fd\u6570\u6216\u8005\u6a21\u62df\u6267\u884c\u5408\u7ea6\u67e5\u770b\u662f\u5426\u5408\u7ea6\u80fd\u591f\u6267\u884c\u6210\u529f")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u53e6\u4e00\u79cd\u5408\u7ea6\u8c03\u7528\u65b9\u5f0f\u662f\u901a\u8fc7\u53d1\u9001",Object(r.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions"},"\u4ea4\u6613"),"\u7684\u65b9\u5f0f\u5b8c\u6210\uff0c\u8fd9\u65f6\u4f1a\u6267\u884c\u5408\u7ea6\u5e76\u6539\u53d8\u5408\u7ea6\u72b6\u6001\u3002"))),Object(r.b)("p",null,"\u8c03\u7528\u5408\u7ea6\u65f6\u4f7f\u7528\u7684data\u662f\u6839\u636eABI\u63cf\u8ff0\u7684\u51fd\u6570\u4fe1\u606f\u7ecf\u8fc7",Object(r.b)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/develop/abi-spec.html"},"ABI\u7f16\u7801"),"\u7684\u65b9\u5f0f\u751f\u6210\u7684\u3002\u5176\u4e2d\u524d4\u4e2a\u5b57\u8282\u4e3a\u51fd\u6570\u9009\u62e9\u5668(\u51fd\u6570\u7b7e\u540d\u7684 Keccak\uff08SHA-3\uff09\u54c8\u5e0c\u7684\u524d4\u5b57\u8282)\uff0c\u7b2c\u4e94\u4e2a\u5b57\u8282\u5f00\u59cb\u4e3a\u88ab\u7f16\u7801\u7684\u53c2\u6570\u3002"),Object(r.b)("p",null,"\u6211\u4eec\u4ee5 js-conflux-sdk \u4e3a\u4f8b\u8c03\u7528\u5408\u7ea6"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const { Conflux } = require("js-conflux-sdk");\n\n(async function () {\n    const cfx = await Conflux.create({ url: "https://test.confluxrpc.com", logger: console })\n    const me = cfx.wallet.addPrivateKey("0x2139FB4C55CB9AF7F0086CD800962C2E9013E2292BAE77978A9209E3BEE71D49")\n\n    const abi = [...]\n    const contract = cfx.Contract({ address: "CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0", abi })\n    let myBalance = await contract.balanceOf(me.address)\n    console.log("my cupcake balance :", myBalance)\n\n    const receipt = await contract.purchase(2).sendTransaction({ from: me.address, value: 2e18 }).executed()\n    console.log("purchase receipt", receipt)\n\n    const event = contract.abi.decodeLog(receipt.logs[0])\n    console.log("purchase event:", event)\n\n    myBalance = await contract.balanceOf(me.address)\n    console.log("after purchase, my cupcake balance :", myBalance)\n})()\n')),Object(r.b)("p",null,"\u4ece log \u4e2d\u53ef\u4ee5\u770b\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"contract.cupcakeBalances(me.address)"),"\u5bf9\u5e94\u7684 rpc \u4fe1\u606f\u4e3a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"{\n  data: {\n    jsonrpc: '2.0',\n    id: '1794b9e755639b5164925a8e',\n    method: 'cfx_call',\n    params: [\n      {\n        to: 'CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0',\n        data: '0xe18a7b9200000000000000000000000019f4bcf113e0b896d9b34294fd3da86b4adf0302'\n      },\n      undefined\n    ]\n  },\n  result: '0x0000000000000000000000000000000000000000000000000000000000000000',\n  duration: 33\n}\n")),Object(r.b)("p",null,"rpc method \u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"cfx_call"),"\uff0c data\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"\u51fd\u6570\u9009\u62e9\u5668 + \u5bf9\u53c2\u6570\u5217\u8868ABI\u7f16\u7801"),"\u7684\u7ed3\u679c\uff0c\u524d4\u5b57\u8282",Object(r.b)("inlineCode",{parentName:"p"},"0xe18a7b92"),"\u4e3a\u51fd\u6570",Object(r.b)("inlineCode",{parentName:"p"},"balanceOf"),"\u7684\u51fd\u6570\u9009\u62e9\u5668\uff0c\u8ba1\u7b97\u65b9\u6cd5\u4e3a\u5bf9",Object(r.b)("inlineCode",{parentName:"p"},"balanceOf"),"\u7684\u7b7e\u540d",Object(r.b)("inlineCode",{parentName:"p"},"balanceOf(address)"),"\u505akeccak\u8fd0\u7b97",Object(r.b)("inlineCode",{parentName:"p"},'keccak256("balanceOf(address)")'),"\u540e\u53d6\u524d4\u5b57\u8282\u3002\u540e\u9762\u7684\u5b57\u8282",Object(r.b)("inlineCode",{parentName:"p"},"00000000000000000000000019f4bcf113e0b896d9b34294fd3da86b4adf0302"),"\u4e3a\u53c2\u6570 ",Object(r.b)("inlineCode",{parentName:"p"},"address")," \u7c7b\u578b, \u503c ",Object(r.b)("inlineCode",{parentName:"p"},"0x19f4bcf113e0b896d9b34294fd3da86b4adf0302")," \u7684ABI\u7f16\u7801\u7ed3\u679c\u3002"),Object(r.b)("p",null,"\u8fd4\u56de\u503c",Object(r.b)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000000000000000000000000000"),"\u662f \u7c7b\u578b  ",Object(r.b)("inlineCode",{parentName:"p"},"uint"),", \u503c ",Object(r.b)("inlineCode",{parentName:"p"},"0")," \u7684\u7f16\u7801\u7ed3\u679c\u3002"),Object(r.b)("p",null,"\u800c",Object(r.b)("inlineCode",{parentName:"p"},"purchase"),"\u7684 rpc method \u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction"),"\uff0c\u5373\u53d1\u9001\u4e00\u7b14",Object(r.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions"},"\u4ea4\u6613"),"\uff0c\u8fd9\u4f1a\u6539\u53d8\u5408\u7ea6\u72b6\u6001\u3002\u53ef\u4ee5\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"getTransactionByHash")," \u770b\u5230\u8be5\u4ea4\u6613\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"data")," \u4e5f\u662f\u540c\u6837\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"\u51fd\u6570\u9009\u62e9\u5668 + \u5bf9\u53c2\u6570\u5217\u8868ABI\u7f16\u7801"),"\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "data": "0xefef39a10000000000000000000000000000000000000000000000000000000000000002",\n    "hash": "0x2c188c67247d7e2bf12fb96f17ced61da8ea4143447887a10a2cc597c1fa66e1",\n    "to": "CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0",\n    "value": "0x1bc16d674ec80000"\n    ...\n  },\n  "id": 1\n}\n')),Object(r.b)("p",null,"\u4ece",Object(r.b)("inlineCode",{parentName:"p"},"transaction receipt"),"\u4e2d\u53ef\u4ee5\u770b\u5230",Object(r.b)("inlineCode",{parentName:"p"},"logs"),"\u5b57\u6bb5\u6709\u4e00\u6761\u8bb0\u5f55\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"logs"),"\u8868\u793a\u8be5\u7b14\u4ea4\u6613\u53d1\u751f\u7684\u4e8b\u4ef6"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"purchase receipt {\n  blockHash: '0x3d4111b299e65c279184aa83021e59f9d134baa9c78969dd6d94a92bfbd340df',\n  contractCreated: null,\n  epochNumber: 27677382,\n  from: 'CFXTEST:TYPE.USER:AAP9KTHVCTUNVF030RBKK9K7ZBZYZ12DAJP1U3SP4G',\n  ......\n  logs: [\n    {\n      address: 'CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0',\n      data: '0x00000000000000000000000019f4bcf113e0b896d9b34294fd3da86b4adf03020000000000000000000000000000000000000000000000000000000000000002',\n      topics: [Array]\n    }\n  ],\n}\n")),Object(r.b)("p",null,"\u4e8b\u4ef6\u89e3\u6790\u7ed3\u679c\u4e3a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"purchase event: {\n  name: 'Purchase',\n  fullName: 'Purchase(address customer, uint256 amount)',\n  type: 'Purchase(address,uint256)',\n  signature: '0x2499a5330ab0979cc612135e7883ebc3cd5c9f7a8508f042540c34723348f632',\n  array: [ 'cfxtest:aap9kthvctunvf030rbkk9k7zbzyz12dajp1u3sp4g', 2n ],\n  object: {\n    customer: 'cfxtest:aap9kthvctunvf030rbkk9k7zbzyz12dajp1u3sp4g',\n    amount: 2n\n  }\n}\n")),Object(r.b)("p",null,"\u8868\u793a\u53d1\u751f\u4e86\u4e00\u4e2a",Object(r.b)("inlineCode",{parentName:"p"},"Purchase"),"\u4e8b\u4ef6\uff0ccustomer\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"cfxtest:aap9kthvctunvf030rbkk9k7zbzyz12dajp1u3sp4g"),"\uff0c\u6570\u91cf\u4e3a2"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"purchase"),"\u5b8c\u6210\u540e\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"cupcakeBalances[0x19f4bcf113e0b896d9b34294fd3da86b4adf0302]")," \u7531 0 \u53d8\u4e3a 2\u3002\u72b6\u6001\u53d1\u751f\u6539\u53d8\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"{\n  data: {\n    jsonrpc: '2.0',\n    id: '179a19eb98ed23dda1d1d516',\n    method: 'cfx_call',\n    params: [ [Object], undefined ]\n  },\n  result: '0x0000000000000000000000000000000000000000000000000000000000000002',\n  duration: 30\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cConflux\u94fe\u4e0a\u5728\u90e8\u7f72\u5408\u7ea6\u548c\u8c03\u7528\u5408\u7ea6\u7684\u65f6\u5019\uff0c\u5982\u679c\u5728\u5408\u7ea6\u4e2d\u65b0\u589e\u5b58\u50a8\u7a7a\u95f4\u5360\u7528\u65f6\uff0c\u9700\u8981\u4e3a\u5360\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u62b5\u62bc\u4e00\u90e8\u5206cfx\uff1b\u8be5\u90e8\u5206\u8d39\u7528\u4f1a\u5728\u5b58\u50a8\u91ca\u653e\u540e\u8fd4\u8fd8\uff0c\u8be6\u60c5\u53c2\u89c1",Object(r.b)("a",{parentName:"p",href:"https://juejin.cn/post/6855551378123653127"},"Conflux\u7684\u5b58\u50a8\u62b5\u62bc\u673a\u5236"))),Object(r.b)("h2",{id:"\u6df1\u5165\u5b66\u4e60"},"\u6df1\u5165\u5b66\u4e60"),Object(r.b)("p",null,"\u667a\u80fd\u5408\u7ea6\u5f00\u53d1\u9664\u4e86solidity\u8bed\u8a00\u5916\uff0c\u8fd8\u6709vyper\u7b49"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.soliditylang.org/en/v0.8.4/"},"Solidity")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://vyper.readthedocs.io/en/stable/"},"Vyper"))),Object(r.b)("p",null,"Conflux\u6709\u66f4\u53cb\u597d\u7684\u667a\u80fd\u5f00\u53d1\u5de5\u5177\u4f9b\u5f00\u53d1\u8005\u4f7f\u7528\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/conflux-truffle"},"Conflux-Truffle"))),Object(r.b)("p",null,"\u5176\u5b83"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developer.conflux-chain.org/introduction/en/conflux_basics"},"Conflux\u57fa\u672c\u6982\u5ff5\u4ecb\u7ecd")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://ethereum.org/zh/developers/docs/smart-contracts/"},"Ethereum\u5bf9\u667a\u80fd\u5408\u7ea6\u7684\u4ecb\u7ecd"))))}p.isMDXComponent=!0}}]);
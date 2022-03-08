(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(187)),c={id:"conflux_storage_zh",title:"Storage",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/zh/storage.md",keywords:["storage"]},i={unversionedId:"introduction/zh/conflux_storage_zh",id:"introduction/zh/conflux_storage_zh",isDocsHomePage:!1,title:"Storage",description:"\u5728Conflux\u4e2d\u5f15\u5165\u4e86Collateral for storage\uff08\u7b80\u79f0CFS\uff09\u673a\u5236\uff0c\u4f5c\u4e3a\u4f7f\u7528\u5b58\u50a8\u7684\u5b9a\u4ef7\u65b9\u5f0f\uff0c\u76f8\u6bd4Ethereum\u4e2d\u7684\u4e00\u6b21\u6027\u5b58\u50a8\u8d39\u7528\uff0cCFS\u673a\u5236\u4f1a\u66f4\u52a0\u516c\u5e73\u5408\u7406\u3002\u539f\u5219\u4e0a\uff0c\u8fd9\u79cd\u673a\u5236\u9700\u8981\u9501\u5b9a\u4e00\u7b14\u8d44\u91d1\uff0c\u4f5c\u4e3a\u5360\u7528\u5b58\u50a8\u7a7a\u95f4\u7684\u62b5\u62bc\u7269\u3002\u5728\u76f8\u5e94\u7684\u5b58\u50a8\u7a7a\u95f4\u88ab\u91ca\u653e\u6216\u88ab\u4ed6\u4eba\u8986\u76d6\u524d\uff0c\u62b5\u62bc\u7269\u90fd\u4f1a\u88ab\u9501\u5b9a\uff0c\u800c\u88ab\u9501\u5b9a\u7684\u62b5\u62bc\u7269\u6240\u4ea7\u751f\u7684\u76f8\u5e94\u5229\u606f\u4f1a\u76f4\u63a5\u5206\u914d\u7ed9\u77ff\u5de5\uff0c\u7528\u4e8e\u5b58\u50a8\u7a7a\u95f4\u7684\u7ef4\u62a4\u3002\u56e0\u6b64 Conflux\u7684\u5b58\u50a8\u6210\u672c\u4e5f\u53d6\u51b3\u4e8e\u7a7a\u95f4\u5360\u7528\u7684\u65f6\u95f4\u957f\u77ed\u3002Conflux \u5728\u5176\u534f\u8bae\u89c4\u8303\u7b2c7\u7ae0\u4e2d\u4e13\u95e8\u5bf9\u8fd9\u4e00\u673a\u5236\u8fdb\u884c\u4e86\u8be6\u7ec6\u7684\u4ecb\u7ecd\u3002",source:"@site/docs/introduction/zh/storage.md",sourceDirName:"introduction/zh",slug:"/introduction/zh/conflux_storage_zh",permalink:"/introduction/zh/conflux_storage_zh",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/zh/storage.md",version:"current",frontMatter:{id:"conflux_storage_zh",title:"Storage",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/zh/storage.md",keywords:["storage"]}},l=[{value:"Solidity \u5185\u5b58\u7ba1\u7406\u673a\u5236",id:"solidity-\u5185\u5b58\u7ba1\u7406\u673a\u5236",children:[]},{value:"\u5982\u4f55\u4f7f\u7528\u5b58\u50a8\u62b5\u62bc",id:"\u5982\u4f55\u4f7f\u7528\u5b58\u50a8\u62b5\u62bc",children:[]}],b={toc:l};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5728Conflux\u4e2d\u5f15\u5165\u4e86Collateral for storage\uff08\u7b80\u79f0CFS\uff09\u673a\u5236\uff0c\u4f5c\u4e3a\u4f7f\u7528\u5b58\u50a8\u7684\u5b9a\u4ef7\u65b9\u5f0f\uff0c\u76f8\u6bd4Ethereum\u4e2d\u7684\u4e00\u6b21\u6027\u5b58\u50a8\u8d39\u7528\uff0cCFS\u673a\u5236\u4f1a\u66f4\u52a0\u516c\u5e73\u5408\u7406\u3002\u539f\u5219\u4e0a\uff0c\u8fd9\u79cd\u673a\u5236\u9700\u8981\u9501\u5b9a\u4e00\u7b14\u8d44\u91d1\uff0c\u4f5c\u4e3a\u5360\u7528\u5b58\u50a8\u7a7a\u95f4\u7684\u62b5\u62bc\u7269\u3002\u5728\u76f8\u5e94\u7684\u5b58\u50a8\u7a7a\u95f4\u88ab\u91ca\u653e\u6216\u88ab\u4ed6\u4eba\u8986\u76d6\u524d\uff0c\u62b5\u62bc\u7269\u90fd\u4f1a\u88ab\u9501\u5b9a\uff0c\u800c\u88ab\u9501\u5b9a\u7684\u62b5\u62bc\u7269\u6240\u4ea7\u751f\u7684\u76f8\u5e94\u5229\u606f\u4f1a\u76f4\u63a5\u5206\u914d\u7ed9\u77ff\u5de5\uff0c\u7528\u4e8e\u5b58\u50a8\u7a7a\u95f4\u7684\u7ef4\u62a4\u3002\u56e0\u6b64 Conflux\u7684\u5b58\u50a8\u6210\u672c\u4e5f\u53d6\u51b3\u4e8e\u7a7a\u95f4\u5360\u7528\u7684\u65f6\u95f4\u957f\u77ed\u3002Conflux \u5728\u5176",Object(o.b)("a",{parentName:"p",href:"https://confluxnetwork.org/files/Conflux_Protocol_Specification_20201020.pdf"},"\u534f\u8bae\u89c4\u8303\u7b2c7\u7ae0"),"\u4e2d\u4e13\u95e8\u5bf9\u8fd9\u4e00\u673a\u5236\u8fdb\u884c\u4e86\u8be6\u7ec6\u7684\u4ecb\u7ecd\u3002"),Object(o.b)("p",null,"\u5728 Conflux \u7f51\u7edc\u4e2d\uff0c\u6bcf\u4e2a\u5b58\u50a8\u6761\u76ee\u5360\u7528\u7a7a\u95f4\u662f64B\uff08B\u4e3aBytes\uff0c\u5b57\u8282\uff09\uff0c\u8fd9\u4e5f\u662f\u4e16\u754c\u72b6\u6001\u4e0b\u952e/\u503c\u5bf9\u7684\u5927\u5c0f\uff0c\u9700\u8981\u8bf4\u660e\u7684\u662f\u5728\u533a\u5757\u94fe\u4e2d\u952e\u4e00\u822c\u4e3a256bits\u957f\uff0c\u503c\u4e5f\u662f256bits\u957f\uff08\u5404\u81ea\u90fd\u662f32B\u957f\uff0c\u5408\u8d77\u6765\u4e3a64B\u957f\uff09\u3002\u50a8\u5b58\u6240\u9700\u7684\u62bc\u91d1\u4e0e\u80fd\u591f\u8986\u76d6\u6240\u6709\u50a8\u5b58\u7269\u54c1\u768464B\u7684\u6700\u5c0f\u500d\u6570\u6210\u6b63\u6bd4\u3002\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u5b58\u50a8\u6761\u76ee\uff0c\u6700\u540e\u5411\u8be5\u6761\u76ee\u5199\u5165\u7684\u8d26\u6237\u79f0\u4e3a\u8be5\u5b58\u50a8\u6761\u76ee\u7684\u6240\u6709\u8005\u3002\u5982\u679c\u67d0\u5b58\u50a8\u6761\u76ee\u662f\u5728\u6267\u884c\u5408\u7ea6C\u65f6\u6240\u5199\uff0c\u4e14\u6709\u62c5\u4fdd\u4eba\u63d0\u4f9b\u62c5\u4fdd\uff0c\u90a3\u4e48C\u88ab\u89c6\u4e3a\u8be5\u6761\u76ee\u7684\u5199\u8005\uff0c\u4e5f\u76f8\u5e94\u5730\u6210\u4e3a\u6240\u6709\u8005\uff08\u8be6\u89c17.1\u8282\uff09\u3002\u5728\u4e16\u754c\u72b6\u6001\u4e0b\uff0c\u4e00\u4e2a\u5b58\u50a8\u6761\u76ee\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\uff0c\u8be5\u6761\u76ee\u7684\u6240\u6709\u8005\u5fc5\u987b\u9501\u5b9a\u56fa\u5b9a\u6570\u91cf\u7684CFX\u4f5c\u4e3a\u5360\u7528\u5b58\u50a8\u7a7a\u95f4\u7684\u5b58\u50a8\u62bc\u91d1\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u6bcf\u4e00\u4e2a\u5927\u5c0f\u4e3a64B\u7684\u5b58\u50a8\u6761\u76ee\uff0c\u5176\u4e3b\u4eba\u4f1a\u88ab\u9501\u5b9a1/16CFX\u3002\u800c\u5360\u7528",Object(o.b)("inlineCode",{parentName:"p"},"1KB"),"\u7a7a\u95f4\u5219\u652f\u4ed8",Object(o.b)("inlineCode",{parentName:"p"},"1CFX"),"\u4f5c\u4e3a\u62bc\u91d1\uff0c\u5176\u5bf9\u5e94\u516c\u5f0f\u5982\u4e0b\uff1a"),Object(o.b)("p",null,Object(o.b)("img",{src:n(205).default})),Object(o.b)("p",null,"\u5728\u8d26\u6237\u03b1\u6210\u4e3a\u4e00\u4e2a\u5b58\u50a8\u6761\u76ee\u7684\u6240\u6709\u8005\u65f6\uff08\u65e0\u8bba\u662f\u521b\u5efa\u8fd8\u662f\u4fee\u6539\uff09\uff0c\u03b1\u5e94\u7acb\u5373\u4e3a\u8be5\u6761\u76ee\u9501\u5b9a1/16 CFX\u3002\u5982\u679c\u03b1\u6709\u8db3\u591f\u7684\u4f59\u989d\uff0c\u90a3\u4e48\u5c31\u4f1a\u81ea\u52a8\u9501\u5b9a\u6240\u9700\u7684\u62bc\u91d1\uff0c\u5426\u5219\u5982\u679c\u03b1\u6ca1\u6709\u8db3\u591f\u7684\u4f59\u989d\uff0c\u64cd\u4f5c\u5c31\u4f1a\u5931\u8d25\uff0c\u03b1\u65e0\u6cd5\u521b\u5efa\u6216\u4fee\u6539\u8be5\u6761\u76ee\u3002"),Object(o.b)("p",null,"\u5f53\u4e00\u4e2a\u5b58\u50a8\u6761\u76ee\u4ece\u4e16\u754c\u72b6\u6001\u4e2d\u88ab\u5220\u9664\u65f6\uff0c\u76f8\u5e94\u76841/16 CFX\u62bc\u91d1\u5c06\u88ab\u89e3\u9501\u5e76\u8fd4\u56de\u5230\u8be5\u6761\u76ee\u6240\u6709\u8005\u7684\u4f59\u989d\u4e2d\u3002\u5982\u679c\u4e00\u4e2a\u5b58\u50a8\u6761\u76ee\u7684\u6240\u6709\u6743\u53d1\u751f\u53d8\u5316\uff0c\u65e7\u6240\u6709\u8005\u76841/16 CFX\u62bc\u91d1\u88ab\u89e3\u9501\uff0c\u800c\u65b0\u7684\u6240\u6709\u8005\u5fc5\u987b\u540c\u65f6\u9501\u5b9a",Object(o.b)("inlineCode",{parentName:"p"},"1/16CFX"),"\u4f5c\u4e3a\u62bc\u91d1\u3002\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u62bc\u91d1\u9000\u56de\u662f\u201c\u6084\u6084\u201d\u52a0\u5728\u4f59\u989d\u91cc\u7684\uff0c\u5e76\u6ca1\u6709\u8f6c\u8d26\u4ea4\u6613\u53ef\u4f9b\u67e5\u8be2\u3002"),Object(o.b)("h3",{id:"solidity-\u5185\u5b58\u7ba1\u7406\u673a\u5236"},"Solidity \u5185\u5b58\u7ba1\u7406\u673a\u5236"),Object(o.b)("p",null,"\u6839\u636eSolidity\u6587\u6863\u5bf9\u4e8e\u5176\u5185\u5b58\u7ba1\u7406\u7684",Object(o.b)("a",{parentName:"p",href:"https://solidity-cn.readthedocs.io/zh/develop/introduction-to-smart-contracts.html#index-10"},"\u63cf\u8ff0"),"\u53caConflux",Object(o.b)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/KKU3XiJqr_Uz5RdlUyQmtA"},"\u5b58\u50a8\u62bc\u91d1\u673a\u5236"),"\uff0c\u6211\u4eec\u80fd\u591f\u53d1\u73b0\uff0c\u5408\u7ea6\u5b58\u50a8\u9700\u8981\u6709key\u548cvalue\u8fdb\u884c\u7ef4\u62a4\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\uff1akey\u7684\u957f\u5ea6\u4e3a256bits\uff0cvalue\u7684\u957f\u5ea6\u540c\u6837\u4e3a256bits\uff0c\u6309\u4e00\u4e2a\u667a\u80fd\u5408\u7ea6\u7684\u5b58\u50a8\u7a7a\u95f4\u6309\u7167\u5982\u4e0b\u8868\u683c\u8fdb\u884c\u7ec4\u7ec7\uff0c\u5176\u4e2d{0,1}",Object(o.b)("sup",null,"256"),"\u8868\u793a256\u4f4d\u6bd4\u7279\u4e32(\u6bd4\u7279\u4e32\u4e2d\u53ea\u67090\u62161\u4e24\u4e2a\u503c)\uff0c",Object(o.b)("strong",{parentName:"p"},"\u6bcf\u4e2akey/value\u5bf9\u5c31\u53ef\u4ee5\u88ab\u7406\u89e3\u4e3a\u4e00\u4e2a\u6761\u76ee"),"\uff1a"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"\u6761\u76ee"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u952e/\u5730\u5740({0,1}",Object(o.b)("sup",null,"256"),")"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u503c({0,1}",Object(o.b)("sup",null,"256"),")"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"1"),Object(o.b)("td",{parentName:"tr",align:"center"},"0...00000"),Object(o.b)("td",{parentName:"tr",align:"center"},"0")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"2"),Object(o.b)("td",{parentName:"tr",align:"center"},"0...00001"),Object(o.b)("td",{parentName:"tr",align:"center"},"1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"3"),Object(o.b)("td",{parentName:"tr",align:"center"},"0...00002"),Object(o.b)("td",{parentName:"tr",align:"center"},"2")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"..."),Object(o.b)("td",{parentName:"tr",align:"center"},"..."),Object(o.b)("td",{parentName:"tr",align:"center"},"...")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"2",Object(o.b)("sup",null,"256")),Object(o.b)("td",{parentName:"tr",align:"center"},"f...fffff"),Object(o.b)("td",{parentName:"tr",align:"center"},"0")))),Object(o.b)("p",null,"\u7531\u4e8e256bits=32bytes\uff0c\u4e24\u4e2a256bits\u5bf9\u5e94\u7684\u957f\u5ea6\u4e3a\uff1a32+32=64\uff08Bytes\uff09"),Object(o.b)("p",null,"Solidity\u4e2d\u5e38\u89c1\u53d8\u91cf\u53ca\u5176\u5bf9\u5e94\u7684\u6761\u76ee\u6570\u6574\u7406\n|   \u53d8\u91cf   |                            \u957f\u5ea6                             |                      \u5b9a\u4e49\u65b9\u5f0f                       |\n| :------: | :---------------------------------------------------------: | :-------------------------------------------------: |\n| \u666e\u901a\u53d8\u91cf |                   1\u4e2a\u666e\u901a\u53d8\u91cf\u5bf9\u5e941\u4e2a\u6761\u76ee                    |                uint public count=0;                 |\n| mapping  |              mapping\u7684\u6bcf1\u4e2akey\u90fd\u5bf9\u5e94\u4e8e1\u4e2a\u6761\u76ee               |      mapping(address => uint) public balances;      |\n|  array   | \u6570\u7ec4\u6bcf1\u4e2a\u5143\u7d20\u5bf9\u5e94\u4e8e1\u4e2a\u6761\u76ee\uff0c\u6570\u7ec4\u957farr.length\u662f\u989d\u5916\u76841\u4e2a\u6761\u76ee | uint","[5]"," fixedArr = ","[1,2,3,4,5]","; string productname; |\n|  struct  |              struct\u5185\u6bcf\u4e2afield\u5bf9\u5e94\u6761\u76ee\u6570\u7684\u7d2f\u52a0              |  struct Person {uint age;uint stuID;string name;}   |"),Object(o.b)("h2",{id:"\u5982\u4f55\u4f7f\u7528\u5b58\u50a8\u62b5\u62bc"},"\u5982\u4f55\u4f7f\u7528\u5b58\u50a8\u62b5\u62bc"),Object(o.b)("p",null,"Conflux \u53d1\u9001\u4ea4\u6613\u65f6\uff0c\u9700\u8981\u586b\u5199\u4e00\u4e2a\u5b58\u50a8\u4e0a\u9650 ",Object(o.b)("inlineCode",{parentName:"p"},"storageLimit")," \u5b57\u6bb5\uff08\u5355\u4f4d\u662f\u5b57\u8282\uff09\u3002\u8be5\u4e0a\u9650\u89c4\u5b9a\u4e86\uff0c\u62bc\u91d1\u7f34\u7eb3\u8005\u5728\u4ea4\u6613\u6267\u884c\u524d\u540e\u62bc\u91d1\u589e\u91cf\u4e0d\u5f97\u8d85\u8fc7",Object(o.b)("inlineCode",{parentName:"p"},"\u5b58\u50a8\u4e0a\u9650"),"\u4e58 1/1024 CFX\u3002\u5982\u679c\u8fd9\u4e2a\u503c\u586b\u5199\u5f97\u8fc7\u4f4e\uff0c\u4f1a\u5bfc\u81f4\u6267\u884c\u540e\u62bc\u91d1\u8d85\u8fc7\u4e0a\u9650\uff0c\u6267\u884c\u5931\u8d25\u3002\u6240\u4ee5\u4e00\u822c\u8be5\u5b57\u6bb5\u9700\u8981\u8bbe\u7f6e\u6bd4\u5b9e\u9645\u7528\u91cf\u504f\u5927\u7684\u503c\uff0c\u591a\u4f59\u7684\u90e8\u5206\u4e0d\u4f1a\u4ea7\u751f\u5b58\u50a8\u62b5\u62bc\u3002\u4f46\u4e5f\u4e0d\u5efa\u8bae\u586b\u5199\u7684\u8fc7\u9ad8\uff0c\u56e0\u4e3a\u53ef\u80fd\u4f1a\u5bfc\u81f4\u53d1\u9001\u8005\u4f59\u989d\u4e0d\u8db3\u4ee5\u652f\u4ed8\u62bc\u91d1\uff0c\u4ece\u800c\u5bfc\u81f4\u4ea4\u6613\u5931\u8d25\u3002Fullnode \u63d0\u4f9b\u4e86 RPC \u65b9\u6cd5 ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," \u53ef\u4ee5\u9884\u4f30\u4e00\u7b14\u4ea4\u6613\u5c06\u4f1a\u4f7f\u7528\u7684\u5b58\u50a8\u5927\u5c0f\u3002"),Object(o.b)("p",null,"\u4ea4\u6613\u6267\u884c\u540e\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"Receipt")," \u4e2d\uff0c\u5305\u542b\u4e86\u51e0\u4e2a\u5173\u4e8e\u5b58\u50a8\u53d8\u5316\u7684\u5b57\u6bb5\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storageCollateralized")," \u672c\u6b21\u4ea4\u6613\u4e3a\u5b58\u50a8\u62b5\u62bc\u7684 CFX \u6570\u91cf"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storageCoveredBySponsor")," \u672c\u6b21\u4ea4\u6613\u7684\u5b58\u50a8\u62b5\u62bc\u662f\u5426\u7531\u8d5e\u52a9\u5546\u8d5e\u52a9"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storageReleased")," \u672c\u6b21\u4ea4\u6613\u91ca\u653e\u7684\u5b58\u50a8")),Object(o.b)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_getCollateralForStorage")," \u65b9\u6cd5\u67e5\u8be2\u67d0\u4e2a\u5730\u5740\u5f53\u524d\u6240\u62b5\u62bc\u7684\u5b58\u50a8\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3a bytes\uff0c\u8be5\u503c\u9664\u4ee5 1024 \u5219\u4e3a\u4e3a\u5b58\u50a8\u62b5\u62bc\u7684 CFX \u6570\u91cf\u3002\u53e6\u5916\u8be5\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_getAccount")," \u65b9\u6cd5\u83b7\u53d6\uff0c\u8fd4\u56de\u4fe1\u606f\u5305\u542b ",Object(o.b)("inlineCode",{parentName:"p"},"collateralForStorage")," \u5b57\u6bb5\u3002"))}p.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,m=u["".concat(c,".").concat(s)]||u[s]||d[s]||o;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},205:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/storage-formula-635173b54f6e13ba21a689cc691d4ecd.png"}}]);
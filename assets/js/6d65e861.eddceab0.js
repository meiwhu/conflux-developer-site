(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{133:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(3),l=t(7),i=(t(0),t(187)),c={},r={unversionedId:"sending-tx/zh/transaction-stage-explain",id:"sending-tx/zh/transaction-stage-explain",isDocsHomePage:!1,title:"Transaction stages",description:"\u53d1\u9001\u4ea4\u6613\u662f\u533a\u5757\u94fe\u4e16\u754c\u7684\u6700\u9891\u7e41\u64cd\u4f5c\uff0c\u4ea4\u6613\u4ece\u5f00\u59cb\u6784\u9020\u5230\u6700\u7ec8\u4e0a\u94fe\u5e76\u786e\u5b9a\uff0c\u4f1a\u7ecf\u5386\u591a\u4e2a\u9636\u6bb5\u3002\u5145\u5206\u4e86\u89e3\u4ea4\u6613\u7684\u5404\u4e2a\u9636\u6bb5\u5c06\u6709\u52a9\u4e8e\u7528\u6237\u548c\u5f00\u53d1\u8005\u66f4\u597d\u7684\u67e5\u627e\u4ea4\u6613\u53d1\u9001\u7684\u95ee\u9898\uff0c\u5e76\u6700\u7ec8\u786e\u4fdd\u4ea4\u6613\u88ab\u6210\u529f\u786e\u8ba4\u3002",source:"@site/docs/sending-tx/zh/transaction-stage-explain.md",sourceDirName:"sending-tx/zh",slug:"/sending-tx/zh/transaction-stage-explain",permalink:"/sending-tx/zh/transaction-stage-explain",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sending-tx/zh/transaction-stage-explain.md",version:"current",frontMatter:{}},b=[{value:"\u4ea4\u6613\u9636\u6bb5\u4ecb\u7ecd",id:"\u4ea4\u6613\u9636\u6bb5\u4ecb\u7ecd",children:[{value:"\u51c6\u5907\u4ea4\u6613\u53d1\u9001\u8d26\u6237\u79c1\u94a5\u548c\u5730\u5740",id:"\u51c6\u5907\u4ea4\u6613\u53d1\u9001\u8d26\u6237\u79c1\u94a5\u548c\u5730\u5740",children:[]},{value:"\u51c6\u5907\u4ea4\u6613\u5143\u4fe1\u606f\uff0c\u5e76\u8fdb\u884c\u7b7e\u540d\u548c\u7f16\u7801",id:"\u51c6\u5907\u4ea4\u6613\u5143\u4fe1\u606f\uff0c\u5e76\u8fdb\u884c\u7b7e\u540d\u548c\u7f16\u7801",children:[]},{value:"\u53d1\u9001 RawTransaction \u5230\u8282\u70b9\u4ea4\u6613\u6c60",id:"\u53d1\u9001-rawtransaction-\u5230\u8282\u70b9\u4ea4\u6613\u6c60",children:[]},{value:"\u77ff\u5de5\u6253\u5305\u4ea4\u6613",id:"\u77ff\u5de5\u6253\u5305\u4ea4\u6613",children:[]},{value:"\u533a\u5757\u88ab\u5ef6\u8fdf\u6267\u884c",id:"\u533a\u5757\u88ab\u5ef6\u8fdf\u6267\u884c",children:[]},{value:"\u7ecf\u5386\u4e00\u5b9a\u6570\u91cf Epoch\uff0c\u4ea4\u6613\u88ab\u786e\u8ba4",id:"\u7ecf\u5386\u4e00\u5b9a\u6570\u91cf-epoch\uff0c\u4ea4\u6613\u88ab\u786e\u8ba4",children:[]},{value:"\u533a\u5757\u88ab PoS \u94fe\u6240\u5f15\u7528\uff0c\u4ea4\u6613\u88ab Finalize",id:"\u533a\u5757\u88ab-pos-\u94fe\u6240\u5f15\u7528\uff0c\u4ea4\u6613\u88ab-finalize",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"\u4ea4\u6613\u4e3a\u4ec0\u4e48\u53d1\u9001\u5931\u8d25",id:"\u4ea4\u6613\u4e3a\u4ec0\u4e48\u53d1\u9001\u5931\u8d25",children:[]},{value:"\u4e3a\u4ec0\u4e48\u4ea4\u6613\u4e00\u76f4\u6ca1\u6709\u4e0a\u94fe\u88ab\u6267\u884c",id:"\u4e3a\u4ec0\u4e48\u4ea4\u6613\u4e00\u76f4\u6ca1\u6709\u4e0a\u94fe\u88ab\u6267\u884c",children:[]},{value:"\u662f\u5426\u53ef\u4ee5\u53d6\u6d88\u6216\u8005\u66ff\u6362\u67d0\u7b14\u4ea4\u6613",id:"\u662f\u5426\u53ef\u4ee5\u53d6\u6d88\u6216\u8005\u66ff\u6362\u67d0\u7b14\u4ea4\u6613",children:[]},{value:"\u5982\u4f55\u7ed9\u4ea4\u6613\u52a0\u901f",id:"\u5982\u4f55\u7ed9\u4ea4\u6613\u52a0\u901f",children:[]}]}],o={toc:b};function p(e){var n=e.components,c=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,c,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u53d1\u9001\u4ea4\u6613\u662f\u533a\u5757\u94fe\u4e16\u754c\u7684\u6700\u9891\u7e41\u64cd\u4f5c\uff0c\u4ea4\u6613\u4ece\u5f00\u59cb\u6784\u9020\u5230\u6700\u7ec8\u4e0a\u94fe\u5e76\u786e\u5b9a\uff0c\u4f1a\u7ecf\u5386\u591a\u4e2a\u9636\u6bb5\u3002\u5145\u5206\u4e86\u89e3\u4ea4\u6613\u7684\u5404\u4e2a\u9636\u6bb5\u5c06\u6709\u52a9\u4e8e\u7528\u6237\u548c\u5f00\u53d1\u8005\u66f4\u597d\u7684\u67e5\u627e\u4ea4\u6613\u53d1\u9001\u7684\u95ee\u9898\uff0c\u5e76\u6700\u7ec8\u786e\u4fdd\u4ea4\u6613\u88ab\u6210\u529f\u786e\u8ba4\u3002"),Object(i.b)("p",null,"\u4ea4\u6613\u4ece\u6784\u9020\u5230\u786e\u8ba4\u4f1a\u7ecf\u5386\u5982\u4e0b\u51e0\u4e2a\u9636\u6bb5\uff1a"),Object(i.b)("ol",{start:0},Object(i.b)("li",{parentName:"ol"},"\u51c6\u5907\u4ea4\u6613\u53d1\u9001\u65b9\uff08",Object(i.b)("inlineCode",{parentName:"li"},"from"),"\uff09\u7684\u79c1\u94a5\u548c\u5730\u5740"),Object(i.b)("li",{parentName:"ol"},"\u51c6\u5907\u4ea4\u6613\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"meta \u4fe1\u606f"),"\uff0c\u7ec4\u88c5\u540e\u8fdb\u884c ",Object(i.b)("inlineCode",{parentName:"li"},"\u7b7e\u540d")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},"\u7f16\u7801")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"\u539f\u59cb\u4ea4\u6613(RawTransaction)")),Object(i.b)("li",{parentName:"ol"},"\u5c06 ",Object(i.b)("inlineCode",{parentName:"li"},"RawTransaction")," \u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_sendRawTransaction")," RPC \u65b9\u6cd5\u53d1\u9001\u7ed9 fullnode -> \u4ea4\u6613\u88ab\u653e\u5165\u4ea4\u6613\u6c60"),Object(i.b)("li",{parentName:"ol"},"\u4ea4\u6613\u88ab\u77ff\u5de5\u6253\u5305\u8fdb\u67d0\u4e2a\u533a\u5757 -> Minded in Block"),Object(i.b)("li",{parentName:"ol"},"Defer 5 \u4e2a epoch -> Executed"),Object(i.b)("li",{parentName:"ol"},"\u7b49\u5f85\u5927\u7ea6 50 \u4e2a epoch -> Confirmed"),Object(i.b)("li",{parentName:"ol"},"\u7b49\u5f85\u88ab PoS \u94fe\u6240\u5f15\u7528 -> Finalized")),Object(i.b)("p",null,Object(i.b)("img",{alt:"TX stages",src:t(204).default})),Object(i.b)("h2",{id:"\u4ea4\u6613\u9636\u6bb5\u4ecb\u7ecd"},"\u4ea4\u6613\u9636\u6bb5\u4ecb\u7ecd"),Object(i.b)("h3",{id:"\u51c6\u5907\u4ea4\u6613\u53d1\u9001\u8d26\u6237\u79c1\u94a5\u548c\u5730\u5740"},"\u51c6\u5907\u4ea4\u6613\u53d1\u9001\u8d26\u6237\u79c1\u94a5\u548c\u5730\u5740"),Object(i.b)("p",null,"\u6240\u6709\u53d1\u9001\u7684\u4ea4\u6613\u90fd\u9700\u8981\u4f7f\u7528\u79c1\u94a5\u8fdb\u884c\u7b7e\u540d\uff0c\u624d\u80fd\u88ab\u533a\u5757\u94fe\u7f51\u7edc\u6240\u63a5\u53d7\u5e76\u6210\u529f\u6267\u884c\uff0c\u56e0\u6b64\u53d1\u9001\u4ea4\u6613\u524d\u9996\u5148\u9700\u8981\u51c6\u5907\u597d\u4ea4\u6613\u53d1\u9001\u65b9\u7684\u79c1\u94a5\uff0c\u901a\u8fc7\u79c1\u94a5\u53ef\u4ee5\u63a8\u5bfc\u51fa\u8d26\u6237\u7684\u5730\u5740\u3002"),Object(i.b)("p",null,"\u53e6\u5916\u4ea4\u6613\u7684\u53d1\u9001\u9700\u8981\u652f\u4ed8\u4e00\u5b9a\u7684 CFX \u624b\u7eed\u8d39\uff0c\u56e0\u6b64\u4ea4\u6613\u7684\u53d1\u9001\u65b9\u8d26\u6237\u9700\u8981\u4fdd\u8bc1\u6709\u4e00\u90e8\u5206 CFX \u624d\u80fd\u6210\u529f\u53d1\u9001\u4ea4\u6613\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"\u6d4b\u8bd5\u7f51"),"\u7684 CFX \u53ef\u4ee5\u901a\u8fc7",Object(i.b)("a",{parentName:"p",href:"http://faucet.confluxnetwork.org/"},"\u6c34\u9f99\u5934\u9886\u53d6"),"\u3002"),Object(i.b)("p",null,"\u5728 Conflux \u7f51\u7edc\u6709\u4e00\u79cd\u60c5\u51b5\u4e0d\u9700\u8981\u53d1\u9001\u65b9\u652f\u4ed8\u4ea4\u6613\u7684\u624b\u7eed\u8d39\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u4ea4\u6613\u7684\u63a5\u6536\u65b9\u662f\u5408\u7ea6"),Object(i.b)("li",{parentName:"ol"},"\u6709\u4eba\u5bf9\u5408\u7ea6\u7684\u71c3\u6c14\u548c\u5b58\u50a8\u8fdb\u884c\u4e86\u8d5e\u52a9"),Object(i.b)("li",{parentName:"ol"},"\u4ea4\u6613\u53d1\u9001\u65b9\u5730\u5740\u5728\u5408\u7ea6\u71c3\u6c14\u4f7f\u7528\u767d\u540d\u5355\u4e2d\uff08\u53ef\u4ee5\u5c06\u767d\u540d\u5355\u5b8c\u5168\u6253\u5f00\uff0c\u8ba9\u6240\u6709\u4eba\u90fd\u53ef\u88ab\u8d5e\u52a9\uff09"),Object(i.b)("li",{parentName:"ol"},"\u4ea4\u6613\u6267\u884c\u82b1\u8d39\u7684\u71c3\u6c14\u8d39\u7528\u4f4e\u4e8e\u5408\u7ea6\u8d5e\u52a9\u5546\u6240\u8bbe\u7f6e\u7684\u71c3\u6c14\u4ee3\u4ed8\u4e0a\u9650")),Object(i.b)("p",null,"\u5982\u679c\u60f3\u4e86\u89e3 Conflux \u4ee3\u4ed8\u7684\u5177\u4f53\u7ec6\u8282\uff0c\u53ef\u4ee5\u67e5\u770b\u5185\u7f6e\u5408\u7ea6 ",Object(i.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/conflux-rust/internal_contract/internal_contract#sponsorwhitelistcontrol-contract"},"SponsorWhitelistControl")," \u4ecb\u7ecd"),Object(i.b)("h3",{id:"\u51c6\u5907\u4ea4\u6613\u5143\u4fe1\u606f\uff0c\u5e76\u8fdb\u884c\u7b7e\u540d\u548c\u7f16\u7801"},"\u51c6\u5907\u4ea4\u6613\u5143\u4fe1\u606f\uff0c\u5e76\u8fdb\u884c\u7b7e\u540d\u548c\u7f16\u7801"),Object(i.b)("p",null,"\u51c6\u5907\u597d\u53d1\u9001\u8d26\u6237\u7684\u79c1\u94a5\u4e4b\u540e\uff0c\u5c31\u9700\u8981\u6784\u5efa\u4ea4\u6613\u4e86\uff0c\u6784\u5efa\u4ea4\u6613\u7b2c\u4e00\u6b65\u9700\u8981\u6839\u636e\u4ea4\u6613\u7684\u53d1\u9001\u76ee\u7684\u786e\u5b9a\u4ea4\u6613\u7684\u5404\u4e2a\u5143\u4fe1\u606f\uff0c\u5305\u62ec:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"to"),"\uff1a\u4ea4\u6613\u63a5\u6536\u65b9"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"nonce"),"\uff1a \u4ea4\u6613\u7684\u987a\u5e8f\u53f7"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"value"),"\uff1a\u4ea4\u6613\u91d1\u989d\uff0c\u5355\u4f4d\u4e3a Drip"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data"),"\uff1a\u4ea4\u6613\u6570\u636e"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"chainId"),"\uff1a\u4ea4\u6613\u6267\u884c\u7684\u94fe ID"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"epochHeight"),"\uff1a\u4ea4\u6613\u6267\u884c\u76ee\u6807\u9ad8\u5ea6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gas"),"\uff1a\u71c3\u6c14\u4e0a\u9650"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gasPrice"),"\uff1a\u71c3\u6c14\u4ef7\u683c"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"storageLimit"),"\uff1a\u5b58\u50a8\u62b5\u62bc\u4e0a\u9650")),Object(i.b)("p",null,"\u5982\u679c\u60f3\u4e86\u89e3\u4ea4\u6613\u5404\u5b57\u6bb5\u7684\u542b\u4e49\u53ca\u6307\u5b9a\u65b9\u5f0f\u53ef\u53c2\u770b",Object(i.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/sending-tx/en/transaction_explain"},"Conflux \u4ea4\u6613\u8be6\u89e3")),Object(i.b)("p",null,"\u5143\u4fe1\u606f\u51c6\u5907\u597d\u4e4b\u540e\uff0c\u9700\u8981\u4ed6\u4eec\u6309\u7167\u56fa\u5b9a\u987a\u5e8f\u8fdb\u884c ",Object(i.b)("inlineCode",{parentName:"p"},"RLP")," \u7f16\u7801\uff0c\u5e76\u751f\u6210 hash\uff0c\u7136\u540e\u4f7f\u7528\u79c1\u94a5\u8fdb\u884c ",Object(i.b)("inlineCode",{parentName:"p"},"secp256k1")," \u7b7e\u540d\u64cd\u4f5c\uff0c\u5f97\u5230",Object(i.b)("inlineCode",{parentName:"p"},"\u4ea4\u6613\u7b7e\u540d"),"\u3002"),Object(i.b)("p",null,"\u6700\u7ec8\u5c06",Object(i.b)("inlineCode",{parentName:"p"},"\u5143\u4fe1\u606f"),"\u548c",Object(i.b)("inlineCode",{parentName:"p"},"\u7b7e\u540d"),"\u7ec4\u5408\u5230\u4e00\u5757\u8fdb\u884c RLP \u7f16\u7801\uff0c\u5e76\u8f6c\u6362\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"hex")," \u683c\u5f0f\uff0c\u5373\u5f97\u5230\u53ef\u53d1\u9001\u7ed9 Conflux \u8282\u70b9\u7684",Object(i.b)("inlineCode",{parentName:"p"},"\u539f\u59cb\u4ea4\u6613(RawTransaction)"),"\u3002"),Object(i.b)("p",null,"\u901a\u5e38\u94b1\u5305\u548c SDK \u4f1a\u81ea\u52a8\u8fdb\u884c\u4ea4\u6613\u7684\u7ec4\u88c5\uff0c\u7b7e\u540d\uff0c\u7f16\u7801\u7b49\u64cd\u4f5c\uff0c\u4e0d\u9700\u8981\u624b\u52a8\u5904\u7406\u3002"),Object(i.b)("h3",{id:"\u53d1\u9001-rawtransaction-\u5230\u8282\u70b9\u4ea4\u6613\u6c60"},"\u53d1\u9001 RawTransaction \u5230\u8282\u70b9\u4ea4\u6613\u6c60"),Object(i.b)("p",null,"\u5c06\u539f\u59cb\u4ea4\u6613\u901a\u8fc7 fullnode \u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction")," RPC \u65b9\u6cd5\uff0c\u53d1\u9001\u7ed9\u8282\u70b9\uff0c\u8282\u70b9\u9996\u5148\u4f1a\u5bf9\u4ea4\u6613\u8fdb\u884c\u68c0\u67e5\uff0c\u5982\u679c\u6784\u9020\u7684\u4ea4\u6613\u6709\u95ee\u9898,\u53d1\u9001\u5c06\u4f1a\u5931\u8d25\uff0c\u53ef\u80fd\u7684\u5931\u8d25\u60c5\u51b5\u6709\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"nonce \u8bbe\u7f6e\u9519\u8bef\uff08",Object(i.b)("inlineCode",{parentName:"li"},"\u91cd\u590d\u4f7f\u7528"),"\u6216",Object(i.b)("inlineCode",{parentName:"li"},"\u8bbe\u7f6e\u7684 nonce \u8fc7\u5927"),"\uff09"),Object(i.b)("li",{parentName:"ol"},"gas \u6570\u503c\u8fc7\u5927\uff0c\u8d85\u8fc7 1500w"),Object(i.b)("li",{parentName:"ol"},"\u7b7e\u540d\u9519\u8bef"),Object(i.b)("li",{parentName:"ol"},"chainId \u4f7f\u7528\u9519\u8bef"),Object(i.b)("li",{parentName:"ol"},"epochHeight \u4e0e\u5f53\u524d\u503c\u8ddd\u79bb\u8d85\u8fc7 10w"),Object(i.b)("li",{parentName:"ol"},"\u5176\u4ed6\uff1a\u4ea4\u6613\u6c60\u6ee1")),Object(i.b)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a\u8be5\u65b9\u6cd5\u4e0d\u4f1a\u68c0\u67e5\u53d1\u9001\u65b9\u7684\u4f59\u989d\u662f\u5426\u8db3\u591f\u652f\u4ed8\u4ea4\u6613\u91d1\u989d\u548c\u624b\u7eed\u8d39\uff0c\u5373\u4f7f\u53d1\u9001\u8d26\u6237\u4f59\u989d\u4e0d\u591f\uff0c\u4ea4\u6613\u4e5f\u80fd\u53d1\u9001\u6210\u529f\u3002"),Object(i.b)("p",null,"\u5982\u679c\u68c0\u67e5\u6ca1\u6709\u95ee\u9898\uff0c\u4ea4\u6613\u5c06\u4f1a\u88ab\u653e\u5165\u8282\u70b9\u7684\u4ea4\u6613\u6c60\uff0c\u5e76\u8fd4\u56de\u4ea4\u6613\u7684 hash."),Object(i.b)("p",null,"\u8fd9\u65f6\u901a\u8fc7 RPC \u65b9\u6cd5 ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getTransactionByHash")," \u53ef\u4ee5\u83b7\u53d6\u5230\u4ea4\u6613\uff0c\u4f46\u56e0\u4e3a\u4ea4\u6613\u8fd8\u6ca1\u6709\u88ab\u6253\u5305\uff0c\u6240\u4ee5\u4ea4\u6613\u7684\u533a\u5757\u4fe1\u606f(blockHash), \u53ca\u6267\u884c\u7ed3\u679c\u76f8\u5173\u5b57\u6bb5(contractCreated, status, transactionIndex) \u90fd\u4e3a\u7a7a\u3002"),Object(i.b)("p",null,"\u56e0\u4e3a\u4ea4\u6613\u8fd8\u672a\u6267\u884c\uff0c\u6240\u4ee5\u4ea4\u6613\u7684\u6536\u636e\uff08receipt\uff09\u8fd8\u672a\u4ea7\u751f\u3002"),Object(i.b)("h3",{id:"\u77ff\u5de5\u6253\u5305\u4ea4\u6613"},"\u77ff\u5de5\u6253\u5305\u4ea4\u6613"),Object(i.b)("p",null,"\u4ea4\u6613\u6c60\u4e2d\u7684\u4ea4\u6613\u53ef\u80fd\u4f1a\u6709\u4e09\u79cd\u72b6\u6001\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"nonce \u8df3\u8dc3"),Object(i.b)("li",{parentName:"ul"},"\u4f59\u989d\u4e0d\u591f"),Object(i.b)("li",{parentName:"ul"},"ready to pack")),Object(i.b)("p",null,"\u524d\u4e24\u79cd\u72b6\u6001\u7684\u4ea4\u6613\u5c06\u4f1a pending \u5728\u4ea4\u6613\u6c60\u5185\uff0c\u76f4\u5230\u4ea4\u6613 nonce \u4e4b\u524d\u6240\u6709\u7684 nonce \u88ab\u6267\u884c\u6216\u8005\u4f59\u989d\u8db3\u591f\u4e4b\u540e\u624d\u4f1a\u53d8\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"ready to pack"),"."),Object(i.b)("p",null,"\u8fbe\u5230\u6253\u5305\u6761\u4ef6\u7684\u4ea4\u6613\uff0c\u5c06\u4f1a\u5927\u81f4\u6309\u7167 gasPrice \u4ece\u9ad8\u5230\u4f4e\u7684\u987a\u5e8f\u88ab\u77ff\u5de5\u6253\u5305\u8fdb\u533a\u5757"),Object(i.b)("h3",{id:"\u533a\u5757\u88ab\u5ef6\u8fdf\u6267\u884c"},"\u533a\u5757\u88ab\u5ef6\u8fdf\u6267\u884c"),Object(i.b)("p",null,"Conflux \u7f51\u7edc\u6709\u4e00\u4e2a\u533a\u5757\u5ef6\u8fdf\u6267\u884c\u673a\u5236\uff0c\u5373\u533a\u5757\u88ab\u6253\u5305\u540e\uff0c\u4e0d\u4f1a\u7acb\u523b\u88ab\u6267\u884c\uff0c\u800c\u662f\u9700\u8981\u5ef6\u8fdf 5 \u4e2a Epoch \u624d\u4f1a\u6267\u884c\u3002\u533a\u5757\u6267\u884c\u672c\u8d28\u662f\u533a\u5757\u4e2d\u7684\u6240\u6709\u4ea4\u6613\u88ab\u6267\u884c\u3002"),Object(i.b)("p",null,"\u4ea4\u6613\u6267\u884c\u4e4b\u540e\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getTransactionByHash")," \u65b9\u6cd5\u83b7\u53d6\u7684\u4ea4\u6613\u4fe1\u606f\u91cc\u5c06\u4f1a\u5305\u542b blockHash, status \u7b49\u5b57\u6bb5\u3002"),Object(i.b)("p",null,"\u6b64\u65f6\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getTransactionReceipt")," \u65b9\u6cd5\u83b7\u53d6\u4ea4\u6613\u7684",Object(i.b)("inlineCode",{parentName:"p"},"\u6536\u636e(receipt)"),"\u4fe1\u606f\u3002"),Object(i.b)("p",null,"\u4ea4\u6613\u7684\u6267\u884c\u5e76\u4e0d\u4e00\u5b9a\u4f1a\u6210\u529f\uff0c\u53ef\u4ee5\u901a\u8fc7 transaction \u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"status")," \u5b57\u6bb5\u6216 receipt \u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"outcomeStatus")," \u5b57\u6bb5\u5224\u65ad\u4ea4\u6613\u7684\u72b6\u6001\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0")," - \u6267\u884c\u6210\u529f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1")," - \u6267\u884c\u5931\u8d25"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"2")," \u6216 ",Object(i.b)("inlineCode",{parentName:"li"},"null")," - \u4ea4\u6613\u672a\u6267\u884c\uff0c\u88ab\u8df3\u8fc7")),Object(i.b)("h3",{id:"\u7ecf\u5386\u4e00\u5b9a\u6570\u91cf-epoch\uff0c\u4ea4\u6613\u88ab\u786e\u8ba4"},"\u7ecf\u5386\u4e00\u5b9a\u6570\u91cf Epoch\uff0c\u4ea4\u6613\u88ab\u786e\u8ba4"),Object(i.b)("p",null,"\u4ea4\u6613\u88ab\u6267\u884c\u4e4b\u540e\u5e76\u4e0d\u610f\u5473\u7740\u4ea4\u6613\u7684\u72b6\u6001\u4e0d\u4f1a\u518d\u53d1\u751f\u53d8\u5316\uff0c\u56e0\u4e3a\u533a\u5757\u94fe\u6570\u636e\u94fe\u5f0f\u5b58\u50a8\u7ed3\u6784\u7684\u539f\u56e0\uff0c\u533a\u5757\u94fe\u53ef\u80fd\u4f1a\u56e0\u4e3a\u65b0\u533a\u5757\u7684\u5230\u8fbe\u6216\u4ea7\u751f\u800c\u5bfc\u81f4\u4e3b\u94fe\u53d1\u751f\u5206\u53c9\u6216\u504f\u79fb\uff0c\u4ece\u800c\u5bfc\u81f4\u67d0\u7b14\u4ea4\u6613\u88ab revert\u3002"),Object(i.b)("p",null,"\u901a\u5e38\u9700\u8981\u7b49\u5f85\u6253\u5305\u4ea4\u6613\u533a\u5757\u4e4b\u540e\uff0c\u518d\u4ea7\u751f\u4e00\u5b9a\u6570\u91cf\u7684\u65b0\u533a\u5757\uff0c\u4ea4\u6613\u624d\u80fd\u8fbe\u5230\u6700\u7ec8\u786e\u8ba4\u72b6\u6001\u3002"),Object(i.b)("p",null,"\u5728 Conflux \u7f51\u7edc\u4e2d\u53ef\u4ee5\u4f7f\u7528\u4ea4\u6613 ",Object(i.b)("inlineCode",{parentName:"p"},"receipt")," \u4e2d\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"epochNumber")," \u4e0e\u6700\u65b0\u7684 confirmed epochNumber \u8fdb\u884c\u6bd4\u8f83\uff0c\u5982\u679c\u6700\u65b0\u786e\u8ba4\u7684 epochNumber \u66f4\u5927\u7684\u8bdd\uff0c\u610f\u5473\u7740\u4ea4\u6613\u5df2\u88ab\u786e\u8ba4\u3002"),Object(i.b)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_epochNumber")," \u65b9\u6cd5\uff0c\u4f20\u9012 ",Object(i.b)("inlineCode",{parentName:"p"},"latest_confirmed")," \u53c2\u6570\uff0c\u6765\u83b7\u53d6\u6700\u65b0 Confirmed \u7684 EpochNumber"),Object(i.b)("h3",{id:"\u533a\u5757\u88ab-pos-\u94fe\u6240\u5f15\u7528\uff0c\u4ea4\u6613\u88ab-finalize"},"\u533a\u5757\u88ab PoS \u94fe\u6240\u5f15\u7528\uff0c\u4ea4\u6613\u88ab Finalize"),Object(i.b)("p",null,"Conflux \u4ece v1.2.0 \u5f00\u59cb\uff0c\u4e3a\u4e86\u9632\u6b62 51% \u7b97\u529b\u653b\u51fb\uff0c\u5f15\u5165\u4e86 PoS finality \u673a\u5236\uff0c\u7528\u4e8e\u5728\u5168\u7f51\u7b97\u529b\u8f83\u4f4e\u7684\u60c5\u51b5\u4e0b\uff0c\u4fdd\u62a4\u533a\u5757\u4e0d\u88ab revert\u3002"),Object(i.b)("p",null,"\u901a\u8fc7\u5f15\u5165\u4e00\u6761\u5355\u72ec\u7684 PoS \u94fe\uff0c\u6765\u5bf9 PoW \u7684\u533a\u5757\u8fdb\u884c finalize \u6295\u7968\uff0c\u6240\u6709\u88ab\u6295\u7968 finalized \u7684\u533a\u5757\u7684\u72b6\u6001\u5c06\u4f1a\u8fbe\u5230\u6700\u7ec8\u6001\u3002"),Object(i.b)("p",null,"\u4ece v1.2.0 \u5f00\u59cb\u4f1a\u5f15\u5165\u4e00\u4e2a\u65b0\u7684 Tag ",Object(i.b)("inlineCode",{parentName:"p"},"latest_finalized")," \u53ef\u4ee5\u4f7f\u7528\u6b64 tag\uff0c\u8bf7\u6c42 ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_epochNumber")," \u65b9\u6cd5\uff0c\u83b7\u53d6\u6700\u65b0\u88ab finalized \u7684 epochNumber"),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"\u4ea4\u6613\u4e3a\u4ec0\u4e48\u53d1\u9001\u5931\u8d25"},"\u4ea4\u6613\u4e3a\u4ec0\u4e48\u53d1\u9001\u5931\u8d25"),Object(i.b)("p",null,"\u5982\u679c\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction")," \u65b9\u6cd5\u53d1\u9001\u4ea4\u6613\u5931\u8d25\u7684\u8bdd\uff0c\u5927\u6982\u7387\u662f\u4ea4\u6613\u6784\u9020\u6709\u95ee\u9898\uff0c\u9700\u8981\u8c03\u6574\u4ea4\u6613\u7684\u5143\u5b57\u6bb5\u3002"),Object(i.b)("p",null,"\u5982\u679c\u8fd4\u56de\u7684\u9519\u8bef\u6d88\u606f\u4e3a txpool is full, \u53ef\u4ee5\u7b49\u4f1a\uff0c\u7a0d\u5fae\u63d0\u9ad8 gasPrice \u91cd\u65b0\u53d1\u9001\u4ea4\u6613\u8bd5\u8bd5\u3002"),Object(i.b)("h3",{id:"\u4e3a\u4ec0\u4e48\u4ea4\u6613\u4e00\u76f4\u6ca1\u6709\u4e0a\u94fe\u88ab\u6267\u884c"},"\u4e3a\u4ec0\u4e48\u4ea4\u6613\u4e00\u76f4\u6ca1\u6709\u4e0a\u94fe\u88ab\u6267\u884c"),Object(i.b)("p",null,"\u4ea4\u6613\u53d1\u9001\u6210\u529f\u4e4b\u540e\uff0c\u4f46\u8fdf\u8fdf\u6ca1\u6cd5\u5728 scan \u4e0a\u67e5\u5230\u4ea4\u6613\u88ab\u6210\u529f\u6267\u884c\uff0c\u90a3\u4ea4\u6613\u5927\u6982\u7387\u88ab pending \u5728\u4ea4\u6613\u6c60\u4e2d\uff0c\u53ef\u80fd\u7684\u60c5\u51b5\u6709\u4ee5\u4e0b\u4e09\u79cd:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u4ea4\u6613\u6ca1\u6709\u4f7f\u7528\u8fde\u7eed\u7684 nonce\uff1a\u9700\u8981\u6b63\u786e\u7684\u8bbe\u7f6e\u4ea4\u6613\u7684 nonce"),Object(i.b)("li",{parentName:"ol"},"\u53d1\u9001\u8d26\u6237\u7684\u4f59\u989d\u4e0d\u591f\uff1a\u7ed9\u53d1\u9001\u8d26\u6237\u8f6c\u8d26\uff0c\u4ee5\u83b7\u53d6\u8db3\u591f\u4f59\u989d"),Object(i.b)("li",{parentName:"ol"},"\u7f51\u7edc\u4ea4\u6613\u6bd4\u8f83\u62e5\u5835\uff1a\u5982\u679c\u7f51\u7edc\u6bd4\u8f83\u62e5\u5835\uff0c\u77ff\u5de5\u5927\u81f4\u4f1a\u6309\u7167 gasPrice \u4ece\u9ad8\u5230\u4f4e\u7684\u987a\u5e8f\uff0c\u6253\u5305\u4ea4\u6613\uff0c\u56e0\u6b64\u53ef\u4ee5\u901a\u8fc7\u63d0\u9ad8\u4ea4\u6613 gasPrice \u7684\u65b9\u5f0f\u6765\u52a0\u5feb\u4ea4\u6613\u6267\u884c")),Object(i.b)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getAccountPendingTransactions")," \u65b9\u6cd5\u83b7\u53d6\u7528\u6237\u5f53\u524d\u7684 Pending \u4ea4\u6613\u53ca\u539f\u56e0\u3002"),Object(i.b)("h3",{id:"\u662f\u5426\u53ef\u4ee5\u53d6\u6d88\u6216\u8005\u66ff\u6362\u67d0\u7b14\u4ea4\u6613"},"\u662f\u5426\u53ef\u4ee5\u53d6\u6d88\u6216\u8005\u66ff\u6362\u67d0\u7b14\u4ea4\u6613"),Object(i.b)("p",null,"\u5982\u679c\u4ea4\u6613\u8fd8\u672a\u88ab\u6253\u5305\u8fdb\u533a\u5757\u5904\u4e8e\u4ea4\u6613\u6c60\u4e2d\uff0c\u53ef\u4ee5\u91cd\u65b0\u53d1\u9001\u4e00\u7b14 nonce \u76f8\u540c\uff0cgasPrice \u66f4\u9ad8\u7684\u4ea4\u6613\u6765\u66ff\u6362\u6389\u539f\u6765\u90a3\u7b14\u4ea4\u6613\u3002"),Object(i.b)("p",null,"\u4ea4\u6613\u65e0\u6cd5\u53d6\u6d88\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u5c06\u539f\u4ea4\u6613\u66ff\u6362\u4e3a\u4e00\u7b14 value \u4e3a 0 \u7684\u4ea4\u6613\uff0c\u8fbe\u5230\u53d6\u6d88\u7684\u6548\u679c\u3002"),Object(i.b)("h3",{id:"\u5982\u4f55\u7ed9\u4ea4\u6613\u52a0\u901f"},"\u5982\u4f55\u7ed9\u4ea4\u6613\u52a0\u901f"),Object(i.b)("p",null,"\u5982\u679c\u60f3\u7ed9\u4ea4\u6613\u7684\u6267\u884c\u52a0\u901f\uff0c\u53ef\u4ee5\u63d0\u9ad8\u4ea4\u6613\u7684 gasPrice \u91cd\u65b0\u53d1\u9001"))}p.isMDXComponent=!0},187:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return j}));var a=t(0),l=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=l.a.createContext({}),p=function(e){var n=l.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return l.a.createElement(o.Provider,{value:n},e.children)},O={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},d=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,j=u["".concat(c,".").concat(d)]||u[d]||O[d]||i;return t?l.a.createElement(j,r(r({ref:n},o),{},{components:t})):l.a.createElement(j,r({ref:n},o))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=d;var r={};for(var b in n)hasOwnProperty.call(n,b)&&(r[b]=n[b]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var o=2;o<i;o++)c[o]=t[o];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},204:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/transaction-stages-8bcdab5873c9062a0705324908afa456.png"}}]);
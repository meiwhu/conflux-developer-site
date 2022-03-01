(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(185)),c={title:"Using Ledger with Fluent on Conflux Core",id:"using_ledger_on_core",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/using-ledger-on-core.md",keywords:["Ledger","Fluent","Conflux Core","Hardware wallet"]},i={unversionedId:"sdks-and-tools/en/using_ledger_on_core",id:"sdks-and-tools/en/using_ledger_on_core",isDocsHomePage:!1,title:"Using Ledger with Fluent on Conflux Core",description:"Introduction",source:"@site/docs/sdks-and-tools/en/using-ledger-on-core.md",sourceDirName:"sdks-and-tools/en",slug:"/sdks-and-tools/en/using_ledger_on_core",permalink:"/sdks-and-tools/en/using_ledger_on_core",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/using-ledger-on-core.md",version:"current",frontMatter:{title:"Using Ledger with Fluent on Conflux Core",id:"using_ledger_on_core",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/using-ledger-on-core.md",keywords:["Ledger","Fluent","Conflux Core","Hardware wallet"]},sidebar:"docs",previous:{title:"Tools",permalink:"/sdks-and-tools/en/conflux_tools"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Before You Start",id:"before-you-start",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Connecting Your Ledger Device to Fluent",id:"connecting-your-ledger-device-to-fluent",children:[]},{value:"Using Ledger: Sending Crypto Assets",id:"using-ledger-sending-crypto-assets",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],s={toc:l};function u(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://confluxnetwork.org"},"Conflux")," is a high performance distributed ledger based on the ",Object(a.b)("a",{parentName:"p",href:"/"},"Tree-Graph")," concensus protocol.\nConflux supports the Conflux native token ",Object(a.b)("a",{parentName:"p",href:"/introduction/en/conflux_basics"},"CFX"),", and numerous other crypto assets including ",Object(a.b)("a",{parentName:"p",href:"https://confluxscan.io/tokens/crc20"},"CRC20")," and ",Object(a.b)("a",{parentName:"p",href:"https://confluxscan.io/tokens/crc721"},"NFT")," tokens.\nYou can now use your ",Object(a.b)("strong",{parentName:"p"},"Ledger Nano S")," or ",Object(a.b)("strong",{parentName:"p"},"Ledger Nano X")," hardware wallet to securely store your assets on Conflux.\nIn this guide, we will show you how to install the Conflux app on your Ledger device, how to import your accounts into Fluent, and how to transfer assets on Conflux."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This guide is for Conflux Core. If you would like to use your Ledger device with the EVM-compatible Conflux eSpace, click ",Object(a.b)("a",{parentName:"p",href:"/guides/en/using_ledger_on_espace"},"here"),"."))),Object(a.b)("h2",{id:"before-you-start"},"Before You Start"),Object(a.b)("p",null,"Before you start, make sure that you have done the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Initialized your ",Object(a.b)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360000613793-Set-up-your-Ledger-Nano-S?docs=true"},"Nano S")," or ",Object(a.b)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360018784134-Set-up-your-Ledger-Nano-X?docs=true"},"Nano X")," device."),Object(a.b)("li",{parentName:"ul"},"Updated your ",Object(a.b)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360002731113-Update-Ledger-Nano-S-firmware?docs=true"},"Nano S")," or ",Object(a.b)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360013349800-Update-Ledger-Nano-X-firmware?docs=true"},"Nano X")," device to the latest firmware version."),Object(a.b)("li",{parentName:"ul"},"Installed ",Object(a.b)("a",{parentName:"li",href:"https://www.ledger.com/ledger-live"},"Ledger Live")," and updated it to the latest version."),Object(a.b)("li",{parentName:"ul"},"Installed ",Object(a.b)("a",{parentName:"li",href:"https://fluentwallet.com/"},"Fluent Wallet")," on a compatible desktop browser.")),Object(a.b)("p",null,"If you encounter any issues, find us on ",Object(a.b)("a",{parentName:"p",href:"https://discord.com/invite/aCZkf2C"},"Discord")," or ",Object(a.b)("a",{parentName:"p",href:"https://t.me/Conflux_English"},"Telegram"),", we are happy to help."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The Conflux Ledger app is currently available as an ",Object(a.b)("strong",{parentName:"p"},"unaudited developer release"),". Please use it at your own risk."))),Object(a.b)("p",null,"You can install the ",Object(a.b)("strong",{parentName:"p"},"Conflux app")," on your Ledger device by following these steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),Object(a.b)("li",{parentName:"ol"},"Unlock your device by entering your PIN."),Object(a.b)("li",{parentName:"ol"},"Open Ledger Live."),Object(a.b)("li",{parentName:"ol"},"Click on the gear icon in the top right corner to open Settings."),Object(a.b)("li",{parentName:"ol"},'Go to "Experimental features" and enable "Developer mode".'),Object(a.b)("li",{parentName:"ol"},'In the menu on the left, click "Manager" to open the Ledger Live app manager.'),Object(a.b)("li",{parentName:"ol"},'When your Ledger device displays "Allow Ledger manager", press both buttons to continue.'),Object(a.b)("li",{parentName:"ol"},'Back in Ledger Live, under the "App catalog" tab, enter "Conflux" in the search field.'),Object(a.b)("li",{parentName:"ol"},'Once Ledger Live shows the Conflux app, press "Install".')),Object(a.b)("p",null,"The Conflux app is now installed successfully."),Object(a.b)("p",null,Object(a.b)("img",{alt:"conflux-app-in-ledger-live",src:n(275).default})),Object(a.b)("h2",{id:"connecting-your-ledger-device-to-fluent"},"Connecting Your Ledger Device to Fluent"),Object(a.b)("p",null,"You can import accounts from your Ledger device into your Fluent wallet by following these steps:"),Object(a.b)("ol",{start:0},Object(a.b)("li",{parentName:"ol"},"Quit Ledger Live if it is currently opened."),Object(a.b)("li",{parentName:"ol"},"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),Object(a.b)("li",{parentName:"ol"},"Unlock your device by entering your PIN."),Object(a.b)("li",{parentName:"ol"},"Navigate to the Conflux app on your device and press both buttons to open it."),Object(a.b)("li",{parentName:"ol"},'In Fluent, open the menu in the top right corner and select "Account Management".'),Object(a.b)("li",{parentName:"ol"},'Click "Add" and select "Hardware Wallet". Read the instructions carefully and click "Ready".'),Object(a.b)("li",{parentName:"ol"},'On the "Connect your Ledger" page, click "Connect".'),Object(a.b)("li",{parentName:"ol"},'A browser popup will appear saying "Fluent wants to connect". Select your Ledger device from the list and click "Connect".'),Object(a.b)("li",{parentName:"ol"},'After a few seconds, the "Choose Address" page shows up in Fluent. Select one or more accounts that you would like to import to Fluent and click "Import".')),Object(a.b)("p",null,'Your account is now available in Fluent as "LedgerNanoS-1" (or similar).'),Object(a.b)("p",null,Object(a.b)("img",{alt:"add-ledger-accounts-in-fluent",src:n(276).default})),Object(a.b)("h2",{id:"using-ledger-sending-crypto-assets"},"Using Ledger: Sending Crypto Assets"),Object(a.b)("p",null,"Assuming your account on the Ledger device has some CFX tokens, the steps below show how to make a CFX transfer on Conflux."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If you do not have CFX, you can purchase at one of the exchanges listed ",Object(a.b)("a",{parentName:"p",href:"https://123cfx.com/#Exchanges"},"here"),"."))),Object(a.b)("p",null,"Make sure you have already imported your Ledger account into your Fluent wallet by following the steps in the previous section. Quit Ledger Live if it is currently opened."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),Object(a.b)("li",{parentName:"ol"},"Unlock your device by entering your PIN."),Object(a.b)("li",{parentName:"ol"},"Navigate to the ",Object(a.b)("strong",{parentName:"li"},"Conflux app")," on your device and press both buttons to open it."),Object(a.b)("li",{parentName:"ol"},'In Fluent, select your Ledger account (e.g., "LedgerNanoS-1").'),Object(a.b)("li",{parentName:"ol"},'Click "Send" and enter the recipient address (should start with ',Object(a.b)("inlineCode",{parentName:"li"},"0x"),")."),Object(a.b)("li",{parentName:"ol"},'Under "Token and Amount", enter the amount of CFX to transfer and click "Next".'),Object(a.b)("li",{parentName:"ol"},'Double check the transaction details, and click "Confirm".'),Object(a.b)("li",{parentName:"ol"},'Your Ledger device will now show "Review transaction". ',Object(a.b)("strong",{parentName:"li"},"Carefully review the transaction amount and receipient address")," by repeatedly pressing the right button on your device."),Object(a.b)("li",{parentName:"ol"},'If everything looks correct, press both buttons at the "Accept and send" screen to approve the transaction. Otherwise, press both buttons at the "Reject" screen to reject the transaction.')),Object(a.b)("p",null,'After the transaction has been approved, it is now signed and sent to the Conflux Network. You can see the transaction status in Fluent. If you click on "History", then click on the arrow icon at the top right corner of your transaction, you can see more details on ',Object(a.b)("a",{parentName:"p",href:"https://confluxscan.io"},"Conflux Scan"),"."),Object(a.b)("p",null,Object(a.b)("img",{alt:"send-tx-using-ledger",src:n(277).default})),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)("p",null,"You can learn more about Conflux at ",Object(a.b)("a",{parentName:"p",href:"https://confluxnetwork.org"},"confluxnetwork.org")," or at the ",Object(a.b)("a",{parentName:"p",href:"http://developer.confluxnetwork.org"},"Conflux Developer Portal"),". You can check transaction and account details on ",Object(a.b)("a",{parentName:"p",href:"https://confluxscan.io"},"Conflux Scan"),"."),Object(a.b)("p",null,"If you encounter any issues, find us on ",Object(a.b)("a",{parentName:"p",href:"https://discord.com/invite/aCZkf2C"},"Discord")," or ",Object(a.b)("a",{parentName:"p",href:"https://t.me/Conflux_English"},"Telegram"),", we are happy to help."))}u.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,h=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return n?r.a.createElement(h,i(i({ref:t},s),{},{components:n})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},275:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/conflux-app-in-ledger-live-1621e851c98e720df39966f63d885b05.png"},276:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/add-ledger-accounts-in-fluent-59146e34f75736c9851e3112f2288b96.png"},277:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/send-tx-using-ledger-b9ea17d09195baf480d270dcfdc5bcb5.png"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||r;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(184)),c={title:"Using Ledger with Metamask on Conflux eSpace",id:"using_ledger_on_espace",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/en/using-ledger-on-espace.md",keywords:["Ledger","Metamask","eSpace","Hardware wallet"]},l={unversionedId:"guides/en/using_ledger_on_espace",id:"guides/en/using_ledger_on_espace",isDocsHomePage:!1,title:"Using Ledger with Metamask on Conflux eSpace",description:"Introduction",source:"@site/docs/guides/en/using-ledger-on-espace.md",sourceDirName:"guides/en",slug:"/guides/en/using_ledger_on_espace",permalink:"/guides/en/using_ledger_on_espace",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/en/using-ledger-on-espace.md",version:"current",frontMatter:{title:"Using Ledger with Metamask on Conflux eSpace",id:"using_ledger_on_espace",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/guides/en/using-ledger-on-espace.md",keywords:["Ledger","Metamask","eSpace","Hardware wallet"]},sidebar:"evmSpace",previous:{title:"Getting Started with MetaMask",permalink:"/guides/en/user_metamask_interact_evmspace"},next:{title:"EVM space faucet",permalink:"/conflux-doc/docs/EVM-Space/evm_space_faucet"}},i=[{value:"Introduction",id:"introduction",children:[]},{value:"Before You Start",id:"before-you-start",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Setting up Metamask",id:"setting-up-metamask",children:[{value:"Connecting Your Metamask Wallet to Conflux eSpace",id:"connecting-your-metamask-wallet-to-conflux-espace",children:[]},{value:"Connecting Your Ledger Device to Metamask",id:"connecting-your-ledger-device-to-metamask",children:[]}]},{value:"Using Ledger: Sending Crypto Assets",id:"using-ledger-sending-crypto-assets",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],s={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/conflux-doc/docs/EVM-Space/intro_of_evm_space"},"Conflux eSpace")," is the new EVM-compatible subsystem of ",Object(r.b)("a",{parentName:"p",href:"https://confluxnetwork.org"},"Conflux"),".\nConflux eSpace supports the Conflux native token ",Object(r.b)("a",{parentName:"p",href:"http://localhost:3000/introduction/en/conflux_basics"},"CFX"),", and numerous other crypto assets including ",Object(r.b)("a",{parentName:"p",href:"https://evm.confluxscan.io/tokens"},"ERC20")," and ",Object(r.b)("a",{parentName:"p",href:"https://evm.confluxscan.io/tokens-nft"},"NFT")," tokens.\nYou can now use your ",Object(r.b)("strong",{parentName:"p"},"Ledger Nano S")," or ",Object(r.b)("strong",{parentName:"p"},"Ledger Nano X")," hardware wallet to securely store your assets on eSpace.\nIn this guide, we will show you how to install the Conflux eSpace app on your Ledger device, how to import your accounts into Metamask, and how to transfer assets on eSpace."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note: The Conflux eSpace Ledger app is not yet available in Ledger Live as it is currently under review.")),Object(r.b)("h2",{id:"before-you-start"},"Before You Start"),Object(r.b)("p",null,"Before you start, make sure that you have done the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Initialized your ",Object(r.b)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360000613793-Set-up-your-Ledger-Nano-S?docs=true"},"Nano S")," or ",Object(r.b)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360018784134-Set-up-your-Ledger-Nano-X?docs=true"},"Nano X")," device."),Object(r.b)("li",{parentName:"ul"},"Updated your ",Object(r.b)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360002731113-Update-Ledger-Nano-S-firmware?docs=true"},"Nano S")," or ",Object(r.b)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360013349800-Update-Ledger-Nano-X-firmware?docs=true"},"Nano X")," device to the latest firmware version."),Object(r.b)("li",{parentName:"ul"},"Installed ",Object(r.b)("a",{parentName:"li",href:"https://www.ledger.com/ledger-live"},"Ledger Live")," and updated it to the latest version."),Object(r.b)("li",{parentName:"ul"},"Installed ",Object(r.b)("a",{parentName:"li",href:"https://metamask.io"},"Metamask")," on a compatible desktop browser.")),Object(r.b)("p",null,"If you encounter any issues, find us on ",Object(r.b)("a",{parentName:"p",href:"https://discord.com/invite/aCZkf2C"},"Discord")," or ",Object(r.b)("a",{parentName:"p",href:"https://t.me/Conflux_English"},"Telegram"),", we are happy to help."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"You can install the ",Object(r.b)("strong",{parentName:"p"},"Conflux eSpace app")," on your Ledger device by following these steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),Object(r.b)("li",{parentName:"ol"},"Unlock your device by entering your PIN."),Object(r.b)("li",{parentName:"ol"},"Open Ledger Live."),Object(r.b)("li",{parentName:"ol"},'In the menu on the left, click "Manager" to open the Ledger Live app manager.'),Object(r.b)("li",{parentName:"ol"},'When your Ledger device displays "Allow Ledger manager", press both buttons to continue.'),Object(r.b)("li",{parentName:"ol"},'Back in Ledger Live, under the "App catalog" tab, enter "Conflux eSpace" in the search field.'),Object(r.b)("li",{parentName:"ol"},'Once Ledger Live shows the Conflux eSpace app, press "Install".'),Object(r.b)("li",{parentName:"ol"},"The Conflux eSpace app is now installed successfully.")),Object(r.b)("h2",{id:"setting-up-metamask"},"Setting up Metamask"),Object(r.b)("h3",{id:"connecting-your-metamask-wallet-to-conflux-espace"},"Connecting Your Metamask Wallet to Conflux eSpace"),Object(r.b)("p",null,"You can add the Conflux eSpace network to your Metamask wallet by following these steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open your browser and navigate to ",Object(r.b)("a",{parentName:"li",href:"https://chainlist.org"},"https://chainlist.org"),"."),Object(r.b)("li",{parentName:"ol"},'Search for "Conflux eSpace".'),Object(r.b)("li",{parentName:"ol"},'Click "Connect Wallet" to allow this site to send requests to Metamask.'),Object(r.b)("li",{parentName:"ol"},'Click "Add to Metamask" under "Conflux eSpace".'),Object(r.b)("li",{parentName:"ol"},'When Metamask prompts "Allow this site to add a network?", click "Approve".'),Object(r.b)("li",{parentName:"ol"},'When Metamask prompts "Allow this site to switch the network?", click "Approve".')),Object(r.b)("p",null,"Your Metamask wallet is now connected to Conflux eSpace. You can switch to other networks anytime through the network selection dropdown menu in Metamask."),Object(r.b)("p",null,'Alternatively, you add Conflux eSpace to Metamask manually under "Settings", "Networks", "Add Network":'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Network Name"),": Conflux eSpace"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"New RPC URL"),": ",Object(r.b)("a",{parentName:"li",href:"https://evm.confluxrpc.com"},"https://evm.confluxrpc.com")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Chain ID"),": 1030"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Currency Symbol"),": CFX"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Block Explorer URL"),": ",Object(r.b)("a",{parentName:"li",href:"https://evm.confluxscan.net"},"https://evm.confluxscan.net"))),Object(r.b)("h3",{id:"connecting-your-ledger-device-to-metamask"},"Connecting Your Ledger Device to Metamask"),Object(r.b)("p",null,"You can import accounts from your Ledger device into your Metamask wallet by following these steps:"),Object(r.b)("ol",{start:0},Object(r.b)("li",{parentName:"ol"},"Quit Ledger Live if it is currently opened."),Object(r.b)("li",{parentName:"ol"},"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),Object(r.b)("li",{parentName:"ol"},"Unlock your device by entering your PIN."),Object(r.b)("li",{parentName:"ol"},"Navigate to the Conflux eSpace app on your device and press both buttons to open it."),Object(r.b)("li",{parentName:"ol"},'In Metamask, navigate to "Settings", "Advanced", "Preferred Ledger Connection Type" and choose "WebHID".'),Object(r.b)("li",{parentName:"ol"},'Open the menu in the top right corner in Metamask and click "Connect Hardware Wallet".'),Object(r.b)("li",{parentName:"ol"},'Select "Ledger" and click "Continue".'),Object(r.b)("li",{parentName:"ol"},'A browser popup will appear saying "Metamask wants to connect to a HID device". Select your Ledger device from the list and click "Connect".'),Object(r.b)("li",{parentName:"ol"},'After a few seconds, the "Select an Account" page shows up in Metamask. Select one or more accounts that you would like to import to Metamask and click "Unlock".'),Object(r.b)("li",{parentName:"ol"},'Your account is now visible in Metamask as "Ledger 1".')),Object(r.b)("h2",{id:"using-ledger-sending-crypto-assets"},"Using Ledger: Sending Crypto Assets"),Object(r.b)("p",null,"Assuming your account on the Ledger device has some CFX tokens, the steps below show how to make a CFX transfer on Conflux eSpace."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note: If you do not have CFX, you can purchase at one of the exchanges listed ",Object(r.b)("a",{parentName:"em",href:"https://123cfx.com/#Exchanges"},"here"),".")),Object(r.b)("ol",{start:0},Object(r.b)("li",{parentName:"ol"},"Make sure you have already imported your Ledger account into your Metamask wallet by following the steps in the previous section. Quit Ledger Live if it is currently opened."),Object(r.b)("li",{parentName:"ol"},"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),Object(r.b)("li",{parentName:"ol"},"Unlock your device by entering your PIN."),Object(r.b)("li",{parentName:"ol"},"Navigate to the Conflux eSpace app on your device and press both buttons to open it."),Object(r.b)("li",{parentName:"ol"},'In Metamask, select your Ledger account (e.g., "Ledger 1").'),Object(r.b)("li",{parentName:"ol"},'Click "Send" and enter the recipient address (should start with ',Object(r.b)("inlineCode",{parentName:"li"},"0x"),")."),Object(r.b)("li",{parentName:"ol"},'Under "Amount", enter the amount of CFX to transfer and click "Next".'),Object(r.b)("li",{parentName:"ol"},'Double check the transaction details, and click "Confirm".'),Object(r.b)("li",{parentName:"ol"},'Your Ledger device will now show "Review transaction". ',Object(r.b)("strong",{parentName:"li"},"Carefully review the transaction amount and receipient address")," by repeatedly pressing the right button on your device."),Object(r.b)("li",{parentName:"ol"},'If everything looks correct, press both buttons at the "Accept and send" screen to approve the transaction. Otherwise, press both buttons at the "Reject" screen to reject the transaction.'),Object(r.b)("li",{parentName:"ol"},'After the transaction has been approved, it is now signed and sent to the Conflux Network. You can see the transaction status in Metamask. If you click on the transaction and click "View on block explorer", you can see more details on ',Object(r.b)("a",{parentName:"li",href:"https://evm.confluxscan.io"},"Conflux Scan"),".")),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"You can learn more about Conflux at ",Object(r.b)("a",{parentName:"p",href:"https://confluxnetwork.org"},"confluxnetwork.org")," or at the ",Object(r.b)("a",{parentName:"p",href:"http://developer.confluxnetwork.org"},"Conflux Developer Portal"),". You can check transaction and account details on ",Object(r.b)("a",{parentName:"p",href:"https://evm.confluxscan.io"},"Conflux Scan"),"."),Object(r.b)("p",null,"If you encounter any issues, find us on ",Object(r.b)("a",{parentName:"p",href:"https://discord.com/invite/aCZkf2C"},"Discord")," or ",Object(r.b)("a",{parentName:"p",href:"https://t.me/Conflux_English"},"Telegram"),", we are happy to help."))}p.isMDXComponent=!0}}]);
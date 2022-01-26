(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var l=n(3),a=n(7),o=(n(0),n(171)),r={id:"installation",title:"Compile from Source",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/install.md",keywords:["conflux","install"]},i={unversionedId:"conflux-doc/docs/installation",id:"conflux-doc/docs/installation",isDocsHomePage:!1,title:"Compile from Source",description:"Here is a step by step guide on how to build Conflux from the source code and get a node running.",source:"@site/docs/conflux-doc/docs/install.md",sourceDirName:"conflux-doc/docs",slug:"/conflux-doc/docs/installation",permalink:"/conflux-doc/docs/installation",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/install.md",version:"current",frontMatter:{id:"installation",title:"Compile from Source",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/install.md",keywords:["conflux","install"]},sidebar:"docs",previous:{title:"Get Conflux Client",permalink:"/run-a-node/en/how_to_get"},next:{title:"Run a Node",permalink:"/conflux-doc/docs/get_started"}},s=[{value:"Install Build Dependencies",id:"install-build-dependencies",children:[{value:"Linux",id:"linux",children:[]},{value:"OSX",id:"osx",children:[]},{value:"Windows",id:"windows",children:[]}]},{value:"Build from Source Code",id:"build-from-source-code",children:[]},{value:"Install Test Dependencies",id:"install-test-dependencies",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(l.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Here is a step by step guide on how to build Conflux from the source code and get a node running."),Object(o.b)("h2",{id:"install-build-dependencies"},"Install Build Dependencies"),Object(o.b)("p",null,"Conflux requires ",Object(o.b)("strong",{parentName:"p"},"Rust 1.51.0"),", ",Object(o.b)("inlineCode",{parentName:"p"},"clang"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"sqlite")," to build."),Object(o.b)("p",null,"We recommend installing Rust through ",Object(o.b)("a",{parentName:"p",href:"https://www.rustup.rs/"},"rustup"),". If you don't already have ",Object(o.b)("inlineCode",{parentName:"p"},"rustup")," or ",Object(o.b)("inlineCode",{parentName:"p"},"clang"),", you can install them like this:"),Object(o.b)("h3",{id:"linux"},"Linux"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n$ rustup install 1.51.0\n")),Object(o.b)("p",null,"Other dependencies including ",Object(o.b)("inlineCode",{parentName:"p"},"clang"),", ",Object(o.b)("inlineCode",{parentName:"p"},"cmake (version >= 3.12)")," and ",Object(o.b)("inlineCode",{parentName:"p"},"sqlite (version >= 3.8.3)")," can be installed with:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ubuntu 18.04:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# The latest cmake version on Ubuntu 18.04 is 3.10, so you'll need to install it from the Kitware repository.\n$ wget -O - https://apt.kitware.com/keys/kitware-archive-latest.asc 2>/dev/null | gpg --dearmor - | sudo tee /usr/share/keyrings/kitware-archive-keyring.gpg >/dev/null\n$ echo 'deb [signed-by=/usr/share/keyrings/kitware-archive-keyring.gpg] https://apt.kitware.com/ubuntu/ bionic main' | sudo tee /etc/apt/sources.list.d/kitware.list >/dev/null\n$ sudo apt-get update\n\n$ sudo apt-get install clang libsqlite3-dev pkg-config libssl-dev cmake\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CentOS 7 / RHEL:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ sudo yum install epel-release\n$ sudo yum install clang gcc gcc-c++ openssl-devel cmake3 wget\n\n# This may fail if you have installed cmake with version 2.8.\n# You can choose to uninstall cmake first.\n$ sudo ln -s /usr/bin/cmake3 /usr/bin/cmake\n\n# The official sqlite version on CentOS 7 is 3.7.17, so we need to install the latest version from the source code.\n# The source code have be downloaded from https://www.sqlite.org/download.html\n$ wget https://www.sqlite.org/2020/sqlite-autoconf-3320100.tar.gz\n$ tar xfvz sqlite-autoconf-3320100.tar.gz\n$ cd sqlite-autoconf-3320100\n$ ./configure\n$ make\n$ sudo make install\n")),Object(o.b)("h3",{id:"osx"},"OSX"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ curl https://sh.rustup.rs -sSf | sh\n$ rustup install 1.51.0\n")),Object(o.b)("p",null,"You might need to install ",Object(o.b)("inlineCode",{parentName:"p"},"brew")," if you need to use it to install ",Object(o.b)("inlineCode",{parentName:"p"},"clang"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"clang")," comes with Xcode command line tools, and can also be installed with homebrew:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ brew install llvm\n")),Object(o.b)("p",null,"You also need to install other dependencies with homebrew and set up the environment variables as described after the installation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ brew install openssl pkg-config cmake\n")),Object(o.b)("h3",{id:"windows"},"Windows"),Object(o.b)("p",null,"Make sure you have Visual Studio 2015 with C++ support installed. Next, download and run the ",Object(o.b)("inlineCode",{parentName:"p"},"rustup")," installer from ",Object(o.b)("a",{parentName:"p",href:"https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe"},"this link"),", start ",Object(o.b)("inlineCode",{parentName:"p"},"VS2015 x64 Native Tools Command Prompt"),", and use the following command to install and set up the ",Object(o.b)("inlineCode",{parentName:"p"},"msvc")," toolchain:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ rustup default stable-x86_64-pc-windows-msvc\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"clang")," can be installed with LLVM. Pre-built binaries can be downloaded from ",Object(o.b)("a",{parentName:"p",href:"https://releases.llvm.org/download.html#8.0.0"},"Download LLVM"),". Make sure to add LLVM to the system PATH as instructed."),Object(o.b)("p",null,"Make sure that these binaries are in your ",Object(o.b)("inlineCode",{parentName:"p"},"PATH")," (the instruction will be shown after installing ",Object(o.b)("inlineCode",{parentName:"p"},"rustup"),"). After that, you should be able to build Conflux from source."),Object(o.b)("h2",{id:"build-from-source-code"},"Build from Source Code"),Object(o.b)("p",null,"After installing the dependencies mentioned above, now you can clone our repository and start building the executable binary:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# download Conflux code\n$ git clone https://github.com/Conflux-Chain/conflux-rust\n$ cd conflux-rust\n$ git checkout v1.1.0\n\n\n# build in release mode\n$ cargo build --release\n")),Object(o.b)("p",null,"This produces an executable in the ",Object(o.b)("inlineCode",{parentName:"p"},"./target/release")," subdirectory."),Object(o.b)("p",null,"Note, when compiling a crate and you receive errors, it's in most cases your\noutdated version of Rust, or some of your crates have to be recompiled.\nCleaning the repository will most likely solve the issue if you are on the\nlatest stable version of Rust, try:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ cargo clean && cargo update\n")),Object(o.b)("p",null,"To start running a Conflux full node, you can follow the instructions at ",Object(o.b)("a",{parentName:"p",href:"/conflux-doc/docs/get_started#running-conflux-full-node"},"Running Conflux Full Node"),"."),Object(o.b)("h2",{id:"install-test-dependencies"},"Install Test Dependencies"),Object(o.b)("p",null,"We have a test framework written in Python3 (version>=3.6). Required packages can be installed by running"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ ./dev-support/dep_pip3.sh\n")),Object(o.b)("p",null,"Solidity compiler ",Object(o.b)("inlineCode",{parentName:"p"},"solc")," is also required, and be installed as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ubuntu")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ sudo add-apt-repository ppa:ethereum/ethereum\n$ sudo apt-get update\n$ sudo apt-get install solc\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"OSX")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ brew update\n$ brew upgrade\n$ brew tap ethereum/ethereum\n$ brew install solidity\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Others")),Object(o.b)("p",null,"You can follow the detailed instructions at ",Object(o.b)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/v0.5.7/installing-solidity.html#binary-packages"},"Installing the Solidity Compiler"),"."),Object(o.b)("p",null,"Note that latest solidity compiler may be incompatible with Conflux and may cause the integration test to fail. If you encounter such problem, please install solidity compiler version 0.5.2."),Object(o.b)("p",null,"To run tests, you can build the source code first and follow the instructions at ",Object(o.b)("a",{parentName:"p",href:"/conflux-doc/docs/get_started#running-test"},"Running Test"),"."))}u.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var l=n(0),a=n.n(l);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=l,m=d["".concat(r,".").concat(p)]||d[p]||b[p]||o;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
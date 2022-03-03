(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{186:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=o,f=p["".concat(a,".").concat(b)]||p[b]||u[b]||r;return n?i.a.createElement(f,s(s({ref:t},c),{},{components:n})):i.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(3),i=n(7),r=(n(0),n(186)),a={},s={unversionedId:"conflux-doc/docs/test_framework",id:"conflux-doc/docs/test_framework",isDocsHomePage:!1,title:"Test Framework",description:"The framework is written in python3. It can setup multiple Conflux nodes and test the distributed system behavior locally. It controls the nodes behavior by setting the node configurations, calling their RPCs, or sending them P2P messages directly.",source:"@site/docs/conflux-doc/docs/test_framework.md",sourceDirName:"conflux-doc/docs",slug:"/conflux-doc/docs/test_framework",permalink:"/conflux-doc/docs/test_framework",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-doc/docs/test_framework.md",version:"current",frontMatter:{}},l=[{value:"An Example Test",id:"an-example-test",children:[]},{value:"Sending P2P Messages",id:"sending-p2p-messages",children:[]},{value:"Configurations",id:"configurations",children:[]},{value:"Utility Function List",id:"utility-function-list",children:[]},{value:"Introduction to Existing Python Tests",id:"introduction-to-existing-python-tests",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The framework is written in ",Object(r.b)("inlineCode",{parentName:"p"},"python3"),". It can setup multiple Conflux nodes and test the distributed system behavior locally. It controls the nodes behavior by setting the node configurations, calling their RPCs, or sending them P2P messages directly."),Object(r.b)("p",null,"All related files are included in the directory  ",Object(r.b)("inlineCode",{parentName:"p"},"tests"),". "),Object(r.b)("p",null,"After compiling the source code with ",Object(r.b)("inlineCode",{parentName:"p"},"cargo build --release")," under the project directory, you can run ",Object(r.b)("inlineCode",{parentName:"p"},"tests/test_all.py")," to run all included python tests."),Object(r.b)("h2",{id:"an-example-test"},"An Example Test"),Object(r.b)("p",null,"Here is an example test. It setups 2 nodes, makes each node generate some blocks separately, and finally connects them to check if they can receive the blocks generated by the other."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"from test_framework.test_framework import ConfluxTestFramework\nfrom test_framework.util import *\n\nclass ExampleTest(ConfluxTestFramework):\n    def set_test_params(self):\n        self.setup_clean_chain = True\n        self.num_nodes = 2\n\n    def setup_network(self):\n        self.setup_nodes()\n        # connect_sample_nodes(self.nodes, self.log)\n\n    def run_test(self):\n        self.nodes[0].generate(1, 0)\n        assert (self.nodes[0].getblockcount() == 2)\n\n        self.nodes[1].generate(2, 0)\n        assert (self.nodes[1].getblockcount() == 3)\n\n        connect_nodes(self.nodes, 0, 1)\n        sync_blocks(self.nodes)\n        assert (self.nodes[0].getblockcount() == 4)\n        self.log.info(\"PASS\")\n\nif __name__ == '__main__':\n    ExampleTest().main()\n")),Object(r.b)("p",null,"The framework will"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Call ",Object(r.b)("inlineCode",{parentName:"li"},"set_test_params")," to set basic test initialization parameters."),Object(r.b)("li",{parentName:"ol"},"Setup the test directories and node configurations according to the parameters set in ",Object(r.b)("inlineCode",{parentName:"li"},"set_test_params"),". By default, a temp directory will be created and all files will be kept within it. For example, setting ",Object(r.b)("inlineCode",{parentName:"li"},"self.num_nodes = 2")," will initialize directories for two nodes."),Object(r.b)("li",{parentName:"ol"},"Call ",Object(r.b)("inlineCode",{parentName:"li"},"setup_network")," to add nodes and connect them. Here ",Object(r.b)("inlineCode",{parentName:"li"},"self.setup_nodes()")," will add 2 Conflux nodes by running pre-compiled Conflux executable binary within the directory setupped in step 2. We do not connect them here because we want nodes seperated at the beginning."),Object(r.b)("li",{parentName:"ol"},"Call ",Object(r.b)("inlineCode",{parentName:"li"},"run_test")," to run the actual test codes.")),Object(r.b)("p",null,"After running ",Object(r.b)("inlineCode",{parentName:"p"},"self.setup_nodes()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"self.nodes")," is a list of ",Object(r.b)("inlineCode",{parentName:"p"},"TestNode"),", and each can be used to interact with the corresponding Conflux node. For example, to get the number of blocks in node 0 by calling the RPC named ",Object(r.b)("inlineCode",{parentName:"p"},"getblockcount"),", you simply call ",Object(r.b)("inlineCode",{parentName:"p"},"self.nodes[0].getblockcount")," and an integer will be returned."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"connect_nodes(self.nodes, 0, 1)")," connects nodes 0 and 1. ",Object(r.b)("inlineCode",{parentName:"p"},"sync_blocks(self.nodes)")," waits until all nodes have the same pivot chain tip. Them are both implemented by calling RPCs, and more useful functions will be introduced in ",Object(r.b)("a",{parentName:"p",href:"#utility-function-list"},"Utility Function List"),"."),Object(r.b)("h2",{id:"sending-p2p-messages"},"Sending P2P Messages"),Object(r.b)("p",null,"After calling ",Object(r.b)("inlineCode",{parentName:"p"},"start_p2p_connection(self.nodes)"),", the field ",Object(r.b)("inlineCode",{parentName:"p"},"p2p")," of each ",Object(r.b)("inlineCode",{parentName:"p"},"TestNode")," will be initialized with a simulated Conflux node written in Python, and this simulated node will be connected to the Conflux process controled by the corresponding ",Object(r.b)("inlineCode",{parentName:"p"},"TestNode"),". After that, you can send and receive P2P messages within python code. Here is an example about how to use ",Object(r.b)("inlineCode",{parentName:"p"},"p2p")," to interact with the Conflux node."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"    def run_test(self):\n        def assert_length(_node, msg):\n            assert_equal(len(msg.headers), 1)\n        h = WaitHandler(self.nodes[0].p2p, GET_BLOCK_HEADERS_RESPONSE, assert_length)\n        self.nodes[0].p2p.send_protocol_msg(GetBlockHeaders(hashes=[self.nodes[0].p2p.genesis.hash]))\n        h.wait()\n")),Object(r.b)("p",null,"This example tries to get the genesis block header from node 0 with P2P requests (instead of using RPC), and asserts that only one header is returned."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"WaitHandler")," will wait for the first message of the designated message type and run a function on this received message. ",Object(r.b)("inlineCode",{parentName:"p"},"p2p.send_protocol_msg")," is used to send a rlp-encodable message. ",Object(r.b)("inlineCode",{parentName:"p"},"h.wait()")," waits and handles the first received ",Object(r.b)("inlineCode",{parentName:"p"},"GET_BLOCK_HEADERS_RESPONSE")," message. Note that ",Object(r.b)("inlineCode",{parentName:"p"},"WaitHandler")," starts listening right after it's initialized."),Object(r.b)("h2",{id:"configurations"},"Configurations"),Object(r.b)("p",null,"By default, tests will use the release version executable binary built by ",Object(r.b)("inlineCode",{parentName:"p"},"cargo"),". If you want to use a file at another path (e.g., a debug version binary), you can set the environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"CONFLUX")," to the full path of the used binary file before running the tests."),Object(r.b)("p",null,"TODO"),Object(r.b)("h2",{id:"utility-function-list"},"Utility Function List"),Object(r.b)("p",null,"TODO"),Object(r.b)("h2",{id:"introduction-to-existing-python-tests"},"Introduction to Existing Python Tests"),Object(r.b)("p",null,"TODO"))}d.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{177:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=i,f=u["".concat(o,".").concat(p)]||u[p]||b[p]||r;return t?a.a.createElement(f,c(c({ref:n},s),{},{components:t})):a.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var i=t(3),a=t(7),r=(t(0),t(177)),o={},c={unversionedId:"conflux-rust/core/src/pos/config/README",id:"conflux-rust/core/src/pos/config/README",isDocsHomePage:!1,title:"Diem Configuration",description:"The Diem Configuration describes the operational details for a Diem Node",source:"@site/docs/conflux-rust/core/src/pos/config/README.md",sourceDirName:"conflux-rust/core/src/pos/config",slug:"/conflux-rust/core/src/pos/config/README",permalink:"/conflux-rust/core/src/pos/config/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-rust/core/src/pos/config/README.md",version:"current",frontMatter:{}},l=[{value:"Organization",id:"organization",children:[]},{value:"Building a Test Network (TestNet)",id:"building-a-test-network-testnet",children:[]},{value:"Generating a new TestNet",id:"generating-a-new-testnet",children:[]},{value:"Internals",id:"internals",children:[{value:"Diem Node Configuration",id:"diem-node-configuration",children:[]},{value:"External Component Configurations",id:"external-component-configurations",children:[]},{value:"Shared Configuration",id:"shared-configuration",children:[]}]},{value:"Testing",id:"testing",children:[]},{value:"TODO",id:"todo",children:[]}],s={toc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Diem Configuration describes the operational details for a Diem Node\n(Validator or Full node) and provides the Diem Clients information on how to\nconnect to the blockchain and derive trust."),Object(r.b)("p",null,"Validators perform the BFT protocol and host the source of truth for the\nblockchain."),Object(r.b)("p",null,"Fullnodes offer replication services for the Diem blockchain as the primary\nentry point for Diem Clients to submit read requests (i.e., queries about the\nstate of the blockchain). In turn, Validators focus on optimizing transaction\nthroughput."),Object(r.b)("p",null,"Clients are any service interested in learning about the state of the\nblockchain or performing transactions."),Object(r.b)("p",null,"For a more detailed summary of the differences between a Validator and a\nFullnode, see this ",Object(r.b)("a",{parentName:"p",href:"https://developers.diem.com/blog/2020/01/23/full-node-basics"},"blog\npost"),"."),Object(r.b)("h2",{id:"organization"},"Organization"),Object(r.b)("p",null,"Diem Configuration is broken up into many utilities:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"src/config")," hosts the core configuration file structure"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"src/generator.rs")," assists in building sets of configurations for a Validator\nor Fullnode set"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"src/keys.rs")," wraps keys within the configuration files for testing purposes"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"config-builder")," extends ",Object(r.b)("inlineCode",{parentName:"li"},"src/generator.rs")," with a command-line utility\nand also provides support for generating genesis"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"generate-key")," generates an Ed25519 private key in Binary Canonical\nSerialization (BCS) format. This is used by the mint.")),Object(r.b)("p",null,"The separation of the ",Object(r.b)("inlineCode",{parentName:"p"},"config-builder")," into its own crate was dictated by the\nneed for ",Object(r.b)("inlineCode",{parentName:"p"},"config-builder")," to be able to generate genesis. Genesis requires the\nVM as a dependency, which is not a dependency for loading or using the\nconfiguration from many of the services."),Object(r.b)("h2",{id:"building-a-test-network-testnet"},"Building a Test Network (TestNet)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"config-builder")," builds an entire configuration for a Validator or FullNode,\nincluding the genesis blob. It takes as one of its input parameters an index that\nspecifies the specific node config to return. This can be used to create a Diem\nTestNet by constructing compatible configurations for the full set of Validators.\nSimilarly the tool can be used to add Fullnodes to an existing network.  Finally,\nit enables generation of a mint/faucet client capable of performing mint\ntransactions/creating accounts."),Object(r.b)("h2",{id:"generating-a-new-testnet"},"Generating a new TestNet"),Object(r.b)("p",null,"The only requirements for generating the configuration for a full TestNet are: (i)\nhaving IP addresses and ports for each Validator; (ii) a pre-agreed upon shared secret\nfor the Validator network; and (iii) a fixed ordering for the Validators in the\nnetwork. FullNode configs can either be newly generated added to existing configs."),Object(r.b)("p",null,"The configuration for validator ",Object(r.b)("inlineCode",{parentName:"p"},"I"),", can be produced by:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"config-builder validator \\\n    -a $PUBLIC_MULTIADDR_FOR_VALIDATOR_I \\\n    -b $PUBLIC_MULTIADDR_FOR_VALIDATOR_0 \\\n    -d /opt/diem/data \\\n    -i $I \\\n    -l $ANY_MULTIADDR_FOR_VALIDATOR_I \\\n    -n $TOTAL_NUMBER_OF_VALIDATORS \\\n    -o /opt/diem/etc \\\n    -s $SHARED_SECRET\n")),Object(r.b)("p",null,"As an example, this is the 2nd Validator (offset 1) in a 4 Validator TestNet:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'config-builder validator \\\n    -a "/ip4/1.1.1.2/tcp/7000" \\\n    -b "/ip4/1.1.1.1/tcp/7000" \\\n    -d /opt/diem/data \\\n    -i 1 \\\n    -l "/ip4/0.0.0.0/tcp/7000" \\\n    -n 4 \\\n    -o /opt/diem/etc \\\n    -s 0123456789abcdef101112131415161718191a1b1c1d1e1f2021222324252627\n')),Object(r.b)("p",null,"To create a mint service's key:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"config-builder faucet \\\n    -o /opt/diem/etc \\\n    -s 0123456789abcdef101112131415161718191a1b1c1d1e1f2021222324252627\n")),Object(r.b)("p",null,"Instantiating a FullNode config is similar to instantiating a Validator config.\nThough there are three possible routes: (i) creating a new node config; (ii)\nextending an existing Fullnode with another network; and (iii) extending a\nValidator with a Fullnode network. The input is similar for all three cases\nwith only the command (create vs. extend) differing between them. When\nextending a Validator, ",Object(r.b)("inlineCode",{parentName:"p"},"config-builder")," assumes that there are ",Object(r.b)("inlineCode",{parentName:"p"},"n + 1"),"\nFullnodes and gives the ",Object(r.b)("inlineCode",{parentName:"p"},"n + 1")," identity to the Validator. The ",Object(r.b)("inlineCode",{parentName:"p"},"n + 1")," peer id\nis also used to define the upstream peer for state sychronization and mempool.\nNote: currently, the tool does not support the creation of trees of Fullnode\nnetworks."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"config-builder full-node (create | extend) \\\n    -a $PUBLIC_MULTIADDR_FOR_FULL_NODE_I \\\n    -b $PUBLIC_MULTIADDR_FOR_FULL_NODE_0 \\\n    -d /opt/diem/data \\\n    -l $ANY_MULTIADDR_FOR_FULL_NODE_I \\\n    -n $TOTAL_NUMBER_OF_VALIDATORS \\\n    -o /opt/diem/etc \\\n    -s $VALIDATOR_SHARED_SECRET \\\n    [ -i $I -f $TOTAL_NUMBER_OF_FULL_NODES -c $FULL_NODE_SHARED_SECRET | -p ]\n")),Object(r.b)("p",null,"Here an example of extending the Validator configuration above with a FullNode\nconfiguration."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'config-builder full-node extend \\\n    -a "/ip4/1.1.1.2/tcp/7100" \\\n    -b "/ip4/1.1.1.2/tcp/7100" \\\n    -d /opt/diem/data \\\n    -l "/ip4/0.0.0.0/tcp/7100" \\\n    -n 4 \\\n    -o /opt/diem/etc \\\n    -s 0123456789abcdef101112131415161718191a1b1c1d1e1f2021222324252627 \\\n    -i 0 \\\n    -f 4 \\\n    -c 28292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f4041424344454547\n')),Object(r.b)("p",null,"Here is an example of creating a new FullNode that will connect to the\nValidator/FullNode hybrid configured above."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'config-builder full-node create \\\n    -a "/ip4/1.1.1.3/tcp/7100" \\\n    -b "/ip4/1.1.1.2/tcp/7100" \\\n    -d /opt/diem/fn/data \\\n    -l "/ip4/0.0.0.0/tcp/7100" \\\n    -n 4 \\\n    -o /opt/diem/fn/etc \\\n    -s 0123456789abcdef101112131415161718191a1b1c1d1e1f2021222324252627 \\\n    -i 1 \\\n    -f 4 \\\n    -c 28292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f4041424344454547\n')),Object(r.b)("p",null,"Similarly a public network could be added via:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'config-builder full-node create \\\n    -a "/ip4/1.1.1.2/tcp/7100" \\\n    -b "/ip4/1.1.1.2/tcp/7100" \\\n    -d /opt/diem/fn/data \\\n    -l "/ip4/0.0.0.0/tcp/7100" \\\n    -n 4 \\\n    -o /opt/diem/etc \\\n    -s 0123456789abcdef101112131415161718191a1b1c1d1e1f2021222324252627 \\\n    -p\n')),Object(r.b)("h2",{id:"internals"},"Internals"),Object(r.b)("p",null,"There are several different configurations contained within Diem Configuration."),Object(r.b)("h3",{id:"diem-node-configuration"},"Diem Node Configuration"),Object(r.b)("p",null,"The Diem Node configuration contains several modules:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"AdmissionControlConfig - Where a Diem Node hosts their AC"),Object(r.b)("li",{parentName:"ul"},"BaseConfig - Specifies the Node's role and base directories"),Object(r.b)("li",{parentName:"ul"},"ConsensusConfig - The behaviors of Consensus including the SafetyRules TCB"),Object(r.b)("li",{parentName:"ul"},"DebugInterface - A special gRPC service for identifying internals of the\nsystem"),Object(r.b)("li",{parentName:"ul"},"ExecutionConfig - The gRPC service endpoint and path to the genesis file\nthat defines the Move standard library and the initial Validator set."),Object(r.b)("li",{parentName:"ul"},"MempoolConfig - Parameters for configuring uncommitted transaction storage"),Object(r.b)("li",{parentName:"ul"},"MetricsConfig - Local storage for metrics"),Object(r.b)("li",{parentName:"ul"},"NetworkConfig - DiemNet configuration file that specifies peers with keys,\nseed addresses to connect to upstream peers, the local peers network keys,\nand other network configuration parameters"),Object(r.b)("li",{parentName:"ul"},"NodeConfig - Hosts all configuration files for a Diem Node"),Object(r.b)("li",{parentName:"ul"},"SafetyRulesConfig - Specifies the persistency strategy for Diem Safety\nRules"),Object(r.b)("li",{parentName:"ul"},"StateSyncConfig - Specifies parameters around state sycnhronization and the\nset of peers that provide the data"),Object(r.b)("li",{parentName:"ul"},"StorageConfig - Where the DiemDB is stored and its gRPC service endpoints")),Object(r.b)("h3",{id:"external-component-configurations"},"External Component Configurations"),Object(r.b)("p",null,"Outside of each Diem Node, external components can also be configured:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"KeyManagerConfig - This contains configurations details for starting and\noperating the Key Manager: the component service responsible for rotating\ncryptographic keys for Diem Nodes.")),Object(r.b)("h3",{id:"shared-configuration"},"Shared Configuration"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"LoggerConfig - Configures the logging service for each component"),Object(r.b)("li",{parentName:"ul"},"SecureBackendConfig - Configures the secure storage backend used by each component"),Object(r.b)("li",{parentName:"ul"},"TestConfig - Used during tests to hold account keys and temporary paths for\nthe configurations that will automatically be cleaned up after the test.")),Object(r.b)("h2",{id:"testing"},"Testing"),Object(r.b)("p",null,"Configuration tests serve several purposes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Identifying when defaults have changed"),Object(r.b)("li",{parentName:"ul"},"Ensuring that parsing / storing works consistently"),Object(r.b)("li",{parentName:"ul"},"Verifying that default filename assumptions are maintained")),Object(r.b)("p",null,"Several of the defaults in the configurations, in particular paths and\naddresses, have dependencies outside the Diem code base. These tests serve as\na reminder that there may be rammifications from breaking these tests, which\nmay impact production deployments."),Object(r.b)("p",null,"The test configs currently live in ",Object(r.b)("inlineCode",{parentName:"p"},"src/config/test_data"),"."),Object(r.b)("h2",{id:"todo"},"TODO"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add the ability to turn off services that are optional (e.g., debug\ninterface, AC gRPC)"),Object(r.b)("li",{parentName:"ul"},"Generating public networks is broken"),Object(r.b)("li",{parentName:"ul"},"Make SafetyRule use on disk by default and remove from config generator")))}d.isMDXComponent=!0}}]);
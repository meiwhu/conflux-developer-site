(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{171:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return h}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),f=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=f(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=f(t),u=a,h=l["".concat(c,".").concat(u)]||l[u]||b[u]||i;return t?o.a.createElement(h,r(r({ref:n},d),{},{components:t})):o.a.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var d=2;d<i;d++)c[d]=t[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return f}));var a=t(3),o=t(7),i=(t(0),t(171)),c={id:"node_config_example",title:"Fullnode Config File",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/apis/en/papers.md",keywords:["config"]},r={unversionedId:"apis/en/node_config_example",id:"apis/en/node_config_example",isDocsHomePage:!1,title:"Fullnode Config File",description:"Below is a mainnet node configuration file, it contains all the supported options along with some explanations in the comments. You can also find the latest version at conflux-rust Github repository's run folder. The file name is tethys.toml or testnet.toml. You can also find the log config file log.yaml in the same folder.",source:"@site/docs/apis/en/fullnode-config.md",sourceDirName:"apis/en",slug:"/apis/en/node_config_example",permalink:"/apis/en/node_config_example",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/apis/en/papers.md",version:"current",frontMatter:{id:"node_config_example",title:"Fullnode Config File",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/apis/en/papers.md",keywords:["config"]},sidebar:"api",previous:{title:"CLI Sub-commands",permalink:"/conflux-doc/docs/cli_sub_commands"},next:{title:"References",permalink:"/introduction/en/conflux_refs"}},s=[],d={toc:s};function f(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Below is a mainnet node configuration file, it contains all the supported options along with some explanations in the comments. You can also find the latest version at ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/tree/master/run"},"conflux-rust Github repository's run folder"),". The file name is ",Object(i.b)("inlineCode",{parentName:"p"},"tethys.toml")," or ",Object(i.b)("inlineCode",{parentName:"p"},"testnet.toml"),". You can also find the log config file ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/blob/master/run/log.yaml"},Object(i.b)("inlineCode",{parentName:"a"},"log.yaml"))," in the same folder."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'# bootnodes is a list of nodes that a conflux node trusts, and will be used to sync the blockchain when a node starts. \n# The value is a string divided by comma without space, and every entry is a node\n# A node is identified by cfxnode://NODEID@PUBLICIP:PORT\n# By default, no bootnodes are provided. What\'s provided here is a list of nodes that Conflux Team maintains across the world.\n\n# Mainnet\'s bootnodes\nbootnodes="cfxnode://dc79bc70833e797ba41eff5bda67c0484abca4918ef38289b5f96acd3daa890eadc85d46fc71f250a8ac51b0c4ab70b3812b1ed3c8f10a9e996b6663be34f1f1@47.88.79.174:32323,cfxnode://25265e1aa470d9d8667947820c4830a64e9f9678d6cb23ecde91e0447527f4926257b9637923a305ce91e15c929ed28164e6c32b76213764eb4a9624120ae1d7@39.97.180.246:32323,cfxnode://2b72adc3f52a80945db10fa35c3f6d02c73f65ff98b4a9eae4f7b244e8a51f01690e7dcef7a30bfb67fb07fcb2949e67c27487169623d40f6a9e55a8d04ca34f@39.107.143.220:32323,cfxnode://5da942ac58e392e9f68784876a1800ffe5756f8498aa1a7a9a869fe9370c2e838a114dfce33fff9674633700a0094aed8b46722fb6b03619842602a2473223de@39.97.170.199:32323,cfxnode://28d3cdf07b7deb41bb52dee0a952fc599f46f6b89cc513ecfd1020d5a66e73e7cfe68543e64962aefbcae7123a6c390a43144f5900f0bc181c3c89ffdf9ff81b@39.97.225.254:32323,cfxnode://9991bd3f5d0e614a3fcc8640fdfcbefbc0e95de7fa68baff4cb95f8614fa162b080a497bca5037196920bf68ed2554605f29b38ba2390b4bc8de91dac91eab34@35.177.114.1:32323,cfxnode://f94343e4c806b2968c5e4bf4cbc49736d04af03fab4b797bc11aea2af2cb23d706d1d9c5dfae430a2df1d7fe6a6a988aff43c50898dc087161e51fa69d603997@13.69.186.42:32323,cfxnode://ce6c447f1e6f8e43e07f9ee8d5b49180663ad934f7fffa0db654e69522a234628f966fc8ea0285c4357285885f188804ae09b5303a6c8e627149c2a41d5156a3@52.68.192.218:32323,cfxnode://012d0f7e59f62220e2a90e458cf0d65e5690d09dad59ce05f03f5878a7142bef9f412decdbefa7716e8331e94d68f05c2ce943db4ffa5440e496f2130d3feb50@23.96.108.96:32323,cfxnode://4eb526348481292722188664543d3dc80a5f2a35b578b2d72d54293ccc400fa87efb69e728dc56ef924be708ec8b33fa3648eca2a81e9e95f44cd0b3252fea77@34.201.56.239:32323,cfxnode://72d0736cc9fffc21306f097b8ce5099f62d72ec05bd94ceff5bd6ec6783801f2f7ad17a16f57499243925ed9633654081d3b4cb95bab7474144e92ffe39c9cc4@34.216.73.138:32323,cfxnode://7e2e4918d3aff819afdb8782c13544ea63193d82d9529dfbab3efb101754b322fc161c771a784e1b0420da8f78dbb127fbac24d1d626b634b462542ad8953bd7@52.231.28.50:32323,cfxnode://448839f2900f4a22ce611bd66a4fc93f8fa02a4b185679ba89078c0bf9c6c9328d3df77c4c8451fca12f2a8daab53b8f38762c14d6f24ba6897a9ddd79988474@18.228.10.237:32323,cfxnode://54e1d46b03527d79986e3c884e6ef6cec09cfc548f7ad20d8f0c996396cbe04bead6f689822eae2ab78b08e2be360371679d94f41fc75645ae166c557c3cd7e4@15.185.81.4:32323,cfxnode://5ec498fd7c8ff5389024f6a6e80ed75539c89dda8e655cae48c8ae883590acb940d856a601e7f788d5a2cf417eb5dee0fa9ae6c0a2ac8e6d8253cb7ac986a651@18.163.111.230:32323,cfxnode://8949669b26e015acd6c3e1ba5f87e2a7242a8611eec224428d5553005e45b4c6b2e352721be6334a445340441c8d6f8dfeab20472fbb0ce9733c293f0c1c781c@13.67.73.51:32323,cfxnode://3a25050e4d896b22a265170a8795ae5b22c48822a81c0c4a43fd3856f979b03c20abadaec90ffd083abac278cfc38087ef6902b1825b7f7c2fcc639f9e931bfb@13.209.20.158:32323,cfxnode://af63f3129791ab9afb1f74aeb0c9cf5931f8fb18f905f783c4bc7dff0421bfc83acc56ff41e3904bf0ad0477fb13d06cacbb8f337dcab10b9ae7efe787c02809@13.112.176.199:32323,cfxnode://c2b7613cdece4dd73f5107ab77c5c30663ac67366177bd4d4349b882e64cd6f62dd379d31e534b168421a76d3e84b9213894e58687b8c659718ce97d7a2148e7@50.18.129.125:32323,cfxnode://4c0a46dee4e1d2db9e0e1ce935f41edccfe0602efa7823713d93aea55bb5174ca957fcd27e1aa1b4d8d020565183ebc53674a73eb800ecc741d7aa853ab845eb@18.197.60.158:32323,cfxnode://3ec541c53224053294900568366e2c89851ff83f23aa45c8cafd3eb250cf1202afdf0bb62966e013176861c9165b6871e3cc522011074b20be863a43951af91c@35.178.198.71:32323,cfxnode://f31e7d2fdcffa1b25a6a6c9c1357a6804f8f426caf81ccda16291200055c46affdbfbfebebcca996ea7861631c9a0b11d70f07afeed71efa0a4f12aa8acfb55e@54.255.160.38:32323,cfxnode://49ff58db6b4c5f92c2145e69ea0625134cbe35885f0e5979191ba9c67e4c9374234ed7fbeb65f82d4d197568110a4f100f078bfbac896f391b362bec77be19ea@212.64.63.38:32323,cfxnode://97497107e94ac463f6bad526d74e0058d46154e97cbf758edaf3d360e2f3347ae5946ca337eb0d201df8f625e7ae5bfc32e8394d2ce37bd2dc35fa5a4bcecd01@8.131.69.64:32323,cfxnode://c22ad0736f5cc2cc3b11ce5f43345213c2e44994dfaa5e3b0cebe8bd9c78cc52e1a22949ff5953aea80476f648e42b502172e04629c172f4400a0af4caf97efb@8.131.68.192:32323,cfxnode://04cee414977f68a0c2f0215199dde4ec1c27350e447ea855ce000054336f4ccb1c43f0c5ebe8172ad51c7d7b88ac98c037a85ae949e79734449ac38a23fd1d60@212.64.62.252:32323,cfxnode://f1750b818c5828fc5f22667f4b45d4a39b17a1cf40f71ae8f74b6195485a93bf16892a3785bda36132ebae64b83b91b216eaccb7a02185a01f37c7ad89c513ad@101.132.133.254:32323,cfxnode://72a21ec3d2d7c5545b4a46656eaca6ab4ec3ac85628f665bd205e7c52273d345d1583efface277b967fca963a81fbf8b7a81ae97f0a46234cd5fb34853c95fd2@47.101.39.91:32323,cfxnode://b7aeba1f1b2b3e5dfdc7ac93df4281a440ccbdc89894444e094f15242ffa1578d90f9fd447b899be89a57542616e26a82180bd2bfb3b81f82a4dffdfe180f44e@8.210.110.149:32323,cfxnode://07faaf8be8bff4243b496363fb02bd0a21be97e291febcd9aabb29996de90d0a10065f3383beff09f05cb0bdfaa9655d90550c8abcbf97be0658ce6efd8f9b64@47.254.67.249:32323"\n\n# Testnet\'s bootnodes\n# bootnodes="cfxnode://604deed272ec2a6f75538f0852e9cd71c616b35655ea8331b5987b3cc682097da76b9c8d2e90601d818acfac54f15af08a6389af245d4149d7d7f4a952bebfb3@39.97.223.148:32323,cfxnode://77bd8823c286e6b159432607d309983eac76830ecdd2bb2b6be7bf3b8e90bbae92f980dd7c8a6c284670679090d3ebf8e43ef91755cdf2eb6caa76532400be4c@182.92.92.126:32323,cfxnode://6582f6e20cfb975ff0b1fe6cb1d97f1e85c0502d44de441f43b032d7c8b986ebbd6a52f228ca55639b49742505bcf3f541551b2485d248e041d9ff1389bb016d@59.110.70.5:32323,cfxnode://24caea3455cf5ff9bbc532c6c6ca39b7edd0ecbbf29725dccdd36b5be629f1b0967391fdd99e81f9e35eb48a85602b2cff7c4c6893b7a906cc6b832c09ae9f33@101.201.127.86:32323,cfxnode://d2d4d2421da4b3b7314b83da06a2ed803965968ebc1614ac41eec5391a136d681a1433dbb56d067ad7e6cab682f35454a87a96e65a3b7eac867eea36b5d8535b@123.57.45.90:32323,cfxnode://ba297dc48bbba48e48c2f01dd0478d3a128b49ba4eccc65d0b800677bb8cc8a72eda57395f5a4b54269ec93189127efbd8ed235836db505f00b0e4558c1c6d97@39.97.208.206:32323,cfxnode://31f9397cfe1bbbecd5667dd13a5b6629201d5bdb9709813c8ad45e21a7ff767f17eb296ee635bb6c1265293bc4ad864db4ca229ad415d31e39121bf2a52405f9@13.229.52.100:32323,cfxnode://a7052f8b9d263549f737334b3cfe4d073fbedf69a21f25754a49a5cd7e83eb998eac1b223e55ae37779c1537bdd429719d0da45637d2d65dbaa917ad2c7085f2@20.43.79.41:32323,cfxnode://869ad83c0f6d8d9f571f62e444dd9a00bb5291e05b65b2d3920db912cdaaa9f283e72a5638ec71aadeeb37f53cdf40fb041214a80d7a6748f6ba96ec62b2909f@137.135.25.219:32323"\n\n# Set the node type to Full node, Archive node, or Light node.\n# Possible values are "full", "archive", or "light".\n# The command line parameter `--full`, `--archive`, or `--light` will overwrite this parameter.\n#\n# node_type = "full"\n\n# Some preset develepment configurations.\n# It should not be set in production environment.\n#\n# For both `test` and `dev` modes, we will\n#     * Set initial difficulty to 4\n#\n# `test` mode is for Conflux testing and debugging, we will\n#     * Add latency to peer connections\n#     * Skip handshake encryption check\n#     * Skip header timestamp verification\n#     * Handle NewBlockHash even in catch-up mode\n#     * Allow data propagation test\n#     * Allow setting genesis accounts and generate tx from secrets\n#\n# `dev` mode is for users to run a single node that automatically\n#     generates blocks with fixed intervals\n#     * Open port 12535 for ws rpc if `jsonrpc_ws_port` is not provided.\n#     * Open port 12536 for tcp rpc if `jsonrpc_tcp_port` is not provided.\n#     * Open port 12537 for http rpc if `jsonrpc_http_port` is not provided.\n#     * generate blocks without PoW (either after receiving a transaction or\n#       in fixed period, see ``dev_block_interval_ms\'\')\n#     * Skip catch-up mode even there is no peer\n#\n# mode = ""\n\n# If you want to setup a single node running Conflux for development. You should\n# COMMENT the bootnodes setting and you should use the following parameters:\n#\n# mode = "dev"\n\n# ``dev_block_interval_ms\'\' controls the mining rate in the dev mode.\n#\n# If it\'s not set, blocks will only be generated after receiving a transaction.\n# Otherwise, blocks are automatically generated every ``dev_block_interval_ms\'\' ms.\n#\n# dev_block_interval_ms = 250\n\n# ----------------- Mining Configuration -----------------\n\n# `mining_author` is the address to receive mining rewards.\n# If set, `mining_type` will be "stratum" by default.\n# The value is a 40-digit hex string or a valid CIP-37 base32 address.\n# By default, the value is not set.\n#\n# mining_author="cfx:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg"\n\n# `mining_type` controls whether the mining process goes through the\n# stratum protocol, uses CPU-mining, or disable mining.\n# Possible values are "stratum", "cpu", and "disable".\n# The default value is "stratum" if `mining_author` is set.\n# If the value is set and not "disable", `mining_author` must be set.\n#\n# mining_type = "stratum"\n\n# Listen address for stratum\n#\n# stratum_listen_address = "127.0.0.1"\n\n# Port for stratum.\n#\n# stratum_port = 32525\n\n# Window size for PoW manager\n#\n# pow_problem_window_size = 1\n\n# Secret key for stratum.\n# The value is 64-digit hex string.\n# If not set, the RPC subscription will not check the authorization.\n#\n# stratum_secret = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"\n\n# -------------- Log-related Configuration -------------\n\n# `log_conf` the path of the log4rs configuration file. The configuration in the file will overwrite the value set by `log_level`.\n# By default, the value is not set.\n#\nlog_conf="log.yaml"\n\n# `log_file` is the path of the log file"\n# If not set, the log will only be printed to stdout, and not persisted to files.\n# By default, the value is not set.\n#\n# log_file="conflux.log"\n\n# `log_level` is the printed log level.\n# The value should be one of "error", "warn", "info", "debug", "trace", "off"\n#\n# log_level="info"\n\n# -------------- Network Configuration -------------\n\n# `public_address` is the address of this node used for other nodes to connect to.\n# If not set, the process will try to find out the public IP with best effort, and use `tcp_port` as public port.\n# However, it\'s HIGHLY RECOMMENDED to set the value manually, especially for machines with IP translated by NAT.\n#\n# public_address="1.1.1.1"\n\n# `tcp_port` is the TCP port that the process listens for P2P messages. The default is 32323.\n#\n# tcp_port=32323\n\n# `public_tcp_port` is the public TCP port that other nodes should connect to. It might be different from \n# the tcp_port in case the machine is behind a NAT. The default is as same as `tcp_port`.\n#\n# public_tcp_port=32323\n\n# `udp_port` is the UDP port used for node discovery.\n# If not set, it will be the same as `port`.\n#\n# udp_port=32323\n\n# `jsonrpc_http_keep_alive` is used to control whether to set KeepAlive for rpc HTTP connections.\n#\n# jsonrpc_http_keep_alive=false\n\n# `jsonrpc_cors` is used to control the rpc domain validation policies.\n# The value should be "none", "all", or a list string split by commas without space.\n# If not set, domain validation is disabled.\n# By default, the values are not set. \n#\n# jsonrpc_cors="all"\n\n# The following parameters are the ports for the node to provide rpc service. If not set,\n# the node will not start rpc services. By default, the `jsonrpc_local_http_port` is set,\n# so as to support the Conflux CLI subcommands. What\'s provided here is the recommended\n# value if you want to start rpc services for other front-end applications.\n# Note that to serve transaction-related RPCs, `persist_tx_index` should also be set to `true` or\n# the node will only be able to handle very recent transactions.\n#\n# jsonrpc_ws_port=12535\n# jsonrpc_tcp_port=12536\n# jsonrpc_http_port=12537\n# jsonrpc_local_tcp_port=12538\njsonrpc_local_http_port=12539\n\n# Specify the APIs available through the public JSON-RPC interfaces (HTTP, TCP, WebSocket)\n# using a comma-delimited list of API names.\n# Possible names are: all, safe, cfx, debug, pubsub, test, trace.\n# `safe` only includes `cfx` and `pubsub`.\n#\n# public_rpc_apis = "safe"\n\n# --------------- Performance-related Network Parameters ----------------------\n\n# Timeout for block-related requests (GetBlock, GetCmpctBlock, GetBlockTxn)\n#\n# blocks_request_timeout_ms = 20_000\n\n# Time interval to check timeout requests periodically.\n#\n# check_request_period_ms=5000\n\n# Chunk size for snapshot retrieval\n#\n# chunk_size_byte = 4194304\n\n# Control whether to demote peers to unstrusted\n#\n# demote_peer_for_timeout = false\n\n# Maximum network queue size. When reached, the queue will refuse any new data.\n# The unit is MB.\n#\n# egress_queue_capacity = 256\n\n# Minimum queue size for throttling in manner of ratio.\n# The unit is MB.\n#\n# egress_min_throttle = 10\n\n# Maximum queue size for throttling in manner of ratio.\n# The unit is MB.\n#\n# egress_max_throttle = 10\n\n# Time interval to to garbage-collect not block-graph-ready blocks periodically.\n#\n# expire_block_gc_period_s = 900\n\n# Timeout for header-related requests (GetBlockHeaders)\n#\n# headers_request_timeout_ms=10_000\n\n# Time interval to broadcast Status as heartbeat periodically\n#\n# heartbeat_period_interval_ms = 30_000\n\n# Time to maintain transaction digests inflight status.\n#\n# inflight_pending_tx_index_maintain_timeout_ms = 30_000\n\n# Maximum number of timeout allowed in `timeout_observing_period_s`.\n# If the max is reached, the peer will be disconnected.\n# `demote_peer_for_timeout` controls if the peer will be demoted in this case.\n#\n# max_allowed_timeout_in_observing_period = 10\n\n# Maximum number of peers to download state chunks from.\n#\n# max_download_state_peers = 8\n\n# Maximum number of handshaking sessions at the same time.\n#\n# max_handshakes = 64\n\n# Maximum number of incoming connections.\n#\n# max_incoming_peers = 64\n\n# Maximum number of outgoing connections.\n#\n# max_outgoing_peers = 16\n\n# Maximum number of outgoing connections to archive nodes. 0 represents\n# not required to connect to archive nodes. E.g. light node or full node\n# need not to connect to archive nodes.\n#\n# max_outgoing_peers_archive = 0\n\n# Maximum number of inflight requests for each peer.\n# If the max is reached, requests will be buffered until inflight requests are responded or timeout.\n#\n# max_inflight_request_count = 64\n\n# Maximum number of peers to broadcast transaction digests.\n#\n# max_peers_tx_propagation = 128\n\n# Maximum cached received block size waiting to be processed.\n#\n# max_unprocessed_block_size_mb = 128\n\n# Minimum number of peers to broadcast transaction digests.\n#\n# min_peers_tx_propagation = 8\n\n# The time to maintain received transactions to avoid duplicated requests.\n#\n# received_tx_index_maintain_timeout_ms = 300_000\n\n# Whether to request blocks with public key during catch-up to avoid recovering\n# the public keys for transactions.\n#\n# request_block_with_public = false\n\n# Time interval to broadcast transaction digests periodically.\n#\n# send_tx_period_ms = 1300\n\n# Timeout for requesting snapshot candidate.\n#\n# snapshot_candidate_request_timeout_ms = 10_000\n\n# Timeout for requesting snapshot chunks.\n#\n# snapshot_chunk_request_timeout_ms = 30_000\n\n# Timeout for requesting snapshot manifests.\n#\n# snapshot_manifest_request_timeout_ms = 30_000\n\n# `throttling_conf` is configuration file in TOML format to throttle RPCs, P2P messages.\n# Throttling is enabled only when the parameter specified.\n#\n# throttling_conf="throttling.toml"\n\n# The time period to observe if a peers has too many timeouts.\n#\n# timeout_observing_period_s = 600\n\n# Timeout for transaction requests.\n#\n# transaction_request_timeout_ms = 30_000\n\n# Time to maintain information of sent-out transactions for answering requests.\n#\n# tx_maintained_for_peer_timeout_ms = 600_000\n\n# --------------- Peer Management Parameters -------------\n\n# Timeout duration for refreshing discovery protocol when there are NOT enough outgoing connections.\n#\n# discovery_fast_refresh_timeout_ms = 10_000\n\n# Timeout duration for initiating peer connection management.\n#\n# discovery_housekeeping_timeout_ms = 1_000\n\n# Period between consecutive rounds of the same current discovery process.\n#\n# discovery_round_timeout_ms = 500\n\n# `enable_discovery` is used to control whether the node will ask its neighbors for new peers\n# and whether it will respond to other nodes\' discovery requests.\n#\n# enable_discovery=true\n\n# `netconf_dir` is the directory to store network related persistent data, including `net_key`,\n# a list of trusted nodes and a list of untrusted nodes.\n#\n# By default, it is stored under the directory configured with `conflux_data_dir` with the directory name `net_config`.\n# If set, the directory path will not be related to `conflux_data_dir` anymore.\n#\n# netconf_dir="./blockchain_data/net_config"\n\n# `net_key` is the 256-bit private key to generate a unique node id for this node.\n# The value is a 64-digit hex string.\n# If not set, the node will try to read from the file "key" under the directory `netconf_dir`.\n# If the file is not found, the node will generate a random key.\n# By default, the value is not set.\n# If a node is restarted, it\'s suggested to keep the key unchanged.\n#\n# net_key="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"\n\n# Timeout duration for persisting node table.\n#\n# node_table_timeout_s = 300\n\n# Connection lifetime threshold for promotion.\n#\n# node_table_promotion_timeout_s = 259200\n\n\n# `session_ip_limits` limits the number of TCP connections per IP address or subnet for security consideration.\n# Its format is "n1,n2,n3,n4", where n1 is the quota of TCP connections for a single IP address, and n2/n3/n4\n# are the quotas for subnet a/b/c. The default value is "1,8,4,2", which means:\n#   1) Only 1 TCP connection allowed for a single IP address.\n#   2) 8 TCP connections allowd for subnet a, e.g. 192.xxx.xxx.xxx/8\n#   3) 4 TCP connections allowd for subnet b, e.g. 192.168.xxx.xxx/16\n#   4) 2 TCP connections allowd for subnet c, e.g. 192.169.0.xxx/24\n# Note, 0 represents unlimited.\n#\n# session_ip_limits="1,8,4,2"\n\n# `subnet_quota` limits the number of nodes for a subnet B (e.g. 192.168.xxx.xxx/16) stored in database.\n# Nodes in database are used to establish outgoing TCP connections for P2P communications.\n# Note, 0 represents unlimited.\n#\n# subnet_quota=32\n\n# ---------------- Transaction Cache Parameters -----------------\n\n# Whether to persist transaction indices.\n# This only needs to be enabled if you want to reliably answer transaction-related RPCs.\n#\n# persist_tx_index = false\n\n# Time to keep transactions in in-memory transaction cache.\n#\n# tx_cache_index_maintain_timeout_ms = 300_000\n\n# Maximum number of transactions allowed in the transaction pool.\n#\n# tx_pool_size = 500_000\n\n# Minimum allowed transaction gas price in the transaction pool.\n#\n# tx_pool_min_tx_gas_price = 1\n\n# ------------------ Storage Parameters ----------------------\n\n# The number of additional snapshot before the current stable checkpoint that we will maintain.\n# If it\'s 0, all snapshot before stable genesis will be deleted and the states are unavailable.\n#\n# additional_maintained_snapshot_count = 0\n\n# The additional number of epochs to keep different kinds of data before the current era genesis checkpoint.\n# For full/light nodes, the default value is 0, meaning all data before the era checkpoint will be removed.\n# For archive nodes, the default behavior is keeping all these data, while setting these parameters manually\n# will overwrite the default behavior of corresponding data types and garbage collect them accordingly.\n#\n# additional_maintained_block_body_epoch_count = 0\n# additional_maintained_execution_result_epoch_count = 0\n# additional_maintained_reward_epoch_count = 0\n# additional_maintained_trace_epoch_count = 0\n# additional_maintained_transaction_index_epoch_count = 0\n\n# Time interval to evict old data from in-memory data cache.\n#\n# block_cache_gc_period_ms = 5_000\n\n# Database type to store block-related data.\n# Supported: rocksdb, sqlite.\n#\n# block_db_type = "rocksdb"\n\n# The root directory of all data (block data, state data, and node database).\n#\n# conflux_data_dir = "./blockchain_data"\n\n# The directory to store block-related data.\n#\n# By default, it is stored under the directory configured with `conflux_data_dir` with the directory name `blockchain_db`.\n# If set, the directory path will not be related to `conflux_data_dir` anymore.\n#\n# block_db_dir = "./blockchain_data/blockchain_db"\n\n# Maximum size of cached ledger data (block, receipts, e.t.c.)\n# The unit is MB.\n#\n# ledger_cache_size = 1024\n\n# Rocksdb cache size.\n# Only applies if `block_db_type = "rocksdb"`.\n#\n# rocksdb_cache_size = 128\n\n# Rocksdb compaction file path.\n# Only applies if `block_db_type = "rocksdb"`.\n# If not set, compaction configuration will be set automatically by rocksdb.\n#\n# rocksdb_compaction_profile = "./compact_file.conf"\n\n# State storage parameters.\n# Refer to the documentation for details.\n#\n# storage_delta_mpts_cache_recent_lfu_factor=4.0\n# storage_delta_mpts_cache_size=20000000\n# storage_delta_mpts_cache_start_size=1000000\n# storage_delta_mpts_node_map_vec_size=80000000\n# storage_delta_mpts_slab_idle_size=200000\n\n# Configure if we strictly check the tx index before garbage collection.\n# Setting it to `false` will improve the performance. But if the value is `false`, it\'s possible that although the\n# epoch where a tx is executed should not be garbage collected, the tx index of this tx is removed because it\'s packed\n# in an already garbage collected epoch.\n#\n# strict_tx_index_gc = true\n\n# The epoch number where we want to download the state and start re-executing transactions.\n# For full nodes, if the value is not set, the parameter will not take effects.\n# For archive node, the default value is 0.\n#\n# sync_state_starting_epoch = 0\n\n# The number of epochs needed between our best_epoch and our neighbours\' best_epoch that we want to\n# start downloading states during catching up.\n#\n# sync_state_epoch_gap = 20\n\n# ------------------ Light Node Parameters ----------------------\n\n# Header sync parameters.\n# ln_header_request_batch_size = 30\n# ln_header_request_timeout_sec = 2\n# ln_max_headers_in_flight = 1000\n\n# Epoch sync parameters.\n# ln_epoch_request_batch_size = 100\n# ln_epoch_request_timeout_sec = 2\n# ln_max_parallel_epochs_to_request = 10\n# ln_num_epochs_to_request = 200\n# ln_num_waiting_headers_threshold = 1000\n\n# -------------------- Trace Parameters -------------------\n\n# Whether to trace EVM execution and records the result in database.\n#\n# executive_trace = false\n\n\n# -------------------- Others -------------------\n\n# Time (in milliseconds) after which accounts are re-read from disk.\n#\n# account_provider_refresh_time_ms = 1000\n\n# Whether to allow execution without deferring if the execution thread is idle.\n#\n# enable_optimistic_execution = true\n\n# Maximum number of blocks whose timestamp is in the near future is maintained in memory.\n#\n# future_block_buffer_capacity = 32768\n\n# Maximum number of log entries returned from cfx_getLogs.\n# If not set, cfx_getLogs will not limit the number of logs returned.\n#\n# get_logs_filter_max_limit = 10\n\n# Epoch batch size used in log filtering.\n# Larger batch sizes may improve performance but might also prevent consensus from making progress under high RPC load.\n#\n# get_logs_epoch_batch_size = 32\n\n# The maximal allowed number of epochs between `from_epoch` and `to_epoch` in the filter to call `cfx_getLogs`.\n# If not set, there is no limit on the gap.\n# By default it is not set.\n#\n# get_logs_filter_max_epoch_range = 10000\n\n# Maximum number of transactions allowed for peers to send to a catch-up node.\n#\n# max_trans_count_received_in_catch_up = 60_000\n\n# The chain_id of conflux network\n# 1 for testnet\n# 1029 for Tethys\n#\nchain_id = 1029\n\n')))}f.isMDXComponent=!0}}]);
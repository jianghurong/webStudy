
---
##mode  
默认值: hash(浏览器环境) | abstract(node.js环境)  
可选值: **hash** | **history** | **abstract**  
配置  
hash: 使用URL的hash值来做路由，不支持HTML5 History API 的浏览器  
history: 依赖HTML5 History API和服务器配置 [HTML5 History]("https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90")  
abstract: 支持所有JavaScript运行环境，如果没有发现浏览器的API，则进入abstract模式


vue中history位置  
router/index.js => mode: "history"|"hash"

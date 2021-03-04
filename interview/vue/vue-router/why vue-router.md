传统开发模式
1. www.xxx.com - index.html
2. www.xxx.com/about - about.html
3. www.xxx.com/xxx - xxx.html

缺点：  
1. 每次跳转路由就要加载页面

优点：
1. 加载较快

SPA 模式（ single page application ）  
1. www.xxx.com - index.html
2. www.xxx.com/about - index.html
3. www.xxx.com/xxx - index.html

缺点：
1. 页面较多加载慢（通过 webpack 打包解决）
2. hash 模式下无法使用锚点定位

解决的问题  
* 监听 URL 的变化，并在变化前后执行相应的逻辑
* 不同的 URL 对应不同的组件
* 提供多种方式改变 URL 的 API（URL 的改变不会导致浏览器刷新）

使用方式
1. 提供一个路由配置表，不同 URL 对应不同组件的配置
2. 初始化路由实例 new VueRouter()
3. 挂载到 Vue 实例上
4. 提供一个路由占位，用来挂载 URL 匹配到的组件

router-link  
$router.push  
a href   
浏览器前进、后退  
手动更改 URL  

updateRouter => Vue.util.defineReactive_route => router-view
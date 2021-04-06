----
## 一个route object表示当前激活路由的激活信息  
route object特点:  
a. 路由信息不可变  
b. 每次成功导航后都会产生一个新对象。  
路由对象出现的地方:略  
路由对象属性($route.attribute)

|属性|类型|含义|
|:---:|:---:|:---:|
|path|string|对应当前路由的路径，解析为绝对路径|
|params|object|包含了动态片段和全匹配片段|
|query|object|url查询参数|

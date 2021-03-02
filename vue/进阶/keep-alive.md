## keep-alive

### props
```js
include // 字符串或正则，缓存名称匹配的组件
exclude // 字符串或正则，不缓存名称匹配的组件
max // 最大缓存组件数
```

### 钩子函数
```js
activated
deactivated
```
[vue 生命周期](../基础/生命周期.md)

### LRU
keep-alive中使用到了LRU算法  
核心思想是:  
将需要缓存的组件添加到cache对象中，并设置max最大缓存数。如果有需要缓存的组件则push到cache中。如果超过max，则淘汰最久没有被访问过的组件。即cache[0]。
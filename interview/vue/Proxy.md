## 介绍
Proxy 表示是一个对象的代理，主要实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）  

## 语法
```js
/**
* @param { object } target 被 Proxy 代理虚拟化的对象
* @param { object } handler 处理器对象
*/
const p = new Proxy(target, handler)
```
```js
Proxy.revocalbe() // 创建一个可撤销的 Proxy 对象
```

## 示例
```js
const handler = {
  get: function(obj, prop) {
    return prop in obj ? obj[prop] : 37
  }
}
const p = new Proxy({}, handler)
p.a = 1
p.b = undefined

console.log(p.a, p.b) // 1, undefined
console.log('c' in p, p.c) // false, 37
```
```js
let target = {}
let p = new Proxy(target, {})
p.a = 37
console.log(target.a) // 37 操作已经被正确地转发
```
<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-16 14:21:12
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-16 15:27:12
 * @Email: 19875991227@163.com
 * @Description: ES6 Map 数据结构
-->
## What is Map ?
javaScript 中的对象，本质是 key / value 的集合。但是由于传统上只能用字符串当作键。这给它的使用带来了很大限制。
```js
const foo = {}
const element = document.body
foo[element] = 'bar'
console.log(foo) // { '[object HTMLBodyElement]': 'bar' }
```
可以看到 js 自动把 element 转译成了字符串。  
为了解决这个问题，**ES6 提供了 Map 数据结构**。它类似于对象，也是键值对集合。但是“键”的范围不仅仅是字符串了。   
简单说，Object 结构提供“字符串-值”的对应，Map 结构提供“值-值”的对应。在部分情况下，Map 比 Object 更合适（当你需要迭代对象时）。。

## Why Map ?
1. Map 可用任何值做对象
2. Map 可迭代，Object 不可迭代
```js
let map = new Map()
map.set('bar', 'barValue')
map.forEach((ele, key, i) => {
    console.log(ele, key, i)  // barValue bar map
})
for (const entry of map) {
    console.log(entry) // ['bar', 'barValue]
}
```
3. 可以在时间复杂度为 O(1) 的情况下取得 map 对象长度。  
Object 则需要迭代来获得 ( Object.keys(obj).length )
```js
map.size
```
4. 可以保护原对象的原型上的函数  
* toString
5. 内存地址不一样，就视为两个键
```js
let map = new Map()
map.set(['a'], 555)
map.get(['a']) // undefined
```

## Map's properties and methods
1. size - 返回 Map 结构的成员总数
2. set - 设置键名 <code>key</code> 对应的键值为 <code>value</code>，然后返回整个 Map 结构。如果 <code>key</code> 已经有值。则键值会被更新，否则就新生成该键。可以采用链式写法。
```js
const map = new Map()
    .set('foo', 'fooValue')
    .set('bar', 'barValue')
```
3. get - get 方法读取 <code>key</code> 对应的键值，如果找不到 <code>key</code>，返回 <code>undefined</code>
4. has - has 方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
5. delete - delete 方法删除某个键，返回 true。删除失败，返回 false。
6. clear - 清除所有键值对，没有返回值。


## Map's iteration
1. Map.prototype.keys() - 返回键名的遍历器
2. Map.prototype.values() - 返回键值的遍历器
3. Map.prototype.entries() - 返回所有成员的遍历器
4. Map.prototype.forEach() - 遍历 Map 的所有成员
```js
let map = new Map()
    .set('foo', 'fooValue')
for (const item of map.entries()) {
    console.log(item) // ['foo', fooValue]
}
// item 可以替换成解构语法 item => [key, value]
```

## how to Map to Array ?
```js
let map = new Map()
    .set('foo', 'fooValue')
[...map.keys()]
[...map.entries()]
```

## tips
还有一种数据结构 weakMap，简单说下区别  
* weakMap 只接受对象作为键名（ null 除外），不接受其它类型的值作为键名。  
* weakMap 的键所对应的对象可能在将来会消失（ weakMap的场景 ）
* weakMap 没有遍历操作，也没有 size 属性
我们将从下几个角度来比较 <code>Object.defineProperty</code> 与 <code>Prxoy</code>  
1. 用法
2. 兼容性
3. 性能

### 用法
<code>Object.defineProperty(obj, prop, descriptor)</code>  
* obj - 定义属性所处的对象  
* prop - 定义获得修改的属性的名称  
* descriptor - 定义或修改的属性描述符（数据描述符和存取描述符）  
::: tip 注意  
数据描述符是一个具有值的属性，而存取描述符是由 getter 函数和 setter 函数所描述的属性。descriptor 只能是两者之一。  
// 共享键值  
configurable: 当且仅当属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能在对应的属性被删除。  
enumerable: 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。默认为 false 。   
// 数据描述符键值  
value: 该属性对应的值。可以是任何有效的 JavaScript 值。
writable: 当且仅当属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算改变。  
// 存取描述符键值  
get:   
set:  
:::  

```js
let foo = { name: 'answer' }
Object.defineProperty(foo, 'age', {
  value: 25,
})
console.log(foo.age) // 25
foo.age = 23
console.log(foo.age) // 25
```
可以看到用 <code>Object.property</code> 定义的属性值默认是不可修改的，如果我们想修改它怎么办？接下来，我们利用 <code>writable</code> 来完成对对象属性的修改。

```js
let foo = { name: 'answer' }
Object.defineProperty(foo, 'age', {
  value: 25,
  writeable: true,
})
console.log(foo.age) // 25
foo.age = 23
console.log(foo.age) // 23
```

如果我们用 for ... in 或者是 Object.keys 方法来枚举对象属性时。

```js
let foo = { name: 'answer' }
Object.defineProperty(foo, 'age', {
  value: 25,
})
for (let key in foo) {
  console.log(key) // name
}
```

可以看到默认情况下 Object.defineProperty() 定义的属性是不可枚举的，如果我们想让其可被枚举。则可以使用 <code>enumerable</code> 实现。

```js
let foo = { name: 'answer' }
Object.defineProperty(foo, 'age', {
  value: 25,
})
for (let key in foo) {
  console.log(key) // name age
}
```

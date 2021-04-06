# Array.from() 

intro: Array.from()方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组对象

```js
let obj = {
    name: 'jiang',
    age: 24
}
let arr = Array.from(
    { length: 20 },
    x => obj
)
console.log(arr)
```
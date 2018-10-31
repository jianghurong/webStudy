
---
proxy对象用于定义基本操作的自定义行为（如属查找，赋值，枚举，函数调用）  
```js
let proxy = new Proxy(obj, handler)
```
调用Proxy构造函数实例化一个对象，包含了obj里的值，而且其基本操作（如get和set）现在可以通过handler对象来指定一些自定义逻辑。  
```js
let handler = {
    get: function () {
        console.log("ok");
    }
}
let obj = {
    id: 1,
    name: "answer"
}
let proObj = new Proxy(obj, handler);
console.log(proObj.name);
```
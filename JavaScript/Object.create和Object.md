## Object.create()
Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
语法
```js
Object.create(proto[, propertiesObject])
// proto - 新创建对象的原型对象
// pjropertiesObject 添加新创建对象的不可枚举属性(value/writable/enumerable/configurable)
```
示例
```js
Object.create(null) // 创建没有任何属性的对象
```
```js
new Object() // 有继承自Object对象的原型(prototype)
```
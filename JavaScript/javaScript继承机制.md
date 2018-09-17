javaScript与其它的编程语言并不一样,没有类和实例的区分,没有类的概念,全靠prototype chain模式,来实现继承.  
**javaScript中用new来从原型对象生成一个实例对象  
```js
function Dog(name) {
    this.name = name;
}
let dogA = new Dog("black");
alert(dogA.name);
```
new 运算符的缺点:  
每一个实例对象,都有自己的属性和方法的副本,无法做到数据共享,造成不必要的资源浪费  

---
prototype属性的引入  
因为new运算符的缺点,Brendan Eich决定为构造函数设置一个prototype属性  
这个属性包含一个对象(__prototype__),所有实例对象需要共享的属性和方法,都放在这个对象里面.那些不需要共享的属性和方法,就放在构造函数里面.  
实例对象一旦创建,将自动引用__prototype__的属性和方法.  
```js
function Dog(name) {
    this.name = name;
}
Dog.prototype = { species: "犬科" };
let dogA = new Dog("大狗");
let dogB = new Dog("二狗");
alert(dogA.species);
alert(dogB.species);
```
---
构造函数模式:实则上是一个普通函数,内部使用了this变量,对构造函数使用new运算符,就能生成实例,并且this变量会绑定在实例对象上.  
使用new创建的实例,会自动生成一个**constructor**属性,指向它们的构造函数  
```js
let dogA = new Dog("大狗");
alert(dogA.constructor === Dog); // true
```
javaScript还提供了instanceof运算符,验证原型对象与实例对象的关系  
```js
alert(dogA instanceof Dog); // true
alert(dogA instanceof Function); // true
```


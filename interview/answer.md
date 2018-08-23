---
1.考察对变量提升的理解，答案为1
变量提升，function的定义会提升到函数的最顶部，相当于
```js
var foo = 1;
function bar() {
  function foo() {}
  foo = 10;
  return;
}
bar();
console.log(foo);
```
foo = 10中的foo是局部变量

---
2.考察对变量提升的理解，答案为function
变量提升，function var()与var foo = 11的定义都会提升到函数的最顶部，但function的函数声明优先级大于于var声明，相当于
```js
function bar() {
  var foo = 11;
  function foo() {}
  return foo;
  foo = 10;
}
console.log(typeof bar())
```
因为最终定义foo是一个函数，所以return foo之后bar()仍是一个函数

---
3.考察对this作用域指向的理解，答案为2,3
this作用域根据执行环境来确定，bay函数执行时的作用域是全局，所以这里取到的x值为2    
在foo.baz.bar()中，this指向的事foo.baz作用域，所以取到的x值为3

---
4.考察对this作用域指向的理解，答案为3  
当有setTimeout或IIFE（立即执行函数），里面的function都是独立的，this只会指向全局（window对象）

---
5.考察对函数赋值变量的理解，答案为undefined
bar在没有定义只是赋值操作，外部无法访问这个值

---
6.考察对js属性的特性的理解，答案为number
length属性是无法删除的（因为它的configurable特性设置为false）

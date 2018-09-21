
---
## this的指向  
**this的指向只取决于代码调用的位置**  
调用位置: 正在执行的函数(调用栈)的前一个调用.
```js
function baz() {
    // 当前的调用栈是: baz
    // 所以调用位置是全局作用域
    bar();
}
function bar() {
    // 当前调用栈是 baz -> bar
    // 所以调用位置是baz()
}
```

## 函数执行过程中如何决定this的绑定对象
- 默认绑定(可以理解为无法应用其它规则时的默认绑定)  
```js
function foo() {
    alert(this.a);
}
var a = 3;
foo(); // 3
```
- 隐式绑定(调用位置是否有上下文,或者是被某个对象包含)  
```js
function foo() {
    alert(this.a);
}
let obj = {
    a: 3,
    foo: foo
};
obj.foo();
```
**但是隐式绑定中,会存在隐式丢失的问题**  
```js
function foo() {
    alert(this.a);
}
let obj = {
    a: 2,
    foo: foo
};
let bar = obj.foo; // 函数别名  
bar(); // 3
```
但是
```js
function foo() {
    alert(this.a);
}
let obj = {
    a: 2,
    foo: foo
};
let bar = obj.foo; // 函数别名  
let a = 5;
bar(); // 5
```
或者
```js
function foo() {
    alert(this.a);
}
function doFoo(fn) {
    fn();
}
let obj = {
    a: 2,
    foo: foo
}
let a = 5;
doFoo(obj.foo); // 5
```
或者
```js
setTimeout(obj.foo, 1000); // 5
```
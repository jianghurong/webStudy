<!--
 * @Author: Richard Chiang
 * @Date: 2020-04-26 17:46:48
 * @LastEditrors: Richard Chiang
 * @LastEditTime: 2020-04-26 18:04:44
 * @Email: 19875991227@163.com
 -->
使用**var**关键字和**let**关键字的区别  
1.var可以重复声明变量
```js
var subject = "chinese"
var subject = "math"
console.log(subject); // math
```
此问题可能会导致你不小心覆盖之前定义的变量
```js
let subject = "chinese"
let subject = "math" // Identifier 'subject' has already been declared
```
2.**var**关键字声明变量时，这个变量会变为全局变量，或者函数内的局部变量
**let**关键字有些额外的特性，如果你在代码块、语句或表达式中使用关键字**let**
声明变量，这个变量的作用域就被限制在当前的代码块，语句或表达式中
```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i
    };
  }
}
console.log(printNumTwo()) // 3
```
```js
var printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i
    };
  }
}
console.log(printNumTwo()) // 2
```
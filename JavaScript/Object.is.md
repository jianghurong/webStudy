<!--
 * @Author: Richard Chiang
 * @Date: 2019-09-10 10:23:12
 * @LastEditrors: Richard Chiang
 * @LastEditTime: 2019-09-10 10:33:23
 * @Description:  
 * @Email: 19875991227@163.com
 -->
## Object.is

es6新特性
object的行为方式基本与三等号相同。  
**但是**，对于NaN和-0和+0有进行特殊处理。
```js
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true
console.log(-0 === +0); // true
console.log(Object.is(-0, +0)); // false
```
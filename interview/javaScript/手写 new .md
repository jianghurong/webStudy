<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-18 14:01:09
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-18 17:15:46
 * @Email: 19875991227@163.com
 * @Description: 
-->
手写 new 函数之前，我们需要知道 new 函数执行了哪些操作，具体分为以下四步。
1. 新建一个空对象
2. </code>new</code> 将新对象的 __proto__ 绑定（指向）到构造函数的 <code>prototype</code> 属性
3. 将构造函数的上下文绑定到 <code>this</code>
4. 如果构造函数返回了对象则直接返回对象，否则返回 <code>this</code>
接下来，我们一步步实现 new 函数
```js
function _new(constructor, ...args) {
    let obj = {} // 第一步
    obj.__proto__ = constructor.prototype // 第二步
    const res = constructor.apply(obj, args) // 第三步
    return Object.prototype.toString.call(res) === '[object Object]' ? res : obj // 第四步
}
function Person(name) {
    this.name = name
}
let p = _new(Person, '6')
```
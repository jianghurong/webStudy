<!--
 * @Author: Richard Chiang
 * @Date: 2021-02-22 09:29:10
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-02-22 09:40:27
 * @Email: 19875991227@163.com
 * @Description: es6 class
-->
# class
## what
class的作用是实现原型继承的语法糖，底层还是通过 JavaScript 的对象原型实现。

## how
```js
// es5
function Person(name) {
    this.name = name
}
Person.prototype.getName = function() {
    return this.name
}

// es6
class Person {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}
```

# class 实现继承
## how
```js
class Student extends Person {
    constructor(name, grade) {
        super(name) // 调用父类的构造方法
        this.grade = grade
    }
    getGrade() {
        return this.grade
    }
}
```


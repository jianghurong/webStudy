**class**声明创建一个基于原型继承的给定名称新类。

```js
class Polygon {
    constructor(height, width) {
        this.area = height, width
    }
}
console.log(new Polygon(4, 3).area)
```

你也可以定义一个使用类表达式的类。但不像一个类表达式，一个类声明不允许一个存在的类再次被声明否则将会抛出一个SynataxError

语法
class name [extends otherName] {
    // body
}

描述
类声明的内容体是在严格模式下执行的，constructor方法是可选项。
类声明是不可提升的（不像function声明）

示例
一个简单的类声明

在下面的例子中，我们首先定义个名为Polygon的类，然后继承它去创建一个Square的类。
注意super()，被使用在constructor，仅仅可以被使用在constructors，并且必须被使用this关键词之前调用。
```js
class Polygon {
    constructor(height, width) {
        this.name = 'Polygon'
        this.height = height
        this.width = width
    }
}

class Square extends Polygon {
    constructor(length) {
        super(length, length)
        this.name = 'Square'
    }
}
```

尝试重复定义类

用class声明重复定义类会引起一个SyntaxError

```js
class Foo {}
class Foo {} // uncaught SyntaxError: 标识符"Foo"已被定义
```

如果一个类在使用用类表达式之前已经定义也会抛出相同错误
```js
let Foo = class {};
class Foo {}; // Uncaught SyntaxError:标识符"Foo"已被定义
```
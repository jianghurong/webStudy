深入响应式
现在是时候去做一个深入研究了！vue的其中之一最不同的特性是非侵入响应式系统。模型是被代理的javaScript对象。当你修改他们时，视图更新。它使得状态管理简单和直观。但是了解它的工作原理是同样重要的，可以避免一些常见陷阱。在这一章节，我们去挖掘一些关于vue响应式系统低层的细节。

什么是响应式？

这个术语在程序设计经常出现。但是人们谈论它的时候是什么意思呢？响应式是一个程序范式，允许我们调整适应变化用一个声明的方式。人们经常展示的范例，因为他是一个非常好的一个，是一个excel电子表格。

如果你放两个数字到第一个单元格中。并且数字3在第二位，要求提供SUM，这个电子表格则会计算给你。这里并不奇怪。但是如果你更新第一个数字，SUM同样自动更新。

javaScript 不是通常这样工作-如果我们写一些类似的内容在javaScript中

```js
var var1 = 2
var var2 = 3
var sum = va1 + var2
```

如果我们更新第一个值，总数不会调整。

所以我们如何实现响应式在JavaScript？

1.检测其中的一个值的变化
2.跟踪函数实现变化
3.触发函数使它更新为最终值

vue如何实现跟踪变化？
当你传递一个纯JavaScript对象给一个应用或者组件实例作为它的组件选项。Vue将使用带有getters和setters的处理程序遍历其所有属性并将其转化为Proxy。这是一个仅仅只有es6有的特性，但是我们提供Vue3版本使用老的Object.defineProperty来支持IE浏览器。同时有相同的API，但是代理版本是更小并且改进提升了性能。

这是更快的并且需要一些Proxy知识去理解。说我让我们深入理解。关于Proxy的文献有很多，但是你真正需要去了解的是一个Proxy一个对象，这个对象包裹另一个对象或者函数并且允许你拦截它

我们像这样使用：new Proxy(target, handler)

```js
const dinner = {
    meal: 'tacos'
}

const handler = {
    get(target, prop) {
        return target[prop]
    }
}

const proxy = new Proxy(dinner, handler)

console.log(proxy.meal)
```

好，到目前为止。我们只是包装了对象并且返回了它。cool，但还不是那么有用。但是请注意，我们可以同时拦截这个对象虽然我们在Proxy中包装了它。这种拦截称之为“陷阱”

除了控制台日志，我们可以做任何我们想做的事，如果我们想的话甚至可以不返回真实的值。这正是Proxy对于创建API如此强大的原因。

此外。有另一个特性由proxy提供给我们。而不是仅仅返回一个像这样的值：target[prop]，我们可以进一步使用一个叫Reflect的特性，允许我们去适当的绑定this，就像这样：

```js
const dinner = {
    meal: 'tacos'
}

const handler = {
    get(target, prop, receiver) {
        return Reflect.get(...arguments)
    }
}

const proxy = new Proxy(dinner, handler)
console.log(proxy.meal)
```
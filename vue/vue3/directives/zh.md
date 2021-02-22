自定义指令
介绍
除了core中的默认指令集（像v-model或者v-show之外），Vue也允许你注册你自己的定制指令。注意在Vue中，代码重用和抽象的主要形式是组件-但是，有一些情况你可能需要一些低阶DOM访问对于普通元素，这时候自定义指令是非常有用的。一个例子将聚焦在一个input元素，像这样：

当页面加载，元素获取聚焦（注意：自动聚焦不会再移动端safari工作）。事实上，如果你从看到这个页面之后没有点过任何其它任何东西。上面的输入框现在应该自动聚焦。同时，你可以点击rerun按钮，输入框将会聚焦。

现在让我们建指令完成这个功能。

```js
const app = Vue.createApp({})

app.directive('foucs', {
    mounted(el) {
        el.foucs()
    }
})
```

如果你想祖册一个局部组件，components同时允许接收一个directives选项

```
directives: {
    foucs: {
        mounted(el) {
            el.foucs()
        }
    }
}
```
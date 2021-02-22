混入

# 基础

混入为Vue组件分配可复用功能。一个混入对象可以包含任何组件选项。当一个组件使用混入，所有混入选项将被“混进”组件自身选项。

例：

```js
// 定义一个混入对象
const myMixin = {
    created() {
        this.hello()
    },
    methods: {
        hello() {
            console.log('hello from mixins")
        }
    }
}

// 定义一个app使用混入对象
const app = Vue.createApp({
    mixins: [myMixin]
})

app.mout('#mixin-basic')
```

# 选项合并

当一个混入和组件本身包含重复选项。他们将会被用适当的策略合并。

例如，数据对象经历一个递归合并，并在发生冲突时以组件优先。

```js
const myMixin = {
    data() {
        return {
            message: 'hello',
            foo: 'ab'
        }
    }
}

const app = Vue.createApp({
    mixins: [myMixin],
    data() {
        return {
            message: 'goodbye',
            bar: 'def'
        }
    },
    created() {
        console.log(this.$data) // message: goodbye, bar: def
    }
})
```
相同名的钩子函数将会放入一个数组中，所以他们全被会被调用。mixin钩子将会在组件自己的钩子之前调用。









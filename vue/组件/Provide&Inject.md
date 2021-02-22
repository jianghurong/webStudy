<!--
 * @Author: Richard Chiang
 * @Date: 2021-02-22 14:54:56
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-02-22 15:10:16
 * @Email: 19875991227@163.com
 * @Description: Provide/Inject
-->
## what
<code>provide/inject</code> 是 <code>vue</code> 特有的属性，父组件作为子组件的依赖提供者。


## why
通常，当我们需要从父组件向子组件传递时，我们使用 <code>props</code>。但是如果对于一些深度嵌套的组件，这样无疑很麻烦。<code>provide/inject</code> 就是解决这个问题而生的。

## how
父组件有一个 <code>provide</code> 来提供数据，子组件有一个 <code>inject</code> 选项来开始使用这些数据。

### 普通用法
```js
// 父组件
provide: {
    user: 'mike'
}
// 子组件
inject: ['user']
```
缺点：无法访问组件实例属性

### 进阶用法(访问组件实例属性)
```js
// 父组件 要访问组件实例属性，我们要将属性转换为返回对象的函数
provide: {
    return {
        userAge: this.user.age
    } 
}
// 子组件
inject: ['userAge']
```
缺点： 当组件实例属性变更时，子组件无法进行响应

### 高阶用法(处理响应性)
```js
// 父组件 利用 vue computed API
provide: {
    return {
        userAge: Vue.computed(() => {
            this.user.age
        })
    }
}
```
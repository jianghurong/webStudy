
---
## 状态管理模式
state：驱动应用的数据源（数据）
view：以声明方式将state映射到视图（数据映射视图）
actions：影响view上的用户操作导致状态的变化（view影响数据）

---
example
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="vuex.js"></script>
    <style>
        /* :root {
            --THEME: var(--USER-THEME, #2f28f2);
        } */
        #color {
            width: 50px;
            height: 50px;
            /* background: var(--THEME); */
        }
    </style>
</head>

<body>
    <div id="app">
        <p>{{count}}</p>
        <div id="color" :style="{background: color}"></div>
        <button @click="changeColor">changeColor</button>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
    <script>
        const store = new Vuex.Store({
            state: {
                count: 0,
                color: "#000"
            },
            mutations: {
                increment: state => state.count++,
                decrement: state => state.count--,
                changeColor: state => {
                    let colorArray = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
                    let color = "#";
                    colorArray = colorArray.split(",");
                    for (let i = 0; i < 6; i++) {
                        color = color + colorArray[Math.floor(Math.random() * 16)];
                    }
                    state.color = color;
                }
            }
        })
        new Vue({
            el: "#app",
            computed: {
                count() {
                    return store.state.count;
                },
                color() {
                    return store.state.color;
                }
            },
            methods: {
                increment: () => {
                    store.commit("increment")
                },
                decrement: () => {
                    store.commit("decrement")
                },
                changeColor: () => {
                    store.commit("changeColor");
                }
            }
        })
    </script>
</body>

</html>
```

---
## state
单一状态树
vuex使用**单一状态树**，用一个对象就包含了全部的应用层级别状态。也就说明每一个应用仅仅包含一个store实例。

在vue组件中获得vuex状态
vuex的状态存储是响应式的,从store实例中读取状态最简单的方法就是在**计算属性**中返回某个状态

---
## 项目结构  
Vuex规则：
- 应用层级的状态应该集中到单个store对象中
- 提交mutation是更改状态的唯一办法,并且这个过程是同步的
- 异步逻辑都应该封装到action里面

---
## 严格模式
开启严格模式,仅需在创建store的时候传入**strict: true**
```js
const store = new Vuex.Store({
    // ...
    strict: true
})
```
在严格模式下，无论何时发生了状态变更且不是由mutation函数引起的，将会抛出错误。  
**不要在发布环境下启用严格模式**  
严格模式会深度检测状态树来检测不合规的状态变更,请确保在发布环境下关闭严格模式,以避免性能损失。
```js
const store = new Vuex.store({
    // ...
    strict: process.env.NODE_ENV !== "production"
})
```
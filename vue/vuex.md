
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
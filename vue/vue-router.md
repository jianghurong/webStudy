
---
## 动态路由
1.响应路由参数的变化
当使用路由参数时,例如从/user/foo导航到/user/bar,**原来的组件实例会被复用**。  
复用的优点: 两个路由渲染的是同一个组件,比起销毁再创建,复用则显得更加高效。不过,这也意味着组件的生命周期钩子不会再调用。
如果想检测路由参数的变化，可以使用呢watch方法监视$route对象。  
```js
 <div id="app">
        <h1>hello app</h1>
        <p>
            <router-link to="/foo">Go to foo</router-link>
            <router-link to="/bar">Go to bar</router-link>
        </p>
        <!-- 路由出口 -->
        <router-view></router-view>
    </div>
    <script>
        const Foo = { template: '<div>Foo</div>' }
        const Bar = { template: '<div>Bar</div>' }
        const User = {
            template: "<div>User : {{ $route.params.id }}</div>",
            watch: {
                "$route" (to, from) {
                    // 对路由变化做出响应...
                   console.log(to.params.id);
                   console.log(from.params.id);
                }
            }
        }
        const routes = [
            {
                path: "/foo",component: Foo
            },
            {
                path: "/bar",component: Bar
            }
        ]
        const router = new VueRouter({
            routes: [
                { path: "/user/:id", component: User }
            ]
        })
        const app = new Vue({
            router
        }).$mount("#app")
```
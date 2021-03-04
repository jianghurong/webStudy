首先，这里假设一个场景。如果多个组件同时公用一个的数据源。  
那么使用 vue 的组件通信来实现非常麻烦。那么这时候呢，就需要一个状态管理模式来完成这个需求。

这时候我们有几种选择
1. 祖先节点创建数据，通过节点层层传递（成本高，当多个视图更改同一状态时。维护不方便。）
2. provide / inject（避免层层传递，比第一种方式方便，维护少量数据可行。树节点过多维护同样不方便。）
3. vuex（把共享状态抽离出来，成本低，易维护）

Vuex 的数据模型
1. 视图 view
2. 数据源 state
3. 动作 actions

![vuex数据模型](https://vuex.vuejs.org/flow.png)

首先，view 上的更改不会直接更改 state ，而是通过 actions 来更改数据。
而 state 的更改会直接变更 actions 。（单向数据流）

vuex 的 运行机制

![vuex数据模型](https://vuex.vuejs.org/vuex.png)

首先，state 提供数据驱动视图也就是 vue 组件， vue 组件通过 dispatch API 派发事件，
也就是 actions ，在 actions 中我们可以执行一些异步操作如请求后台 API ，
然后我们再通过 commit API 提交事件到 mutations，mutation 是同步的是因为需要与
 devtools 同步数据。最后用 mutations 更新 state 。如果没有异步操作，可以省略 actions。
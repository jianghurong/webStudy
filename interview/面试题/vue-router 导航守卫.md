<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-19 15:54:44
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-19 16:38:07
 * @Email: 19875991227@163.com
 * @Description: 
-->
## 导航守卫  
Q: vue-router 中导航钩子有几种？  
A: 1.全局钩子 2.路由独享钩子 3.组件独享钩子（不能访问）  
Q: vue-router 异步路由？  
A: 后台返回路由列表，利用 <code>router.addRoute(route) </code> 实现  
当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 <code>resolve</code> 完之前一直处于 **等待中**。  
每个守卫方法接收三个参数：  
* <code>to: Route</code>: 即将要进入的，目标路由对象  
* <code>from: Route</code>: 当前导航，要离开的路由  
* <code>next: Function</code>: **一定要调用该方法来 resolve 这个钩子。执行结果依赖于 next 中的参数**  
    * next(): 进行管道（执行顺序）的下一个钩子。如果全部钩子执行完毕，导航的状态就是 <code>confirmed</code>
    * next(false): 中断当前导航。如果浏览器的 url 改变，那么url 地址就会重置到 from 路由对应的地址
    * next('/')/next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象。
    * next(error): 如果传入 next 的参数是一个 ERROR 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。

---
* 全局前置守卫  
<code>router.beforeEach</code>

```js
const router = new VueRouter({...})
router.beforeEach((to, from, next) => { ... })
```

* 全局解析守卫  
<code>router.beforeResolve</code>  

* 全局后置钩子  
<code>router.afterEach((to, from) => { ... })</code>

* 组件内守卫  
    * <code>beforeRouteEnter</code>
    * <code>beforeRouteUpdate</code>
    * <code>beforeRouteLeave</code>

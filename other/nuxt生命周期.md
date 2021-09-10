Nuxt 生命周期
Nuxt >= 2.12 2020年四月
![enter image description here](https://zh.nuxtjs.org/docs/2.x/nuxt-lifecycle.svg)

nuxtServerInit [nuxt 可用]  
如果 ```vuex容器``` 被创建，是第一个服务端的生命周期回调

Middleware [nuxt 可用]  
在渲染页面组件之前回调
路由中间件有三个类型，回调顺序由1到3
1. ```Global``` - 影响全部路由，定义在```nuxt.config.js```
2. ```Layout``` - 影响路由组，定义在```layout```
3. ```Page``` - 影响单个路由，定义在 ```page components```

validate [nuxt 可用, page 可用]  
在渲染页面组件之前回调，验证动态路由参数非常有用
**必须返回 true 或 false**

asyncData [nuxt 可用, page 可用]  
每一次加载页面组件之前回调，用于在服务端发出请求。与组件 ```data``` 合并

fetch(context) [nuxt 可用, page 可用]  
在渲染界面之前获取数据，有点像 ```asyncData```，但不会影响 ```data```。
大概率用在```vuex store```去获取数据  

created [vue 可用]
当```vue```实例被创建时调用

// @TODO ```Nuxt```生命周期文档
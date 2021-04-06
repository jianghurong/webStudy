## 初始化主应用
```bash
npm init ice icestark-layout @icedesign/stark-layout-scaffold
```

## 项目架构  
.ice: 运行时生成的临时目录  
build: 构建产物目录  
mock: 本地模拟数据
index.js 
public  
index.html 应用入口
favicon.png Favicon
src
components 自定义业务组件
layouts 布局组件
pages 页面  
models 应用级数据状态
global.scss 全局样式
congis.ts 环境配置
routes.ts 路由配置
app.ts 应用入口
build.json
package.json
tsconfig.json

## mock 数据  
1. 在项目中新建目录及文件 mock/index.ts
2. 编写样例代码
```ts
export default {
  // 同时支持 GET 和 POST
  '/api/users/1': { data: {} },
  '/api/foo/bar': { data: {} },

  // 支持标准 HTTP
  'GET /api/users': { users: [1, 2] },
  'DELETE /api/users': { users: [1, 2] },

  // 支持参数
  'POST /api/users/:id': (req, res) => {
    const { id } = req.params;
    res.send({ id: id });
  },
};
```
3. 浏览器中输入<code>127.0.0.1:333/api/users</code>即可看到结果

## 路由配置
应用的路由信息统一在<code>src/routes.ts</code>中配置，支持多级嵌套
```ts
import UserLayout from '@/Layouts/UserLayout';
import UserLogin from '@/pages/UserLogin';
import NotFound from '@/components/NotFound';
import wrapperPage from '@/components/WrapperPage';

const routerConfig = [
  // 分组路由，children 里的路由会将父节点的 component 作为布局组件
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        // 路由路径
        path: '/login',
        // 精确匹配
        exact: true,
        // 路由组件
        component: UserLogin,
        // 配置路由的高阶组件
        wrappers: [wrapperPage]
      },
      {
        path: '/',
        // 重定向
        redirect: '/user/login',
      },
      {
        // 404 没有匹配到的路由
        component: NotFound,
      },
    ],
  },
  // 非分组路由
  {
    path: '/about',
    component: About,
  },
];

export default routerConfig;
```

## 日志打印  
常用日志打印：  
* logger.trace(msg) 堆栈跟踪
* logger.debug(msg) 调试日志
* logger.info(msg) 信息日志
* logger.warn(msg) 警告信息
* logger.error(msg) 错误日志
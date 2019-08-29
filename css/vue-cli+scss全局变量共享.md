<!--
 * @Author: Richard Chiang
 * @Date: 2019-08-29 16:42:47
 * @LastEditrors: Richard Chiang
 * @LastEditTime: 2019-08-29 16:42:58
 * @Description:  
 * @Email: 19875991227@163.com
 -->
## SCSS 变量共享
首先要确保项目能正常编译scss

```js
yarn add node-sass
yarn add sass-loader
```

在vue.config.js中如下设置
```js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import '@/styles/index.scss';`
      }
    }
  }
}
```

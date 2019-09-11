<!--
 * @Author: Richard Chiang
 * @Date: 2019-09-10 18:15:48
 * @LastEditrors: Richard Chiang
 * @LastEditTime: 2019-09-10 18:19:33
 * @Description:  
 * @Email: 19875991227@163.com
 -->
## dataset

与微信小程序语法相同
```html
<div data-index="0"></div>
```
```js
var div = document.querySelector('div').dataset; // { index: 0 }
```
自定义属性建议加上data-前缀（符合开发规范）

## URLSearchParams
不兼容IE
```js
new URLSearchParams(location.search).get('param');
```
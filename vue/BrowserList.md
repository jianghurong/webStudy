<!--
 * @Author: Richard Chiang
 * @Date: 2020-04-28 14:18:20
 * @LastEditrors: Richard Chiang
 * @LastEditTime: 2020-04-28 15:43:15
 * @Email: 19875991227@163.com
 -->

---
## Browserlist 
what is browserlist
broswerlist是分享浏览器和node.js的版本用于前端工具(autoprefixer、babel)的配置文件(更多点击[Broserlist](https://www.npmjs.com/package/browserslist))  
所有的前端工具都能自动地找到目标浏览器器，只要你在**package.json**文件中添加以下内容  
```json
"browserlist": [
  "defaults",
  "not IE 11",
  "not IE_Mob 11",
  "maintained node versions"
]
```
或者是在**browserlistrc**文件中添加以下内容
```js
defaults
not IE 11
not IE_Mob 11
maintained node versions
```
开发人员建立版本列表通过类似于查询最近两个版本的查询，以避免手动更新版本  
[查询链接](https://browserl.ist/)
```js
"broswerlist": [
  "> 1%",
  "last 2 versions"
]
// last 2 versions CanIUse.com追踪的IE最新版本为11，向后兼容两个版本即为10、11
// > 1% 全球超过1%人使用的浏览器
```

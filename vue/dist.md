
---
## source Map
vue打包之后会产生source Map文件(*.map)。  
source Map文件作用是保存压缩转换前后代码位置的变化。  
因为source Map占的体积比较大,如果不需要可以手动关闭。  

## productionSourceMap
vue.config.js中可以设置关闭source Map
```js
module.exports = {
  productionSourceMap: false
}
```
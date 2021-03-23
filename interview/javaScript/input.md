<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-23 10:07:34
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-23 10:17:25
 * @Email: 19875991227@163.com
 * @Description: 
-->
input 依次触发的事件
```html
<input id="input">
```  
```js
const text = document.getElementById('input')
text.onclick = function(e) {
    console.log('onClick')
}
text.onfocus = function(e) {
    console.log('onFoucs')
}
text.onmousedown = function(e) {
    console.log('onMousedown')
}
text.onmouseenter = function(e) {
    console.log('onMouseenter')
}
```
执行顺序  
onMouseenter  
onMousedown  
onFoucs  
onClick  
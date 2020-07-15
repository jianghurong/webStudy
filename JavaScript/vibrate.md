
## 设备震动
语法
```js
var successBool = window.navigator.vibrate(pattern); // pattern - 表示震动的毫秒数，为数组时表示交替震动的毫秒树
```
实例
```js
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
if (navigator.vibrate) {
  navigator.vibrate(1000)
  navigator.vibrate([1000, 2000, 1000, 3000]) // 先震动1s，暂停2s，暂停1s，再震动3s
}
```
兼容性：[Can I use](https://caniuse.com/#search=vibrate)

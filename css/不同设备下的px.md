
---
## css中的1px ≠ 移动设备的1px
不同手机具有不同的像素密度,设备物理像素与设备独立像素比计算
```
devicePixelRatio = 物理像素 / 独立像素
```
如iphone6手机的屏幕分辨率为1334*750 = 物理像素
设备独立像素 = 667 * 375
则
```
dpr = 物理像素 / 独立像素
```
最终dpr为2
js获取像素与设备的像素比(dpr)
```js
window.devicePixelRatio
```
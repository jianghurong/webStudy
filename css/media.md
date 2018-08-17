# @media
---
# what's media
---
响应式布局中经常会使用@media查询来适配各种屏幕尺寸  
bootstrap中常用设备尺寸
```
超小屏幕 手机 (<768px)	小屏幕 平板 (≥768px)	中等屏幕 桌面显示器 (≥992px)	大屏幕 大桌面显示器 (≥1200px)
```
语法
```
@media screen and (max-width: 1024px) {
  body {
    background: lightblue;
  }
}
```
其中，媒体类型为screen。用于电脑、平板、手机。常用类型还有print（用于打印机）和speech（屏幕阅读器等发声设备）
max-width设置屏幕最大宽度为1024px，超过时不显示定义样式
```
@meida screen and (min-width: 768px) and (max-width: 1024px) {
  body {
    background: lightpink;
  }
}
当屏幕宽度在768-1024范围内时，执行定义的样式（1024为iPad pro的尺寸）
当你的网站不需要考虑打印情况时，可以考虑省略screen
screen实际是是告诉浏览器在打印页面时显示衬线字体，在屏幕显示页面上显示无衬线字体

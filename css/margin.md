
---
## margin合并
1. 我们都知道两个垂直的外边距相遇时,合并后的外边距等于两个外边距中的较大值
2. 当一个元素包含在另一个元素中时(没有内边距或者边框把外边距隔开),他们的上下边距也会发生合并
```html
<div class="outer">
    <div class="inner"></div>
</div>
```
```css
* {
    margin: 0;
    padding: 0;
}
.outer {
    width: 50px;
    height: 50px;
    background: lightpink;
    margin-top: 20px;
}
.inner {
    width: 30px;
    height: 30px;
    background: lightblue;
    margin-top: 10px;
}
```
此时inner应该与顶部有30px的距离,但其实只有20px
这种margin合并实则是有意义的,常用在几个段落或列表组成的页面
```html
<div class="box">
    <p>覆巢之下 安有完卵</p>
    <p>勿以善小而不为 勿以恶小而为之</p>
    <p>宰相肚里能撑船</p>
</div>
```
```css
p {
    margin: 20px;
}
```

---
## chrome设置12px以下的字体时以12px显示
1.google27.0版本以下可以使用```-webkit-text-size-adjust: none```设置  
只对英文版本有效  
2.
```css
/*The container will also be smaller*/
transform: scale(0.5);
```

---
## 浏览器默认的margin和padding不同
```css
* {
    margin: 0;
    padding: 0;
}
```

---
## 默认图片img在firefox和google的不同
```html
<img>
```
在firefox中: img的宽高为0\*17  
在google中：img的宽高为0\*0  
在css中加上
```css
img {
    width: 200px;
    height: 200px;
}
```
google的img会显示为200\*200,firefox则还是为0\*17  
这是因为firefox在替换元素的内联表现有自己的想法与实现,类似```<span>```的内联元素尺寸,只需要设置
```css
/*建议设置在初始化样式中*/
img {
    display: inline-block;
}
```

---
CSS选择器可以分为以下种类

---
- 简单选择器：通过元素类型、id、类匹配
```css
p {} 
#id {}
.name {} 
```

---
- 属性选择器：通过**属性或属性**值匹配  

存在和值属性选择器
```html
<input type="text">
<input type="password">
<input type="password dangerous">
```
语法：
```css
[attr]
[attr = val]
[attr~ = val]
```
优先级：
```css
[attr] < [attr = val] < [attr~ = val]
```
```html
<input type="text">
<input type="password">
<input type="password dangerous">
```
```css
[type] {
    color: blue;
}
[type="password"] {
    color: lightcoral;
}
[type~="dangerous"] {
    color: red;
}
```
子串值属性选择器  
语法：
```css
[attr |= val]:选择attr属性的值是以val值开头或val-开头
[attr ^= val]:选择attr属性是以val开头（包括val）的元素
[attr $= val]:选择attr属性是以val结尾（包括val）的元素
[attr *= val]:选择attr属性的值中包含val的元素
```
```css
list-style-position: inside | outside |inherit
```
inside: 文本跟随标记  
outside: 文本不跟随标记  
inherit: 继承父元素

---
- 伪类与伪元素选择器  

该选择器不是选择元素，而是**选择元素的某些部分**。或者某些特定上**下文存在的元素**（hover、foucs...）  
伪类：以":"作为前缀 [所有伪类](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements#%E4%BC%AA%E7%B1%BB%EF%BC%88Pseudo-class%EF%BC%89)  
列表条纹状效果：
```html
<ul>
    <li>item</li>
    <li>item</li>
    <li>item</li>
    <li>item</li>
    <li>item</li>
</ul>
```
```css
li {
   list-style: none;
}
/* 奇数行样式 */
li:nth-of-type(odd) { 
    background: lightcoral;
}
/* 偶数行样式 */
li:nth-of-type(even) {
    background: lightblue;
}
```
伪元素：
与伪类很像，但是有不同。伪元素以"::"冒号为前缀  
```css
/* 创建伪元素,作为已选中元素的最后一个子元素,通常配合content属性来装饰内容(行内元素) */
::after
/* 作为已选中元素的第一个子元素 */
::before
/* 选中元素的第一个字母 */
::first-letter 
/* 选中元素的第一行 */
::first-line
/* p标签的第一行字母全部大写 */
p::first-line {
    text-transform: uppercase;
}
```

---
- 组合器和选择组合器  
A-P B-span  

|组合|匹配|
|:---:|:---:|
|A, B|匹配满足A或B的元素|
|A B|匹配满足B是A的后代元素|
|A > B|匹配满足B是A的直接（紧挨着的）节点|
|A + B|匹配满足B是A的直接（紧挨着的）兄弟节点（同级）|
|A ~ B|匹配满足B是A的任意兄弟节点（同级）|



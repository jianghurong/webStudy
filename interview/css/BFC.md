<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-15 09:19:46
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-15 10:29:08
 * @Email: 19875991227@163.com
 * @Description: 块级格式化上下文
-->
1. what is BFC ?  
w3c 对于 bfc 的定义如下：
> 浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-block，table-cells，和 table-captions），以及 overflow 值不为 "visible" 的块级盒子，都会为他们的内容创建新的 bfc。

BFC ( Block formatting context ) 是一种布局环境。  
在探索 BFC 之前，我们需要知道关于 box、formatting context 的概念。  
box: css 的布局的对象和基本单位，一个页面有多个 box，box 的 display 属性，决定了这个 box 的类型。不同类型的 box，会参与不同的 formatting context （决定如何渲染文档的容器），因此 box 内的元素会以不同的方式渲染。让我们看看哪些盒子：  
* block-level box: display 属性为 block，list-item，table 的元素。
* inline-level box: display 属性为 inline，inline-block，inline-table 的元素。 
bfc 是一个独立的布局环境。其中的元素布局是不受外界影响，并且在一个 BFC 中，块盒和行盒（行盒由一行中所有的内联元素组成）都会垂直的沿着其父元素的边框排列。  
bfc 的布局规则  
* 内部的 box 会在垂直方向，一个接一个的放置。
* 属于同一个 bfc 的两个相邻 box 的 margin 会发生重叠。
* 包含浮动
* 每个元素的 margin box 的左边，与包含块 border box 的左边相接触
* bfc 的区域不会与 float box 重叠
* 计算 bfc 的高度时，浮动元素也参与计算 

2. what is bfc's advantage ?
* 清除浮动其中之一的方法  
overflow: auto 就是创建一个 bfc，因为 bfc 的一个特性包含浮动。
* 消除相邻 margin

3. how to bfc ?
* float 的值不是 none
* position 的值不是 static 或者 reactive
* display 的值是 inline-block、table-cell、flex、table-caption 或者 inline-flex
* overflow 的值不是 visible

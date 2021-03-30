<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-30 14:32:14
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-30 16:02:04
 * @Email: 19875991227@163.com
 * @Description: 混合
-->
## 混合器  
如果需要使用大段样式的复用。  
可以使用 <code>@mixin</code> 标识符定义。
比如我们定义一个非常简单的混合器，作用是添加跨浏览器的圆角边框。  
```scss
@mixin rounded-corners {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-raduis: 5px;
}
```
然后你就可以在你的样式表中通过 @include 来使用这个混合器  
```scss
notice {
    background: #fff;
    border: 2px solid #58a;
    @include rounded-corners;
}
```
常用在 button 等有大段代码样式重复的类中。    
> 混合器实在太好用了，一不小心你可能过渡使用。大量的重用可能会导致生成的样式表过大。导致记载缓慢。  

### 1. 何时使用混合器  
判断一组属性是否应该组合成一个混合器，一条经验是你能否为这个混合器想出一个好名字。如果找不到，构造混合器可能不是一个好的选择。  

### 2. 混合器中的 css 规则
<code>scss</code> 混合器不仅可以包含属性，也可以包含 <code>css</code> 规则，包含选择器和选择器中的属性。  
```scss
@mixin no-bullets {
    list-style: none;
    li {
        list-style-image: none;
        list-style-type: none;
        margin-left: 0;
    }
}
```

### 3. 给混合器传参  
混合器不一定总得生成同样的样式。可以通过在 <code>@include</code> 混合器时给混合器传参，来定制混合器生成的精确样式。
```scss
@mixin button($bg-color, $font-size) {
    background: $bg-color;
    font-size: $font-size;
}
```
使用
```scss
.button {
    @include button(#58a, 20px)
}
```
当你使用 <code>@include</code> 混合器时，有时候可能会很难区分每个参数是什么意思，参数之间是一个什么样的顺序。为了解决这个问题，<code>scss</code> 允许通过**键值对**的形式指定每个参数的值。  
```scss
.button {
    @include button(
        $bg-color: #58a;
        $font-size: 20px;
    )
}
```
如果动手去实践你可能会发现，这时候需要一个参数默认值。因为在没有默认值的情况下 <code>scss</code> 会返回一个错误。  

### 4. 混合器参数默认值  
为了在混合器中不必传入所有的参数，我们可以给参数指定一个默认值。参数默认值用 <code>$name: default-value</code> 的声明形式，默认值可以是任何有效的 <code>css</code> 属性。甚至是其它参数的使用。
```scss
@mixin button(
    $bg-color: #58a,
    $font-size: 20px
)
{
    background: $bg-color;
    font-size: $font-size;
}
```
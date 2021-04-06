<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-30 10:21:27
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-30 10:53:19
 * @Email: 19875991227@163.com
 * @Description: 变量
-->
## 写在前面
> <code>css3</code> 已经新增变量特性，可以如下使用。所以我们已经不推荐使用<code>scss</code> 的变量特性，而使用 <code>css3</code> 的特性。但是我们仍需学习一些 <code>scss</code> 的相关概念。
css3 <code>var</code> 表达式优势：  
* 原生优势，不需要再编译一次  
* 只需统一配置在 <code>:root</code>，一次配置，终生使用
```css
:root {
    --primary-color: #58a;
}
div {
    background: var(--primary-color);
}
```

## 变量声明  
<code>scss</code> 通过 <code>$</code> 来标识变量  
```scss
$highlight-color: #f90;
```  
> <code>scss</code> 变量可以定义在 <code>css</code> 规则块内，也可以定义在规则块外。如果定义在规则区域内，则只有这个区域中的代码可以使用变量。
```scss
$nav-color: #58a;
nav {
    $width: 100px;
    width: $width;
    color: $nav-color;
}
```
如果我们想使用定义在 <code>nav</code> 中的变量会导致一个错误。  
```scss
footer {
    width: $width; // bad
    color: $nav-color; // good
}
```

## 变量引用  
声明变量时，变量值也可以引用其他变量。  
```scss
$highlight-color: #f90;
$highlight-border: 1px solid $highlight-color;
```

## 变量命名技巧  
可以用中划线 <code>-</code> 或者下划线 <code>_</code> 来分隔变量名。使用 <code>-</code> 的方式更为普遍，这也是 <code>css3 var</code> 特性推荐使用的分隔符。
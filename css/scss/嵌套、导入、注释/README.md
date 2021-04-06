<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-30 10:53:10
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-30 16:02:17
 * @Email: 19875991227@163.com
 * @Description: 嵌套、导入、注释
-->
## 嵌套 CSS 规则  
<code>css</code> 中复写选择器是非常繁琐的。如  
```css
#content article h1 { color: #333; }
#content article p { margin-bottom: 1.4em; }
#content aside { background-color: #58a; }
```
在 <code>scss</code>，你可以这样写以使得可读性更高，减少代码量。  
```scss
#content {
    article {
        h1 {
            color: #333;
        }
        p {
            margin-bottom: 1.4em;
        }
    }
    aside {
        background-color: #58a;
    }
}
```
大多数情况都可以使用嵌套结构，但是如果想要应用 <code>:hover</code> 这样的伪类内。<code>scss</code> 提供了结构 <code>&</code>来帮助我们。  

## 父选择器的标识符&  
<code>css</code> 使用后代选择器来解开嵌套规则。如
```css
#content p:hover {}
```
在 <code>scss</code> 中，你可以通过 <code>&</code> 来连接元素  
```scss
#content {
    p {
        &:hover {}
    }
}
```
除了为父选择器添加 <code>hover</code>等伪类时，父选择器还有另外一种用法。你可以在父选择器之前添加选择器。  
假设用户在使用 <code>IE</code> 浏览器，你可以在 <code>body</code> 标签上添加一个 <code>IE</code> 类名。  
```
#content {
    aside {
        color: red;
        body.ie & { color: green }
    }
}
```

## 群组选择器的嵌套  
群组选择器的标志性符号是 <code>,</code>
```scss
/* bad */
.container h1, .container h2, .container h3 {}
/* good */
.container {
    h1, h2, h3 {}
}
```

## 子组合选择器和同层组合选择器( >、+、~)  
```css
article section {}
article > section
article + p
article ~ article
```
">" 选择器会选择 <code>article</code> 下紧跟着的**子元素**命中 <code>section</code> 选择器的元素。  
"+" 选择器会选择 <code>article</code> **同层元素紧跟**的 <code>p</code> 元素。  
"~" 会选择 <code>article</code> **同层元素后** 的 <code>article</code> 元素。

## 导入 scss 文件  
<code>css</code> 有一个 <code>@import</code> 规则，它允许在一个 <code>css</code> 文件中导入其它 <code>css</code> 文件。然而，只有执行到 <code>@import</code> 时，浏览器才会去下载其他 <code>css</code> 文件，这导致页面加载起来特别慢。  
<code>sass</code> 也有 <code>@import</code> 规则。不同的是，规则在生成 <code>css</code> 文件时就把相关文件导入进来。

### 使用 scss 部分文件  
 当通过 <code>@import</code> 把样式分散在多个文件时，你通常只想生成少数几个 <code>css</code> 文件。那些专门为 <code>@import</code> 命令而写的文件。称为局部文件。以下划线"_"开头命名，引入文件时可省略下划线。 

### 默认变量值-default  
该属性的含义是如果这个变量已经被声明赋值了，那就用它声明的值，否则就用这个默认值。  
```css
$fancbox-width: 300px;
$fancybox-width: 400px !default;  
.fancybox {
    width: $fancybox-width;
}
```
不设置 <code>!default</code> 属性时 <code>$fancybox-width</code> 会被覆盖掉。设置后如果已经声明该变量则不会重复赋值。  

### 嵌套导入  
与原生的 <code>css</code> 不同，<code>scss</code> 允许 <code>@import</code> 命令写在 <code>css</code> 规则内。这种导入方式下，生成对应的 <code>css</code> 文件时，局部文件会被直接插入到规则代码块中。  
_blue-theme.scss
```css
aside {
    background: blue;
    color: white;
}
```
然后把它导入到一个 <code>css</code> 规则内，如下所示：  
```css
.blue-theme { import 'blue-theme' }
.blue-theme {
    aside {
        background: blue;
        color: white;
    }
}
```  

### 原生 css 导入  
以下三种情况被认为是原生导入  
* 被导入文件的名字以 <code>.css</code> 结尾。  
* 被导入文件的名字是 <code>css</code> 的 <code>url()</code> 值（webpack 中不会对这种文件中的代码进行打包了，因为会认为是原生的 @import url 的用法）。  
* 被导入的文件是一个 url 地址。  

### 静默注释  
原生 <code>css</code> 使用 <code>/* ... */</code> 来注释代码。  
<code>scss</code> 还提供另一种静默注释 <code>//</code>。  
```scss
body {
    color: #333; // 这种注释内容不会出现在生成的 css 文件中
    padding: 0; /* 这种注释内容会出现在生成的 css 文件中 */
}
```
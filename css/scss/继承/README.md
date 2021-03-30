<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-30 16:01:53
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-30 16:59:01
 * @Email: 19875991227@163.com
 * @Description: 继承
-->
## 使用选择器继承来精简 css
选择器继承简单来说就是一个选择器可以继承另一个选择器定义的所有样式。<code>scss</code> 通过 <code>@extend</code> 实现。  
```scss
.error {
    border: 1px solid red;
    background-color: #fdd;
}
.seriousError {
    @extend .error;
    border-width: 3px;
}
```
<code>.seriousError</code> 不仅会继承 <code>.error</code> 自身的所有样式，任何跟 <code>.error</code> 有关的组合器样式也会被 <code>.seriousError</code> 以组合选择器的形式继承。  
```scss
.error a { // 应用到.seriousError a
    color: red;
    font-weight: 100;
}
h1.error { // 应用到h1.seriousError
    font-size: 1.2rem;
}
```

### 1.何时使用继承  
**混合器**主要用于**展示性样式的重用**，**而类名用于语义化样式的重用**。因为继承是基于类的。所以继承应该是建立在语义化的关系上。比如一个元素拥有的类（seriousError）表明它属于另一个类（error），这时候使用继承再适合不过了。  
> 继承不会造成代码冗余，混合器会造成代码冗余  
不需要在继承中使用变量的情况下使用继承，否则使用混合器  

### 2.继承的高级用法  
```scss
.disabled {
    color: grey;
    @extend a;
}
```

### 3.继承的工作细节  
为了不让你混淆继承和混合器的概念，理解工作原理是非常重要的。  
<code>@extend</code> 背后的基本思想是，如果 <code>.seriousError @extend .error</code>，那么样式表中的任何一处 <code>.error</code> 都用 <code>.error .seriousError</code> 这一选择器组进行替换。  
关于 <code>@extend</code> 有两个点你应该知道：  
* 跟混合器比，继承生成的 css 代码相对更少。因为继承仅仅是重复选择器，而不会重复元素。  
* 继承遵从 css 层叠的规则。当两个不同的 <code>css</code> 规则应用到同一个 <code>html</code> 元素上时，权重更高的选择器胜出。  

### 4.使用继承的最佳实践  
通常使用继承会让你的 <code>css</code> 美观、整洁。  
因为继承只会在生成 <code>css</code> 时复制选择器，而不会复制大段的 <code>css</code> 属性。  

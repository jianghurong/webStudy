
## jQuery选择器
选择html元素 
```js
$("header").click(function () {
    $(this).hide(); // $(this)选取当前元素
})
```
常用的jQuery选择器
|选择器|实例|所选取元素|
|:---:|:--:|:---:|
|*|$("\*")|所有元素|
|#id|$("#test")|id="test"的元素|
|.class|$(".test")|class="test"的元素|
|element|$("p")|所有p标签元素|
|:first|$("p:first")|第一个p标签元素|
|:last|$("p:last")|最后一个p标签元素|
|:even|$("p:even")|**所有偶数p标签元素(元素从0开始计数，所以第一个元素为偶数0)**|
|:odd|$("p:odd")|所有奇数p标签元素|
|:eq(index)|$("p:eq(1)")|第index个p标签元素(从0开始)|
|:gt(no)|$("p:gt(3)")|大于3的p标签元素（从0开始）
|:lt(no)|$("p:lt(3)")|小于3的p标签元素（从0开始）
|:not(selector)|$("input:not(:empty)")|所有不为空的input元素
|:header|$("header")|所有标题元素h1-h6
|:contain(text)|$(":contain('answer')")|包含指定字符串的所有元素
更多[jQuery选择器](http://www.w3school.com.cn/jquery/jquery_ref_selectors.asp)
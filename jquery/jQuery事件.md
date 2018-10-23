## jQuery事件方法
事件方法会触发匹配元素的事件  
```js
$("button#button1").click()
```
上面的例子将触发id="button1"的button元素的click事件

---
1.bind(): 向匹配元素附加一个或多个更多事件处理器
```js
$("#button1").bind("click", function () {
    $("p").slideToggle(); //slideToggle控制元素显示/隐藏
});
```

---
2.blur(): 触发、或将函数绑定到指定元素的blur事件
change(): 触发、或将函数绑定到指定元素的change事件
click(): 触发、或将函数绑定到指定元素的click事件
dbclick(): 触发、或将函数绑定到指定元素的double click事件(元素双击事件)

---
3.delegate(): 向匹配元素的当前或未来的子元素附加一个或多个事件处理器

---
4.mousemove(): 获取鼠标指针在页面中的位置
```js
$(document).mousemove(function (e) {
    $("p").text(e.pageX + ", " + e.pageY);
})
```

更多[事件](http://www.w3school.com.cn/jquery/jquery_ref_events.asp)


序：此文档吸天地之灵气，取日月之精华。经吾千锤百炼（数场面试实践）。已成为一刀9999暴击伤害的前端coder们的必备神器。  
欢迎帅哥美妞右上角**Star**:star:、**Fork**

---
## 原理
使用**XHR**(XMLHttpRequest)可以与服务器进行交互,原理是从URL处获取数据,无需刷新整个页面  
xml被广泛应用于Ajax中

---
## Method
XMLHttpRequest()

---
## Example
```js
let xhr = new XMLHttpRequest();
let url = "https://www.xxx.com";
let data = {
    name: "answer",
    age: "22"
}
xhr.timeout = 3000; // 设置请求超时时间
xhr.ontimeout = (e) => {
    // 超时处理
}
xhr.open("post", url); // 设置使用post方法请求url
xhr.send(data); // 发送数据
xhr.onreadystate = () => {
    if (xhr.readyState == 4 && xhr.status == 200) { // readyState返回代理所处状态
        alert(xhr.responseText); //显示响应内容
    }
    else {
        alert(xhr.statusText); // 显示服务器响应状态内容（例"200 ok"）
    }
}
```

---
## ReadyState
readyState返回XHR代理当前所处的状态，以下是readyState可能所处的状态

|值|状态|描述|
|:---:|:---:|:---:|
|0|UNSENT|**代理已经创建，尚未发送请求**|
|1|OPEND|**open()方法已被调用**，尚未发送请求|
|2|HEADERS_RECEVIED|send()方法已被调用,并获得**请求头**|
|3|LOADING|下载中|
|4|DONE|请求完成|

---
## Notice
浏览器创建XML代理的方式都不同(IE7以前使用ActiveXObject)，其它浏览器内置了XMLHttpRequest对象
使用以下demo解决这个问题
```js
let xhr = null;
if(window.XMLHttpRequest) { //有内置XHR对象
    xhr = new XMLHttpRequest();
}
else if(window.ActiveXObject) { // 无内置XHR对象且有ActiveXOject内置对象
    xhr = new ActiveXObject("Microsoft XMLHTTP");
}
```
了解更多关于[XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)

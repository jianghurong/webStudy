
---
主要运用以下知识点
## 1.鼠标位置 clientX|clientY
## 2.鼠标点击事件 onmousedown
## 3.鼠标放开事件 onmouseup
## 4.鼠标移动事件 onmousemove(notice:这里是绑定在document上)
## 5. setCapture|releaseCapture 捕获下一次鼠标事件

---
html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
  <style>
    .box, .box1 {
      width: 200px;
      height: 200px;
      background: rgba(167, 252, 252, .6);
      position: absolute;
    }
    .box1 {
      top: 400px;
      left: 400px;
      background: rgba(250, 143, 55, 0.6);
      position: absolute;
    }
    text::selection {
      background: lightcoral;
    }
    input:focus .box{
      background: red;
    }
  </style>
  <script src="server.js">
  </script>
</head>
<body>
  <text id="ok">ctrl + A 拖动元素</text>
  <div class="box"></div>
  <div class="box1"></div>
</body>
</html>
```
```js
window.onload = function () {
  let box = document.querySelector(".box");
  let box1 = document.querySelector(".box1");
  setDrag(box);
  setDrag(box1);
}
function setDrag(o) {
  o.onmousedown = function (event) {
    o.setCapture && o.setCapture(); // ie 修复ctrl+A全选选中元素拖动问题
    let e = event || window.event;
    // 用鼠标坐标长度减去元素离上方左方的长度即为元素的实际位置
    let offsetX = e.clientX - o.offsetLeft;
    let offsetY = e.clientY - o.offsetTop;
    document.onmousemove = function (event) {
      let e = event || window.event; // 兼容ie
      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;
      o.style.left = x + "px";
      o.style.top = y + "px";
    }
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
      o.releaseCapture && o.releaseCapture();
    }
    return false;
  }
}
```

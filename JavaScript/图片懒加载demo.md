
HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="slider.css">
</head>
<body>
  <div id="content">
    <img data-src="../assets/images/1.jpg">
    <img data-src="../assets/images/2.jpg">
    <img data-src="../assets/images/1.jpg">
    <img data-src="../assets/images/2.jpg">
    <img data-src="http://pic.xiudodo.com/figure/00/00/33/16/73/1655bda6abbcd26.jpg">
    <img data-src="http://attachments.gfan.com/forum/attachments2/day_110514/110514014419e664eeb0365e38.jpg">
  </div>
  <script src="slider.js"></script>
</body>
</html>
```
CSS
```css
* {
    margin: 0;
    padding: 0;
}
html {
    font-size: 62.5%;
}
#content {
    margin: 40px auto;
    width: 30rem;
    height: 40rem;
    overflow: scroll;
}
#content img {
    /*一定要加inline-block或者block,否则在firefox会无效*/
    display: inline-block;
    width: 40rem;
    height: 20rem;
}
```
JavaScript
```js
window.onload = function () {
    // function getDisplay(obj){
    //     // 浏览器兼容
    //      if (obj.currentStyle) {
    //           return obj.currentStyle.display;
    //       }
    //       else {
    //           return getComputedStyle(obj, false).display;
    //       }
    //   }
      
    //获取content元素
    let content = document.getElementById("content");
    //获取有data-src属性的元素
    let imgs = content.querySelectorAll("[data-src]");
    //检测元素的类型
    // alert(getDisplay(imgs[0]));
    //初始化图片列表高度值
    let imgsHeight = {};
    //图片元素循环高度值并把值赋值给imgHeight...
    imgs.forEach((ele) => {
        imgsHeight[ele.offsetTop + ele.offsetHeight * 0.5] = ele;
    });
    //添加监听事件
    content.addEventListener("scroll", () =>{
        loadImg();
    });
    function loadImg() {
        // 滚动区域的高度
        let currentHeight = content.offsetHeight + content.scrollTop;
        Object.keys(imgsHeight).forEach((ele) => {
            if (currentHeight > ele) {
                imgsHeight[ele].src = imgsHeight[ele].getAttribute("data-src");
            }
        });
            //如果当前高度大于赋值进来的高度则赋值
    }
    loadImg();
};
```
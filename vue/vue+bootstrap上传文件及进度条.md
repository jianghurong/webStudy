# 上传进度条
---
效果预览：  
![image](https://github.com/jianghurong/OneaUI/blob/master/gif/loading.gif) 
---
http请求使用了axios库  
index.html
```html
<div id="app">
  <input type="file" @change="upFile">
  <div :class="{ showProcess: 'show' , 'hidden'}">
    <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
    :style="{ width: process ? (process + '%') : (2 + 'em') }">
      {{ process || 0 }}%
    </div>
  </div>
</div>
```
index.js
```js
let app = new Vue({
  el: "#app",
  data: {
    showProgress: false, // 默认不显示进度条
    process: 0 // 进度条初始化为0
  },
  methods: {
    upFile: function(e) {
      this.showProgress = true; // 显示进度条
      let file = e.target.files[0];
      let param = new FormData();
      param.append("file", file); // 通过append方法向param对象添加文件
      let config = {
          headers: { "Content-Type": "multipart/form-data" },
          // webdev允许全部谓词
          onUploadProgress: function (progressEvent) {
              let complete = parseInt(progressEvent.loaded / progressEvent.total * 100);
              that.process = complete;
              // Do whatever you want with the native progress event
          },
      };
      axios.post(url, param ,config)
      .then((res) => console.log(res))
      .catch((err) => consoel.log(err));
      this.showProgress = false; // 隐藏进度条
    }
  }
})
```

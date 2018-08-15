# promise
---
## what's promise
---
promise是异步解决方案
需求:设定一个函数，在三秒之后打印“promise is great！”
```
let pro = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("promise is great!");
  }, 3000)
})
pro.then((response) => { // 这里response为了方便初次接触的同志理解，一般缩写为res
  console.log(resonse); // promise is great!
})
```
resolve函数中所接收的参数是任务执行成功后的结果，reject是执行失败后的结果。
再写一个异步请求的demo。
```
let p = new Promise((resolve, reject) => {
   wx.request(url, data, (res) => {
     res.data && resolve(res.data);
   })
});
p.then((res) => {
  console.log(res); // res.data
})
 .catch((err) => {
  console.log(err); // throw err
 })
```
## 在函数中返回Promise类型
需求：定义一个函数，函数中要执行一个延时操作，延时操作完成后保存一个值
```
function delayed() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve("2000");
    }, 1000)
  });
}
delayed().then((res) => {
  console.log(res); // 1s后打印2000 
})
.catch((err) => {
  console.log(err);
})
```
promise一般用在网络异步请求时，没有等到数据返回就开始执行下一步。有了promise，把网络请求后的操作放在then方法中，把错误放在catch方法中。


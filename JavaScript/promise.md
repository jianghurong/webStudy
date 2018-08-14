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

<!--
 * @Author: Richard Chiang
 * @Date: 2019-09-11 10:21:08
 * @LastEditrors: Richard Chiang
 * @LastEditTime: 2019-09-11 10:21:21
 * @Description:  
 * @Email: 19875991227@163.com
 -->
## 使用笔记

1.canvas
```ts
let canvas = this.$refs.canvas;
let ctx = canvas.getContext('2d'); // error
```
```ts
let canvas = <HTMLCanvasElement>this.$refs.canvas;
let ctx = canvas.getContext('2d'); // success
```

2.定义函数  
```ts
// bad
interface Query {
  arg: string
}
function foo(arg: Query) {
  ...
}

// good
interface Query {
  arg: string
}
function foo<T extends Query>(arg: T) {
  
}
```
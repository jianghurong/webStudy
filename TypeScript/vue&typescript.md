<!--
 * @Author: Richard Chiang
 * @Date: 2019-09-11 10:21:08
 * @LastEditrors: Richard Chiang
 * @LastEditTime: 2020-04-10 14:46:53
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
```ts
let body = document.querySelector('body') // error
let body = <HTMLBodyElement>document.querySelector('body') // success
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

// good => 2020-04-10 官方文档泛型适用于方法返回类型于传入类型相同
interface Query {
  arg: string
}
function foo<T extends Query>(arg: T) {
  
}
```

3.泛型  
```ts
// bad
function identity(arg: number): nubmer {
  return arg;
}
```

```ts
// good
function identity<T>(arg: T): T {
  return arg
}
```
## Vue.nextTick([callback, content])

用法:  
在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新的DOM。

```js
this.$nextTick(() => {
  // dom更新之后的操作
})
```

## Node process.nextTick
process.nextTick 执行优先于setImmediate
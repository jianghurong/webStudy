<!--
 * @Author: Richard Chiang
 * @Date: 2020-05-15 15:23:36
 * @LastEditrors: Richard Chiang
 * @LastEditTime: 2020-05-15 16:23:04
 * @Email: 19875991227@163.com
--> 
## throttle-debounce
阅读element-ui源码时发现backTop等组件中引入了throttle-debounce包，前端面试也经常提及防抖、节流概念，遂进行研究。  
(npm周下载过百万，github的Star数只有500多星，刚开始看到还以为不是官方库呢~)
```js
// throttle.js
/**
* 一个执行节流的函数，特别适用于对于如resize和scroll的事件处理程序限制速率
* @param { Number } delay 毫秒为单位,0或更大的延迟,用于事件回调，值在&100或250左右(或者更大)是最合适的
* @param { Boolean } [noTrailing] 可选参,默认值是false，如果noTrailing值为true，callback将仅仅每隔delay毫秒执行一次当节流函数正在被调用。如果noTrailing值为false或未指定。callback将执行一次当最后一次节流函数被调用之后（如果在delay毫秒内未调用节流函数，内部计数器会被重置）
* @param { Function } callback 一个被执行的函数在delay毫秒之后，"this"上下文和全部参数都按照原样传递，执行限制函数时返回callback
* @param { Boolean } [debounceMode] 如果debounceMode为true,"clear"执行在delay毫秒之后。如果debounceMode为false，'callback'执行在delay毫秒之后
* @return { Function } 一个新的节流过的函数
*/
export default function(delay, noTrailing, callback, debounceMode) {
  
  var timeoutId
  var cancelled = false

  var lastExec = 0

  // 清除现有超时的函数
  function clearExistingTimeout() {
    if (timeoutId) {
      clearTime(timeoutId)
    }
  }

  // 取消下一次执行的函数
  function cancel() {
    clearExistingTimeout()
    cancelled = true
  }

  if(typeof noTrailing !== 'boolean') {
    debounceMode = callback
    callback = noTrailing
    noTrailing = undefined
  }

  function wrapper() {
    var self = this
    var elpased = Date.now() - lastExec
    var args = arguments

    if (cancelled) return
    
    function exec() {
      lastExec = Date.now()
      callback.apply(self, args)
    }

    function clear() {
      timeoutID = undefined
    }
    if (debounceMode && !timeoutID) exec()
    clearExistingTimeout()
    if (debounceMode === undefined && elapsed > delay) {
      exec()
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay)
    }
  }
  wrapper.cancel = cancel
  return wrapper
}
```

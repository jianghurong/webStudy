<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-22 09:26:25
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-22 10:04:42
 * @Email: 19875991227@163.com
 * @Description: 
-->
## What is nextTick ?
> 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

## Why nextTick ?    
因为**Vue 数据更新之后，视图并不会马上更新**（而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新）。所以，需要一个 api 来确保视图能有效更新。  

## How nextTick ?
<code>Vue.nextTick( [callback, context] )</code>

## nextTick principle
首先判断浏览器是否支持 promise（微任务），支持则使用 promise 执行回调。如果不支持。则检测浏览器是否支持（setImmediate、MutationObserver、setTimeout）（宏任务）来确定使用哪个 API 执行回调。
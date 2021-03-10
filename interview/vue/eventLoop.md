<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-08 12:35:21
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-08 18:13:37
 * @Email: 19875991227@163.com
 * @Description: event loop
-->
1. what is event loop ?  
在讲 event loop 之前，我们首先了解什么是进程。  
进程是指运行之后的程序。一般情况下，一个进程一次只能执行一个任务。如果需要执行多个任务，有以下几种解决方法。  
    1. 排队。前面的任务执行完成，再执行后面的任务。
    2. 新建进程。
    3. 新建线程。因为进程太耗费资源，所以如今的程序允许一个进程包含多个线程，由线程去完成任务。( worker API )

event loop，是指**浏览器或者 node 解决javaScript 单线程运行时不会阻塞的机制**，也就是我们使用异步的原因。其本质上是一个程序结构，用于等待和发送消息和事件。  
就是说在程序中设置两个线程，一个负责程序本身的运行，成为“主线程”；另一个负责主线程与其它进程的通信。  
在 javaScript 中，任务被分为两种，宏任务（ MacroTask ）与微任务（ MicroTask ）。  
```js
// 宏任务
// scirpt 中代码、setTimeout、setInterval、I/O、UI Rendering

// 微任务
// Process.nextTick( node )、Promise
```
![event loop](https://segmentfault.com/img/remote/1460000016278118)
event loop 有以下几个重点：  
1. MacroTask 一次只从队列中取一个任务执行，执行完之后就去执行微任务队列中的任务
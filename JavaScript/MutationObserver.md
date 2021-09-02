## 简介
``MutationObserver()`` 构造函数创建并返回一个新的观察器，它会在触发指定DOM 事件时，调用指定的回调函数。
``MutationObserver()`` 对DOM的观察不会立即启动，而必须调用``Observe()``方法来确定两点。一是**要监听哪些DOM**，二是**要响应哪些变化**。

## 语法
```js
var observer = new MutationObserver(callback)
```
参数

``callback``  
一个回调函数，每当被指定的元素有DOM变动时会被调用。  
回调函数拥有两个参数： 
1. 描述所有被触发改动的 [MutationRecord](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationRecord) 对象数组
2. 调用该函数的 ``MutationObserver`` 对象  

返回值
一个新的、包含监听DOM变化回调函数的 ``MutationObserver`` 对象

## Events
1. disconnect: 停止观察变动
2. observe: 开始观察变动
3. takeRecords: 观察记录

## 示例
下面的例子简单地创建了一个新的 ``MutationObserver``，监听一个节点及其全部子节点树的添加、移除元素，以及任何属性变化的事件。

```js
function callback(mutationList, observer) {
    mutationList.forEach(mutation => {
        switch(mutation.type) {
            case 'childList':
            /* 从树上添加或移除一个或更多的子节点；参见 mutation.addedNodes 与 mutation.removedNodes */
            break
            case 'attributes':
            /* mutation.target 中某节点的一个属性值被改变：该属性名称在mutation.attributeName中，该属性之前的值为 mutation.oldValue */
            break
        }
    })
}
```
调用 ``observe()`` 即可开始观察 DOM。当观察者 ``observer`` 发现匹配观察请求中指定的配置项的更改时，``callback()`` 方法便会被调用。  
使用 ``mutation.type`` 获取发生的变动类别（无论是子节点的变动，还是节点属性的变动）。

## 使用 observer

```js
let targetNode = document.querySelector('#someElement')
let observerOptions = {
    childList: true, // 观察目标子节点的变化，是否有添加或者删除
    attributes: true, // 观察属性变动
    subtree: true // 观察后代节点
}

let observer = new MutationObserver(callback)
observer.observe(targetNode, observerOptions)
```
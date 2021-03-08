<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-08 09:50:49
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-08 10:35:34
 * @Email: 19875991227@163.com
 * @Description: vue 的 diff 算法
-->
1. why diff ?  
渲染 dom 的成本是很大的，如果修改了数据，直接更新到 dom 节点上会引起整个 dom 树的重绘和重排。如果我们可以直接修改某一块的 dom 而不用更新整个 dom 树，会使得渲染成本降低。这时候我们的 diff 算法就能帮助我们。

2. what diff ?   
diff 算法是一种帮助我们计算出哪些需要更新的 virtual dom 的算法。diff 的过程就是调用 <code>patch</code> 函数。比较新旧节点，给真实的 dom 打补丁。

3. how diff ?
diff 算法比较新旧节点的时候，只会同级比较，不会跨级比较。
```html
<div>
    <p>someone</p>
</div>
<div>
    <h1>someone</h1>
</div>
```
上面在 diff 比较时，会比较两个 div ，之后比较 p 和 h1 。  
当数据发生改变时。set 方法会让调用者调用 Dep.notify 通知所有订阅者 watcher ，订阅者就会调用 patch 给真实的 dom 打补丁，更新视图。  
![diff 流程图](https://images2018.cnblogs.com/blog/998023/201805/998023-20180519212357826-1474719173.png)  
patch 函数中的执行逻辑大致如下：  
1. patch 函数接受两个参数，一个 oldVnode， 一个 vnode 。
2. sameVnode 比较两个参数，如果相同，则用 patchVnode 深入比较子节点。
3. 如果不相同，则使用 vnode 创建新元素，将 vnode 元素插入 oldVnode 的父元素之中。然后从 oldVnode 中删除父元素。  
4. 如果两个节点不一样，但是子节点一样。还会继续比较吗？答案是不会，这可能算是 diff 的一个缺点。
5. pathVnode 中逻辑较多，我们直接看代码  
```js
patchVnode(oldVnode, vnode) {
    const el = vnode.el = oldVnode.el // 找出真实 dom 即 oldVnode.el
    let i, oldCh = oldVnode.children, ch = vnode.children
    // 将 i，oldCh 赋值为 oldVnode 的子元素，ch 为 vnode 的子元素
    if (oldVnode === vnode) return // 如果两者相等，直接返回
    if (oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text) {
        api.setTextContent(el, vnode.text) // 如果文本节点不相同，将 el 设置为 vnode.text
    } else {
        updateEle(el, vnode, oldVnode)
        if (oldCh && ch && oldCh !== ch) {
            updateChildren(el, oldCh, ch) // 如果oldVnode 有子元素，并且 vnode 有子元素，则执行 updateChildren 比较子元素
        } else if (ch) {
            createEle(vnode) // 如果 vnode 有子节点而 oldVnode 没有，则将 vnode 节点真实化之后添加到 el 元素
        } else if (oldCh) {
            api.removeChildren(el)  // 如果 vnode 没有子节点 而 oldVnode 有，则将 el 删除
        }
    }
}
```
6. uploadChildren 代码较多，感兴趣的同学可自行查阅。

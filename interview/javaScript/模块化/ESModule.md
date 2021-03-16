<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-12 16:48:50
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-16 11:29:35
 * @Email: 19875991227@163.com
 * @Description: 模块化- ESModule
-->
参考链接：[ESModule](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)  


## what is ESModule ?  
ESModule 是 ES6 发布的官方 module 特性。  
ESModule 作为后起之秀，已经占据了模块化规范的大片江山。  

## why ESModule ?
* 相对于非模块化
    1. 函数之前不能访问变量。
    2. 模块之前可以决定哪些变量，函数可以被其它模块看见。选择性的 <code>export</code>，选择性的 <code>import</code>。
* 相对于其它模块
    1. ES6 官方化了模块，**浏览器无需引入额外的库来实现模块化的编程。**
    2. **使用简单，语法少。** 核心语法 是 <code>export</code> 和 <code>import</code> 。

## ESModule's working principle
浏览器与 node 通过 <code>import</code> 语句，浏览器与 node 才知道它们到底要加载哪些代码。  
浏览器并不能直接使用这些代码的文件，所有的文件都必须转变成为叫做 <code>Module Records</code> （ 模块记录 ）的数据结构。  
在这之后，module record 需要被转化为 <code>module instance</code>，一个 module instance 包含2种东西：code 和 state。  
code 就是一系列的操作指令，就像菜单一样。state 就像是原材料。  
module instance 的创建步骤：  
1. construction-构造: 找到，下载所有的 module records
2. instantiation-实例化：在内存里找到所有的“盒子”，把所有导出的变量放进去。然后，让导出和导入都指向内存里面的这些盒子。（linking）
3. evalution-求值：执行代码，得到变量的值然后放到这些内存的“盒子”里。

## how ESModule ?

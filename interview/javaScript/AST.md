<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-23 09:59:17
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-23 10:37:58
 * @Email: 19875991227@163.com
 * @Description: 
-->
1. What is AST ?  
Babel, Webpack, vue-cli, eslint 等很多的工具和库的核心都是通过<code>Abstract Syntax Tree</code> 抽象语法树来实现对代码的检查、分析等操作。在 vue 中，我们在代码中编写的 <code>template</code> 转化成 <code>render function</code>的过程中第一步就是解析模板字符串生成 AST。  
AST 是**源代码的抽象语结构的树状表现形式，这里特指编程语言的源代码**
2. JavaScript Parser（三板斧）  
* javaScript Parser：把 js 源码转化为抽象语法树的解析器  
* 浏览器会把 js 源码通过解析器转为抽象语法树，再进一步转化为字节码或生成机器码  
* 每个引擎有自己的抽象语法树格式: <code>Chrome v8</code>, <code>Firefox 的 SpiderMonkey</code>  

3. javaScript parser 的三板斧  
* 通过 <code>esprima</code> 把源码转化为 AST  
```js
let esprima = require('esprima')  
let code = 'function ast() {}'
let ast = esprima.parse(code)  
console.log(ast)
```
* 通过 estraverse 遍历并更新 AST  
```js
let esprima = require('esprima')  
let estraverse = require('estraverse')  
let code = 'function ast() {}'  
let ast = esprima.parse(code)
estraverse.traverse(ast, {
    enter(node) {
        console.log('enter', node.type)
    }
})
```

* 通过 escodegen 将 AST 重新生成源码
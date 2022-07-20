以下是``Vue``源码``src/core/instanceof/index.js``中的部分代码
```js
function Vue (options) {
    if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
        warn('Vue is a constructor and should be called with the `new` keyword')
    }
    this._init(options)
}
```
其中，``this instanceof Vue`` 用于判断对象是 new 出来的，而非函数调用。  
还有以下方式可以判断。  
```js
this instanceof arguments.callee
this.constructor === arguments.callee
new.target === arguments.callee // 最好
```
唉~惭愧，第一次看到``this instanceof Vue``竟然不知道是干嘛的！
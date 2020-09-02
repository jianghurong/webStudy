## worker
worker()构造函数创建一个```work```对象，该对象执行指定的url脚本。这个脚本必须与worker所在的文件同源。  
如果此url有一个无效的语句，或者违反同源策略，一个```SECURITY_ERR````类型的文件错误被抛出

### 语法
```js
const myWorker = new Worker(aURL, options)
```

### cpu核心数
```navigator.hardwareConcurrency```

navigator.hardwareConcurrency指明当前浏览器环境所拥有的CPU核心数，这来自于操作系统提供的API来获取。
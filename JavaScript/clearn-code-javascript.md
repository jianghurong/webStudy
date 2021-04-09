## 使用事件链
这个模式在 <code>javaScript</code> 中是非常有用的，并且你可以在很多库例如 <code>jquery</code> 或者 <code>lodash</code> 中看见它的存在。
它会让你的代码非常有表现力，并且不啰嗦。因为这个原因。我建议，使用事件链并且它会使你的代码变得多干净。在你的 <code>class</code> 函数中，简单的
返回 <code>this</code> 在每个函数的结尾，你可以链接更多 <code>class</code> 中的 <code>method</code>。
```js
// bad
class Car {
    constructor(make, model, color) {
        this.make = make
        this.model = model
        this.color = color
    }

    setMake(make) {
        this.make = make
    }

    setModel(model) {
        this.model = model
    }

    setColor(color) {
        this.color = color
    }
}
const car = new Car('ford', 'f-150', 'blue')
car.setColor('pink')
car.setMolde('large')

// good
class Car {
    constructor(make, model, color) {
        this.make = make
        this.model = model
        this.color = color
    }

    setMake(make) {
        this.make = make
        return this
    }

    setModel(model) {
        this.model = model
        return this
    }

    setColor(color) {
        this.color = color
        return this
    }
}
const car = new Car('ford', 'f-150', 'blue')
    .setColor('pink')
    .setModel('large')
```

### 不要使用全局函数  
```js
// bad
Array.prototype.diff = function diff((comparisonArray) {
    const hash = new Set(comparisonArray)
    return this.filter(ele => !hash.has(ele))
})

// good
class SuperArray extends Array {
    diff(comparisonArray) {
        const hash = new Set(comparisonArray)
        return this.filter(ele => !hash.has(ele))
    }
}
```

## 错误处理
抛出错误是一件好事！它们意味着运行时成功识别当在你的程序发生错误的一些事情和它让你知道通过在当前执行栈暂停执行函数，
杀死进程（在 node），和在控制台的栈跟踪器提示你。

### 别忽略捕捉错误
捕获错误后什么都不做无法给你修复错误的能力或对报错做出反应。
```js
// bad
try {
    funcitonThatMightThrow()
} catch (error) {
    console.log(error)
}

// good
try {
    funcitonThatMightThrow()
} catch (error) {
    console.log(error)
    notifyUserOfError(error)
    reportErrorToService(error)
}
```

## 格式化
格式化是非常主观的，像这里的很多规则。这里没有你必须硬性遵守的规则。主要一点是不要过分格式化。有大量工具可以自动
执行这个操作。用一个吧！如果开发者去过度格式化会浪费大量的时间和钱力。  
对于不属于自动格式化范畴的事情（缩进、tab 或 空格、单双引号等等），请在这里获取一些建议。

### 使用同一的大写  
javaScript 是一门弱类型的语言，所以大写格式可以告诉你一些变量、函数等等的信息。这些规则是非常主观的。所以你的团队
可以选择他们想要的任意规则。重点是，无论你选择什么规则，统一格式。
```js
// bad
const DAYS_IN_WEEK = 7
const daysInMonth = 30

const songs = ["Back in Black"]
const Artists = ["ACDC", "The Beatles"]

function eraseDatabase() {}
function restore_database() {}

class animal {}
class Alpaca {}

// good
const DAYS_IN_WEEK = 7
const DAYS_IN_MONTH = 30

const SONGS = ["Back in Black"]
const ARTISTS = ["ACDC", "The Beatles"]

function eraseDatabase() {}
function restoreDatabase() {}

class Animal {}
class Alpaca {}
```


## 注释

### 仅仅注释业务逻辑具有复杂性的代码
注释是一个道歉，不是必要的。好的代码就是文档。
```js
// bad
function hashIt(data) {
    // hash
    let hash = 0

    // 字符串长度
    const length = data.length

    // 循环 data 中的每一个字符
    for (let i = 0; i < length; i++) {
        // 获取当前字符码
        const char = data.charCodeAt(i)
        // 生成 hash
        hash = (hash << 5) - hash + char;
        hash &= hash
    }
}

// good
function hashIt(data) {
    let hash = 0
    const length = data.length
    for (let i = 0; i < length; i++) {
        const char = data.charCodeAt(i)
        // make the hash
        hash = (hash << 5) - hash + char
        // convert to 32-bit integer
        hash &= hash
    }
}
```

### 不要代码库里留下注释的代码
版本控制存在是有理由的，会将旧代码存在历史记录中
```js
// bad
doStuff()
// doOtherStuff()
// doSomeMoreStuff()
// doSoMuchStuff()

// good
doStuff()
```
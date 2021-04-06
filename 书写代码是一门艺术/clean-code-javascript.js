/**
 * 本文档是从《代码整洁之道》这本书中理解到的软件工程原则，改编成 javaScript 版本。
 * 本文档并不是一个风格指南。
 * 它会引领你去做一个可读性高(readable),可复用(reusable),可重构(refactorable)的 javaScript 软件。
 * 不是每一个这里的原则都必须严格遵守，并且普遍同意的原则更少。  
 * 这些只是指导方针而已，并不能多做什么。但是他们是一部《代码整洁之道》作者多年来收集的经验汇集而成的词典。
 * 我们的软件工程工艺(craft)仅仅诞生50多年。并且我们在持续学习很多东西。当软件建筑学和建筑学同样年龄时，可能接下来
 * 我们将会有更难遵守的规则。
 * 现在，让这些风格指南作为一个试金石服务用来评估你和你的团队写的 javaScript 代码质量。
 * 还有一件事：知道这些不会立即让你成为一个更好的软件开发者。并且你在工作中使用它们多年也不意味着你不会犯错。
 * 每一段代码都是从初稿(first draft)开始的。最后，我们凿开把缺点凿开当我们与同龄人一起回顾时。别对第一次的需要改进的代码
 * 自责。相反地去虐代码吧。
 * tips: @import 表示重要的并且容易犯的错误
 */
// 变量

// 1.用有含义并且可发音的变量名
// bad
const yyyymmddstr = moment().format('YYYY/MM/DD')
// good
const currentDate = moment().format('YYYY/MM/DD')

// 2.对同一类型的变量用相同的词汇表
// bad
getUserInfo()
getClientData()
getCustomerRecord()
// good
getUser()

// 3.用可搜索的名称 @import
// 我们读的代码比我们写的代码要更多，我们写的代码可读和可搜索是很重要的。不命名变量会使得我们的程序变得不好理解。
// 我们会伤害我们的读者，使你的变量名可搜索。使用一些工具像 buddy.js 和 eslint 可以帮助识别未命名常量。
// bad
setTimeout(blastOff, 86400000)
// good
const MILLISECONDS_IN_A_DAY = 60 * 60 * 24 * 1000; // 86400000
setTimeout(blastOff, MILLISECONDS_IN_A_DAY)

// 4.用解释性变量 @import
// bad
const address = 'one infinite loop, cupertino 95014'
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/
saveCityZipCode(
    address.match(cityZipCodeRegex)[1],
    address.match(cityZipCodeRegex)[2]
)
// good
const address = 'one infinite loop, cupertino 95014'
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/
const [_, city, zipCode] = address.match(cityZipCodeRegex) || []
saveCityZipCode(city, zipCode)

// 5.避免心理（无效）映射
// 显性(Explicit)映射比隐性(Implicit)映射更好
// bad
const locations = ['Austin', 'BeiJing', 'New York']
locations.forEach(ele => todo(ele))
locations.forEach(l => todo(l))

// good
locations.forEach(location => todo(location))

// 6.别添加不需要的上下文 @import
// 如果你的类/对象名告诉你一些事，别重复在你的变量名中
// bad
const Car = {
    carName: 'benz',
    carModel: 'G',
    carColor: 'blue'
}

// good
const Car = {
    name: 'benz',
    model: 'G',
    color: 'blue'
}

// 7.用默认参数替代短路或者条件语句
// 默认参数通常比短路语句更整洁。如果你意识到使用它们，你的函数将只为参数为 undefined
// 的参数提供默认值，其它的 "falsy" 值像 '', "", false, null, 0 和 NaN 不会被默认值代替
// bad
function createMicrobrewery(name) {
    const breweryName = name || 'Hipster Brew Co.'
}

// good
function createMicrobrewery(name = 'Hipster Brew Co.') {
    // ...
}

// 函数
// 8.函数参数（理想情况下2个或者更少）

区别：
arr=[] 会开辟新的内存，如果有其它变量(y)引用，不会改变其它变量(y)的值
arr.length=0 不会开辟新的内存(更快)，如果有其它变量(y)引用，会改变其它变量(y)的值
例：
let p1 = [1, 2, 3]
let p2 = p1
p1 = []
console.log(p2)
let p3 = [1, 2, 3]
let p4 = p3
p3.length = 0
console.log(p4)

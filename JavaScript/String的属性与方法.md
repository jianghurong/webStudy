<!--
 * @Author: Richard Chiang
 * @Date: 2019-12-06 14:57:01
 * @LastEditrors: Richard Chiang
 * @LastEditTime: 2019-12-06 15:38:37
 * @Description: 
 * @Email: 19875991227@163.com
 -->

---
### 属性
```js
String.prototype = String原型对象
String.length = 字符串长度
```

### 方法
```js
所有方法
google 控制台中输入 String.prototype 可查看
```

```js
// q: 找出任意数组第3个元素
// a: arr.charAt[2]


// q: 找出任意数组第3个元素在ASCII码/UTF-16码的整数
// a: arr.charCodeAt[2] || arr.codePointAt[2]
// 当UNICODE代码单元>0x10000 即不能通过两个字节，需要四个字节存储时，请使用
// codePointAt()

// q:连接三个字符串
// a: str1.concat(str2).concat(str3) || + +=

// q:判断一个字符串是否以指定字符串结尾
// a: str1.endsWith(str2) str1以str结尾
// a2: let regexp = new RegExp(str2 + '$', 'g')
// regexp.test(str1)
// 以指定字符串开头 str1.stratsWith(str2)

// q: 判断一个字符串str1包含另一个字符串str2
// a: str1.includes(str2)

```

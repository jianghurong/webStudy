<!--
 * @Author: Richard Chiang
 * @Date: 2019-12-05 14:53:11
 * @LastEditrors: Richard Chiang
 * @LastEditTime: 2020-10-19 16:18:55
 * @Description: 
 * @Email: 19875991227@163.com
 -->

---
### Google Style Guide (JavaScript)
1.IE浏览器不支持 const、let等关键字
2.google naming
```js
functionNamesLikeThis
variableNamesLikeThis
ClassNamesLikeThis
EnumNamesLikeThis
methodNamesLikeThis
CONSTANT_VALUES_LIKE_THIS
foo.namespaceNamesLikeThis.bar
filenameslikethis.js
```
3.javascript中单引号(')优先级大于双引号("),在创建包含HTML的字符串的时候很有用。
4.cope 技巧 不用复制段落第一行前面的空格
5.css 中颜色用小写 如
```css
/* Not Recommend */
color: #E5E5E5;
/* Recommend */
color: #e5e5e5;
```
6.最富有争议的，用不用双分号作为行末结尾
github上google的js或ts项目都用分号做行末结尾
7.css用字母表排序对属性进行排序
8.continue

给定有效字符串 "abc"。

对于任何有效的字符串 V，我们可以将 V 分成两个部分 X 和 Y，使得 X + Y（X 与 Y 连接）等于 V。（X 或 Y 可以为空。）那么，X + "abc" + Y 也同样是有效的。

abc

例如，如果 S = "abc"，则有效字符串的示例是："abc"，"aabcbc"，"abcabc"，"abcabcababcc"。无效字符串的示例是："abccba"，"ab"，"cababc"，"bac"。

如果给定字符串 S 有效，则返回 true；否则，返回 false。

输入："aabcbc"
输出：true
解释：
从有效字符串 "abc" 开始。
然后我们可以在 "a" 和 "bc" 之间插入另一个 "abc"，产生 "a" + "abc" + "bc"，即 "aabcbc"。
ababcc
<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-19 11:09:46
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-19 11:16:16
 * @Email: 19875991227@163.com
 * @Description: 
-->
v-for、v-if 能放在一起用吗？
vue 2不能，vue 3可以。不建议放一起。

v-for、v-if 优先级？
v-for 比 v-if 优先级高（可以不用说原因，因为原因是因为在源码 <code>genElement</code>中，有一些 if else 的判断，处理 for 循环是处于 if 上面的。）
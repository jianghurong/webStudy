<!--
 * @Author: Richard Chiang
 * @Date: 2021-02-22 14:16:33
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-02-22 14:22:47
 * @Email: 19875991227@163.com
 * @Description: mvvm
-->
## what
<code>mvvm</code> 即 <code>model-view-view-model</code> ，其中，<code>mvvm</code> 即模型，<code>view</code> 即视图。  
<code> vue </code> 中利用 <code>Object.defineProperty</code> 特性拦截数据的变化，并通过 <code>setter</code> 更新数据至视图。 

## mvvm vs mvc  
mvvm 改变数据可以更改视图，改变视图也能更改数据。
mvc 基本没变化，只是说。比 mvvm 少了个功能，改变视图的时候需要主动写函数更改数据。
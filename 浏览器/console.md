<!--
 * @Author: Richard Chiang
 * @Date: 2019-10-09 17:47:39
 * @LastEditrors: Richard Chiang
 * @LastEditTime: 2019-10-09 17:47:39
 * @Description:  
 * @Email: 19875991227@163.com
 -->
## Console
```ts
console.log();

// vue-next 兼容
console[console.info ? 'info' : 'log']();
```
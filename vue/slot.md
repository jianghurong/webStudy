<!--
 * @Author: Richard Chiang
 * @Date: 2020-06-23 15:37:32
 * @LastEditrors: Richard Chiang
 * @LastEditTime: 2020-06-23 16:02:45
 * @Email: 19875991227@163.com
--> 
## Slot - 插槽
2.6.0中，vue为插槽引入了一个新的语法```v-slot```指令  
### 插槽内容
父组件
```js
<component>
  <template v-slot:header>
    <p>i'm header</p>
  </template>
<component>
```
子组件
```js
<template>
  <slot name="headr"></slot>
</template>
```

### 父组件组件插槽内容访问子组件数据  
父组件
```js
<component>
  <template v-slot:header="slotProps">
    <h1>{{ slotProps.user.name }}</h1>
  </template>
</component>
```
子组件
```js
<template>
  <slot name="header" :user="user"></slot>
</template>
<script>
export default {
  date() {
    return {
      user: {
        name: 'riven'
      }
    }
  }
}
</script>
```

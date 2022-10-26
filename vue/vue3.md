1.基本结构
```js
<script setup>
</script>
<template>
</template>
<style lang="scss" module>
</style>
```

2.css module
```js
<template>
    <p :class="$style.text">hello</p>
</template>
```
```js
<style lang="scss" module>
.text {
    color: lightblue;
}
</style>
```
或者
```js
<template>
    <p :class="home.text">hello</p>
</template>
```
```js
<style lang="scss" module="home">
.text {
    color: lightblue;
}
</style>
```

3. moment vs dayjs
dayjs体积更小，moment不再引入。
如果文件中有moment的操作，请使用dayjs操作一遍。

4. will-change
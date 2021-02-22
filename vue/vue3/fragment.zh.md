片段 (新) 

# 概览

在Vue3，组件现在为多根节点组件有官方支持，即片段

#2.x语法

在 2.x，多根节点组件不被支持，并且会提交一个警告当用户意外地创建一个组件。结果，很多组件被包裹在一个单独<div>中为了修复这个错误。

<-- Layout.vue -->
<template>
    <div>
        <header>...</header>
        <main>...</main>
        <footer>...</footer>
    </div>
</template>


#3.x 语法
在 3.x，组件现在可以有多根节点！然而，这需要开发者明确的定义属性应该分布在哪里

<!-- Layout.vue -->
<template>
  <header>...</header>
  <main v-bind="$attrs">...</main>
  <footer>...</footer>
</template>

了解更多attribute继承如何工作的信息，查看Non-Prop属性



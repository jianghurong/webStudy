## 介绍

前言 2020-09-18  
之前已经注意到到很多文档网站都是统一的样式规范，如vue-router、vuex、qiankun等，当时在想这是不是生成于一个轮子的。无奈在网上没有找到相关资料。今天在查阅vue-router官方文档注意到package.json有这么一行命令
```json
"docs": "vuepress dev docs"
```
运行之后显示的竟然是官网网页，开心ing。找到了这个开源库。可以写一个博客/文档网站了。话不多说，直接开始。

## 安装
1.创建一个新目录
```shell
mkdir vuepress-starter && cd vuepress-starter
```
2.初始化
```shell
yarn init
```
3.将VuePress安装为本地依赖
```shell
yarn add vuepress -D
```
4.创建一篇文档(markdown文档)  
注意要在根目录中创建docs文件夹，md文件放在这个文件夹中  
5.在package.json中添加scripts
```json
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
}
```
6.启动
```shell
yarn docs:dev
```
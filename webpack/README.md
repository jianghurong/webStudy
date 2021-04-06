## mode 模式  
可选值 production, development, none 。提供 <code>mode</code> 选项，告知 <code>webpack</code> 使用相应模式的内置优化。  
process.env.NODE_ENV 的值也会随之变化。    
webpack.config.js
```js
module.exports = {
    mode: 'production',
}
```
scripts
```
webpack --mode=production
```

## entry 入口  
入口起点指示 <code>webpack</code> 应该使用哪个模块，作为构建其内部**依赖图**的起点。  
默认值是 <code>./src/index.js</code>
webpack.config.js
```js
module.exports = {
    entry: './src/main.js',
}
```

## watch 是否开启 watch 模式  
<code>watch</code> 开启后，<code>webpack</code> 将监听任何已解析文件的更改
webpack.config.js
```js
module.exports = {
    watch: true
}
```
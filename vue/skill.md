1. ```prop``` 验证器  

```prop``` 下的 ```validator``` 选项，可以帮助我们确定该 ```prop``` 的范围

```js
export default {
    name: 'Foo',
    props: {
        type: {
            type: String,
            validator: t => ['default', 'success', 'warning', 'danger'].includes(t)
        }
    }
}
```


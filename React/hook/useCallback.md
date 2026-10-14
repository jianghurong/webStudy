## 简介
``useCallback``是一个允许你在多次渲染中缓存函数的``React Hook``

> 注意
``React Compiler``会自动对值和函数进行记忆化处理，从而减少手动调用``useCallback``的需求。你可以使用编译器自动处理记忆化。

示例
```js
import { useCallback } from 'react'

export default function ProductPage({ productId, referrer, theme }) {
    const handleSubmit = useCallback(() => {
        post('/product/' + productId + '/buy', {
            referrer,
            orderDetails
        })
    }, [productId, referrer])
}
```
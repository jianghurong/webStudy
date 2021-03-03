秃撸皮之全手写 Promise
三个状态：PENDING FULFILLED REJECTED

```js
let promise = new VPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise success')
  }, 3000)
}).then(res => {
  console.log(res)
})

class VPromise {
  constructor(fn) {
    this.status = 'PENDING'
    this.value = ''
    this.fullFilledCallBackList = []
    this.rejectedCallBackList = []
    fn(this.resolve.bind(this), this.reject.bind(this))
  }

  then(onFulFilled, onRejected) {
    if (this.status === 'FULFILLED') {
      onFulFilled(this.value)
    } else if (this.status === 'REJECTED') {
      onRejected(this.value)
    } else {
      this.fullFilledCallBackList.push(onFulFilled)
      this.rejectedCallBackList.push(onRejected)
    }
  }

  resolve(res) {
    this.status = 'FULFILLED'
    this.value = res
    this.fullFilledCallBackList.forEach(cb => cb(this.value))
  }

  reject(err) {
    this.status = 'REJECTED'
    this.value = err
    this.rejectedCallBackList.forEach(cb => cb(this.value))
  }
}
```
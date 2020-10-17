## Promise.allSettled
* 接受一组Promise，并且返回所有的结果，不管是resolved还是rejected

```js
const allPromise = [
  Promise.resolve(100),
  Promise.reject(null),
  Promise.reject(new Error('error.'))
]
Promise.allSettled(allPromise)
  .then(res => {
    console.log(res, 'allSettled')
  })

  {status: "fulfilled", value: 100}
  {status: "rejected", reason: null}
  {status: "rejected", reason: Error: error.}
```

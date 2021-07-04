# Promise()

## 特点
- 对象的状态不受外界影响。  
  有三种状态：pending fulfilled rejected  
  只有异步操作的结果可以决定当前是哪一种状态，其他操作无法无法改变这个状态（Promise的由来）。  

- 一旦状态改变，就不会再变，任何时候都可以得到这个结果，会一直保持。  
  这点跟事件（Event）不同，如果错过了事件，再去监听，是得不到结果的。  

## 缺点
- 无法中途取消
- 如果不设置回调函数，Promise的内部错误不会反应到外部
- 当处于pending状态时，无法得知当前进展到哪一阶段（刚刚开始还是接近完成）

```js
this.promiseFn()
  .then(res => {
    console.log(res);
  })
  .catch(err => console.log(err))

this.getUser()
  .then(res => {
    this.resData.push(res);
    this.getOtherUser()
      .then(res => {
        this.resData.push(res);
        console.log(this.resData, 'promise'); // [{},{}]
      })
  })

this.getItems()
  .then(res => {
    console.log(res, 'promise2'); // [{},{}]
  })

promiseFn() {
  return new Promise((resolve, reject) => {
    resolve({
      name: 'hello',
      age: 12,
      status: 200
    });
  })
},
getUser() {
  return new Promise((resolve, reject) => {
    resolve({
      name: 'zhansan',
      age: 11
    })
  })
},
getOtherUser() {
  return new Promise((resolve, reject) => {
    resolve({
      name: 'xiaozhang',
      age: 12
    })
  })
},
async getItems() {
  try {
    let item0 = await this.getUser();
    let item1 = await this.getOtherUser();
    return [item0, item1];
  } catch (error) {
    
  }
}
```

## Promise.allSettled()

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

// {status: "fulfilled", value: 100}
// {status: "rejected", reason: null}
// {status: "rejected", reason: Error: error.}
```

## Promise.race()
- 将多个Promise实例包装成一个新的Promise实例
- 只要有一个实例先改变状态，p的实例状态就跟着改变，率先改变的Promise实例的返回值则传递给p的回调函数
```js
const p = Promise.race([p1, p2, p3]);

const p = Promise.race([
  fetch('xxx'),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('request tuimeout'))
    }, 5000)
  })
]);

p()
.then(() => {})
.catch(() => {})
```
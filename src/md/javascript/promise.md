## Promise()

### resolve reject

### async await

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

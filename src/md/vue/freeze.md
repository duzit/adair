## freeze()

* Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。

### 提升性能

* 渲染比较大的数据，vue会将data中的所有属性加入响应性系统中，当这些属性的值发生改变时，视图将会产生相应，若对象的数据比较大，
  将会很消耗浏览器性能。可以通过数据减少数据的响应性转换来提升性能。

```js
export default {
  data: () => ({
    users: {}
  }),
  async created() {
    const users = await axios.get("/api/users");
    this.users = users;
  }
};

// freeze
export default {
  data: () => ({
    users: {}
  }),
  async created() {
    const users = await axios.get("/api/users");
    this.users = Object.freeze(users);
  }
};
```

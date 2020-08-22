## 展开操作符

### 数组
```js
let arr0 = [1, 2, 3];
let arr1 = [4, 5];
let spreadArr0 = [...arr0, ...arr1];
console.log(spreadArr0, 'array'); // [1,2,3,4,5]
```

### 对象
```js
let obj0 = {
  name: 'xiaoming',
  age: 12
};
let obj1 = {
  sex: 'male'
};
console.log({ ...obj0, ...obj1 }, 'object'); // {name: "xiaoming", age: 12, sex: "male"}
```
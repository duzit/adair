## 剩余参数
---
### 将剩余的参数收入数列
```js
let sum = this.remindParamsFn(1, 2, 3, 4, 5);
console.log(sum, 'remind params'); // 15

remindParamsFn(a, b, ...params) {
  return a + b + params.reduce((acc, curr) => acc + curr, 0);
}
```

### es5 arguments
```js
this.argumentsFn(1, 2, 3);

// es5 arguments
argumentsFn() {
  console.log(arguments, 'arguments'); // [1, 2, 3]
  console.log(arguments[0], 'arguments[0]'); // [1]
  console.log(arguments[1], 'arguments[1]'); // [2]
}
```

### 对象中定义方法
```js
// 对象中定义方法
let obj0 = {
  name: 'xiaming',
  add(a, b, ...params) {
    console.log(a + b + params.reduce((acc, curr) => acc + curr, 0));
  }
};
obj0.add(1, 2, 3, 4);
```
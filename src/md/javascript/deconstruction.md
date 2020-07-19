## 解构赋值
---
### 对象解构
```js
let res = {
  name: "xiaozhang",
  age: 12,
  body: {
    type: 1
  }
};

this.deconstructFn(res);

deconstructFn(res) {
  let { name, age } = res;
  console.log(name, age, "deconstruct"); // xiaozhang 12
  let {
    body: { type }
  } = res;
  console.log(type, "deconstruct"); // 1
}
```

### 数组解构
```js
let arr = [1,2,3,4,5,6];
// 注意有空格
let [a, , c, ...reminds] = arr;
console.log(a, c, reminds); // 1 3 [4,5,6]
```

### 方法参数解构
```js
let obj = {
  name: 'haha',
  age: 12
};
this.fnDeconstruct(obj);
fnDeconstruct({ name, age }) {
  console.log(name, age); // haha 12
}
```
# ES6 扩展运算符应用

## 拷贝对象
### 数组对象

- 对一维数组使用扩展运算符是深拷贝

```js
const arr = [1, 2, 3];
const cloneArr = [...arr];
cloneArr[0] = 22;
console.log(arr) // [1,2,3]
console.log(cloneArr) // [22,2,3]

const arr1 = [1, [2, 3, 4], 3];
const cloneArr1 = [...arr];
cloneArr[1][0] = 22;
console.log(arr1) // [1, [22, 3, 4], 3]
console.log(cloneArr1) // [1, [22, 3, 4], 3]
```

### 对象

```js
const obj1 = {
  a: 'hello',
  b: 2
};
const cloneObj1 = { ...obj1 };
cloneObj1.b = 33;
console.log(obj1) 
// {
//   a: 'hello',
//   b: 2
// }
console.log(cloneObj1)
// {
//   a: 'hello',
//   b: 33
// }

const obj2 = {
  a: 'hello',
  b: 2,
  c: {
    d: 12
  }
};
const cloneObj2 = { ...obj1 };
cloneObj2.c.d = 33;
console.log(obj2)
console.log(cloneObj2)
```

## 合并操作

### 数组合并

```js
const a1 = [1, 2, 3, 4];
const a2 = [3, 4, 5];

console.log([...a1, ...a2]) // [1,2,3,4,3,4,5]
```

### 合并对象

```js
const o1 = {
  id: 1,
  age: 12,
  sex: {
    sel: 1
  }
}

const o2 = {
  name: 'hello',
  age: 14,
  sex: {
    sel: 2,
    age: 11
  }
}

console.log({ ...o1, ...o2 })
// {
//   id: 1,
//   name: 'hello',
//   age: 14,
//   sex: {
//     sel: 2,
//     age: 11
//   }
// }
```

## 参数传递

```js
const sum = (p1, p2) => p1 + p2;
console.log(sum(...[1, 2])) // 3
console.log(sum(...[1, 2, 3])) // 3

console.log(Math.min(...[1, 2, 3])) // 1
console.log(Math.max(...[1, 2, 3])) // 3
```

## 数组去重

```js
const a1 = [1,2,3, 3, 4, 2, 5, 3, 4, 6];
const setArr = [...new Set(a1)];
console.log(setArr) // [1,2,3,4,5,6]
```

## 字符串转字符数组

```js
const title = 'china';
console.log([...title]) // ["c","h","i","n","a"]
```

## 解构变量

```js
const a1 = [1, 2, 3, 4, 5]
const [el1, ...el2] = a1
console.log(el1) // 1
console.log(el2) // [2,3,4,5]

const obj1 = {
  name: 'ben',
  age: 12,
  sex: 1
}

const { name, ...o2 } = obj1;
console.log(name) // 'ben'
console.log(o2) // { age: 12, sex: 1 }
```
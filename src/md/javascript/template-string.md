## 模板字符串
---
### 变量
```js
let name = 'xiaoming';
let age = 12;
let str1 = `${name} is ${age} years old.`;
console.log(str1, 111); // xiaoming is 12 years old.
```
### 对象
```js
let obj1 = {
  name: 'xiaozhang',
  age: 13
};
let str2 = `${obj1.name} is ${obj1.age} years old.`
console.log(str2, 222); // xiaozhang is 13 years old.
```

### 模板 template
```js
let template = `
  <div>
    <span>template string</span>
  </div>
`.trim();
console.log(template, 333);
```

### 函数
```js
tmpStrFn(str) {
  return `${str} Moto.`
}

let fnTplStr = `
  This is function tpl str, ${this.tmpStrFn('hello')}
`
console.log(fnTplStr, 444); // This is function tpl str, hello Moto.
```
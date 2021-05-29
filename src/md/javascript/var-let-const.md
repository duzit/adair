## var let const

* <https://mp.weixin.qq.com/s/w49SXN2ceSW0ZSEH7v4oZw>

* var 重新赋值 重新定义 作用域是 function scope

```js
var name = 'Hel'
name = 'llo'
console.log(name) // llo
var name = 'lee'
console.log(name) // lee

function getPrice() {
  var price = 10
  console.log(price, 'price')
}
getPrice()
/**
 * var 定义的变量作用域是 function scope
 * 函数 getPrice 内部定义的 price 外部不可访问
 */
// console.log(price, 'price') // price is not defined

var count = 3
if (count > 2) {
  var discount = 10
  console.log(discount, 'dicount') // 10
}
// 这里可以访问到 if 语句中定义的 discount 
console.log(discount, 'dicount') // 10
```

* let const 作用域 block scope  let 可重新赋值 const 定义的非对象不行 变量私有化
* 相同点：当前块内有效，执行到块外被销毁；不存在变量提升；不能重复声明。
* 不同点：const不能再赋值，let可重复赋值；const保证的实际上不是变量的值不得改动，
  而是变量指向的内存地址所保存的数据不得改动。

```js
let fName = 'du'
if (fName) {
  let fName = 'do'
  console.log(fName, 'if') // do
}
console.log(fName, 'window') // du

const person = {
  name: 'do',
  age: 12
} 
console.log(person, 'const person') // age 12

person.age = 13
console.log(person, 'const person') // age 13

Object.freeze(person)
// person.name = '123' // Cannot assign to read only property 'name' of object
```

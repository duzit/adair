## es6 对象新增方法

### Object.is()
```js
Object.is('foo', 'foo') // true
Object.is({}, {}) // false

+0 === -0 // true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
Object.is(1, '1') // false
```

### Object.assign(target, source1, source2, ...)
* 如果目标对象和源对象有相同属性，后面的属性会覆盖前面的。
```js
Object.assign({a: 1}, {a:2, b:1}, {b:2, c:2})
// {a: 2, b: 2, c: 2}
```
* 如果只有一个参数，会直接返回该参数。
```js
const obj = {a:1}
Object.assign(obj) === obj // true
```
* 如果参数不是对象，会先转成对象，然后返回。  
  undefined null 不能转为对象 所以如果用作参数会报错
```js
typeof Object.assign(2) // 'object'
```
* 如果非对象参数出现在源对象的位置，这些参数会首先转为对象，如果无法转为对象，就会跳过，  
  即undefined null出现在源对象位置，不会报错。  
  其他类型的值（字符串 数字 布尔），在源对象位置也不会出错，除了字符串会以数组形式拷贝目标对象，其他值都不会产生效果  
  因为字符串的包装对象，会产生可枚举属性。
```js
let obj = {a:1}
Object.assign(obj, undefined) === obj // true
Object.assign(obj, null) === obj // true

let strs = 'abc'
let bool = false
let num = 12
Object.assign({}, strs, bool, num) // {0: "a", 1: "b", 2: "c"}
```
* Object.assign() 拷贝属性是有限制的，只拷贝源对象的自身属性，不拷贝继承属性，不拷贝不可枚举的属性。  
  会拷贝属性名为Symbol值的属性。
```js
Object.assign({b: 'c'},
  Object.defineProperty({}, 'invisible', {
    enumerable: false,
    value: 'hello'
  })
)
// { b: 'c' }

Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' })
// { a: 'b', Symbol(c): 'd' }
```

#### 数组的处理  
* 会把数组当作对象处理
```js
Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]
```

### Object.keys() Object.values() Object.entries()
```js
let obj = {
  a: 1,
  b: 2,
  c: 3
}
Object.keys(obj) // ['a', 'b', 'c']
Object.values(obj) // [1, 2, 3]
Object.entries(obj) // [['a', 1], ['b', 2], ['c', 3]]

// 另一种写法
let {keys, values, entries} = Object;
for (let [key, value] of entries(obj)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}
```
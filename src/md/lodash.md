## lodash

--------

### _.defaults(object, [sources])

* 分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上。 来源对象从左到右应用。
  一旦设置了相同属性的值，后续的将被忽略掉。会改变 object

```js
_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }

let obj0 = {
  name: 'll'
}
let obj1 = {
  age: 10,
  sex: 0
}
console.log(_.defaults(obj0, obj1)) // {name: "ll", age: 10, sex: 0}
```

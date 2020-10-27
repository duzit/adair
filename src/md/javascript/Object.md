## Object 

### Object,entries()
* 返回一个给定对象自身可枚举属性的键值对数组

```js
const o1 = {
  name: 'hello',
  age: 12
}
Object.entries(o1); // [['name', 'hello'], ['age', 12]]
for (const [key, value] of Object.entries(o1)) {
  console.log(`${key}--${value}`);
}
// name--hello
// age--12

const o2 = {
  0: 'a',
  1: 'b'
}
Object.entries(o2); // [['0', 'a'], ['1', 'b']]

Object.entries('foo'); // [['0', 'f'], ['1', 'o'], ['2', 'o']]
```
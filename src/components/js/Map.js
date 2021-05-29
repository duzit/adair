// Map
// 参考 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
// https://mp.weixin.qq.com/s/YdBVplz7bUrcyXrPk5-oVQ
/**
 * Map 对象保存键值对，并且能够记住键的原始插入顺序，任何值都可以作为一个键或一个值
 */

// Map 和 Object 的比较
/**
 * Map 默认不包含任何键，只包含显式插入的键
 * Map 的键可以是任意值，包含函数 对象或任意基本数据类型，Object 的键只能是string或Symbol
 * Map 的key是有序的，Object 的key是无序的
 * Map 的键值对个数可以通过size获取，Object 的键值对个数只能手动计算
 * Map 是iterable的，可以直接被迭代，Object 需要先获取键才能迭代
 * Map 在频繁增删键值对的场景表现更好
 */

console.log('Map start.');

const myMap = new Map();
const keyObj = {};
const keyFunc = function () {};
const keyString = 'a string';

// 添加键
myMap.set(keyObj, 'key object');
myMap.set(keyFunc, 'key function');
myMap.set(keyString, 'key string');

console.log(myMap, 'my map');
console.log(myMap.size, 'map size'); // 3

// 获取值
console.log(myMap.get(keyObj), '--get key obj');
console.log(myMap.get(keyString), '--get key string');
console.log(myMap.get(keyFunc), '--get key function');

console.log(keyObj === {}); // false
console.log(keyFunc === function () {}); // false

console.log(myMap.get({})); // undefined
console.log(myMap.get(() => {})); // undefined

console.log(Array.from(myMap), 'array from');

// NaN 作为 Map 的键
myMap.set(NaN, 'not a number');
myMap.get(NaN); // not a number

// for ... of 迭代 Map
for (const [key, value] of myMap) {
  console.log(`key: ${key}, value: ${value}`);
}
// key: [object Object], value: key object
// key: function () {}, value: key function
// key: a string, value: key string
// key: NaN, value: not a number

for (const value of myMap.values()) {
  console.log(value, 'values');
}
// key object values
// key function values
// key string values
// not a number values

// myMap.entries 同 myMap
for (const [key, value] of myMap.entries()) {
  console.log(`key: ${key}, value: ${value}`);
}

// forEach
console.log('foreach---');
myMap.forEach((value, key) => {
  console.log(`key: ${key}, value: ${value}`);
});

// 方法
console.log(myMap.has(NaN)); // true
console.log(myMap.has('Na')); // false

// map 对象间可以合并 但会保持键的唯一性
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos'],
]);

// 合并两个Map对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开运算符本质上是将Map对象转换成数组。
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three

console.log('Map end.');

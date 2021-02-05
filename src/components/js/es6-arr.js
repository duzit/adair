// es6 数组 新增扩展
// https://mp.weixin.qq.com/s/pNruGEkPsMr0uFdJglyztA
console.log('---es6 数组 新增扩展---');
// 1. 扩展运算符
// 转为用逗号分隔的参数序列
console.log(...[1, 2, 3]); // 1 2 3
// 数组的合并 浅拷贝
console.log([...[1, 2,], ...[3, 4, 5]]); [1, 2, 3, 4, 5]

function es6ArrPush(array, items) {
  array.push(...items); // [1, 2, 3, 4]
  console.log(array, 'push');
}

es6ArrPush([], [1, 2, 3, 4])

// 与解构赋值结合
const [es6Arr1, ...es6Arr2] = [1, 2, 3, 4]
const [es6Arr3, ...es6Arr4] = []
console.log(es6Arr1, es6Arr2, '解构赋值结合'); // 1 [2, 3, 4]
console.log(es6Arr3, es6Arr4, '解构赋值结合'); // undefined []

// 将字符串转为数组
console.log([...'hello'], '将字符串转为数组'); // ["h", "e", "l", "l", "o"]

// Iterator 接口的对象
const es6ArrMap = new Map([
  [1, 'a'],
  [2, 'b'],
  [3, 'c']
])
console.log(es6ArrMap.keys(), 'map keys');
console.log(...es6ArrMap.keys(), '...map keys'); // 1 2 3

// 2. 构造函数新增的方法
// Array.from() 将两类对象转为数组：类似数组的对象，可遍历（Iterator）的对象
// Array.of() 将一组值转换为数组

const es6ArrLike = {
  0: '0',
  1: 'a',
  2: 'b',
  length: 3
}
console.log(Array.from(es6ArrLike), 'arr like'); // ['0', 'a', 'b']
// 支持第二个参数 用于对每一个元素做处理
console.log(Array.from(es6ArrLike, (item) => {
  return item + 'xx'
}), 'arr like'); // ["0xx", "axx", "bxx"] 

console.log(Array.of(), 'of 无参数'); // []
console.log(Array.of(2), 'of 一个参数'); // [2]
console.log(Array.of(2, 3), 'of 两个参数'); // [2, 3]
console.log(Array.of(2, 3, 4), 'of 三个参数'); // [2, 3, 4]

// 3. 实例对象新增的方法
/**
 * copyWithin(target, start, end) 将指定位置的成员 复制到其他位置（覆盖原有成员） 返回当前数组
 * target 必需 从该位置开始替换，负值表示倒数
 * start 可选 从该位置开始读取数据，默认为0，负数表示从末尾计算
 * end 可选 到该位置停止读取数据 默认等于数组长度 负值表示从末尾计算
 */
// 从 index = 2 开始替换
console.log([1, 2, 3, 4, 5].copyWithin(2), 'copyWithin 一个参数'); // [1, 2, 1, 2, 3]
// 从 index = 3 开始替换 替换内容从 index = 3 开始 即 4，5 替换 3，4
console.log([1, 2, 3, 4, 5].copyWithin(2, 3), 'copyWithin 两个参数'); // [1, 2, 4, 5, 5]

/**
 * find(fn(value, index, arr), params) 返回第一个符合条件的元素
 * findIndex(fn(value, index, arr), params) 返回第一个符合条件元素的索引
 * 第二个参数 用来绑定回调函数的this对象 剪头函数不支持
 */
// const es6ArrFn = (v) => {
//   return v > this.age
// }

function es6ArrFn(v) {
  return v > this.age
}

const es6ArrFind = [1, 12, 23, 14].find(es6ArrFn, { name: 'he', age: 14})
console.log(es6ArrFind, 'es6ArrFind');

/**
 * fill(value, start, end) 使用指定值 填充数组
 */
console.log([1, 2, 3].fill('a'), 'fill 无参数'); // ['a', 'a', 'a']
console.log([1, 2, 3].fill('a', 1), 'fill start'); // [1, 'a', 'a']
console.log([1, 2, 3].fill('a', 1, 2), 'fill start end'); // [1, 'a', 3]
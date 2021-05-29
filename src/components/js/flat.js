console.log('---flat---');
// arr.flat([depth])
// depth 提取数组的嵌套深度 默认为1
// ie 不兼容

// 二维数组 一层嵌套
const arrFlat1 = [1, 2, [3, 4]];
const retArr1 = arrFlat1.flat();
console.log(arrFlat1, 'arrFlat1'); // 不改变原数组
console.log(retArr1, 'flat1'); // [1, 2, 3, 4]
// 一层数组替代方案 reduce concat
const arrReduce = arrFlat1.reduce((acc, val) => acc.concat(val), []);
console.log(arrReduce, 'reduce'); // [1, 2, 3, 4]
// 使用扩展运算符
const arrExpend = [].concat(...arrFlat1);
console.log(arrExpend, 'arrExpend'); // [1, 2, 3, 4]

// 两层嵌套
const arr2 = [1, 2, [3, [4]]];
const ret2 = arr2.flat(2);
console.log(ret2, 'flat2'); // [1, 2, 3, 4]

// 会移除数组中空项
// eslint-disable-next-line no-sparse-arrays
const arrEmpty = [1, 2, , 3, 4];
const retEmpty = arrEmpty.flat();
console.log(retEmpty, 'flat empty'); // // [1, 2, 3, 4]

// 使用 reduce、concat 和递归展开无限多层嵌套的数组
// d 传入值如果小于实际层数，则以传入为准，如果大于，不影响。
function flatDeep(arr, d = 1) {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
    : arr.slice();
}
// 改良版 不需传层级
function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}

const arrDepth = [1, 2, [3, [4, 5, [6, 7, [8]]]]];
const arrDeep = flatDeep(arrDepth, 10);
const arrDeep2 = flatten(arrDepth);
console.log(arrDeep, 'arr deep');
console.log(arrDeep2, 'arr deep');


console.log('---flat end---');

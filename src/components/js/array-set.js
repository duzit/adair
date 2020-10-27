console.log('---数组去重---');
// 数组去重
const arr = [1, 1, '1', true, false, 'true', true, 2, 3, 3];
// [1, "1", true, false, "true", 2, 3]

// new Set()
let arrSet = [...new Set(arr)];
console.log(arrSet, 'new set 1'); 
// or
let arrSet2 = Array.from(new Set(arr));
console.log(arrSet2, 'new set 2');

// indexOf 
const arrIndexOfFn = arr => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) res.push(arr[i]);
  }
  return res;
}

let arrIndexOf = arrIndexOfFn(arr);
console.log(arrIndexOf, 'arr indexOf');

// includes 
const arrIncludeFn = arr => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) res.push(arr[i]);
  }
  return res;
}

let arrIncludes = arrIncludeFn(arr);
console.log(arrIncludes, 'arr includes');

// filter
const arrFilterFn = arr => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  })
}
let arrFilter = arrFilterFn(arr);
console.log(arrFilter, 'arr filter');

console.log('---数组去重 end---');
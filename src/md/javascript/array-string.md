## 数组 字符串
---
### charAt(index)
* 返回指定位置字符
* 如果参数 index 不在 0 与 string.length 之间，该方法将返回一个空字符串
```js
let charatStr = 'charat'
console.log(charatStr.charAt(0)) // c
console.log(charatStr.charAt(1)) // h
console.log(charatStr.charAt(-1)) // ''
```

### Array.concat(array0, array1, ...)
```js
let arr0 = [1, 2]
let arr1 = [2, 4]
let concatArr = arr0.concat(arr1)
console.log(concatArr, 'concat') // 1, 2, 2, 4
console.log(arr0, arr1, 'arr0, arr1') // 1, 2   2, 4
```

### Array.join()
```js
let arrJoin = [1, 2, 3]
console.log(arrJoin.join(''), 'join') // 123
console.log(arrJoin.join(','), 'join') // 1,2,3
console.log(arrJoin, 'arrJoin') // [1, 2, 3]
```

### Array.push() 
* 返回新的长度 改变原数组
```js
let pushArr = [1, 2]
console.log(pushArr.push(3)) // 3
console.log(pushArr, 'pushArr') // [1,2,3]
```

### Array.unshift()
* 返回新的长度 改变原数组
```js
let arrUnshift = [1, 2]
console.log(arrUnshift.unshift(3)) // 3
console.log(arrUnshift, 'unshift') // [3, 1, 2]
```

### Array.shift()
* 返回第一个元素 改变原数组
```js
let arrShift = [1, 2, 3]
console.log(arrShift.shift()) // 1
console.log(arrShift, 'shift') // [2, 3]
```

### Array.pop()
* 删除并返回数组的最后一个元素 改变原数组
```js
let arrPop = [1, 2, 3, 4]
console.log(arrPop.pop())  // 4
console.log(arrPop, 'pop') // [1, 2, 3]
```

### Array.slice(start, end)
* 返回选定的元素
```js 
let arrSlice = [1, 2, 3]
console.log(arrSlice.slice(0, 2)) // [1, 2]
console.log(arrSlice, 'slice') // [1, 2, 3]
```

### Array.splice(start, length, [elements])
* 返回被截取的元素 
```js 
let arrSplice = [1, 2, 3, 4]
console.log(arrSplice.splice(1, 2, 5, 6)) // [2, 3]
console.log(arrSplice, 'splice') // [1, 5, 6, 4]
```

### String.substr(start, length)
* 返回截取的字符串
```js
let strSubstr = 'abcdefg'
console.log(strSubstr.substr(1), 'substr') // bcdefg 
console.log(strSubstr.substr(1, 3), 'substr') // bcd 
console.log(strSubstr, 'substr') // abcdefg
```

### String.substring(start, end)
* 提取字符串中介于两个指定下标之间的字符
```js 
let strSubstr = 'abcdefg'
console.log(strSubstr.substring(1)) // bcdefg
console.log(strSubstr.substring(1, 2)) // b
console.log(strSubstr, 'substring') // abcdefg
```

### Array.sort()
```js
let arrSort0 = [2, 1, 'c', 'b']
console.log(arrSort0.sort(), 'sort') // [1, 2, b, c]
console.log(arrSort0, 'sort') // [1, 2, b, c]
let arrSort1 = [15, 130, 404, 28]
console.log(arrSort1.sort(), 'sort1') // [130, 15, 28, 404] 
console.log(arrSort1.sort(function(a, b) {
  return b - a
}), 'sort1') // [404, 130, 28, 15]
```

### Array.reverse()
```js
let arrReverse = [1, 2, 3, 4]
let reverseStr = 'abcdefg'
console.log(arrReverse.reverse(), 'reverse')
console.log(arrReverse, 'reverse')
console.log(reverseStr.split('').reverse().join('')) // gfedcba
```

### String.indexOf lastIndexOf
```js
let strIndexof = '/indexabcdf'
console.log(strIndexof.indexOf('index'), 'indexof') // 1
console.log(strIndexof.indexOf('hello'), 'indexof') // -1
console.log(strIndexof.lastIndexOf('index'), 'indexof') // 1
console.log(strIndexof.lastIndexOf('hello'), 'indexof') // -1
```

### Array.some()  every()
```js
let everyArray = [1, 2, 3, 4]
console.log(everyArray.every(item => item > 0), 'every') // true
console.log(everyArray.every(item => item > 1), 'every') // false

let someArray = [1, 2, 3, 4]
console.log(someArray.some(item => item === 1)) // true
console.log(someArray.some(item => item === 5)) // false
```

### Array.filter()  
* 对数组的每一项都运行给定的函数，返回结果为true的组成新的数组。  
  不会对空数组进行检测 不会改变原始数组
```js
let filterArray = [1, 2, 3, 4, 5, 6]
let retFilter = filterArray.filter(item => item %  2 === 0)
console.log(retFilter, 'filter') // [2, 4, 6]
console.log(filterArray, 'filter') // [1, 2, 3, 4, 5, 6]
```

### String.replace(regexp/substr, replacement)
* 替换字符串 
* 返回新的字符串 不改变原字符串
```js 
let strReplace = 'abcabc'
console.log(strReplace.replace(/a/, 'A'), '--replace') // Abcabc 
console.log(strReplace.replace(/a/g, 'A'), '--replace') // AbcAbc 
console.log(strReplace.replace('b', 'A'), '--replace substr') // aAcabc 
console.log(strReplace, '--replace') // abcabc 
```
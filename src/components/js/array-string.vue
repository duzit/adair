<template>
  <div class="pt20">

  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  created () {
    let arr0 = [1, 2]
    let arr1 = [2, 4]
    let concatArr = arr0.concat(arr1)
    console.log(concatArr, 'concat')
    console.log(arr0, arr1, 'arr0, arr1')

    let arrJoin = [1, 2, 3]
    console.log(arrJoin.join(''), 'join') // 123
    console.log(arrJoin.join(','), 'join') // 1,2,3
    console.log(arrJoin, 'arrJoin') // [1, 2, 3]

    let pushArr = [1, 2]
    console.log(pushArr.push(3))
    console.log(pushArr, 'pushArr')

    let arrUnshift = [1, 2]
    console.log(arrUnshift.unshift(3)) // 3
    console.log(arrUnshift, 'unshift') // [3, 1, 2]

    let arrPop = [1, 2, 3, 4]
    console.log(arrPop.pop())  // 4
    console.log(arrPop, 'pop') // [1, 2, 3]

    let arrShift = [1, 2, 3]
    console.log(arrShift.shift()) // 1
    console.log(arrShift, 'shift') // [2, 3]

    let arrSlice = [1, 2, 3]
    // let arrSlice = 'abc'
    console.log(arrSlice.slice(0, 2)) // [1, 2]
    console.log(arrSlice, 'slice') // [1, 2, 3]

    let arrSplice = [1, 2, 3, 4]
    console.log(arrSplice.splice(1, 2, 5, 6)) // [2, 3]
    console.log(arrSplice, 'splice') // [1, 5, 6, 4]

    let strSubstr = 'abcdefg'
    // console.log(strSubstr.substr(1), 'substr') // bcdefg 
    // console.log(strSubstr.substr(1, 3), 'substr') // bcd 
    // console.log(strSubstr, 'substr') // abcdefg
    console.log(strSubstr.substring(1)) // bcdefg
    console.log(strSubstr.substring(1, 2)) // b
    console.log(strSubstr, 'substring') // abcdefg

    let arrSort0 = [2, 1, 'c', 'b']
    console.log(arrSort0.sort(), 'sort') // [1, 2, b, c]
    console.log(arrSort0, 'sort') // [1, 2, b, c]
    let arrSort1 = [15, 130, 404, 28]
    console.log(arrSort1.sort(), 'sort1') // [130, 15, 28, 404] 
    console.log(arrSort1.sort(function(a, b) {
      return b - a
    }), 'sort1') // [404, 130, 28, 15]

    let arrReverse = [1, 2, 3, 4]
    let reverseStr = 'abcdefg'
    console.log(arrReverse.reverse(), 'reverse')
    console.log(arrReverse, 'reverse')
    console.log(reverseStr.split('').reverse().join('')) // gfedcba

    let strIndexof = '/indexabcdf'
    console.log(strIndexof.indexOf('index'), 'indexof')
    console.log(strIndexof.indexOf('hello'), 'indexof')
    console.log(strIndexof.lastIndexOf('index'), 'indexof')
    console.log(strIndexof.lastIndexOf('hello'), 'indexof')

    let everyArray = [1, 2, 3, 4]
    console.log(everyArray.every(item => item > 0), 'every') // true
    console.log(everyArray.every(item => item > 1), 'every') // false

    let someArray = [1, 2, 3, 4]
    console.log(someArray.some(item => item === 1)) // true
    console.log(someArray.some(item => item === 5)) // false

    let filterArray = [1, 2, 3, 4, 5, 6]
    let retFilter = filterArray.filter(item => item %  2 === 0)
    console.log(retFilter, 'filter') // [2, 4, 6]
    console.log(filterArray, 'filter') // [1, 2, 3, 4, 5, 6]

    let arrIncludes = ['ab', 'bc']
    console.log(arrIncludes.includes('ab'), 'includes')  // true
    console.log(arrIncludes.includes('a'), 'includes') // false

    let strReplace = 'abcabc'
    console.log(strReplace.replace(/a/, 'A'), '--replace') // Abcabc 
    console.log(strReplace.replace(/a/g, 'A'), '--replace') // AbcAbc 
    console.log(strReplace.replace('b', 'A'), '--replace substr') // aAcabc 
    console.log(strReplace.replace(/A/i, 'B'), '--replace i') // Bbcabc 
    console.log(strReplace.replace(/A/, 'B'), '--replace ') // abcabc  
    
    console.log(strReplace, '--replace') // abcabc 
  }
}
</script>


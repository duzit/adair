// tips javascript 小技巧
console.log('javascript tips start');
// 数据类型转换
// 转换为布尔值 ! or !!
// 0 '' undefinded NaN false
console.log(!0); // true
console.log(!!0); // false
console.log(!false); // true
console.log(!!false); // false
console.log(!NaN); // true
console.log(!!NaN); // false
console.log(!!'hello'); // true

// 转换为数值
 let str = '12';
 let num = +str;
 // or 
 // ~~str
 console.log(num); // 12
 let s1 = '12a';
 console.log(+s1); // NaN

 // 浮点数转为整数
console.log(22.22 | 0); // 22
console.log(22.9 | 0); // 22
console.log(-22.9 | 0); // -22
console.log(-22.1 | 0); // -22

console.log(123 / 10 | 0); // 12
console.log(123 / 100 | 0); // 1
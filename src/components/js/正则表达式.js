// 正则表达式
let str1 = '1232A'
let str2 = '1232abc'
// 小写字母 数字 一个或多个 以 abc 结尾
let reg0 = /^[a-z0-9]+abc$/g
console.log(reg0.test(str1), 'reg') // false
console.log(reg0.test(str2), 'reg') // true

// 小写字母 数字 下划线_ 横杠- 字符长度限制3-10
let reg1 = /^[a-z0-9-_]{3,10}$/g
console.log(reg1.test('duzit_-')); // true
console.log(reg1.test('du')); // false
console.log(reg1.test('duzit_-1234567890')); // false
console.log(reg1.test('duzit_-123')); // true

// 第一个数字不为0的正整数
let reg2 = /[1-9][0-9]*/g
console.log(reg2.test(0)); // false
console.log(reg2.test(12)); // true
console.log(reg2.test(1230)); // true

let reg3 = /<.*>/
let reg4 = /<.*?>/
console.log(reg3.exec('<h1>duzit</h1>'), 'exec'); // <h1>duzit</h1>
console.log(reg4.exec('<h1>duzit</h1>'), 'exec'); // <h1>

let str3 = 'This is a boy.'
// 边界
console.log(str3.replace(/\bis\b/g, 'A')); // This A a boy.
console.log(str3.replace(/\Bis\b/g, 'A')); // ThA is a boy.

let str4 = '@123@13@'
// @ + 任意字符 最后一个 @ 不匹配
console.log(str4.replace(/@./g, 'A')); // A23A3@
// 任意字符 + @ 第一个 @ 不匹配
console.log(str4.replace(/.@/g, 'A')); // @12A1A
// ^ 匹配开始
console.log(str4.replace(/^@./g, 'A')); // A23@13@
// $ 匹配最后
console.log(str4.replace(/.@$/g, 'A')); // @123@1A

let str5 = 
`@123
@123
@123`
console.log(str5.replace(/^@\d/g, 'A'));
/** 
 A23
@123
@123 */
console.log(str5.replace(/@\d/g, 'A'));
/**
 A23
A23
A23
 */
// 多行处理
console.log(str5.replace(/^@\d/gm, 'A'));
/**
 A23
A23
A23
 */


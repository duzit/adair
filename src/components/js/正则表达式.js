// 正则表达式
const str1 = '1232A';
const str2 = '1232abc';
// 小写字母 数字 一个或多个 以 abc 结尾
const reg0 = /^[a-z0-9]+abc$/g;
console.log(reg0.test(str1), 'reg'); // false
console.log(reg0.test(str2), 'reg'); // true

// 小写字母 数字 下划线_ 横杠- 字符长度限制3-10
const reg1 = /^[a-z0-9-_]{3,10}$/g;
console.log(reg1.test('duzit_-')); // true
console.log(reg1.test('du')); // false
console.log(reg1.test('duzit_-1234567890')); // false
console.log(reg1.test('duzit_-123')); // true

// 第一个数字不为0的正整数
const reg2 = /[1-9][0-9]*/g;
console.log(reg2.test(0)); // false
console.log(reg2.test(12)); // true
console.log(reg2.test(1230)); // true

const reg3 = /<.*>/;
const reg4 = /<.*?>/;
console.log(reg3.exec('<h1>duzit</h1>'), 'exec'); // <h1>duzit</h1>
console.log(reg4.exec('<h1>duzit</h1>'), 'exec'); // <h1>

const str3 = 'This is a boy.';
// 边界
// is 左右有边界
console.log(str3.replace(/\bis\b/g, 'A')); // This A a boy.
// is 左边无边界 右边有边界
console.log(str3.replace(/\Bis\b/g, 'A')); // ThA is a boy.

const str4 = '@123@13@';
// @ + 任意字符 最后一个 @ 不匹配
console.log(str4.replace(/@./g, 'A')); // A23A3@
// 任意字符 + @ 第一个 @ 不匹配
console.log(str4.replace(/.@/g, 'A')); // @12A1A
// ^ 匹配开始
console.log(str4.replace(/^@./g, 'A')); // A23@13@
// $ 匹配最后
console.log(str4.replace(/.@$/g, 'A')); // @123@1A

const str5 =
`@123
@123
@123`;
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

// 分组  ()
// 匹配 小写单词和数字连续出现三次的字符串
console.log('a1b2c3d4'.replace(/[a-z]\d{3}/g, 'X')); // a1b2c3d4
console.log('a1b2c3d4'.replace(/([a-z]\d){3}/g, 'X')); // Xd4
console.log('a1b2c3d4'.match(/([a-z]\d){3}/g)); // ["a1b2c3"]
console.log('a1b2c3d4'.match(/([a-z]\d){1}/g)); // ["a1", "b2", "c3", "d4"]

// 或 |
console.log('helloMoto'.replace(/hello|Moto/g, 'X')); // XX
console.log('hellotohelMoto'.replace(/hel(lo|Mo)to/g, 'X')); // XX

// 反向引用
console.log('2020-05-25'.replace(/-/g, '/')); // 2020/05/25
console.log('2020-05-25'.replace(/(\d{4})-(\d{2})-(\d{2})/g, '$1/$2/$3')); // 2020/05/25
console.log('2020-05-25'.replace(/(\d{4})-(\d{2})-(\d{2})/g, '$2/$3/$1')); // 05/25/2020

// 忽略分组
console.log('2020-05-25'.replace(/(\d{4})-(?:\d{2})-(\d{2})/g, '$2/$3/$1')); // 25/$3/2020

// 前瞻
console.log('a1*3'.replace(/\w(?=\d)/g, 'X')); // X1*3
console.log('a1*34v7'.replace(/\w(?=\d)/g, 'X')); // X1*X4X7
console.log('a1*3'.replace(/\w(?!\d)/g, 'X')); // aX*X

// match() 方法
// 匹配正则时 全局和非全局的区别 g
console.log('a1a2a3b4'.match(/a/));
// 0: "a"
// groups: undefined
// index: 0
// input: "a1a2a3b4"
console.log('a1a2a3b4'.match(/a/g)); // ["a", "a", "a"]

// split() 方法
console.log('a,b,c,d,e'.split(',')); // ["a", "b", "c", "d", "e"]
console.log('a,b,c,d,e'.split(/,/g)); // ["a", "b", "c", "d", "e"]
console.log('a1b2c3d4e'.split(/\d/g)); // ["a", "b", "c", "d", "e"]
console.log('a,b|c-3d4e'.split(/[^\w]/g)); // ["a", "b", "c", "3d4e"]

// replace() 方法
console.log('a1b1c1'.replace('1', '2')); // a2b1c1
console.log('a1b1c1'.replace(/1/g, '2')); // a2b2c2
console.log('a1b2c3d4'.replace(/\d/g, (match, index, origin) => {
  console.log(match, index, origin);
  // 1 1 a1b2c3d4
  // 2 3 a1b2c3d4
  // 3 5 a1b2c3d4
  // 4 7 a1b2c3d4
  return parseInt(match) + 1;
})); // a2b3c4d5

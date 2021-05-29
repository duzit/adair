// 原型 原型链
/**
 * 概念
 * 1. js分为函数对象和普通对象 每个对象都有 __proto__ 属性 但只有函数对象才有 prototype 属性
 * 2. Object Function 都是 js 内置的函数 类似的还有 Array String Number Boolean
 * 3. 属性 __proto__ 是一个对象 它有两个属性 constructor 和 __proto__
 * 4. 原型对象 prototype 有一个默认属性 constructor 用于记录实例是由哪个构造函数创建
 *
 * 准则
 * 1. 原型对象（Person.prototype）的 constructor 指向构造函数本身
 *    Person.prototype.constructor = Person
 * 2. 实例（person01）的 __proto__ 和原型对象指向同一个地方
 *    person01.__proto__ = Person.prototype
 *
 * 意义
 * 可以将共同方法定义在原型对象（Person.prototype）上 不同实例可以使用公共的方法
 */

console.log('__proto__.prototype start--');

function Foo() {}
const f1 = new Foo();
const f2 = new Foo();

// 准则2
console.log(f1.__proto__ == Foo.prototype); // true
console.log(f2.__proto__ == Foo.prototype); // true
console.log(Foo.prototype, 'Foo.prototype'); // constructor __proto__
console.log(Foo.prototype.__proto__ == Object.prototype); // true Foo.prototype 本身是一个对象
console.log(Foo.__proto__ == Function.prototype); // true
// 准则1
console.log(Foo.prototype.constructor == Foo); // true

// Object.prototype.__proto__ = null;
// Array.prototype.__proto__ = Object.prototype;
// Foo.prototype.__proto__  = Object.prototype;

/**
 * constructor 始终指向创建当前对象的构造函数
 */
const ss = '123';
const arr0 = [1, 2, 3];
const bool = false;
console.log(ss.constructor); // function String() {}
console.log(arr0.constructor); // function Array() {}
console.log(bool.constructor); // function Boolean() {}

function Person(name) {
  this.name = name;
}
Person.prototype = {
  sex: 1,
  say() {
    console.log('hello you.');
    return 'say';
  },
};
const p1 = new Person('p1');
const p2 = new Person('p2');
console.log(p1.name, 'name');
console.log(p1.sex, 'sex');
console.log(p1.say());
console.log(p2.name, 'name');
console.log(p2.sex, 'sex');
console.log(p2.say());

console.log('__proto__.prototype end--');

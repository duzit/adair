// es6 class
class myClass {
  gName = "";
  str1 = '123';
  sex = 0;
  // constructor 方法默认返回实例对象（this）
  constructor(params) {
    this.name = params.name || "";
    this.age = params.age || "";
  }

  init() {
    console.log("es6 class init.");
    console.log(
      `my name is ${this.name || "-"} and age is ${this.age || "-"}.`
    );
  }

  setGname(name) {
    this.gName = name;
    console.log(`gName is ${this.gName}.`);
    console.log(`str1 is ${this.str1}.`); // '123'
  }

  clear() {
    this.name = this.age = "";
  }

  get gsex() {
    return this.sex;
  }

  set gsex(sex) {
    this.sex = sex;
    console.log("set sex");
  }

  callOtherFn() {
    console.log("call other function");
    this.otherFn();
  }

  otherFn() {
    console.log("other function");
  }

  // 静态方法 不会被实例继承
  static staticFn() {
    console.log("static fn.");
    // 同样调用 static 方法 如果未定义静态方法 staticFn2 会报错
    this.staticFn2();
  }

  static staticFn2() {
    console.log("static fn 2.");
  }

  staticFn2() {
    console.log("un static fn 2.");
  }
}

let tClass = new myClass({});
// name 和 age 都是实例对象 myClass 自身的属性（因为定义在this变量上），所以hasOwnProperty方法返回true，
// 而 init 是原型对象的属性（因为定义在 myClass 类上），所以hasOwnProperty方法返回false
console.log(tClass.hasOwnProperty("name"), "hasOwnProperty('name')"); // true
console.log(tClass.hasOwnProperty("age"), "hasOwnProperty('age')"); // true
console.log(tClass.hasOwnProperty("init"), "hasOwnProperty('init()')"); // false
console.log(
  tClass.__proto__.hasOwnProperty("init"),
  "tClass.__proto__.hasOwnProperty('init')"
); // true

tClass.gsex = 1;
console.log(tClass.gsex, "tClass.set"); // 1

tClass.setGname('lala');

// name 属性
console.log(myClass.name, "myClass.name");

// this 调用其他函数
tClass.callOtherFn(); // 这样调用没问题

// 单独将 callOtherFn 提取出来 会影响 this 指向（调用该方法运行时所在的环境） 导致 this.otherFn() 报错
// const { callOtherFn } = tClass;
// callOtherFn(); // 报错 otherFn undefined

// 静态方法 直接在类 myClass 上调用，而不是在实例上。
myClass.staticFn(); //
// tClass.staticFn(); // tClass.staticFn is not a function

// 父类的静态方法可以被子类继承
class Son extends myClass {}

Son.staticFn();

/**
 * super 关键字 可以作为函数和对象使用
 * 1. 函数 代表父类的构造函数 子类的构造函数必须执行一次 super 函数
 *   super 虽然代表的是父类的构造函数 但返回的是子类的实例 即 super 内部的 this 指向的是子类的实例
 *   作为函数时 只能在子类的构造函数中调用
 * 2. 作为对象 普通方法中指向父类的原型对象 静态方法中指向父类
 *   定义在父类实例上的属性和方法 无法通过 super 调用
 *
 * 3. es6 规定 在子类普通方法中通过 super 调用父类的方法时，方法内部的 this 指向当前子类的实例
 *
 */

class A {
  constructor() {
    console.log(new.target.name);
    this.num = 2;

    this.age = 10;
  }

  fn1() {
    return "fn1---";
  }

  getNum() {
    console.log(this.num);
  }

  static method1(msg) {
    console.log(`${msg} -- father static method1`);
  }

  method1(msg) {
    console.log(`${msg} -- father normal method1`);
  }

  static getAge() {
    // 这里的 this 指向的是子类 而不是子类的实例
    console.log(this.age, 'this.age');
  }
}

class B extends A {
  // 类静态属性 需加上 static 关键字
  static age = 12;

  constructor() {
    super();
    console.log(super.fn1()); // fn1

    this.num = 1;
    super.num = 3; // 等价于 this.num
    console.log(super.num, "super.num"); // undefined 无法获取父类中构造函数定义的 num
    console.log(this.num, "this.num"); // 3

    this.age = 11;
  }

  m() {
    // 非构造函数中调用 报错
    // super(); // error
  }

  get sonFn1() {
    console.log(super.fn1()); // fn1
    // 无法访问
    console.log(super.num); // undefined
  }

  sonFn2() {
    console.log("un getter fn");
  }

  static sonMethod1(msg) {
    console.log(`${msg} -- static son methods`);
    super.method1("static son");
  }

  sonMethod1(msg) {
    console.log(`${msg} -- normal son methods`);
    super.method1("normal son");
  }

  static getAge() {
    // 静态方法中调用 super 指向父类 而不是父类实例 所以这里调用的是父类的 static 方法
    super.getAge();
  }
}

new A(); // A
let b = new B(); // B
b.sonFn1;
b.sonFn2();

// this 指向当前子类的实例
b.getNum(); // 1

// 静态方法通过类调用 不是在实例上
// super 在静态方法中指向父类 在普通方法中指向父类的原型对象
// 调用父类的 static method1
B.sonMethod1("son static");
// 调用父类 method1
b.sonMethod1("son instance");

console.log(B.age, 'B.age'); // 12
// B.age = 15; // 另一种定义静态属性的方法 使用类名直接定义
B.getAge(); // 12

// export {
//   myClass
// }

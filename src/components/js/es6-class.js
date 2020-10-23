// es6 class
class myClass {
  gName = '';
  sex = 0;
  constructor(params) {
    this.name = params.name || '';
    this.age = params.age || '';
  }

  init() {
    console.log('es6 class init.');
    console.log(`my name is ${this.name || '-'} and age is ${this.age || '-'}.`);
  }

  setGname(name) {
    this.gName = name;
    console.log(`gName is ${this.gName}.`);
  }

  clear() {
    this.name = this.age = '';
  }  

  get gsex() {
    return this.sex;
  }

  set gsex(sex) {
    this.sex = sex;
    console.log('set sex');
  }

  callOtherFn() {
    console.log('call other function');
    this.otherFn();
  }

  otherFn() {
    console.log('other function');
  }
}

let tClass = new myClass({})
// name 和 age 都是实例对象 myClass 自身的属性（因为定义在this变量上），所以hasOwnProperty方法返回true，
// 而 init 是原型对象的属性（因为定义在 myClass 类上），所以hasOwnProperty方法返回false
console.log(tClass.hasOwnProperty('name'), "hasOwnProperty('name')"); // true
console.log(tClass.hasOwnProperty('age'), "hasOwnProperty('age')"); // true 
console.log(tClass.hasOwnProperty('init'), "hasOwnProperty('init()')"); // false
console.log(tClass.__proto__.hasOwnProperty('init'), "tClass.__proto__.hasOwnProperty('init')"); // true

tClass.gsex = 1;
console.log(tClass.gsex, 'tClass.set');

// name 属性
console.log(myClass.name, 'myClass.name');

// this 调用其他函数
tClass.callOtherFn(); // 这样调用没问题
 
// 单独将 callOtherFn 提取出来 会影响 this 指向（调用该方法运行时所在的环境） 导致 this.otherFn() 报错
// const { callOtherFn } = tClass;
// callOtherFn(); // 报错 otherFn undefined

export {
  myClass
}
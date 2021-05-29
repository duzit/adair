## JavaScript

-----------

### var let const

* var 重新赋值 重新定义 作用域是 function scope

```js
var name = 'Hel'
name = 'llo'
console.log(name) // llo
var name = 'lee'
console.log(name) // lee

function getPrice() {
  var price = 10
  console.log(price, 'price')
}
getPrice()
/**
 * var 定义的变量作用域是 function scope
 * 函数 getPrice 内部定义的 price 外部不可访问
 */
// console.log(price, 'price') // price is not defined

var count = 3
if (count > 2) {
  var discount = 10
  console.log(discount, 'dicount') // 10
}
// 这里可以访问到 if 语句中定义的 discount 
console.log(discount, 'dicount') // 10
```

* let const 作用域 block scope  let 可重新赋值 const 定义的非对象不行 变量私有化

```js
let fName = 'du'
if (fName) {
  let fName = 'do'
  console.log(fName, 'if') // do
}
console.log(fName, 'window') // du

const person = {
  name: 'do',
  age: 12
} 
console.log(person, 'const person') // age 12

person.age = 13
console.log(person, 'const person') // age 13

Object.freeze(person)
// person.name = '123' // Cannot assign to read only property 'name' of object
```

### charAt(index)

* 返回指定位置字符
* 如果参数 index 不在 0 与 string.length 之间，该方法将返回一个空字符串

```js
let charatStr = 'charat'
console.log(charatStr.charAt(0)) // c
console.log(charatStr.charAt(1)) // h
console.log(charatStr.charAt(-1)) // ''
```

### 弹窗拖拽

```js
$define("web.yjcrm.components.dialogDrag", {}, function () {
    // v-dialogDrag: 弹窗拖拽
    Vue.directive('dialogDrag', {
        bind(el, binding, vnode, oldVnode) {
            const dialogHeaderEl = el.querySelector('.el-dialog__header');
            const dragDom = el.querySelector('.el-dialog');
            dialogHeaderEl.style.cursor = 'move';

            // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
            const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);

            dialogHeaderEl.onmousedown = (e) => {
                // 鼠标按下，计算当前元素距离可视区的距离
                const disX = e.clientX - dialogHeaderEl.offsetLeft;
                const disY = e.clientY - dialogHeaderEl.offsetTop;

                // 获取到的值带px 正则匹配替换
                let styL, styT

                // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
                if (sty.left.includes('%')) {
                    styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100);
                    styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100);
                } else {
                    styL = +sty.left.replace(/\px/g, '');
                    styT = +sty.top.replace(/\px/g, '');
                }

                document.onmousemove = function (e) {
                    // 通过事件委托，计算移动的距离
                    const l = e.clientX - disX;
                    const t = e.clientY - disY;

                    // 移动当前元素
                    dragDom.style.left = `${l + styL}px`;
                    dragDom.style.top = `${t + styT}px`

                    // 将此时的位置传出去
                    // binding.value({x:e.pageX,y:e.pageY})
                }

                document.onmouseup = function (e) {
                    document.onmousemove = null
                    document.onmouseup = null
                }
            }
        }
    })
});
```

### 短语条件句

```js
if (condition) {
  doSomething()
}
// 等价于
condition && doSomething()
```

### js的默认行为 默认事件

* 默认事件是指js中事件本身具有的属性，比如a标签点击会跳转
* 默认行为是指文本框可以输入，鼠标右击会出现菜单等

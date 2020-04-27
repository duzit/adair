<template>
  <div class="pt20 fs20">var-let-const</div>
</template>

<script>
export default {
  name: 'var-let-const',
  data () {
    return {
      
    }
  },
  created () {
    console.log(varVal) // undefined
    var varVal = 'Hello'

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
    console.log(person, 'const person')

    person.age = 13
    console.log(person, 'const person')

    Object.freeze(person)
    // person.name = '123' // Cannot assign to read only property 'name' of object
  }
}
</script>
<template>
  <ld-content>
    <div class="pt20 title">var-let-const</div>
    <label for="防抖">防抖</label>
    <el-input class="w200" v-model="inputVal0" @input="debounce"></el-input>
    <span class="fs20">{{ inputVal0 }}</span>
    <br/>
    <label for="限流">限流</label>
    <el-input class="w200" v-model="inputVal1" @input="throttle"></el-input>
    <span class="fs20">{{ inputVal1 }}</span>
  </ld-content>
</template>

<script>
export default {
  name: 'var-let-const',
  data () {
    return {
      inputVal0: '',
      inputVal1: '',
      timer: null,
      flag: true
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
  },
  methods: {
    debounce() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(function() {
        console.log(123)
      }, 1000)
    },
    throttle() {
      let that = this
      if (!this.flag) return
      this.flag = false
      // 箭头函数 上下文 this
      // setTimeout(() => {
      setTimeout(function() {
        console.log('throttle')
        // this.flag = true
        that.flag = true
      }, 1000)
    }
  }
}
</script>
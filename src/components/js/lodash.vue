<template>
  <div>
    <div class="title">lodash</div>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  data () {
    return {
      
    }
  },
  mounted () {
    console.log(_.defaults({ a: 1 }, { a: 2 }, { b: 3 }), 'defaults') // { a: 1, b: 3 }
    let obj0 = {
      name: 'll'
    }
    let obj1 = {
      age: 10,
      sex: 0
    }
    console.log(_.defaults(obj0, obj1)) // {name: "ll", age: 10, sex: 0}
  }
}
</script>
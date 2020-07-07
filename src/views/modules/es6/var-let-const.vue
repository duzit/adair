<template>
  <div class="var-let-const">
    <code-item :codes="varLetConst0"></code-item>
    <code-item :codes="varLetConst1"></code-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      varLetConst0: 
      `console.log(varVal) // undefined
    var varVal = 'hello'
    // 等价于 == 
    var varVal;
    console.log(varVal)
    varVal = 'hello'`,
      varLetConst1: 
      `var name = 'Hel'
    name = 'llo'
    console.log(name) // llo
    var name = 'lee'
    console.log(name) // lee
    // 使用var定义的name，
    可以再使用var定义相同的变量name，let则不行`
    }
  },
}
</script>

<style lang="scss" scoped>
  .var-let-const {

  }
</style>
<template>
  <ld-content class="pt20">
    <label for="watch">watch</label>
    <el-input class="w200" v-model="person.name"></el-input>
    <div>{{ num }}</div>
    <el-button @click="handleClick">按钮</el-button>
  </ld-content>
</template>

<script>
export default {
  name: 'Vue',
  data() {
    return {
      num: 0,
      person: {
        name: 'Ben',
        age: 10
      }
    }
  },
  created() {
    this.$watch('num', function(val, old) {
      console.log(val, old, 'num')
    })

    this.$watch('person.name', function(val, old) {
      console.log(this.person.name, 'name')
    }, { deep: true })

    this.$watch(function() {
      return this.num + this.person.age
    }, function(val, old) {
      console.log(val, old, 'a + b')
    }, { deep: true }) 

    let unwatch = this.$watch('person.name', function(val, old) {
      console.log(val, old, 'immediate') // 调用一次
      if (unwatch) {
        unwatch()
      }
    }, { immediate: true })
  },
  methods: {
    handleClick() {
      this.num > 10 ? this.num = 0 : this.num++
    }
  },
}
</script>

<style lang="scss" scoped>
  
</style>
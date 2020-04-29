<template>
  <div class="pt20">
    <label for="watch">filter局部</label>
    <el-input class="w200" v-model="person.name"></el-input>
    <div>{{ person.name | capitalize }}</div>
    <label for="watch">filter全局</label>
    <el-input class="w200" v-model="person.fName"></el-input>
    <div>{{ person.fName | toUpString }}</div>
  </div>
</template>

<script>
export default {
  name: 'filter',
  data() {
    return {
      person: {
        name: '',
        fName: ''
      }
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  created() {
    
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
  
</style>
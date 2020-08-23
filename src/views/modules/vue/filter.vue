<template>
  <div>
    <label for="watch">filter局部</label>
    <el-input class="w200" v-model="person.name"></el-input>
    <div>{{ person.name | capitalize }}</div>
    <label for="watch">filter全局</label>
    <el-input class="w200" v-model="person.fName"></el-input>
    <div>{{ person.fName | toUpString }}</div>
    <label for="watch">v-bind | filter</label>
    <el-input class="w200" v-model="widthBind"></el-input>
    <div :id="widthBind | bindFilter"></div>
  </div>
</template>

<script>
export default {
  name: 'filters',
  data() {
    return {
      person: {
        name: '',
        fName: ''
      },
      widthBind: ''
    }
  },
  filters: {
    // 局部过滤器
    // 首字母大写
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    bindFilter: function(value) {
      if (!value) return ''
      return value + '-bind'
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
<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>attrs: {{ $attrs }}</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
/**
 * <Attrs msg="Welcome to Your Vue.js App" name="hello" age="12" v-bind="$attrs" />
 * 父组件调用该组件时传递了三个值 分别是 msg name age 
 * 其中 name age 在该组件中的 props 中已经包含了 
 * msg 未在props中包含，所以 vm.$attrs 包含了 msg 
 * vm.$attrs.msg 则是父组件中的 msg 值
 * 官方解释
 * 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。
 * 当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，
 * 并且可以通过 v-bind="$attrs" 传入内部组件
 */
export default {
  name: 'helloworld',
  props: ['name', 'age'],
  data() {
    return {
      
    }
  },
  created() {
    let attrs = this.$attrs;
    this.msg = attrs.msg
  },
  methods: {
    
  },
}
</script>

<style>
  
</style>

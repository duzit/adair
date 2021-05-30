<template>
  <div>
    <div id="liftcycle">
      Vue 生命周期
    </div>
    <el-input
      v-model="message"
      style="width: 300px" />
    <div class="markdown-body">
      <VueMarkdown
        v-highlight
        :source="mdData" />
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import markdownData from '../../../md/vue/lifecycle.md';

  export default {
    name: 'Lifecycle',
    components: {
      VueMarkdown,
    },
    data() {
      return {
        message: 'Hello Vue 生命周期',
        name: 'du',
        mdData: markdownData,
      };
    },
    beforeCreate() {
      console.log('this is beforeCreate');
      const element = document.getElementById('liftcycle');
      console.log(element, 'DOM 元素'); // null
      console.log(this.$data, '$data'); // undefined
      console.log(this.message, 'data message'); // undefined
      console.log('beforeCreate end ----');
    },
    created() {
      console.log('this is created');
      const element = document.getElementById('liftcycle');
      console.log(element, 'DOM 元素'); // null
      console.log(this.$data, '$data'); // { message: 'xxx' }
      console.log(this.message, 'data message'); // Hello Vue 生命周期
      console.log('created end ----');
    },
    beforeMount() {
      console.log('this is beforeMount');
      const element = document.getElementById('liftcycle');
      console.log(element, 'DOM 元素'); // null
      console.log(this.$data, '$data'); // { message: 'xxx' }
      console.log(this.message, 'data message'); // Hello Vue 生命周期
      console.log('beforeMount end ----');
    },
    mounted() {
      console.log('this is mounted');
      const element = document.getElementById('liftcycle');
      console.log(element, 'DOM 元素'); // 获取到元素
      console.log(this.$data, '$data'); // { message: 'xxx' }
      console.log(this.message, 'data message'); // Hello Vue 生命周期
      console.log('mounted end ----');
    },
    beforeUpdate() {
      // 值已经改变 DOM未更新
      console.log(this.message, 'beforeUpdate');
    },
    updated() {
      // 值已经改变 DOM已更新
      console.log(this.message, 'updated');
    },
    beforeDestroy() {
      console.log(this.message, 'beforeDestroy');
      console.log(this.getName(), 'beforeDestroy methods');
    },
    destroyed() {
      console.log(this.message, 'destroyed');
      console.log(this.getName(), 'destroyed methods');
    },

    methods: {
      getName() {
        return this.name;
      },
    },
  };
</script>

<style lang="scss" scoped>

</style>

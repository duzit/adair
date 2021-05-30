<template>
  <div class="markdown-body">
    <VueMarkdown
      v-highlight
      :source="mdData" />
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import markdownData from '../../../md/javascript/remind-params.md';

  export default {
    name: 'RemindParams',
    components: {
      VueMarkdown,
    },
    data() {
      return {
        mdData: markdownData,
      };
    },
    created() {
      const sum = this.remindParamsFn(1, 2, 3, 4, 5);
      console.log(sum, 'remind params'); // 15

      this.argumentsFn(1, 2, 3);

      // 对象中定义方法
      const obj0 = {
        name: 'xiaming',
        add(a, b, ...params) {
          console.log(a + b + params.reduce((acc, curr) => acc + curr, 0));
        },
      };
      obj0.add(1, 2, 3, 4);
    },
    methods: {
      // es6
      remindParamsFn(a, b, ...params) {
        return a + b + params.reduce((acc, curr) => acc + curr, 0);
      },
      // es5 arguments
      argumentsFn() {
        console.log(arguments, 'arguments'); // [1, 2, 3]
        console.log(arguments[0], 'arguments[0]'); // [1]
        console.log(arguments[1], 'arguments[1]'); // [2]
      },
    },
  };
</script>

<style lang="scss" scoped>

</style>

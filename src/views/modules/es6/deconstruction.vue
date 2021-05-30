<template>
  <div class="markdown-body">
    <VueMarkdown
      v-highlight
      :source="mdData" />
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import markdownData from '../../../md/javascript/deconstruction.md';

  export default {
    name: 'TemplateString',
    components: {
      VueMarkdown,
    },
    data() {
      return {
        mdData: markdownData,
      };
    },
    created() {
      const res = {
        name: 'xiaozhang',
        age: 12,
        body: {
          type: 1,
        },
      };

      this.deconstructFn(res);

      const arr = [1, 2, 3, 4, 5, 6];
      // 注意有空格
      const [a, , c, ...reminds] = arr;
      console.log(a, c, reminds); // 1 3 [4,5,6]

      const obj = {
        name: 'haha',
        age: 12,
      };
      this.fnDeconstruct(obj);
    },
    methods: {
      deconstructFn(res) {
        const { name, age } = res;
        console.log(name, age, 'deconstruct'); // xiaozhang 12
        const {
          body: { type },
        } = res;
        console.log(type, 'deconstruct'); // 1
      },
      fnDeconstruct({ name, age }) {
        console.log(name, age); // haha 12
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>

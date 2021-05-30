<template>
  <div class="markdown-body">
    <VueMarkdown
      v-highlight
      :source="mdData" />
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import markdownData from '../../../md/javascript/template-string.md';

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
      const name = 'xiaoming';
      const age = 12;
      const str1 = `${name} is ${age} years old.`;
      console.log(str1, 111);

      const obj1 = {
        name: 'xiaozhang',
        age: 13,
      };
      const str2 = `${obj1.name} is ${obj1.age} years old.`;
      console.log(str2, 222);

      const template = `
      <div>
        <span>template string</span>
      </div>
    `.trim();
      console.log(template, 333);

      const fnTplStr = `
    This is function tpl str, ${this.tmpStrFn('hello')}
    `;
      console.log(fnTplStr, 444); // This is function tpl str, hello Moto.
    },
    methods: {
      tmpStrFn(str) {
        return `${str} Moto.`;
      },
    },
  };
</script>

<style lang="scss" scoped>

</style>

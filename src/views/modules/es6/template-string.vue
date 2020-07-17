<template>
  <div class="markdown-body">
    <VueMarkdown :source="mdData" v-highlight></VueMarkdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import markdownData from '../../../md/javascript/template-string.md';
export default {
  name: 'template-string',
  components: {
    VueMarkdown
  },
  data() {
    return {
      mdData: markdownData
    }
  },
  created() {
    let name = 'xiaoming';
    let age = 12;
    let str1 = `${name} is ${age} years old.`;
    console.log(str1, 111);

    let obj1 = {
      name: 'xiaozhang',
      age: 13
    };
    let str2 = `${obj1.name} is ${obj1.age} years old.`
    console.log(str2, 222);

    let template = `
      <div>
        <span>template string</span>
      </div>
    `.trim();
    console.log(template, 333);

    let fnTplStr = `
    This is function tpl str, ${this.tmpStrFn('hello')}
    `
    console.log(fnTplStr, 444); // This is function tpl str, hello Moto.
    
  },
  methods: {
    tmpStrFn(str) {
      return `${str} Moto.`
    }
  },
}
</script>

<style lang="scss" scoped>
  
</style>
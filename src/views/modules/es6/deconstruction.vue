<template>
  <div class="markdown-body">
    <VueMarkdown :source="mdData" v-highlight></VueMarkdown>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import markdownData from "../../../md/javascript/deconstruction.md";
export default {
  name: "template-string",
  components: {
    VueMarkdown
  },
  data() {
    return {
      mdData: markdownData
    };
  },
  created() {
    let res = {
      name: "xiaozhang",
      age: 12,
      body: {
        type: 1
      }
    };

    this.deconstructFn(res);

    let arr = [1,2,3,4,5,6];
    // 注意有空格
    let [a, , c, ...reminds] = arr;
    console.log(a, c, reminds); // 1 3 [4,5,6]

    let obj = {
      name: 'haha',
      age: 12
    };
    this.fnDeconstruct(obj);
  },
  methods: {
    deconstructFn(res) {
      let { name, age } = res;
      console.log(name, age, "deconstruct"); // xiaozhang 12
      let {
        body: { type }
      } = res;
      console.log(type, "deconstruct"); // 1
    },
    fnDeconstruct({ name, age }) {
      console.log(name, age); // haha 12
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
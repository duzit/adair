<template>
  <div class="markdown-body">
    <VueMarkdown :source="mdData" v-highlight></VueMarkdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import markdownData from '../../../md/javascript/spread-operator.md';

export default {
  name: 'spread-operator',
  components: {
    VueMarkdown,
  },
  data() {
    return {
      mdData: markdownData,
    };
  },
  created() {
    const arr0 = [1, 2, 3];
    const arr1 = [4, 5];
    const spreadArr0 = [...arr0, ...arr1];
    console.log(spreadArr0, 'array'); // [1,2,3,4,5]

    const obj0 = {
      name: 'xiaoming',
      age: 12,
    };
    const obj1 = {
      sex: 'male',
    };
    console.log({ ...obj0, ...obj1 }, 'object'); // {name: "xiaoming", age: 12, sex: "male"}
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>

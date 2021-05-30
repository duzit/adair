<template>
  <div class="markdown-body">
    <VueMarkdown
      v-highlight
      :source="mdData" />
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import markdownData from '../../../md/javascript/array-string.md';

  export default {
    components: {
      VueMarkdown,
    },
    data() {
      return {
        mdData: markdownData,
      };
    },
    created() {
      // 两个数组的交集
      const arr1 = [1, 2, 3, 4, 5, 6];
      const arr2 = [2, 3, 4, 5, 6, 7, 8, 9];
      const retArr = this.duplicatedValues(arr1, arr2);
      console.log(retArr, '数组交集'); // [2, 3, 4, 5, 6]

      const strArr = ['zhangsan', 'xiaoming', 'xiaoli'];
      const strObj = { ...strArr };
      console.log(strObj, 'arr -> strObj'); // { 0: 'zhangsan', 1: 'xiaoming', 2: 'xiaoli' }

      // Array.from
      console.log('Array.from');
      console.log(Array.from('foo')); // ["f", "o", "o"]
      console.log(Array.from([1, 2, 3], (x) => x * 2)); // [2, 4, 6]
    },
    methods: {
      duplicatedValues(arr1, arr2) {
        return [...new Set(arr1)].filter((item) => arr2.includes(item));
      },
    },
  };
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="markdown-body">
    <VueMarkdown :source="mdData" v-highlight></VueMarkdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import markdownData from '../../../md/javascript/array-string.md';
export default {
  components: {
    VueMarkdown
  },
  data() {
    return {
      mdData: markdownData
    }
  },
  created() {
    // 两个数组的交集
    let arr1 = [1,2,3,4,5,6];
    let arr2 = [2,3,4,5,6,7,8,9];
    let retArr = this.duplicatedValues(arr1, arr2);
    console.log(retArr, '数组交集'); // [2, 3, 4, 5, 6]

    let strArr = ['zhangsan', 'xiaoming', 'xiaoli']
    let strObj = { ...strArr }
    console.log(strObj, 'arr -> strObj'); // { 0: 'zhangsan', 1: 'xiaoming', 2: 'xiaoli' }
  },
  methods: {
    duplicatedValues(arr1, arr2) {
      return [...new Set(arr1)].filter(item => arr2.includes(item));
    }
  },
}
</script>

<style lang="scss" scoped>
  
</style>
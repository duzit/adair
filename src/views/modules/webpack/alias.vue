<template>
  <div>
    <div class="img-test">

    </div>
    <img src="@/assets/logo.png" alt="">

    <div class="markdown-body">
      <VueMarkdown :source="mdData" v-highlight></VueMarkdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import markdownData from '../../../md/webpack/alias.md';


export default {
  name: 'alias',
  components: {
    VueMarkdown
  },
  data() {
    return {
      mdData: markdownData
    }
  },
  created() {
    
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
  .img-test {
    width: 200px;
    height: 100px;
    background: url("../../../assets/logo.png");
  }
</style>
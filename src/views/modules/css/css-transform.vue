<template>
  <div class="markdown-body">
    <VueMarkdown
      v-highlight
      :source="mdData" />
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import markdownData from '../../../md/css/transform.md';

  export default {
    components: {
      VueMarkdown,
    },
    data() {
      return {
        mdData: markdownData,
      };
    },
  };
</script>

<style lang="scss" scoped>

</style>

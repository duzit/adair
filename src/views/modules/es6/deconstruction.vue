<template>
  <div class="markdown-body">
    <VueMarkdown :source="mdData" v-highlight></VueMarkdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import markdownData from '../../../md/javascript/deconstruction.md';
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
    
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
  
</style>
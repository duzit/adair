<template>
  <div>
    <div class="markdown-body">
      <VueMarkdown :source="mdData" v-highlight></VueMarkdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import markdownData from '../../../md/vue/freeze.md';

export default {
  name: 'filters',
  components: {
    VueMarkdown,
  },
  data() {
    return {
      person: {
        name: '',
        fName: '',
      },
      widthBind: '',
      mdData: markdownData,
    };
  },
  created() {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>

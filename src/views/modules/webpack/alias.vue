<template>
  <div>
    <div class="img-test" />
    <img
      src="@/assets/logo.png"
      alt="">

    <div class="markdown-body">
      <VueMarkdown
        v-highlight
        :source="mdData" />
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import markdownData from '../../../md/webpack/alias.md';

  export default {
    name: 'Alias',
    components: {
      VueMarkdown,
    },
    data() {
      return {
        mdData: markdownData,
      };
    },
    created() {},
    methods: {},
  };
</script>

<style lang="scss" scoped>
.img-test {
  width: 200px;
  height: 100px;
  background: url('../../../assets/logo.png');
}
</style>

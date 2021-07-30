<template>
  <div>
    <el-button @click="handleClick">
      Button
    </el-button>

    <div class="markdown-body">
      <VueMarkdown
        v-highlight
        :source="mdData" />
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import markdownData from '../../../md/vue/computed.md';

  export default {
    name: 'Computed',
    components: {
      VueMarkdown
    },
    props: {
      num: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        mdData: markdownData,
        title: 'Computed'
      }
    },
    computed: {
      name({ $attrs, $route, $data, $store, $props, $listeners }) {
        console.log($attrs, '$attrs');
        console.log($route, '$route');
        console.log($data, '$data');
        console.log($store, '$store');
        console.log($props, '$props');
        console.log($listeners, '$listeners');
        return 'Computed';
      }
    },
    created() {
      console.log(this.name, 344);
    },
    methods: {
      handleClick() {
        
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="modules-content h100">
    <div class="modules-content_left h100">
      <sider-tree
        :tree-data="cssTree"
        @nodeCallback="handleBack" />
    </div>
    <div class="modules-content_right">
      <h3>{{ title }}</h3>
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
  import alias from './webpack/alias';

  export default {
    name: 'Css',
    components: {
      alias,
    },
    data() {
      return {
        curComponent: 'alias',
        title: '',
        cssTree: [
          {
            label: 'resolve.alias',
            key: 'alias',
          },
        ],
      };
    },
    computed: {
      // 获取当前组件
      currentComponent() {
        return `${this.curComponent}`;
      },
    },
    created() {

    },
    methods: {
      /**
       * callback
       */
      handleBack(data) {
        this.curComponent = data.key;
        this.title = data.label;
      },
    },
  };
</script>

<style lang="scss" scoped>

</style>

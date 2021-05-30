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
  import cssClass from './css/css-class';
  import cssTransform from './css/css-transform';

  export default {
    name: 'Css',
    components: {
      cssClass,
      cssTransform,
    },
    data() {
      return {
        curComponent: 'class',
        title: '',
        cssTree: [
          {
            label: '伪类-伪元素',
            key: 'class',
          },
          {
            label: 'css3文本效果',
            key: 'text',
          },
          {
            label: 'transform(origin)',
            key: 'transform',
          },
        ],
      };
    },
    computed: {
      // 获取当前组件
      currentComponent() {
        return `css-${this.curComponent}`;
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

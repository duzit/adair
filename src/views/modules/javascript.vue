<template>
  <div class="modules-content h100">
    <div class="modules-content_left h100">
      <sider-tree :treeData="trees" @nodeCallback="handleBack"></sider-tree>
    </div>
    <div class="modules-content_right">
      <h3>{{ title }}</h3>
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import gojs from './js/gojs';
import CKEditor from './js/ckeditor';

export default {
  name: 'javascript',
  components: {
    gojs,
    CKEditor
  },
  data() {
    return {
      curComponent: 'gojs',
      title: '',
      trees: [
        {
          label: 'gojs',
          key: 'gojs'
        },
        {
          label: 'CKEditor.js',
          key: 'CKEditor'
        },
      ]
    }
  },
  computed: {
    // 获取当前组件
    currentComponent() {
      return `${this.curComponent}`
    }
  },
  created() {
    
  },
  methods: {
    /**
     * callback
     */
    handleBack(data) {
      this.curComponent = data.key;
      this.title = data.label
    }
  },
}
</script>

<style lang="scss" scoped>
  
</style>
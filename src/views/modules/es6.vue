<template>
  <div class="modules-content h100">
    <div class="modules-content_left h100">
      <sider-tree :treeData="cssTree" @nodeCallback="handleBack"></sider-tree>
    </div>
    <div class="modules-content_right">
      <h3>{{ title }}</h3>
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import varLetConst from './es6/var-let-const'
import arrayString from './es6/array-string'
export default {
  name: 'css',
  components: {
    varLetConst,
    arrayString
  },
  data() {
    return {
      curComponent: 'var-let-const',
      title: '',
      cssTree: [
        {
          label: 'var let const',
          key: 'var-let-const'
        },
        {
          label: '模板字符串...',
          key: '...'
        },
        {
          label: '解构赋值',
          key: 'deconstruction'
        },
        {
          label: 'Array String',
          key: 'array-string'
        }
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
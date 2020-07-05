<template>
  <div class="css-main h100">
    <div class="css-main_left h100">
      <sider-tree :treeData="cssTree" @nodeCallback="handleBack"></sider-tree>
    </div>
    <div class="css-main_right">
      <h3>{{ title }}</h3>
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import cssClass from './css/css-class'
export default {
  name: 'css',
  components: {
    cssClass
  },
  data() {
    return {
      curComponent: 'class',
      title: '',
      cssTree: [
        {
          label: '伪类-伪元素',
          key: 'class'
        },
        {
          label: 'css3文本效果',
          key: 'text'
        }
      ]
    }
  },
  computed: {
    // 获取当前组件
    currentComponent() {
      return `css-${this.curComponent}`
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
  .css-main {
    display: flex;
    .css-main_left {
      width: 300px;
    }
    .css-main_right {
      width: 100%;
      height: calc(100vh - 100px);
      border-left: 1px solid #eaeaea;
      padding-left: 20px;
      overflow-y: scroll;

      h3 {
        position: relative;
        margin-bottom: 10px;
        &::before {
          content: '';
          display: inline-block;
          height: 1rem;
          width: 3px;
          background: #409EFF;
          margin-right: 5px;
          position: absolute;
          top: 3px;
          left: -8px;
        }
      }
    }
  }
</style>
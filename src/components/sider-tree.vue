<template>
  <el-tree
    ref="tree"
    :data="treeData"
    node-key="key"
    highlight-current
    @node-click="nodeClick" />
</template>

<script>
// 模块详情页面 左侧item tree
  export default {
    name: 'SiderTree',
    props: {
      treeData: {
        type: Array, 
        default: () => []
      }
    },
    data() {
      return {

      };
    },
    created() {

    },
    mounted() {
      // 使用 this.$refs 不能在 created ,获取不到 dom
      this.$refs.tree && this.$refs.tree.setCurrentNode(this.treeData.length && this.treeData[0]);
      this.$emit('nodeCallback', this.treeData[0]);
    },
    methods: {
      /**
       * tree node click
       */
      nodeClick(data) {
        this.$emit('nodeCallback', data);
      },
    },
  };
</script>

<style lang="scss" scoped>

</style>

<template>
  <ld-page>
    <el-row>
      <el-col v-for="item of moduleList" :key="item.path" :span="11" :offset="1">
        <ld-content>
          <h3 class="content-header">
            {{ item.title }}
          </h3>
          <div class="content-main">
            {{ item.des }}
          </div>
          <footer class="content-footer">
            <i class="el-icon-right"></i>
          </footer>
        </ld-content>
      </el-col>
    </el-row>
  </ld-page>
</template>

<script>
import ldContent from '../../components/ldContent'

export default {
  name: 'document',
  components: {
    ldContent
  },
  data() {
    return {
      // javascript 模块列表
      moduleList: [
        {
          title: 'ES6 Plus',
          des: 'let const 使用方法，数组/字符串新方法，箭头函数等',
          path: '/es6'
        },
        {
          title: 'Lodash',
          des: '高性能的 JavaScript 实用工具库',
          path: '/lodash'
        },
        {
          title: '偶遇小技巧',
          des: '工作中，公众号中偶遇的知识点',
          path: '/sometime'
        },
      ]
    }
  },
  created() {
    let charatStr = 'charat'
    console.log(charatStr.charAt(0))
    console.log(charatStr.charAt(1))
    console.log(charatStr.charAt(-1))
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
  .content-header {
    border-bottom: 1px solid #f2f2f2;
  }
  .content-main {
    height: 45%;
  }
  .content-footer {
    border-top: 1px solid #f2f2f2;
    i {
      font-size: 20px;
      line-height: 25px;
      float: right;
      margin-right: 10px;
    }
  }
</style>
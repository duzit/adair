<template>
  <div class="modules-main">
    <div
      v-for="(item, index) of moduleList"
      :key="index"
      class="modules-item"
      @click="itemDetail(item)">
      <h3 class="content-header">
        {{ item.title }}
      </h3>
      <div class="content-main">
        {{ item.des }}
      </div>
      <footer class="content-footer">
        <i class="el-icon-right" />
      </footer>
    </div>
  </div>
</template>

<script>
  import ldContent from '../components/ldContent';
  import helloMixin from '../mixins/hello';
  import {
    myClass,
  } from '../components/js/es6-class';

  export default {
    name: 'Document',
    components: {
      ldContent,
    },
    mixins: [helloMixin],
    data() {
      return {
        moduleList: [
          {
            title: 'JavaScript',
            des: 'JavaScript基础知识，概念，方法等',
            path: '/javascript',
          },
          {
            title: 'HTML(5)',
            des: 'HTML(5)',
            path: '/html',
          },
          {
            title: 'CSS(3)',
            des: 'Cascading Style Sheets 层叠样式表',
            path: '/css',
          },
          {
            title: 'Vue',
            des: 'Vue基础知识，Router，Vuex，vue-cli...',
            path: '/vue',
          },
          {
            title: 'ES6 Plus',
            des: 'let const 使用方法，数组/字符串新方法，箭头函数等',
            path: '/es6',
          },
          {
            title: 'Lodash',
            des: '高性能的 JavaScript 实用工具库',
            path: '/lodash',
          },
          {
            title: '偶遇小技巧',
            des: '工作中，公众号中偶遇的知识点',
            path: '/sometime',
          },
          {
            title: '面试相关',
            des: '面试题，面试技巧...',
            path: '/interview',
          },
          {
            title: 'webpack',
            des: 'webpack相关',
            path: '/webpack',
          },
        ],
        // mixins
        mixinVal: 'mixin',
        classTest: null,
      };
    },
    created() {
      const charatStr = 'charat';
      console.log(charatStr.charAt(0));
      console.log(charatStr.charAt(1));
      console.log(charatStr.charAt(-1));

      // mixin 测试
      console.log(this.message, 'mixin defined message');
      this.helloFn();

      // es6 class
      this.es6ClassFn();
    },
    methods: {
      /**
       * 跳转到相应模块
       */
      itemDetail(item) {
        this.$router.push(`${item.path}`);
      },
      mixinCall() {
        console.log('mixinCall');
      },
      emitMethod(param) {
        console.log(param, 'emit call');
      },
      // es6 class test
      es6ClassFn() {
        this.classTest = new myClass({
          name: 'Ben',
          age: 12,
        });
        console.log(this.classTest, 'es6 class');

        this.classTest.init();

        this.classTest.setGname('Lee');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .modules-main {
    width: 100%;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    background: #fff;
    padding: 20px;

    .modules-item {
      width: 350px;
      height: 150px;
      border: 1px solid #f1f1f1;
      border-radius: 4px;
      -webkit-box-shadow: 5px 5px 2px 1px #f1f1f1;
      box-shadow: 5px 5px 2px 1px #f1f1f1;
      margin-bottom: 20px;
      margin-right: 20px;
      text-align: center;
      cursor: pointer;
      &:hover {
        transform: translateY(-3px);
        box-shadow: 5px 5px 10px 4px #f1f1f1;
      }
    }
  }
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

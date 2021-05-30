<template>
  <div class="modules-content h100">
    <div class="modules-content_left h100">
      <sider-tree
        :tree-data="trees"
        @nodeCallback="handleBack" />
    </div>
    <div class="modules-content_right">
      <h3>{{ title }}</h3>
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
  import varLetConst from './es6/var-let-const';
  import arrayString from './es6/array-string';
  import templateString from './es6/template-string';
  import deconstruction from './es6/deconstruction';
  import spreadOperator from './es6/spread-operator';
  import remindParams from './es6/remind-params';
  import promise from './es6/promise';

  export default {
    name: 'Es6',
    components: {
      varLetConst,
      arrayString,
      templateString,
      deconstruction,
      spreadOperator,
      remindParams,
      promise,
    },
    data() {
      return {
        curComponent: 'var-let-const',
        title: '',
        trees: [
          {
            label: 'var let const',
            key: 'var-let-const',
          },
          {
            label: '模板字符串...',
            key: 'template-string',
          },
          {
            label: '解构赋值',
            key: 'deconstruction',
          },
          {
            label: 'Array String',
            key: 'array-string',
          },
          {
            label: '展开操作符...',
            key: 'spread-operator',
          },
          {
            label: '剩余参数',
            key: 'remind-params',
          },
          {
            label: 'Promise',
            key: 'promise',
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

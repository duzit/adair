<template>
  <div class="modules-content h100">
    <div class="modules-content_left h100">
      <sider-tree
        :tree-data="trees"
        @nodeCallback="handleBack" />
    </div>
    <div
      id="right"
      class="modules-content_right">
      <h3>{{ title }}</h3>
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
  // import { mapState } from 'vuex';
  import vWatch from '../modules/vue/vWatch.vue';
  import vDataProps from '../modules/vue/vData-Prop-Options';
  import vFilter from '../modules/vue/filter';
  import vDirective from '../modules/vue/directive';
  import Vuex from '../modules/vue/vuex';
  import liftCycle from '../modules/vue/lifecycle';
  import freeze from '../modules/vue/freeze';
  import computed from '../modules/vue/computed.vue';

  export default {
    name: 'Vue',
    components: {
      watch: vWatch,
      dataProp: vDataProps,
      vfilter: vFilter,
      directive: vDirective,
      vuex: Vuex,
      lifecycle: liftCycle,
      freeze,
      computed
    },
    data() {
      return {
        curComponent: 'vuex',
        title: '',
        trees: [
          {
            label: 'Vuex',
            key: 'vuex',
          },
          {
            label: 'Watch',
            key: 'watch',
          },
          {
            label: 'Filter',
            key: 'vfilter',
          },
          {
            label: 'Directive',
            key: 'directive',
          },
          {
            label: '生命周期',
            key: 'lifecycle',
          },
          {
            label: 'data prop options',
            key: 'dataProp',
          },
          {
            label: 'Object.freeze()',
            key: 'freeze',
          },
          {
            label: 'Computed',
            key: 'computed',
          },
        ],
      };
    },
    // computed: mapState({
    //   name: (state) => state.name,
    //   age: (state) => state.age,
    //   sex: (state) => state.user.sex,
    // }),
    computed: {
      // 获取当前组件
      currentComponent() {
        return `${this.curComponent}`;
      },
    },
    created() {
      console.log(this.$store.state, 'this.$store');

      const files = require.context('../../md/vue', false, /\.md$/);
      console.log(files.keys(), 123);
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

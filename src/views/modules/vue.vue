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
import { mapState } from 'vuex';
import vWatch from '../modules/vue/vWatch.vue';
import vDataProps from '../modules/vue/vData-Prop-Options';
import vFilter from '../modules/vue/filter';
import vDirective from '../modules/vue/directive';
import Vuex from '../modules/vue/vuex';
import liftCycle from '../modules/vue/lifecycle';
import freeze from '../modules/vue/freeze';

export default {
  name: 'vue',
  components: {
    watch: vWatch,
    dataProp: vDataProps,
    vfilter: vFilter,
    directive: vDirective,
    vuex: Vuex,
    lifecycle: liftCycle,
    freeze,
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
      ],
    };
  },
  created() {
    console.log(this.$store.state, 'this.$store');

    const files = require.context('../../md/vue', false, /\.md$/);
    console.log(files.keys(), 123);
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

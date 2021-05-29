/**
 * 1. 分发Vue组件中的可复用功能，一个混入对象可以包含任意组件选项，所有混入对象的选项被混合进入组件本身的选项
 * 2. 当组件和混入对象含有同名选项时，这些选项将以恰当的方式合并。如果有冲突，则以组件数据优先。
 * 3. 同名钩子函数将合并为一个数组，都将被调用，混入对象的钩子将在组件自身钩子之前被调用
 */
export default {
  data() {
    return {
      message: 'hello',

    };
  },
  created() {
    console.log('hello mixin');
    // 优先调用组件内的 mixinCall 方法
    this.mixinCall();
    // this.$emit('emitMethod', 'emit');

    // created 可以获取组件中的变量
    console.log(this.mixinVal, 'mixinVal created');
  },
  methods: {
    helloFn() {
      console.log('hello methods.');
      console.log(this.mixinVal, 'mixinVal methods');
    },
    // 如果对应组件没有定义 mixinCall 则使用 mixin 的 mixinCall
    mixinCall() {

    },
  },
};

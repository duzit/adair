export default {
  data() {
    return {
      message: 'hello',

    }
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

    }
  },
}
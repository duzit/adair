export default {
  data() {
    return {
      message: 'hello',

    }
  },
  created() {
    console.log('hello mixin');
  },
  methods: {
    helloFn() {
      console.log('hello methods.');
    }
  },
}
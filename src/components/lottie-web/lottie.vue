<template>
  <div :style="style" ref="lottieWeb"></div>
</template>

<script>
import lottie from 'lottie-web';

export default {
  name: 'lottieWeb',
  props: {
    options: {
      type: Object,
      required: true,
    },
    width: Number,
    height: Number,
  },
  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto',
      },
    };
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lottieWeb,
      renderer: 'svg',
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings || '',
    });
    this.$emit('animCreated', this.anim);
  },
};

</script>
<style lang="less" scoped>

</style>

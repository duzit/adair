<template>
  <div class="h100">
    <lottie :options="defaultOptions"></lottie>
  </div>
</template>

<script>
import lottie from '../components/lottie-web/lottie';
import animationData from '../components/lottie-web/data.json';

export default {
  name: 'dashboard',
  components: {
    lottie,
  },
  data() {
    return {
      defaultOptions: {
        animationData,
        // loop: true,
      },
    };
  },
  created() {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>

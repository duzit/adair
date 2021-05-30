<template>
  <div>
    gojs
    <flow-chart />
  </div>
</template>

<script>
// 相关参考 adair/src/components/js/gojs

  import flowChart from '@/components/gojs/flowchart.vue';

  export default {
    name: 'Gojs',
    components: {
      flowChart,
    },
    data() {
      return {

      };
    },
  };
</script>

<template>
  <div
    class="tips"
    :style="`width:${width}px;`">
    {{ tips }}
  </div>
</template>

<script>
  export default {
    props: {
      tips: {
        type: String,
        required: true,
        default: '暂无tips',
      },
      width: {
        type: Number,
        required: true,
        default: 200,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .tips {
    height: auto;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    background: #f2f2f2;
    padding: 10px;
    margin-top: 10px;
  }
</style>

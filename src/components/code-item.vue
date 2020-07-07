<template>
  <div class="codes" :style="`width:${width}px;`"> 
    <pre>
      {{ codes }}
    </pre>
  </div>
</template>

<script>
export default {
  props: {
    codes: {
      type: String,
      required: true,
      default: '暂无codes'
    },
    width: {
      type: Number,
      required: true,
      default: 400,
    }
  }
}
</script>

<style lang="scss" scoped>
  .codes {
    height: auto;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    background: #f2f2f2;
    padding: 10px;
    margin-top: 10px;
  }
</style>
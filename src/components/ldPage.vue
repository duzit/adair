<template>
  <div class="ldPage">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ldpage',
}
</script>

<style lang="scss" scoped>
.ldPage {
  height: 100%;
  margin: 0 400px;
  background: #909399;
}
</style>
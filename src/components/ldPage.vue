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
  display: flex;
  flex-wrap: wrap;
  padding: 40px 200px;
  justify-content: space-around;
}
</style>
<template>
  <div class="ldPage">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Ldpage',
  };
</script>

<style lang="scss" scoped>
.ldPage {
  width: 60%;
  height: calc(100vh - 61px);
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  justify-content: space-around;
  background: #fff;
}
</style>

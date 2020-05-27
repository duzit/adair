<template>
  <div class="ldContent">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ldcontent',
}
</script>

<style lang="scss" scoped>
.ldContent {
  width: 350px;
  height: 200px;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  box-shadow: 5px 5px 2px 1px #f1f1f1;
  margin-bottom: 20px;
}
.ldContent:hover {
  box-shadow: 5px 5px 10px 4px #f1f1f1;
}
</style>
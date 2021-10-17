<template>
  <div>
    <el-button @click="handlerBtnClick">
      Button +1
    </el-button>
    <p>{{ count }}</p>
    <p>{{ sum.value }}</p>

    <p>props.name: {{ name }}</p>
  </div>
</template>

<script>
  import { 
    ref, 
    onMounted,
    computed
  } from '@vue/composition-api';
  export default {
    props: {
      name: {
        type: String,
        default: 'Ben'
      }
    },
    setup() {
      const count = ref(0);

      const handlerBtnClick = () => {
        count.value++;
      }

      const sum = computed(() => {
        return `Count: ${count}`
      })

      onMounted(() => {
        console.log(123);
      })

      return {
        count,
        sum,
        // ...toRefs(props),
        handlerBtnClick
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
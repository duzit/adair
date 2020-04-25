<template>
  <ld-page>
    <v-watch></v-watch>
    <v-data-props book="xiaowangzi"></v-data-props>
  </ld-page>
</template>

<script>
import vWatch from '../../components/vue/vWatch.vue'
import vDataProps from '../../components/vue/vData-Prop-Options'
export default {
  name: 'vue',
  components: {
    vWatch,
    vDataProps,

  },
  data () {
    return {
      
    }
  }
}
</script>
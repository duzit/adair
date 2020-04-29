<template>
  <ld-page>
    <v-watch></v-watch>
    <v-data-props book="xiaowangzi"></v-data-props>
    <v-filter></v-filter>
    <v-directive></v-directive>
  </ld-page>
</template>

<script>
import vWatch from '../../components/vue/vWatch.vue'
import vDataProps from '../../components/vue/vData-Prop-Options'
import vFilter from '../../components/vue/filter'
import vDirective from '../../components/vue/directive'
export default {
  name: 'vue',
  components: {
    vWatch,
    vDataProps,
    vFilter,
    vDirective
  },
  data () {
    return {
      
    }
  }
}
</script>
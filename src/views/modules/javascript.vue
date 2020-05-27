<template>
  <ld-page>
    <var-let-const></var-let-const>
    <js-lodash></js-lodash>
    <array-string></array-string>
  </ld-page>
</template>

<script>
import varLetConst from '../../components/js/var-let-const'
import jsLodash from '../../components/js/lodash'
import arrayString from '../../components/js/array-string'
export default {
  name: 'document',
  components: {
    varLetConst,
    jsLodash,
    arrayString
  },
  data() {
    return {
      
    }
  },
  created() {
    let charatStr = 'charat'
    console.log(charatStr.charAt(0))
    console.log(charatStr.charAt(1))
    console.log(charatStr.charAt(-1))
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
  
</style>
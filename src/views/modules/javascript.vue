<template>
  <ld-page>
    <var-let-const></var-let-const>
    <div class="mtb20"></div>
    <js-lodash></js-lodash>
  </ld-page>
</template>

<script>
import varLetConst from '../../components/js/var-let-const'
import jsLodash from '../../components/js/lodash'
export default {
  name: 'document',
  components: {
    varLetConst,
    jsLodash
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
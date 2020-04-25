<template>
  <div>
    <div class="ld-header_logo">
      <span @click="goIndex">{{ logo }}</span>
    </div>
    <div class="ld-header_component">
      <el-button type="text" @click="pathTo('javascript')">JavaScript</el-button>
      <el-button type="text" @click="pathTo('html')">HTML</el-button>
      <el-button type="text" @click="pathTo('css')">CSS</el-button>
      <el-button type="text" @click="pathTo('vue')">Vue</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: 'LD'
    }
  },
  methods: {
    /**
     * 导航首页
     */
    goIndex() {
      if (this.$route.path.indexOf('/dashboard') < 0) {
        this.$router.push('/')
      }
    },
    /**
     * 指向对应模块
     */
    pathTo(type) {
      if (this.$route.path.indexOf(type) >= 0) return
      this.$router.push(`/${type}`)
    }
  }
}
</script>
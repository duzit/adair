<template>
  <div class="pt20">
    <label for="">自定义指令</label>
    <!-- 使用 el-input 不会自动获取焦点 -->
    <input class="w200" v-focus placeholder="自动获取焦点input"/>
    <!-- <el-input class="w200" autofocus placeholder="自动获取焦点el-input"/> -->
  </div>
</template>

<script>
export default {
  name: 'directive',
  // directives: {
  //   focus: {
  //     // 指令的定义
  //     inserted(el) {
  //       el.focus()
  //     },
  //     bind(el) {
  //       el.focus()
  //     },
  //     updated (el) {
  //       el.focus()
  //     }
  //   },
  // },
  data () {
    return {
      
    }
  }
}
</script>
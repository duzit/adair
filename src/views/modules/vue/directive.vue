<template>
  <div>
    <label for="">自定义指令</label>
    <!-- 使用 el-input 不会自动获取焦点 -->
    <input class="w200" v-focus placeholder="自动获取焦点input"/>
    <!-- el-input 使用 autofocus -->
    <!-- <el-input class="w200" autofocus placeholder="自动获取焦点el-input"/> -->
    <div v-local.a.b='message'></div>
    <div v-local2:[argument].a.b='message'></div>
    <div v-local3="{name: 'Ben', age: 12}"></div>
  </div>
</template>

<script>
export default {
  name: 'directive',
  directives: {
    local: {
      // 被绑定元素被插入到父元素时调用
      inserted(el, binding) {
        console.log(binding, 'binding');
        let template = `
          <h3>v-local.a.b='message'</h3>
          name:${binding.name}<br/>
          value:${binding.value}<br/>
          expression:${binding.expression}<br/>
          argument:${binding.arg}<br/>
          modifiers:${JSON.stringify(binding.modifiers)}<br/>
        `

        el.innerHTML = template
      },
      // 只调用一次 指令第一次绑定到元素时调用
      bind(el) {
        
      },
      // 所在组件Vnode更新时调用
      updated (el) {
        
      },
      // 指令所在组件的 Vnode 及其子 Vnode 全部更新后调用
      componentUpdated(el) {

      },
      // 只调用一次 指令与元素解绑时调用
      unbind(el) {

      }
    },
    local2: {
      // 被绑定元素被插入到父元素时调用
      inserted(el, binding) {
        console.log(binding, 'binding');
        let template = `
          <h3>v-local2:[argument].a.b='message'</h3>
          name:${binding.name}<br/>
          value:${binding.value}<br/>
          expression:${binding.expression}<br/>
          argument:${binding.arg}<br/>
          modifiers:${JSON.stringify(binding.modifiers)}<br/>
        `

        el.innerHTML = template
      },
    },
    local3: {
      bind(el, binding) {
        let template = `
          <h3>v-local3="{name: 'Ben', age: 12}"</h3>
          ${JSON.stringify(binding.value)}
        `
        el.innerHTML = template
      }
    }
  },
  data () {
    return {
      message: 'hello directive',
      argument: '100'
    }
  }
}
</script>
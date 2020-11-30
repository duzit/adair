<template>
  <el-form ref="form" label-width="120px" :rules="rules" :model="form">
    <el-form-item label="name" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'childForm',
  data() {
    return {
      form: {
        name
      },
      rules: {
        name: [
          { required: true, trigger: 'blur', message: 'hello'}
        ]
      }
    }
  },
}
</script>
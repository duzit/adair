<template>
  <div>
    <h3>表单校验</h3>
    <child-form ref="childForm"></child-form>
    <el-button  @click="submit">提交</el-button>
  </div>
</template>

<script>
import childForm from '../../components/sometime/childForm';

export default {
  name: 'sometime',
  components: {
    childForm,
  },
  data() {
    return {

    };
  },
  methods: {
    submit() {
      this.$refs.childForm.$refs.form.validate((flag) => {
        if (flag) {
          console.log('hello');
        } else {
          console.log('false');
          return false;
        }
      });
    },
  },
};
</script>

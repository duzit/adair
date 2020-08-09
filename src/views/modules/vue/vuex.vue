<template>
  <div>
    <el-form ref="vuexFormRef" :model="vuexForm" label-width="100px">
      <el-form-item label="姓名">
        <el-input v-model="vuexForm.name" class="item-width"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="vuexForm.age" class="item-width"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="vuexForm.username" class="item-width"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="changeStore">改变store内容</el-button>
      </el-form-item>
      <el-form-item label="当前store内容">
        <el-input type="textarea" v-model="storeInfo" class="item-width"></el-input>
      </el-form-item>
    </el-form>
    <!-- markdown 内容 -->
    <div class="markdown-body">
      <VueMarkdown :source="mdData" v-highlight></VueMarkdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VueMarkdown from 'vue-markdown';
import markdownData from '../../../md/vuex.md';
export default {
  name: 'vuex',
  data() {
    return {
      mdData: markdownData,
      vuexForm: {
        name: '',
        age: '',
        username: '',
      },
      storeInfo: ''
    }
  },
  components: {
    VueMarkdown
  },
  created() {
    this.vuexForm.name = this.name;
    this.vuexForm.age = this.age;
    this.vuexForm.username = this.username;
    this.storeInfo = JSON.stringify(this.vuexForm);
  },
  mounted() {
    
  },
  computed: mapState({
    name: state => state.name,
    age: state => state.age,
    username: state => state.user.username,
  }),
  methods: {
    /**
     * 改变store内容
     */
    changeStore() {
      this.$store.dispatch('changeStoreInfo', this.vuexForm);
      this.$store.dispatch('changeUserUsername', this.vuexForm.username);
      this.storeInfo = JSON.stringify(this.vuexForm);
    }
  },
}
</script>

<style lang="scss" scoped>
  .item-width {
    width: 200px;
  }
</style>
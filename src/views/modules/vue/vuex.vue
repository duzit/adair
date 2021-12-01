<template>
  <div>
    <el-form
      ref="vuexFormRef"
      :model="vuexForm"
      label-width="100px">
      <el-form-item label="姓名">
        <el-input
          v-model="vuexForm.name"
          class="item-width" />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input
          v-model="vuexForm.age"
          class="item-width" />
      </el-form-item>
      <el-form-item label="用户名">
        <el-input
          v-model="vuexForm.username"
          class="item-width" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="changeStore">
          改变store内容
        </el-button>
      </el-form-item>
      <el-form-item label="当前store内容">
        <el-input
          v-model="storeInfo"
          type="textarea"
          class="item-width" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="changeUsers">
          change list users
        </el-button>
      </el-form-item>
    </el-form>
    <div>
      <p>filterIcons: {{ filterIcons }}</p>
      <p>iconsGetters: {{ JSON.stringify(iconsGetters) }}</p>
      <p>users: {{ JSON.stringify(users) }}</p>
    </div>
    <!-- markdown 内容 -->
    <div class="markdown-body">
      <VueMarkdown
        v-highlight
        :source="mdData" />
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';
  import VueMarkdown from 'vue-markdown';
  import markdownData from '../../../md/vue/vuex.md';

  export default {
    name: 'Vuex',
    components: {
      VueMarkdown,
    },
    data() {
      return {
        mdData: markdownData,
        vuexForm: {
          name: '',
          age: '',
          username: '',
        },
        storeInfo: '',
      };
    },
    // computed: mapState({
    //   name: (state) => state.name,
    //   age: (state) => state.age,
    //   username: (state) => state.user.username,
    // }),
    computed: {
      ...mapState({
        name: (state) => state.name,
        age: (state) => state.age,
        username: (state) => state.user.username,
      }),
      filterIcons() {
        return this.$store.getters.filterIcons;
      },
      ...mapGetters({
        iconsGetters: 'filterIcons',
        users: 'userInfo'
      })
    },
    created() {
      this.vuexForm.name = this.name;
      this.vuexForm.age = this.age;
      this.vuexForm.username = this.username;
      this.storeInfo = JSON.stringify(this.vuexForm, null, 2);

      console.log(this.$store.getters.filterIcons, 'list getters'); // [2, 3]
    },
    mounted() {

    },
    methods: {
      /**
       * 改变store内容
       */
      changeStore() {
        this.$store.dispatch('changeStoreInfo', this.vuexForm);
        this.$store.dispatch('changeUserUsername', this.vuexForm.username);
        this.storeInfo = JSON.stringify(this.vuexForm);
      },
      changeUsers() {
        this.$store.dispatch('setUserList', ['hello', 'moto'])
      }
    },
  };
</script>

<style lang="scss" scoped>
  .item-width {
    width: 200px;
  }
</style>

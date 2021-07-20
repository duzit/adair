<template>
  <div class="markdown-body">
    <VueMarkdown
      v-highlight
      :source="mdData" />
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import markdownData from '../../../md/javascript/Promise.md';

  export default {
    name: 'RemindParams',
    components: {
      VueMarkdown,
    },
    data() {
      return {
        mdData: markdownData,
        resData: [],
      };
    },
    created() {
      this.promiseFn()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      this.getUser()
        .then((res) => {
          this.resData.push(res);
          this.getOtherUser()
            .then((res) => {
              this.resData.push(res);
              console.log(this.resData, 'promise'); // [{},{}]
            });
        });

      this.getItems()
        .then((res) => {
          console.log(res, 'promise2'); // [{},{}]
        });
    },
    methods: {
      promiseFn() {
        return new Promise((resolve, reject) => {
          resolve({
            name: 'hello',
            age: 12,
            status: 200,
          });
        });
      },
      getUser() {
        return new Promise((resolve, reject) => {
          resolve({
            name: 'zhansan',
            age: 11,
          });
        });
      },
      getOtherUser() {
        return new Promise((resolve, reject) => {
          resolve({
            name: 'xiaozhang',
            age: 12,
          });
        });
      },
      async getItems() {
        try {
          const item0 = await this.getUser();
          const item1 = await this.getOtherUser();
          return [item0, item1];
        } catch (error) {

        }
      },
    },
  };
</script>

<style lang="scss" scoped>

</style>

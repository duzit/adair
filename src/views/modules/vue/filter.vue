<template>
  <div>
    <label for="watch">filter局部</label>
    <el-input
      v-model="person.name"
      class="w200" />
    <div>{{ person.name | capitalize }}</div>
    <label for="watch">filter全局</label>
    <el-input
      v-model="person.fName"
      class="w200" />
    <div>{{ person.fName | toUpString }}</div>
    <label for="watch">v-bind | filter</label>
    <el-input
      v-model="widthBind"
      class="w200" />
    <div :id="widthBind | bindFilter" />

    <div class="markdown-body">
      <VueMarkdown
        v-highlight
        :source="mdData" />
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import markdownData from '../../../md/vue/filter.md';

  export default {
    name: 'Filters',
    components: {
      VueMarkdown,
    },
    filters: {
      // 局部过滤器
      // 首字母大写
      capitalize(value) {
        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
      bindFilter(value) {
        if (!value) return '';
        return `${value }-bind`;
      },
    },
    data() {
      return {
        person: {
          name: '',
          fName: '',
        },
        widthBind: '',
        mdData: markdownData,
      };
    },
    created() {

    },
    methods: {

    },
  };
</script>

<style lang="scss" scoped>

</style>

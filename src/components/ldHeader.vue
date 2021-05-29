<template>
  <div>
    <div class="ld-header_logo">
      <span @click="goIndex">{{ logo }}</span>
    </div>
    <div class="ld-header_component">
      <!-- <el-button class="button-style" :class="currentTab == 'javascript' ? 'is-actived' : ''" type="text" @click="pathTo('javascript', $event)">JavaScript</el-button>
      <el-button class="button-style" :class="currentTab == 'html' ? 'is-actived' : ''" type="text" @click="pathTo('html', $event)">HTML</el-button>
      <el-button class="button-style" :class="currentTab == 'css' ? 'is-actived' : ''" type="text" @click="pathTo('css', $event)">CSS</el-button>
      <el-button class="button-style" :class="currentTab == 'vue' ? 'is-actived' : ''" type="text" @click="pathTo('vue', $event)">Vue</el-button> -->
      <ul class="lists">
        <li @click="pathTo('javascript', 0)">JavaScript</li>
        <li @click="pathTo('html', 1)">HTML</li>
        <li @click="pathTo('css', 2)">CSS</li>
        <li @click="pathTo('vue', 3)">Vue</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: 'Adair',
      liLists: [],
    };
  },
  mounted() {
    // mounted 阶段可以获取 li 元素
    this.liLists = document.getElementsByTagName('li');
    const localIndex = window.localStorage.getItem('currentIndex');
    if (`${localIndex }`) {
      this.addClass(Number(localIndex));
    }
  },
  watch: {
    $route: {
      handler(path, old) {
        if (path.path.indexOf('/dashboard') >= 0) {
          // 监听路由变化 dashboard 页面则清除 current 样式
          this.removeClass();
        }
      },
      deep: true,
    },
  },
  methods: {
    /**
     * 导航首页
     */
    goIndex() {
      // 如果当前在首页 dashboard ，则跳转模块导航页 modules
      // 如果当前是非首页 dashboard ，则跳转 dashboard
      if (this.$route.path.indexOf('/dashboard') >= 0) {
        this.$router.push('/modules');
      } else if (this.$route.path.indexOf('/modules') >= 0) {
        this.$router.push('/');
      } else {
        this.$router.push('/modules');
      }
    },
    /**
     * 指向对应模块
     */
    pathTo(type, index) {
      if (this.$route.path.indexOf(type) >= 0) return;
      window.localStorage.setItem('currentIndex', index);
      this.addClass(index);
      this.$router.push(`/${type}`);
    },
    /**
     * 当前选项添加高亮 class
     */
    addClass(index) {
      this.liLists[index].classList.add('current');
      for (let i = 0; i < this.liLists.length; i++) {
        if (index != i) {
          this.liLists[i].classList.remove('current');
        }
      }
    },
    /**
     * 移除 class
     */
    removeClass() {
      for (let i = 0; i < this.liLists.length; i++) {
        this.liLists[i].classList.remove('current');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
 .ld-header_component {
   ul {
     margin: 0;
   }
   ul > li {
     list-style: none;
     margin-right: 10px;
     padding: 0 5px;
     font-size: 16px;
     cursor: pointer;
   }
   ul li:hover {
     background: #f1f1f1;
   }
   .lists {
     display: flex;
   }
   .current {
     color: #409eff;
     font-weight: bold;
    //  background: #f1f1f1;
   }
 }
</style>

<template>
  <div class="img-src">
    <el-button
      v-for="(item, index) in list"
      :key="index"
      class="mb20"
      @click="handleClick(item)">
      {{ item.label }}
    </el-button>
    <img
      :src="getImg()"
      alt="">

    <p>使用非全路径</p>
    <img
      :src="getImgHalf()"
      alt="">
  </div>
</template>
<script>
  export default {
    name: 'ImgSrc',
    data() {
      return {
        list: [
          {
            label: '示例1',
            value: '1',
            imgName: 'adair.png',
            imgUrl: '@/assets/adair.png',
            imgHalfUrl: '/assets/adair.png',
          },
          {
            label: '示例2',
            value: '1',
            imgName: 'th1129.jpeg',
            imgUrl: '@/assets/th1129.jpeg',
            imgHalfUrl: '/assets/th1129.jpeg',
          },
        ],
        img: '',
      };
    },
    methods: {
      handleClick(item) {
        // this.img = item.imgUrl;
        // this.img = item.imgHalfUrl;
        this.img = item.imgName;
      },
      getImg() {
        if (!this.img) return;
        return require(`@/assets/${ this.img}`);
      },
      getImgHalf() {
        const url1 = '/assets/th1129.jpeg';
        const url2 = 'th1129.jpeg';
        // return require('@' + url1);
        return require(`@/assets/${ url2}`);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .img-src {
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>

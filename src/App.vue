<template>
  <div id="app">
    <ld-header class="ld-header"></ld-header>
    <ld-main class="ld-main"></ld-main>
  </div>
</template>

<script>
import ldHeader from './components/ldHeader'
import ldMain from './components/ldMain'
import {
  isPCBroswer
} from 'du-utils/src/common'

export default {
  name: 'app',
  components: {
    ldHeader,
    ldMain
  },
  created() {
    // 测试 du-utils 
    console.log(isPCBroswer(), '123');
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  overflow: hidden;
}
</style>

<template>
  <div id="app">
    <ld-header></ld-header>
    <ld-main></ld-main>
  </div>
</template>

<script>
import ldHeader from './components/ldHeader'
import ldMain from './components/ldMain'

export default {
  name: 'app',
  components: {
    ldHeader,
    ldMain
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

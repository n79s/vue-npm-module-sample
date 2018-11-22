<template>
  <div id="app">
    <HelloLocal msg="Local"/>
    <HelloX msg="use-hello X" />
    <HelloY msg="use-hello Y" />
    <HelloZ msg="use-hello Z" />
  </div>
</template>

<script>
import HelloLocal from './components/HelloLocal.vue'

export default {
  name: 'app',
  components: {
    HelloLocal
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
  margin-top: 60px;
}
</style>

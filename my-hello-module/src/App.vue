<template>
  <div id="app">
    <HelloX msg="from X"/>
    <HelloY msg="from Y"/>
    <HelloZ msg="from Z"/>
  </div>
</template>

<script>
import HelloX from './components/HelloX.vue'
import HelloY from './components/HelloY.vue'
import HelloZ from './components/helloz/HelloZ.vue'

export default {
  name: 'app',
  components: {
    HelloX,
    HelloY,
    HelloZ
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

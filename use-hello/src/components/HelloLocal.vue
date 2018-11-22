<template>
  <section>
    <h1>Hello Local World</h1>
    <div>Message : {{ msg }}</div>
  </section>
</template>

<script>
export default {
  name: 'HelloLocal',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  color:#808080;
}
</style>

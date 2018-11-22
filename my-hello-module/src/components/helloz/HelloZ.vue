<template>
  <section>
    <h1>Hello World ZZZ</h1>
    <div>Message : {{ msg }}</div>
  </section>
</template>

<script>
export default {
  name: 'HelloZ',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  color:green;
}
</style>

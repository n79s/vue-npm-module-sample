<template>
  <section>
    <h1>Hello World !!!</h1>
    <div>Message : {{ msg }}</div>
  </section>
</template>

<script>
export default {
  name: 'HelloX',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
  color:red;
}
</style>

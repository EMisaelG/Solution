<template>
  <div>
    <h1> Registro </h1>
    <input
    type="email"
    name="email"
    v-model="email"
    placeholder="email" />
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
      <br>
      <button>Registro</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: 'abd',
      password: '123'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

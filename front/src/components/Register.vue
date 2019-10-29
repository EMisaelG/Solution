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
      <button
      @click="register">
      Registro
      </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  }, 
  /*
  watch: {
    email (value) {
      console.log('Correo cambiado', value)
    }
  }, 
  */
  methods: {
    register () {
      console.log('diste click al boton', this.email, this.password)
    }
  }, 
  /*
  mounted () {
    setTimeout(() => {
      this.email = 'Hola'
    }, 2000)
  } 
  */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

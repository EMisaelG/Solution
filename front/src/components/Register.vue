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
import AuthenticationServices from '@/services/AuthenticationServices'
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
    async register () {
      //const response = await AuthenticationServices.register ({
      await AuthenticationServices.register ({
        email: this.email,
        password: this.password
      })
      //console.log (response.data)
      //console.log('diste click al boton', this.email, this.password)
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

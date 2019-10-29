<template>
  <v-card class="d-flex pa-2">
    <div>
      <v-toolbar dense dark>
        <v-toolbar-title>
          Registro
        </v-toolbar-title>
      </v-toolbar>
    </div>
    <v-col cols="12" sm="6">
      <v-text-field
      label="Email"
      v-model="email"
      placeholder="email"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
      label="Password"
      v-model="password"
      placeholder="password"
      ></v-text-field>
    </v-col>
      <div class="error" v-html="error"></div>
      <v-btn dark
      @click="register">
      Registro
      </v-btn>
  </v-card>
</template>

<script>
import AuthenticationServices from '@/services/AuthenticationServices'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationServices.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color:red;
  }
</style>

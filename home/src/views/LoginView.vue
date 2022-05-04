<template>
   <v-app id="inspire">
      <v-main>
         <v-container fluid fill-height>
            <v-layout justify-center>
               <v-flex xs12 sm10 md7 lg4>
                  <v-card class="elevation-4">
                     <v-toolbar dark color="waterPrimary">
                        <v-toolbar-title>Login</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              prepend-icon="person"
                              name="username"
                              label="Username"
                              type="text"
                              v-model="username"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              prepend-icon="lock"
                              name="password"
                              label="Password"
                              type="password"
                              v-model="password"
                           ></v-text-field>
                        </v-form>
                        <v-btn 
                        color="white" 
                        @click="trouble" 
                        small
                        elevation="0">Trouble Signing In?</v-btn>
                        <br>
                        <div class="danger-alert" v-html="error" />
                        <br>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                        outlined
                        color="waterPrimary" 
                        id="loginButton"
                        @click="login()">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    trouble () {
      this.$router.push({
          name: 'troubleLoggingIn'
        })
    }
  }
}
</script>

<style scoped>

.v-text-field >>> label {
    font-size: 1.5em;
}

.v-toolbar__title {
  font-size: 1.8em !important;
  color: white;
}
</style>
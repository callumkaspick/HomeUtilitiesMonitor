<template>
      <v-main>
         <v-container fluid fill-height>
            <v-snackbar
               v-model="snackbar"
               :timeout="timeout"
               color="success"
               id="snackbar"
               centered="true"
            >
               {{ text }}

               <template v-slot:action="{ attrs }">
               <v-btn
                  color="white"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                  id="snackbar"
               >
                  Close
               </v-btn>
               </template>
            </v-snackbar>
            <v-layout justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Register form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                          <v-text-field
                              prepend-icon="mail"
                              name="email"
                              label="Email"
                              type="text"
                              v-model="email"
                           ></v-text-field>
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
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <br>
                        <div :class="status" v-html="error" />
                        <br>
                        <v-btn color="primary" @click="register">Register</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
</template>



<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      snackbar: false,
      text: `Account registered successfully!`,
      email: '',
      username: '',
      password: '',
      timeout: 3000,
      error: null,
      status: 'danger-alert',
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.snackbar = true
        //this.status = 'success'
        this.error = 'Success! Redirecting...'
        this.error = ''

         setTimeout(() => {  
            this.$router.push({
               name: 'home'
            }) 
         }, 2000);
        
        
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

.success {
   color: green;
   background-color: white;
}

#snackbar {
   color: white;
}

</style>

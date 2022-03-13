<template>
   <v-app id="inspire">
      <v-main>
         <v-container fluid fill-height>
            <v-layout justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Reset Username</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                            <v-text-field
                              prepend-icon="person"
                              name="username"
                              label="New username"
                              type="text"
                              v-model="newUsername"
                           ></v-text-field>
                           <v-text-field
                              prepend-icon="person"
                              name="username"
                              label="Current username"
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
                        <br>
                        <div class="danger-alert" v-html="error" />
                        <br>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="login">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
import UpdateDetailsService from '@/services/UpdateDetailsService'
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      newUsername: '',
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async createNewUsername () {
       //If the stored username is the same as the entered...
       if (this.$store.user.username === this.username){
          try {
             //validate password
             const responseForPassword = await AuthenticationService.validatePassword({
               username: this.username,
               password: this.password,
             })
             try {
               //change username
               const responseUsernameUpdate = await UpdateDetailsService.newUsername({
                  newUsername: this.newUsername,
                  username: this.username,
               })
             }
            catch (error) {
               this.error = error.responseUsernameUpdate.data.error
            } 
          }
          catch (error) {
             this.error = error.responseForPassword.data.error
          }
          //Update what user is currently logged in since it has changed usernames
          this.$store.dispatch('setUser', response.data.user)
       }
       else {
          this.error = 'Username does not match account currently signed in.'
       }
    },
  }
}
</script>

<style scoped>
</style>
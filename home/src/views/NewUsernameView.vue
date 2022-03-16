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
                              name="newUsername"
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
                        <v-btn color="primary" @click="createNewUsername">Change</v-btn>
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
       try {
             //validate by logging in
             const responseForPassword = await AuthenticationService.login({
               username: this.username,
               password: this.password,
             })
             try {
               //change username
               const responseUsernameUpdate = await UpdateDetailsService.newUsername({
                  newUsername: this.newUsername,
                  username: this.username,
               })
               this.$store.dispatch('setToken', response.data.token)
               this.$store.dispatch('setUser', response.data.user)
             }
            catch (error) {
               this.error = error.responseUsernameUpdate.data.error
            } 
      }
      catch (error) {
         this.error = error.responseForPassword.data.error
      }
    },
  }
}
</script>

<style scoped>
</style>
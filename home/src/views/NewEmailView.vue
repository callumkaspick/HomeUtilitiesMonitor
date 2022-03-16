<template>
   <v-app id="inspire">
      <v-main>
         <v-container fluid fill-height>
            <v-layout justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Reset Email</v-toolbar-title>
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
                            <v-text-field
                              prepend-icon="person"
                              name="newEmail"
                              label="New Email"
                              type="text"
                              v-model="newEmail"
                           ></v-text-field>
                        </v-form>
                        <br>
                        <div class="danger-alert" v-html="error" />
                        <br>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="createNewEmail">Change Email</v-btn>
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
      username: '',
      password: '',
      newEmail: '',
      error: null
    }
  },
  methods: {
    async createNewPassword () {
       try {
             //validate by logging in
             const responseForLogin = await AuthenticationService.login({
               username: this.username,
               password: this.password,
             })
             try {
               //change email
               const responseEmailUpdate = await UpdateDetailsService.newEmail({
                  newEmail: this.newEmail,
               })
               this.$store.dispatch('setToken', response.data.token)
               this.$store.dispatch('setUser', response.data.user)
             }
            catch (error) {
               this.error = error.responseEmailUpdate.data.error
            } 
      }
      catch (error) {
         this.error = error.responseForLogin.data.error
      }
    },
  }
}
</script>

<style scoped>
</style>
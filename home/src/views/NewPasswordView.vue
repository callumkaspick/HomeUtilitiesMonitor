<template>
   <v-app id="inspire">
      <v-main>
         <v-container fluid fill-height>
            <v-layout justify-center>
               <v-flex xs12 sm10 md7>
                  <v-card class="elevation-4">
                     <v-toolbar dark color="waterPrimary">
                        <v-toolbar-title>Change Password</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
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
                            <v-text-field
                              prepend-icon="person"
                              name="newPassword"
                              label="New password"
                              type="password"
                              v-model="newPassword"
                           ></v-text-field>
                        </v-form>
                        <br>
                        <div v-if="hasError" class="danger-alert">{{msg}}</div>
                        <div v-if="!hasError" class="success-alert">{{msg}}</div>
                        <br>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="waterPrimary" outlined @click="createNewPassword">Change Password</v-btn>
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

export default {
  data () {
    return {
      username: '',
      password: '',
      newPassword: '',
      hasError: false,
      msg: null,
    }
  },
  methods: {
    async createNewPassword () {
             try {
               //change password
               const response = await UpdateDetailsService.newPassword({
                  password: this.newPassword,
                  oldPassword: this.password,
                  username: this.username,
               })
               this.$store.dispatch('setToken', response.data.token)
               this.$store.dispatch('setUser', response.data.user)
               this.hasError = false
               this.msg = 'Password successfully changed'
             }
            catch (error) {
                this.hasError = true
               this.msg = error.response.data.error
            }
    },
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
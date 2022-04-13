<template>
    <div>
      <v-container fluid fill-height>
            <v-layout justify-center>
               <v-flex xs12 sm8 md6 lg6>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="waterPrimary">
                        <v-toolbar-title>Settings</v-toolbar-title>
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
                        text="waterSeconday" 
                        background="gray" 
                        color="waterPrimary" 
                        @click="login">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>




        <v-row
        class="d-flex justify-center">
            <v-col
            cols=12>
                <v-card
                elevation="2"
                class="d-flex justify-center mt-4"
                color="white"
                id="currentPage"
                >
                    Settings
                </v-card>
            </v-col>
            
        </v-row>
        <v-row
        class="d-flex justify-center mt-12 mb-6">
            <v-col
            cols="12"
            lg="8"
            sm="12"
            md="8"

            class="">
                <v-card
                elevation="2"
                outlined
                color="gray"
                class="d-flex mb-6 justify-space-around align-center"
                height="80%"
                id="settingsChoice"
                >
                    <v-btn
                    width="100%"
                    height="100%"
                    color="waterPrimary"
                    @click="accountSettings">
                        Account Settings
                    </v-btn>
                </v-card>
                <v-card
                elevation="2"
                outlined
                color="gray"
                class="d-flex mb-6 justify-space-around align-center"
                height="80%"
                id="settingsChoice"
                >
                    <v-btn
                    width="100%"
                    height="100%"
                    @click="deviceSettings">
                        Device Settings
                    </v-btn>
                </v-card>
                <v-card
                elevation="2"
                outlined
                color="gray"
                class="d-flex mb-6 justify-space-around align-center"
                height="80%"
                id="settingsChoice"
                >
                    <v-btn
                    width="100%"
                    height="100%"
                    @click="notificationSettings">
                        Notifcation Settings
                    </v-btn>
                </v-card>
            </v-col>
            
        </v-row>
        
    </div>
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
    accountSettings () {
      this.$router.push({
          name: 'accountSettings'
        })
    },
    deviceSettings () {
      this.$router.push({
          name: 'deviceSettings'
        })
    },
    notificationSettings () {
      this.$router.push({
          name: 'notificationSettings'
        })
    }
  }
}
</script>

<style>
#currentPage {
  background-color: lightgray;
  color: black;
  font-size: 1.5em;
  padding: 10px;
  text-align: center;
  font-size: 2em;
}
#settingsChoice {
  background-color: white;
  color: black;
  text-align: center;
  
}

.v-btn {
    font-size: 4em;
}
</style>
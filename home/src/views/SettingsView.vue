<template>
    <v-main>
      <v-container fluid fill-height>
            <v-layout justify-center>
               <v-flex xs12 sm10 md7 lg8>
                  <v-card 
                  class="elevation-4"
                  height=115%>
                     <v-toolbar dark color="waterPrimary">
                        <v-toolbar-title class="settings">Settings</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text
                     height="100%">
                        <v-row
                        class="d-flex align-stretch justify-center mt-4 mb-4">
                          <v-col
                          cols="12"
                          lg="8"
                          sm="12"
                          md="12"
                          height="100%"
                          class="">
                              <v-card
                              elevation="0"
                              outlined
                              fill-height
                              color="gray"
                              class="d-flex align-stretch mb-6 justify-space-around align-center"
                              height="33%"
                              
                              >
                                  <v-btn
                                  id="accountSettings"
                                  width="100%"
                                  height="100%"
                                  color="F5F5F5"
                                  @click="accountSettings()">
                                    <div
                                    id="button">
                                      Account Settings
                                    </div>
                                      
                                  </v-btn>
                              </v-card>
                              <v-card
                              elevation="0"
                              outlined
                              color="gray"
                              class="d-flex mb-6 justify-space-around align-center"
                              height="33%"
                              
                              >
                                  <v-btn
                                  id="deviceSettings"
                                  width="100%"
                                  height="100%"
                                  @click="deviceSettings()">
                                      Device Settings
                                  </v-btn>
                              </v-card>
                              <v-card
                              elevation="0"
                              outlined
                              color="gray"
                              class="d-flex mb-6 justify-space-around align-center"
                              height="33%"
                              
                              >
                                  <v-btn
                                  width="100%"
                                  height="100%"
                                  id="notificationSettings"
                                  @click="notificationSettings()">
                                      Notifcation Settings
                                  </v-btn>
                              </v-card>
                          </v-col>
                          
                      </v-row>
                        
                     </v-card-text>
                     
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

.v-text-field >>> label {
    font-size: 1.5em;
}

.settings {
  font-size: 1.8em !important;
  color: white
}

#button {
  float: left;
}

</style>
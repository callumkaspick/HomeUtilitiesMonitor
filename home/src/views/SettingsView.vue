<template>
    <div>
        <v-row
        class="d-flex justify-center">
            <v-col
            cols=12>
                <v-card
                elevation="2"
                class="d-flex justify-center mt-4"
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
</style>
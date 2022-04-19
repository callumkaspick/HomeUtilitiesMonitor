<template>
  <v-container>
    <!-- Still need following on main: 
    - grab username string and implement in custom welcome message
    - set constraints for buttons
    --> 
    <!-- Header for main page -->
    <v-row class="text-center">
      <v-col class="mt-6 mb-16">
        <!-- fix header -->
        <div v-if="username" block class="display-2 font-weight-bold mb-3 text-h2">
          Welcome, {{ username }}
        </div>
        
      </v-col>
    </v-row>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="500"
      max-height="500">
      
      <v-card>
        <v-card-title id="popupText" class="text-h6">
          It looks like you don't have an electric device set up!
        </v-card-title>
        <v-card-text id="popupText">If you have a device to setup, please click the "setup" button on this popup. Otherwise, please click home.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Return
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="$router.push('/deviceSettings')"
          >
            Setup
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="500"
      max-height="500">
      
      <v-card>
        <v-card-title id="popupText" class="text-h6">
          It looks like you don't have a water device set up!
        </v-card-title>
        <v-card-text id="popupText">If you have a device to setup, please click the "setup" button on this popup. Otherwise, please click home.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Return
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="$router.push('/deviceSettings')"
          >
            Setup
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row class="text-center">
      <!-- button for redirect to electricity page -->
      <v-btn depressed large elevation="3" class="flexcol yellow mx-4" width="550" height="580" @click="electricClicked">
        <v-icon size="350">electric_bolt</v-icon>
        <span class="display-2">Electricity</span>
      </v-btn>

      <!-- button for redirect to water page -->
      <v-btn depressed large elevation="3" class="flexcol light waterPrimary mx-4" width="550" height="580" @click="waterClicked">
        <v-icon size="350">water_drop</v-icon>
        <span class="display-2">Water</span>
      </v-btn>
    </v-row>      
    
  </v-container>
</template>

<!-- Style choice to have text underneath icons for buttons on main page -->
<style>
.flexcol .v-btn__content {
  flex-direction: column;
}
</style>

<script>
  import MockService from '@/services/MockService'
  import GetService from '@/services/GetService'
  export default {
    name: 'HelloWorld',

    data: () => ({
      dialog: false,
    }),
    methods: {
      initMockData(){
        MockService.initMockData({
          username: this.$store.state.user.username
        })
      },
      async electricClicked(){        
        try{
          const response = await GetService.getElectricDevice({
            username: this.$store.state.user.username,
            password: this.$store.state.user.username
          })
          console.log(response)
          this.$router.push({
            name: 'electric'
          })
        }
        catch(error){
          console.log
          this.dialog = true
        }
        
      },
      async waterClicked(){        
        try{
          const response = await GetService.getWaterDevice({
            username: this.$store.state.user.username,
            password: this.$store.state.user.username
          })
          console.log(response)
          this.$router.push({
            name: 'water'
          })
        }
        catch(error){
          console.log
          this.dialog = true
        }
        
      },
      computed: {
      username: function() {
      return this.$store.state.user.username
        }
      }
    }
  }
</script>


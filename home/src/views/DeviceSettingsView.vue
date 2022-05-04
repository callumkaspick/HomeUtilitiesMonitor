<template>
    <v-main>
        <v-dialog
        v-model="dialog"
        persistent
        max-width="500"
        max-height="500">
        
        <v-card>
            <v-card-title id="popupText" class="text-h6">
            Please enter dollars per kWh:
            </v-card-title>
            <v-text-field
            label="dollars/kWh (As integer)"
            v-model="newElectricRate"
            outlined
          ></v-text-field>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="green darken-1"
                text
                @click="closeDialog"
            >
                Return
            </v-btn>
            <v-btn
                color="green darken-1"
                text
                @click="changeElectricRate"
            >
                Change
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>





      <v-container fluid fill-height>
            <v-layout justify-center>
               <v-flex xs12 sm12 md10 lg6>
                  <v-card class="elevation-4"
                  height="137%"
                  width="100%">
                     <v-toolbar dark color="waterPrimary">
                        <v-toolbar-title class="settings">Device Settings</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text
                     height="100%"
                     width="100%">
                        <v-row
                        class="d-flex align-stretch justify-center mt-4 mb-4">
                          <v-col
                          cols="12"
                          lg="10"
                          sm="12"
                          md="10"
                          height="100%"
                          width="100%"
                          class="">
                              <v-card
                elevation="2"
                outlined
                color="gray"
                class="d-flex justify-space-around mb-6"
                height="33%"
                width="100%"
                id="settingsChoice"
                >
                    <v-row
                    class="d-flex justify-space-between"
                    height="100%">
                        <v-col
                        sm="3"
                        class="d-flex align-center justify-center">
                            <v-card
                            height="50%"
                            width="100%"
                            align="start"
                            flat
                            color="waterPrimary"
                            class="d-flex rounded-xl align-center justify-center elevation-4">
                                <div
                                id="title"
                                class="">
                                    Water Device
                                </div>
                            </v-card>
                        </v-col>

                        <v-col
                        cols="5"
                        sm="6"
                        align="center"
                        id="displayed">
                            <v-card
                            height="100%"
                            width="100%"
                            align="center"
                            flat
                            color="#F5F5F5"
                            class="d-flex align-center justify-center">
                                <div
                                id="loadedData">
                                    {{waterDevice}}
                                </div>
                            </v-card>
                        </v-col>

                        <v-col
                        sm="3"
                        align="end"
                        id="change">
                            <v-card
                            height="100%"
                            width="100%"
                            class="d-flex align-end pr-2"
                            color="#F5F5F5"
                            flat>
                                <v-spacer></v-spacer>
                                    <v-btn
                                    v-if="waterDevice == null"
                                    id="change"
                                    class="mb-2"
                                    color="white"
                                    @click="addNewWaterDevice"
                                    >
                                        Add
                                    </v-btn>
                                    <v-btn
                                    v-if="waterDevice != null"
                                    id="change"
                                    class="mb-2"
                                    color="white"
                                    @click="changeUsername"
                                    >
                                        Remove
                                    </v-btn>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>









                              <v-card
                elevation="2"
                outlined
                color="gray"
                class="d-flex justify-space-around mb-6"
                height="33%"
                width="100%"
                id="settingsChoice"
                >
                    <v-row
                    class="d-flex justify-space-between"
                    height="100%">
                        <v-col
                        sm="3"
                        class="d-flex align-center justify-center">
                            <v-card
                            height="50%"
                            width="100%"
                            flat
                            color="waterPrimary"
                            class="d-flex rounded-xl align-center justify-center elevation-4">
                                <div
                                id="title"
                                class="">
                                    Water Rate
                                </div>
                            </v-card>
                        </v-col>

                        <v-col
                        cols="5"
                        sm="6"
                        align="center"
                        id="displayed">
                            <v-card
                            height="100%"
                            width="100%"
                            align="center"
                            flat
                            color="#F5F5F5"
                            class="d-flex align-center justify-center">
                                <div
                                id="loadedData">
                                    {{waterRate}}
                                </div>
                            </v-card>
                        </v-col>

                        <v-col
                        sm="3"
                        align="end"
                        id="change">
                            <v-card
                            height="100%"
                            width="100%"
                            color="#F5F5F5"
                            class="d-flex align-end pr-2"
                            flat>
                                <v-spacer></v-spacer>
                                    <v-btn
                                    id="change"
                                    class="mb-2"
                                    color="white"
                                    @click="changeWaterRate"
                                    >
                                        Change
                                    </v-btn>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>





                <v-card
                elevation="2"
                outlined
                color="gray"
                class="d-flex justify-space-around mb-6"
                height="33%"
                width="100%"
                id="settingsChoice"
                >
                    <v-row
                    class="d-flex justify-space-between"
                    height="100%">
                        <v-col
                        sm="3"
                        align="start"
                        class="d-flex align-center justify-center">
                            <v-card
                            height="50%"
                            width="100%"
                            align="start"
                            flat
                            color="yellow"
                            class="d-flex rounded-xl align-center justify-center elevation-4">
                                <div
                                id="title"
                                class="">
                                    Electric Device
                                </div>
                            </v-card>
                        </v-col>

                        <v-col
                        cols="5"
                        sm="6"
                        align="center"
                        id="displayed">
                            <v-card
                            height="100%"
                            width="100%"
                            align="center"
                            flat
                            color="#F5F5F5"
                            class="d-flex align-center justify-center">
                                <div
                                id="loadedData">
                                    {{electricDevice}}
                                </div>
                            </v-card>
                        </v-col>

                        <v-col
                        sm="3"
                        align="end"
                        id="change">
                            <v-card
                            height="100%"
                            width="100%"
                            color="#F5F5F5"
                            class="d-flex align-end pr-2"
                            flat>
                                <v-spacer></v-spacer>
                                    <v-btn
                                    v-if="electricDevice == null"
                                    id="change"
                                    class="mb-2"
                                    color="white"
                                    @click="addNewElectricDevice"
                                    >
                                        Add
                                    </v-btn>
                                    <v-btn
                                    v-if="electricDevice != null"
                                    id="change"
                                    class="mb-2"
                                    color="white"
                                    @click="changeUsername"
                                    >
                                        Remove
                                    </v-btn>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>












                <v-card
                elevation="2"
                outlined
                color="gray"
                class="d-flex justify-space-around mb-6"
                height="33%"
                width="100%"
                id="settingsChoice"
                >
                    <v-row
                    class="d-flex justify-space-between"
                    height="100%">
                        <v-col
                        sm="3"
                        align="start"
                        class="d-flex align-center justify-center">
                            <v-card
                            height="50%"
                            width="100%"
                            align="start"
                            flat
                            color="yellow"
                            class="d-flex rounded-xl align-center justify-center elevation-4">
                                <div
                                id="title"
                                class="">
                                    Electric Rate
                                </div>
                            </v-card>
                        </v-col>

                        <v-col
                        cols="5"
                        sm="6"
                        align="center"
                        id="displayed">
                            <v-card
                            height="100%"
                            width="100%"
                            align="center"
                            color="#F5F5F5"
                            flat
                            class="d-flex align-center justify-center">
                                <div
                                id="loadedData">
                                    ${{electricRate}} per kWh
                                </div>
                            </v-card>
                        </v-col>

                        <v-col
                        sm="3"
                        align="end"
                        id="change">
                            <v-card
                            height="100%"
                            width="100%"
                            class="d-flex align-end pr-2"
                            color="#F5F5F5"
                            flat>
                                <v-spacer></v-spacer>
                                    <v-btn
                                    id="change"
                                    class="mb-2"
                                    color="white"
                                    @click="dialog=true"
                                    >
                                        Change
                                    </v-btn>
                            </v-card>
                        </v-col>
                    </v-row>
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
import MockService from '@/services/MockService'
import GetService from '@/services/GetService'
import UpdateDetailsService from '@/services/UpdateDetailsService'

export default {
  data () {
    return {
      waterDevice: null,
      electricDevice: null,
      electricRate: 2,
      waterRate: null,
      error: null,
      dialog: false,
      newElectricRate: null,
    }
  },
  async mounted() {
        try{
            const response = await GetService.getWaterDevice({
                username: this.$store.state.user.username,
                password: this.$store.state.user.username
            })
            console.log(response.data.waterDevice.waterDeviceID)
            this.waterDevice = response.data.waterDevice.waterDeviceID
        }
        catch(error){
            this.error = error.response.data.message
            console.log("mount failed - water device")
        }
        try{
            const response = await GetService.getElectricDevice({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            console.log(response.data.electricDevice.electricDeviceID)
            this.electricDevice = response.data.electricDevice.electricDeviceID
        }
        catch(error){
            this.error = error.response.data.message
            console.log("mount failed - elec device")
        }
        try{
            const response = await GetService.getElectricRate({
                username: this.$store.state.user.username
            })
            this.electricRate = response.data.electricRate
        }
        catch(error){
            this.error = error.response.data.message
            console.log("mount failed - elecRate")
        }
  },
  methods: {
    changeWaterRate () {
      this.$router.push({
          name: 'newUsername'
        })
    },
    changeElectricRate () {
      this.$router.push({
          name: 'newEmail'
        })
    },
    changePassword () {
      this.$router.push({
          name: 'newPassword'
        })
    },
    async addNewElectricDevice(){
        MockService.initElectricDeviceMockData({
          username: this.$store.state.user.username
        })
        const response = await GetService.getElectricDevice({
            username: this.$store.state.user.username,
            password: this.$store.state.user.username
        })
        console.log(response.data.electricDevice.electricDeviceID)
        this.electricDevice = response.data.electricDevice.electricDeviceID
    },
    async addNewWaterDevice(){
        MockService.initWaterDeviceMockData({
          username: this.$store.state.user.username
        })
        const response = await GetService.getWaterDevice({
            username: this.$store.state.user.username,
            password: this.$store.state.user.username
        })
        console.log(response.data.waterDevice.waterDeviceID)
        this.waterDevice = response.data.waterDevice.waterDeviceID
    },
    async changeElectricRate(){
        const response = await UpdateDetailsService.changeElectricRate({
            username: this.$store.state.user.username,
            electricRate: this.newElectricRate
        })
        this.electricRate = response.data.electricRate
        this.dialog = false
    },
    closeDialog(){
        this.dialog = false
        this.newElectricRate = null
    },
  }
}
</script>

<style scoped>
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
  
}
#title {
    font-size: 1.5em;
    font-weight: bold;
}
#change {
    font-size: 0.9m;
    color: green;
}
#data {
    font-size: 2em
}

#loadedData {
    font-size: 1.5em;
}
.v-text-field >>> label {
    font-size: 1.5em;
}

.v-toolbar__title {
  font-size: 1.8em !important;
  color: white;
}
</style>
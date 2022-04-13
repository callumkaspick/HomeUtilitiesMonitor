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
                    Account Settings
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
                class="d-flex justify-space-around mb-6"
                height="80%"
                width="100%"
                id="settingsChoice"
                >
                    <v-row
                    class="d-flex justify-space-between"
                    height="100%">
                        <v-col
                        sm="3"
                        align="start">
                            <v-card
                            height="100%"
                            width="100%"
                            align="start"
                            flat
                            class="d-flex pl-2">
                                <div
                                id="title"
                                class="mt-2 ml-2">
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
                            class="d-flex align-center justify-center">
                                <div
                                id="data">
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
                            flat>
                                <v-spacer></v-spacer>
                                    <v-btn
                                    v-if="waterDevice == null"
                                    id="change"
                                    class="mb-2"
                                    @click="changeUsername"
                                    >
                                        Add
                                    </v-btn>
                                    <v-btn
                                    v-if="waterDevice != null"
                                    id="change"
                                    class="mb-2"
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
                height="80%"
                width="100%"
                id="settingsChoice"
                >
                    <v-row
                    class="d-flex justify-space-between"
                    height="100%">
                        <v-col
                        sm="3"
                        align="start">
                            <v-card
                            height="100%"
                            width="100%"
                            align="start"
                            flat
                            class="d-flex pl-2">
                                <div
                                id="title"
                                class="mt-2 ml-2">
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
                            class="d-flex align-center justify-center">
                                <div
                                id="data">
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
                            class="d-flex align-end pr-2"
                            flat>
                                <v-spacer></v-spacer>
                                    <v-btn
                                    id="change"
                                    class="mb-2"
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
                height="80%"
                width="100%"
                id="settingsChoice"
                >
                    <v-row
                    class="d-flex justify-space-between"
                    height="100%">
                        <v-col
                        sm="3"
                        align="start">
                            <v-card
                            height="100%"
                            width="100%"
                            align="start"
                            flat
                            class="d-flex pl-2">
                                <div
                                id="title"
                                class="mt-2 ml-2">
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
                            class="d-flex align-center justify-center">
                                <div
                                id="data">
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
                            class="d-flex align-end pr-2"
                            flat>
                                <v-spacer></v-spacer>
                                    <v-btn
                                    v-if="electricDevice == null"
                                    id="change"
                                    class="mb-2"
                                    @click="addNewElectricDevice"
                                    >
                                        Add
                                    </v-btn>
                                    <v-btn
                                    v-if="electricDevice != null"
                                    id="change"
                                    class="mb-2"
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
                height="80%"
                width="100%"
                id="settingsChoice"
                >
                    <v-row
                    class="d-flex justify-space-between"
                    height="100%">
                        <v-col
                        sm="3"
                        align="start">
                            <v-card
                            height="100%"
                            width="100%"
                            align="start"
                            flat
                            class="d-flex pl-2">
                                <div
                                id="title"
                                class="mt-2 ml-2">
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
                            flat
                            class="d-flex align-center justify-center">
                                <div
                                id="data">
                                    {{electricRate}}
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
                            flat>
                                <v-spacer></v-spacer>
                                    <v-btn
                                    id="change"
                                    class="mb-2"
                                    @click="changeElectricRate"
                                    >
                                        Change
                                    </v-btn>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>



            </v-col>
            
        </v-row>
        
    </div>
</template>

<script>
import MockService from '@/services/MockService'
import GetService from '@/services/GetService'
export default {
  data () {
    return {
      waterDevice: null,
      electricDevice: null,
      waterRate: null,
      error: null
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
</style>
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
                                    Username
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
                                    {{username}}
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
                                    Email
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
                                    {{email}}
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
                                    Password
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
                                    ●●●●●●●●●●
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

export default {
  data () {
    return {
      username: 'username',
      email: 'email',
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
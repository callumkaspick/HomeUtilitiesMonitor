<template>
    <v-main>
      <v-container fluid fill-height>
            <v-layout justify-center>
               <v-flex xs12 sm12 md12 lg8>
                  <v-card class="elevation-12"
                  height="275%"
                  width="100%">
                     <v-toolbar dark color="electricPrimary">
                        <v-toolbar-title class="settings">Circuits</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text
                     height="100%"
                     width="100%">
                        <v-row
                        class="d-flex align-stretch justify-center mt-4 mb-4">
                          <v-col
                          cols="12"
                          lg="8"
                          sm="12"
                          md="8"
                          height="100%"
                          width="100%"
                          class="">
                              <v-card
                                elevation="2"
                                outlined
                                color="#F5F5F5"
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
                        align="start">
                            <v-card
                            height="100%"
                            width="100%"
                            align="start"
                            flat
                            color="#F5F5F5"
                            class="d-flex pl-2">
                                <div
                                id="title"
                                class="mt-2 ml-2">
                                    Circuit 1 Name:
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
                                    {{items[0]}}
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
                                    @click="change(1)"
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
                color="#F5F5F5"
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
                        align="start">
                            <v-card
                            height="100%"
                            width="100%"
                            align="start"
                            flat
                            color="#F5F5F5"
                            class="d-flex pl-2">
                                <div
                                id="title"
                                class="mt-2 ml-2">
                                    Circuit 2 Name:
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
                                    {{items[1]}}
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
                                    @click="change(2)"
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
                color="#F5F5F5"
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
                        align="start">
                            <v-card
                            height="100%"
                            width="100%"
                            align="start"
                            flat
                            color="#F5F5F5"
                            class="d-flex pl-2">
                                <div
                                id="title"
                                class="mt-2 ml-2">
                                    Circuit 3 Name:
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
                                    {{items[2]}}
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
                                    
                                    @click="change(3)"
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
                color="#F5F5F5"
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
                        align="start">
                            <v-card
                            height="100%"
                            width="100%"
                            align="start"
                            flat
                            color="#F5F5F5"
                            class="d-flex pl-2">
                                <div
                                id="title"
                                class="mt-2 ml-2">
                                    Circuit 4 Name:
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
                                    {{items[3]}}
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
                                    
                                    @click="change(4)"
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
                color="#F5F5F5"
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
                        align="start">
                            <v-card
                            height="100%"
                            width="100%"
                            align="start"
                            flat
                            color="#F5F5F5"
                            class="d-flex pl-2">
                                <div
                                id="title"
                                class="mt-2 ml-2">
                                    Circuit 5 Name:
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
                                    {{items[4]}}
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
                                    
                                    @click="change(5)"
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
                color="#F5F5F5"
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
                        align="start">
                            <v-card
                            height="100%"
                            width="100%"
                            align="start"
                            flat
                            color="#F5F5F5"
                            class="d-flex pl-2">
                                <div
                                id="title"
                                class="mt-2 ml-2">
                                    Circuit 6 Name:
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
                                    {{items[5]}}
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
                                    
                                    @click="change(6)"
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
                color="#F5F5F5"
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
                        align="start">
                            <v-card
                            height="100%"
                            width="100%"
                            align="start"
                            flat
                            color="#F5F5F5"
                            class="d-flex pl-2">
                                <div
                                id="title"
                                class="mt-2 ml-2">
                                    Circuit 7 Name:
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
                                    {{items[6]}}
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
                                    
                                    @click="change(7)"
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
                color="#F5F5F5"
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
                        align="start">
                            <v-card
                            height="100%"
                            width="100%"
                            align="start"
                            flat
                            color="#F5F5F5"
                            class="d-flex pl-2">
                                <div
                                id="title"
                                class="mt-2 ml-2">
                                    Circuit 8 Name:
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
                                    {{items[7]}}
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
                                    
                                    @click="change(8)"
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

export default {
  computed: {
    username() { return this.$store.state.user.username },
    email() { return this.$store.state.user.email }
  },
  data () {
    return {
      error: null,
      items: ["",""]
    }
  },
  methods: {
    changeUsername () {
      this.$router.push({
          name: 'newUsername'
        })
    },
    changeEmail () {
      this.$router.push({
          name: 'newEmail'
        })
    },
    changePassword () {
      this.$router.push({
          name: 'newPassword'
        })
    }
  }
}
</script>

<style>
#data {
    font-size: 0.9em;
}
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
    font-size: 0.9em;
    color: green;
}
#loadedData {
    font-size: 1.5em;
}

</style>
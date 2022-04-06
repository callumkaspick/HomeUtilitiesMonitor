<template>
    <div>
        <h1 class="ma-4 text-center text-h2">Water Monitor Graphs</h1>
        
        <v-divider></v-divider>
        
        <v-container class="waterPrimary my-4" grid-list-md fluid>
            
            <v-row no-gutters>
                
                <v-col order="1">
                    <v-card dark class="waterPrimary pa-12 text-center" outlined tile>
                        <!-- Button where user will be able to change units -->
                        <v-btn class="appSecondary rounded-pill pa-8">
                            <span dark class="text-center pa-2 text-h3 font-weight-bold">Unit</span>
                        </v-btn>
                    </v-card>
                </v-col>
                
                <v-col order="2">
                    <v-card class="waterPrimary pa-12 text-center" outlined tile>
                        <!-- Display usage for current month depending on unit selected through button-->
                        <span class="text-center pa-2 text-h4 font-weight-bold">
                            Monthly Usage: 
                            <br> 
                            x gallons
                        </span>
                    </v-card>
                </v-col>
                
                <v-col order="3">
                    <v-card class="waterPrimary pa-12 text-center" outlined tile>
                        <span class="text-center pa-2 text-h4 font-weight-bold">
                            Time Stamp
                            <br>
                            Consumption:
                            <br>
                            x gallons per unit of time
                        </span>
                    </v-card>
                </v-col>
           
            </v-row>
        </v-container>

        <v-divider></v-divider>
        
        <v-row>
            <v-col
            cols="12">
                <v-sparkline class="ma-4"
                    v-if="enabled"
                    :gradient="selectedGradient"
                    line-width="2"
                    padding="0"
                    smooth="10"
                    :value="value"
                    type="trend"
                    fill="true"
                    auto-draw
                ></v-sparkline>
                
                <v-bottom-navigation grow flat fluid align class="appPrimary mt-4 mb-10">
                    <v-btn @click="updateMinute" class="rounded-pill">
                        <span class="text-center pa-2 text-h5 font-weight-bold">Minute</span>
                    </v-btn>
                    <v-btn @click="updateHour" class="rounded-pill">
                        <span class="text-center pa-2 text-h5 font-weight-bold">Hour</span>
                    </v-btn>
                    <v-btn @click="updateDay" class="rounded-pill">
                        <span class="text-center pa-2 text-h5 font-weight-bold">Day</span>
                    </v-btn>
                    <v-btn @click="updateWeek" class="rounded-pill">
                        <span class="text-center pa-2 text-h5 font-weight-bold">Week</span>
                    </v-btn>
                    <v-btn @click="updateMonth" class="rounded-pill">
                        <span class="text-center pa-2 text-h5 font-weight-bold">Month</span>
                    </v-btn>
                    <v-btn @click="updateYear" class="rounded-pill">
                        <span class="text-center pa-2 text-h5 font-weight-bold">Year</span>
                    </v-btn>
                    <v-btn @click="updateAllTime" class="rounded-pill">
                        <span class="text-center pa-2 text-h5 font-weight-bold">Alltime</span>
                    </v-btn>
                </v-bottom-navigation>
            </v-col> 
        </v-row>
        
        <v-container>
            <v-bottom-navigation fixed grow flat fluid align class="waterPrimary ma-2">
                <v-btn class="rounded-pill waterSecondary mx-10" @click="$router.push('/')">
                    <span class="text-center pa-2 text-h5 font-weight-bold">Home</span>
                </v-btn>
                <v-btn class="rounded-pill waterSecondary mx-10" @click="$router.push('/watergraph')">
                    <span class="text-center pa-2 text-h5 font-weight-bold">Graph</span>
                </v-btn>
                <v-btn class="rounded-pill waterSecondary mx-10" @click="$router.push('/settings')">
                    <span class="text-center pa-2 text-h5 font-weight-bold">Settings</span>
                </v-btn>
                <v-btn class="rounded-pill waterSecondary mx-10" @click="$router.push('/notifications')">
                    <span class="text-center pa-2 text-h5 font-weight-bold">Notifications</span>
                </v-btn>
            </v-bottom-navigation>
        </v-container>
        
    </div>
</template>

<script>
import GetUsages from '@/services/GetUsages'
import GetService from '@/services/GetService'

export default {
    data () {
        return {
            selectedGradient: ['#0010A5', '#00B2FF', '#00FFFF'],
            granularity: 'day',
            waterRate: null,
            error: null,
            lastMinuteInSeconds: null,
            usageInDollars: null,
            rate: 2,
            value: null,
            enabled: true,
        }
    },
    async mounted() {
        try{
            const response = await GetUsages.getLastMinuteInSeconds({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            let responseArray = response.data.mockWaterSeconds
            this.value = responseArray
            
        }
        catch(error){
            this.error = error.response.data.message
            console.log("mount fail")
        }
        try{
        }
        catch{
        }
  },
    created() {
        this.value = [1,2,3]
    },
    computed:{
        
    },
    methods: {
        async updateValue () {
            return [1,2,3]
        },
        async updateMinute () {
            const response = await GetUsages.getLastMinuteInSeconds({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            let responseArray = response.data.mockWaterSeconds
            this.value = responseArray
        },
        async updateHour () {
            const response = await GetUsages.getLastHourInMinutes({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            let responseArray = response.data.mockWaterMinutes
            this.value = responseArray
        },
        changePassword () {
        this.$router.push({
            name: 'newPassword'
            })
        }
    }
}
</script>

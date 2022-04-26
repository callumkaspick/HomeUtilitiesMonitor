<template>
    <div>
        <h1 class="mt-8 mb-4 text-center text-h1 ">Electric Summary</h1>

        <v-container class="" grid-list-md fluid>
            <v-layout justify-center>
            <v-flex xs12 sm12 md8 lg6>
            <v-card text class="pa-2">
                <v-layout row wrap justify-center>
                    <v-flex xs12>
                        <div id="label" class="text-center pa-2 text-h2">Usage in the last {{granularity}}</div>
                    </v-flex>
                    <v-flex xs6>
                        <div class="electricPrimary text-center pa-1 text-h3">Dollars</div>
                        <v-divider></v-divider>
                        <div class="electricSecondary pa-1 text-center text-h4">${{usageInDollars}}</div>
                    </v-flex>
                    <v-flex xs6>
                        <div class="electricPrimary text-center pa-1 text-h3" >kWh</div>
                        <v-divider></v-divider>
                        <div class="electricSecondary pa-1 text-center text-h4">{{totalUsage}} kWh</div>
                    </v-flex>
                </v-layout>
            </v-card>
            </v-flex>
            </v-layout>
        </v-container>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

        <v-row
        class="d-flex justify-center align-center mt-6">
            <v-col
            cols="2"
            lg="1">
                <h2
                class="d-flex text-center">See circuit(s):</h2>
            </v-col>
            <v-col
            cols="4"
            lg="2">
                <v-select
                :items="items"
                label="Circuit choice"
                outlined
                v-model="circuit"
                class="d-flex pt-2"
                @change="updateElecView"
                >
                </v-select>
            </v-col>
            
        </v-row>
        
        
        <electric-graph ref="graph" />

        <v-container>
            <v-bottom-navigation grow text fluid align class="electricSecondary ma-2">
                <v-btn 
                :elevation="minuteElevation"
                @click="updateMinute" 
                class="rounded-pill">
                    <span class="text-center pa-2 text-h5 font-weight-bold">Minute</span>
                </v-btn>
                <v-btn @click="updateHour" class="rounded-pill" :elevation="hourElevation">
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
                    <span class="text-center pa-2 text-h5 font-weight-bold">All-time</span>
                </v-btn>
            </v-bottom-navigation>

            

            <v-bottom-navigation fixed grow text fluid align class="electricPrimary ma-2">
                <v-btn class="rounded-pill electricSecondary mx-10" @click="$router.push('/')">
                    <span class="text-center pa-2 text-h5 font-weight-bold">Home</span>
                </v-btn>
                <v-btn class="rounded-pill electricSecondary mx-10" @click="$router.push('/electricCircuits')">
                    <span class="text-center pa-2 text-h5 font-weight-bold">Circuits</span>
                </v-btn>
                <v-btn class="rounded-pill electricSecondary mx-10" @click="$router.push('/settings')">
                    <span class="text-center pa-2 text-h5 font-weight-bold">Settings</span>
                </v-btn>
                <v-btn class="rounded-pill electricSecondary mx-10" @click="$router.push('/notifications')">
                    <span class="text-center pa-2 text-h5 font-weight-bold">Notifications</span>
                </v-btn>
            </v-bottom-navigation>
        </v-container>
        
    </div>
</template>

<script>
import GetUsages from '@/services/GetUsages'
import GetService from '@/services/GetService'
import ElectricGraph from '../components/ElectricGraphView.vue'

export default {
    components: {
        ElectricGraph
    },
    data () {
        return {
            granularity: 'minute',
            electricRate: null,
            error: null,
            lastMinuteInSeconds: null,
            totalUsage: null,
            usageInDollars: null,
            rate: 2,
            selectedGradient: ['red', 'orange', 'yellow'],
            value: null,
            enabled: true,
            items: ['All',1,2,3,4,5,6,7,8],
            circuit: 'All',
            minuteElevation: 0,
            hourElevation: 0,
        }
    },
    created() {
        this.value = [1,2,3]
    },
    async mounted() {
        try{
            //set total usage
            const response = await GetUsages.getLastMinuteInSeconds({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password,
                circuit: 'All'
            })
            let total = 0
            let responseArray = response.data.mockElectricSeconds
            this.value = responseArray
            responseArray.forEach(element => total += element[1])
            this.totalUsage = total
            
        }
        catch(error){
            this.error = error.response.data.message
            console.log("mount fail")
        }
        try{
            this.usageInDollars = this.totalUsage * this.rate
        }
        catch{
            console.log("usageInDollars failed")
        }
        try{
            const response = await GetUsages.getCircuitDropdownOptions({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            var dropdownArr = response.data.circuitData
            dropdownArr.unshift('All')
            this.items = dropdownArr
        }
        catch{
            console.log("updating circuit dropdown failed")
        }
  },
    computed:{
        // electricRate(){
        //     const respose = GetService.getElectricRate({
        //         username: this.$store.state.user.username,
        //     })
        //     return response.data.electricRate
        // },
        // totalUsage(){
            
        //     const response = GetUsages.getLastMinuteInSeconds({
        //         username: this.$store.state.user.username,
        //         password: this.$store.state.user.password
        //     })
        //     // // this.lastMinuteInSeconds = response.data.lastMinuteInSeconds
        //     let average = 0
        //     //let secondsArray = response.data.mockElectricSeconds
        //     console.log(response.data.mockElectricSeconds[1])
        //     console.log('data is in view')
        //     // this.lastMinuteInSeconds.forEach(element => {
        //     //     average += element.data 
        //     // });
        //     // return average
        // },
        lastHourInMinutes(){
            return ['hello', 'goodbye']
        },
        lastDayInHours(){
            return ['hello', 'goodbye']
        },
        lastWeekInDays(){
            return ['hello', 'goodbye']
        },
        lastMonthInWeeks(){
            return ['hello', 'goodbye']
        },
        lastYearInMonths(){
            return ['hello', 'goodbye']
        },
        allTimeInYears(){
            return ['hello', 'goodbye']
        },

    },
    methods: {
        async updateMinute () {
            this.granularity = 'minute'
            const response = await GetUsages.getLastMinuteInSeconds({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password,
                circuit: this.circuit
            })
            let total = 0
            let responseArray = response.data.mockElectricSeconds
            this.value = responseArray
            responseArray.forEach(element => total += element[1])
            this.totalUsage = total.toFixed(2)

            this.usageInDollars = (this.totalUsage * this.rate).toFixed(2)
            this.$refs.graph.updateMinute(this.circuit)
            this.minuteElevation = 12
            this.hourElevation = 0
        },
        async updateHour () {
            this.granularity = 'hour'
            const response = await GetUsages.getLastHourInMinutes({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password,
                circuit: this.circuit
            })
            let total = 0
            let responseArray = response.data.mockElectricMinutes
            this.value = responseArray
            responseArray.forEach(element => total += element[1])
            this.totalUsage = total.toFixed(2)

            this.usageInDollars = (this.totalUsage * this.rate).toFixed(2)
            this.$refs.graph.updateHour(this.circuit)
            this.hourElevation = 12
            this.minuteElevation = 0
        },
        updateDay () {
            this.granularity = 'day'
        },
        updateWeek () {
            this.granularity = 'week'
        },
        updateMonth () {
            this.granularity = 'month'
        },
        updateYear () {
            this.granularity = 'year'
        },
        updateAllTime () {
            this.granularity = 'all-time'
        },
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
        updateElecView () {
            switch (this.granularity){
                case 'minute':
                    this.updateMinute(this.circuit)
                    break;
                case 'hour':
                    this.updateHour(this.circuit)
                    break;
                default:
                    console.log('error in refresh')
            }
        },
    }
}
</script>

<style scoped>
#label {
    background-color: lightgray;
    color: black;
}
#title {
    color: black;
}


</style>
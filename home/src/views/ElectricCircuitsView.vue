<template>
    <div>
        <h1 class="ma-4 text-center text-h1">Circuit Summary</h1>

        <v-container class="my-4" grid-list-md fluid>
            <v-card text class="pa-3">
                <v-layout row wrap>
                    <v-flex xs12>
                        <div id="label" class="text-center pa-4 text-h2">Usage in the last {{granularity}}</div>
                    </v-flex>
                    <v-flex xs12>
                        <div class="electricPrimary text-center pa-4 text-h3">Dollars</div>
                        <v-divider></v-divider>
                        <div class="electricSecondary pa-4 text-h4">${{usageInDollars}}</div>
                    </v-flex>
                    <v-flex xs12>
                        <div class="electricPrimary text-center pa-4 text-h3" >kWA</div>
                        <v-divider></v-divider>
                        <div class="electricSecondary pa-4 text-h4">{{totalUsage}} kWA</div>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>

        <electric-graph ref="graph" />

        <v-container>
            <v-bottom-navigation grow text fluid align class="electricSecondary ma-2">
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
                password: this.$store.state.user.password
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
                password: this.$store.state.user.password
            })
            let total = 0
            let responseArray = response.data.mockElectricSeconds
            this.value = responseArray
            responseArray.forEach(element => total += element[1])
            this.totalUsage = total

            this.usageInDollars = this.totalUsage * this.rate
            this.$refs.graph.updateMinute()
        },
        async updateHour () {
            this.granularity = 'hour'
            const response = await GetUsages.getLastHourInMinutes({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            let total = 0
            let responseArray = response.data.mockElectricMinutes
            this.value = responseArray
            responseArray.forEach(element => total += element[1])
            this.totalUsage = total

            this.usageInDollars = this.totalUsage * this.rate
            this.$refs.graph.updateHour()
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
        }
    }
}
</script>

<style scoped>
#label {
    background-color: lightgray;
    color: black;
    font-weight: bold;
}
#title {
    color: black;
    font-weight: bold;
}


</style>
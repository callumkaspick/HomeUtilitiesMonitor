<template>
    <div>
        <h1 class="ma-4 text-center text-h2">Water Monitor</h1>
        <v-divider></v-divider>
        <v-container class="my-4" grid-list-md fluid>
            <v-card flat class="pa-3">
                <v-layout row wrap>
                    <v-flex xs12>
                        <div class="waterPrimary text-center pa-4 text-h3">Usage in dollars</div>
                        <v-divider></v-divider>
                        <div class="waterSecondary text-center pa-4 text-h4">${{usageInDollars}}</div>
                    </v-flex>
                    <v-flex xs12>
                        <div class="waterPrimary text-center pa-4 text-h3" >Usage in gallons</div>
                        <v-divider></v-divider>
                        <div class="waterSecondary text-center pa-4 text-h4">{{totalUsage}} gallons</div>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>

        <v-container>
            <v-bottom-navigation grow flat fluid align class="appPrimary ma-2">
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
            granularity: 'day',
            waterRate: null,
            error: null,
            lastMinuteInSeconds: null,
            totalUsage: null,
            usageInDollars: null,
            rate: 2,
            selectedGradient: ['waterPrimary', 'waterSecondary', 'appPrimary'],
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
            let responseArray = response.data.mockWaterSeconds
            this.value = responseArray
            responseArray.forEach(element => total += element)
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
            let responseArray = response.data.mockWaterSeconds
            this.value = responseArray
            responseArray.forEach(element => total += element)
            this.totalUsage = total

            this.usageInDollars = this.totalUsage * this.rate
        },
        async updateHour () {
            this.granularity = 'hour'
            const response = await GetUsages.getLastHourInMinutes({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            let total = 0
            let responseArray = response.data.mockWaterMinutes
            this.value = responseArray
            responseArray.forEach(element => total += element)
            this.totalUsage = total

            this.usageInDollars = this.totalUsage * this.rate
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
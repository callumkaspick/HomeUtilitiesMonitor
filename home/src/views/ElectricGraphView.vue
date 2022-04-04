<template>
    <div>
        <v-row>
            <v-col
            cols="12">
                <v-sparkline
                    :gradient="selectedGradient"
                    line-width="2"
                    padding="0"
                    smooth="10"
                    :value="value"
                    type="bar"
                    fill="true"
                    auto-draw
                ></v-sparkline>
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
            </v-col>
            
        </v-row>
        
    </div>
</template>

<script>
import GetUsages from '@/services/GetUsages'
import GetService from '@/services/GetService'

export default {
    data () {
        return {
            selectedGradient: ['red', 'orange', 'yellow'],
            granularity: 'day',
            electricRate: null,
            error: null,
            lastMinuteInSeconds: null,
            usageInDollars: null,
            rate: 2,
            value: null,
        }
    },
    async mounted() {
        try{
            //set total usage
            const response = await GetUsages.getLastMinuteInSeconds({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            let responseArray = response.data.mockElectricSeconds
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
            this.granularity = 'minute'
            const response = await GetUsages.getLastMinuteInSeconds({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            let total = 0
            let responseArray = response.data.mockElectricSeconds
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
            let responseArray = response.data.mockElectricMinutes
            responseArray.forEach(element => total += element)
            this.totalUsage = total

            this.usageInDollars = this.totalUsage * this.rate
        },
        changePassword () {
        this.$router.push({
            name: 'newPassword'
            })
        }
    }
}
</script>

<template>
    <div>
        <v-row>
            <v-col
            cols="12">
                <GChart
                    type="LineChart"
                    :data="chartData"
                    :options="chartOptions"
                    :colors="colors"
                />
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
import { GChart } from 'vue-google-charts'

export default {
    components: {
        GChart
    },
    data () {
        return {
            print: null,
            selectedGradient: ['red', 'orange', 'yellow'],
            chartData: null,
            chartOptions: {
                hAxis: {
                    title: 'Seconds'
                },
                vAxis: {
                    title: 'kWA'
                },
                title: 'Usage for last 60 seconds',
                chart: {
                    title: 'Electric Usage',
                    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                },
                legend: { position: "right" },
                curveType: 'function',
                colors: ['red'],
            },
            granularity: 'day',
            electricRate: null,
            error: null,
            lastMinuteInSeconds: null,
            usageInDollars: null,
            rate: 2,
            value: null,
            enabled: true,
            colors:['yellow','darkyellow'],
        }
    },
    async mounted() {
        try{
            const response = await GetUsages.getLastMinuteInSeconds({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            let responseArray = response.data.mockElectricSeconds
            this.value = responseArray
            var startArrEntry = ['Seconds', 'kWA Usage']
            var compArr = [startArrEntry].concat(this.value)
            this.chartData = compArr
            
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
            let responseArray = response.data.mockElectricSeconds
            this.value = responseArray
        },
        async updateHour () {
            const response = await GetUsages.getLastHourInMinutes({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            let responseArray = response.data.mockElectricMinutes
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

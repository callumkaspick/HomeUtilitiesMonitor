<template>
    <div>
        <v-container class="electricPrimary my-4" grid-list-md fluid>
            <v-row no-gutters>

                <v-col order="1">
                    <v-card class="electricPrimary pa-12 text-center" outlined tile>
                        <!-- Button where user will be able to change units -->
                        <v-btn class="electricSecondary rounded-pill pa-8">
                            <span dark class="text-center pa-2 text-h3 font-weight-bold">Unit</span>
                        </v-btn>
                    </v-card>
                </v-col>

                <v-col order="2">
                    <v-card class="electricPrimary pa-12 text-center" outlined tile>
                        <!-- Display usage for current month depending on unit selected through button-->
                        <span class="text-center pa-2 text-h4 font-weight-bold">
                            Monthly Usage: 
                            <br> 
                            x kWh
                        </span>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-row>
            <v-col
            cols="12">
                <!--<GChart
                    type="LineChart"
                    :data="chartData"
                    :options="chartOptions"
                    :colors="colors"
                />-->
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

        <v-container>
            <v-bottom-navigation fixed grow flat fluid align class="electricPrimary ma-2">
                <v-btn class="rounded-pill electricSecondary mx-10" @click="$router.push('/')">
                    <span class="text-center pa-2 text-h5 font-weight-bold">Home</span>
                </v-btn>
                <v-btn class="rounded-pill electricSecondary mx-10" @click="$router.push('/watergraph')">
                    <span class="text-center pa-2 text-h5 font-weight-bold">Graph</span>
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
            var startArrEntry = ['Minutes', 'kWA Usage']
            var compArr = [startArrEntry].concat(this.value)
            this.chartData = compArr
            this.chartOptions.hAxis.title = 'Seconds'
            this.chartOptions.title = 'Usage for the last 60 seconds'
        },
        async updateHour () {
            const response = await GetUsages.getLastHourInMinutes({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            let responseArray = response.data.mockElectricMinutes
            this.value = responseArray
            var startArrEntry = ['Minutes', 'kWA Usage']
            var compArr = [startArrEntry].concat(this.value)
            this.chartData = compArr
            this.chartOptions.hAxis.title = 'Minutes'
            this.chartOptions.title = 'Usage for the last 60 minutes'
        },
        changePassword () {
        this.$router.push({
            name: 'newPassword'
            })
        }
    }
}
</script>

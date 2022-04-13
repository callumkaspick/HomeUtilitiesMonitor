<template>
    <div>
        <v-row>
            <v-col
            cols="12">
                <GChart
                    type="ColumnChart"
                    :data="chartData"
                    :options="chartOptions"
                />
                <v-sparkline
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
            selectedGradient: ['red', 'orange', 'yellow'],
            chartData: [
                ['Year', 'Sales'],
                ['2014', 1000],
                ['2015', 200]
            ],
            chartOptions: {
                chart: {
                    title: 'Company Performance',
                    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                }
            },
            granularity: 'day',
            electricRate: null,
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
            let responseArray = response.data.mockElectricSeconds
            this.value = responseArray
            this.chartData[1] = responseArray
            
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

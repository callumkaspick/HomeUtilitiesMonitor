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
                    title: 'Gallons'
                },
                title: 'Usage for last 60 seconds',
                chart: {
                    title: 'Water Usage',
                    subtitle: 'Usage',
                },
                legend: { position: "right" },
                curveType: 'function',
                colors: ['red'],
                
            },
            granularity: 'day',
            waterRate: null,
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
            const response = await GetUsages.getLastMinuteInSecondsWater({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            let responseArray = response.data.mockWaterSeconds   //mockWaterSeconds
            this.value = responseArray
            var startArrEntry = ['Seconds', 'Gallons Usage']
            var compArr = [startArrEntry].concat(this.value)
            this.chartData = compArr
            
        }
        catch(error){
            this.error = error.response.data.message
            console.log("mount fail")
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
            const response = await GetUsages.getLastMinuteInSecondsWater({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            let responseArray = response.data.mockWaterSeconds   //mockWaterSeconds
            this.value = responseArray
            var startArrEntry = ['Minutes', 'Gallons Usage']
            var compArr = [startArrEntry].concat(this.value)
            this.chartData = compArr
            this.chartOptions.hAxis.title = 'Seconds'
            this.chartOptions.title = 'Usage for the last 60 seconds'
        },
        async updateHour () {
            const response = await GetUsages.getLastHourInMinutesWater({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password
            })
            let responseArray = response.data.mockWaterMinutes   //mockWaterMinutes
            this.value = responseArray
            var startArrEntry = ['Minutes', 'Gallons Usage']
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
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
                    title: 'kWA'
                },
                title: 'Usage for last 60 seconds',
                chart: {
                    title: 'Electric Usage',
                    subtitle: 'Usage',
                },
                legend: { position: "right" },
                
                colors: ['red'],
                height: 300,
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
                password: this.$store.state.user.password,
                circuit: 'All'
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
        async updateMinute (circuit) {
            const response = await GetUsages.getLastMinuteInSeconds({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password,
                circuit: circuit
            })
            let responseArray = response.data.mockElectricSeconds
            this.value = responseArray
            var startArrEntry = ['Minutes', 'kWA Usage']
            var compArr = [startArrEntry].concat(this.value)
            this.chartData = compArr
            this.chartOptions.hAxis.title = 'Seconds'
            this.chartOptions.title = 'Usage for the last 60 seconds'
        },
        async updateHour (circuit) {
            const response = await GetUsages.getLastHourInMinutes({
                username: this.$store.state.user.username,
                password: this.$store.state.user.password,
                circuit: circuit
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

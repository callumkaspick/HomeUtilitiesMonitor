<template>
    <div>
        <h1 class="ma-4 text-center text-h1">Electric Monitor</h1>

        <v-container class="my-4" grid-list-md fluid>
            <v-card flat class="pa-3">
                <v-layout row wrap>
                    <v-flex xs12>
                        <div class="electricPrimary text-center pa-4 text-h3">Usage in dollars</div>
                        <v-divider></v-divider>
                        <div class="electricSecondary pa-4 text-h4">$30</div>
                    </v-flex>
                    <v-flex xs12>
                        <div class="electricPrimary text-center pa-4 text-h3" >Usage in gallons</div>
                        <v-divider></v-divider>
                        <div class="electricSecondary pa-4 text-h4">1000 gallons</div>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>

        <v-container>
            <v-bottom-navigation grow flat fluid align class="electricSecondary ma-2">
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
export default {
  data () {
    return {
        granularity: 'day',
        waterDevice: null,
        electricDevice: null,
        waterRate: null,
        error: null
    }
  },
  async mounted() {
        try{
            const response = await GetService.getWaterDevice({
                username: this.$store.state.user.username,
                password: this.$store.state.user.username
            })
            console.log(response.data.waterDevice.waterDeviceID)
            this.waterDevice = response.data.waterDevice.waterDeviceID
            console.log("mount success")
        }
        catch(error){
            this.error = error.response.data.message
            console.log("mount fail")
        }
  },
  methods: {
    updateMinute () {
        this.granularity = 'minute'
    },
    updateMinute () {
        this.granularity = 'hour'
    },
    updateMinute () {
        this.granularity = 'day'
    },
    updateMinute () {
        this.granularity = 'week'
    },
    updateMinute () {
        this.granularity = 'month'
    },
    updateMinute () {
        this.granularity = 'year'
    },
    updateMinute () {
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

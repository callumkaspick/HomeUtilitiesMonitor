<template>
    <div>
        <h1 class="ma-4">About Us</h1>

        <v-container class="my-4">
            <v-btn @click="addNewWaterDevice">Hello
            </v-btn>
        </v-container>
    </div>
</template>

<script>
import MockService from '@/services/MockService'

export default {
    name: 'HelloWorld',

    data: () => ({
    }),
    methods: {
      addNewWaterDevice(){
        MockService.initWaterDeviceMockData({
          username: this.$store.state.user.username
        })
      },
      
    }
}
</script>
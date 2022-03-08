<template>
  <v-container>
    <!-- Header for main page -->
    <v-row class="text-center">
      <v-col class="mt-6 mb-16">
        <h1 block class="display-2 font-weight-bold mb-3">
          Welcome to Home Utilities Monitor, User
        </h1>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <!-- button for redirect to electricity page -->
      <v-btn depressed large elevation="3" class="yellow mx-4" width="550" height="580" @click="$router.push('/electric')">
        <v-icon contain height="580" width="550">
          electric_bolt
          </v-icon>
        <span>Electricity</span>
      </v-btn>

      <!-- button for redirect to water page -->
      <v-btn depressed large elevation="3" class="light blue mx-4" width="550" height="580" @click="$router.push('/water')">
        <v-icon>water_drop</v-icon>
        <span>Water</span>
      </v-btn>
    </v-row>      
    
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
    }),
  }
</script>


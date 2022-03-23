<template>
  <v-container>
    <!-- Still need following on main: 
    - grab username string and implement in custom welcome message
    - set constraints for buttons
    --> 
    <!-- Header for main page -->
    <v-row class="text-center">
      <v-col class="mt-6 mb-16">
        <h1 block class="display-2 font-weight-bold mb-3">
          Welcome, User
        </h1>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <!-- button for redirect to electricity page -->
      <v-btn depressed large elevation="3" class="flexcol yellow mx-4" width="550" height="580" @click="$router.push('/electric')">
        <v-icon size="350">electric_bolt</v-icon>
        <span class="display-2">Electricity</span>
      </v-btn>

      <!-- button for redirect to water page -->
      <v-btn depressed large elevation="3" class="flexcol light blue mx-4" width="550" height="580" @click="$router.push('/water')">
        <v-icon size="350">water_drop</v-icon>
        <span class="display-2">Water</span>
      </v-btn>
    </v-row>      
    
  </v-container>
</template>

<!-- Style choice to have text underneath icons for buttons on main page -->
<style>
.flexcol .v-btn__content {
  flex-direction: column;
}
</style>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
    }),
  }
</script>


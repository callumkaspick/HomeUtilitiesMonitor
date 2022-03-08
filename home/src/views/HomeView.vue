<template>
  <v-row>
    <v-col v-if="$store.state.isUserLoggedIn">
      <app-home />
    </v-col>
    <v-col v-if="!$store.state.isUserLoggedIn">
      <hello-world />
    </v-col>
  </v-row>
</template>



<script>
  import HelloWorld from '../components/Retail.vue'
  import AppHome from '../components/AppHome.vue'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
      AppHome,
    },
  }
</script>

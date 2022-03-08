<template>
  <v-container
  fluid>
      <v-row justify="center" class="pt-16 pb-8">
          <h1>Welcome, {{ user }}</h1>
      </v-row>
      <v-row justify="center">
          <v-col 
          cols="12"
          xs="12"
          sm="12"
          md="6">
            <v-card
            class="d-flex align-center justify-center"
            height="500"
            width="500"
            elevation-12
            >
              <v-card-title class="center-text">
                Electric
              </v-card-title>
            </v-card>
          </v-col>
          <v-col
          cols="12"
          xs="12"
          sm="12"
          md="6">
            <v-card
            height="500"
            width="500">
              <v-card-title>
                Water
              </v-card-title>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'AppHome',

    data: () => ({
        user: 'fname lname',
    }),
    methods: {

    }
  }
</script>


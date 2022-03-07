<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    
      <div class="d-flex align-center" @click="$router.push('/')">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://www.pngall.com/wp-content/uploads/5/Green-Leaf-PNG-Free-Image.png"
          transition="scale-transition"
          width="40"
        />
        <v-app-bar-title class="mr-4">
        HUM
      </v-app-bar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
        @click="$router.push('/login')"
      >
        <span class="mr-2">Login</span>
      </v-btn>

      <v-btn
        target="_blank"
        text
        @click="$router.push('/register')"
      >
        <span class="mr-2">Register</span>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

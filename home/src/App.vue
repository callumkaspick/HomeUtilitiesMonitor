<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    
      <div class="d-flex align-center" @click="$router.push('/')">
        <v-img
          alt="HUM Logo"
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

      <v-app-bar-item>
        <v-btn
        target="_blank"
        text
        @click="$router.push('/')"
        >
          <span class="mr-2">Home</span>
        </v-btn>
      </v-app-bar-item>

      <v-app-bar-item>
        <v-btn
        target="_blank"
        text
        @click="$router.push('/about')"
        >
          <span class="mr-2">About Us</span>
        </v-btn>
      </v-app-bar-item>

      <v-spacer></v-spacer>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        target="_blank"
        text
        @click="$router.push('/app')"
      >
        <span class="mr-2">App</span>
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        target="_blank"
        text
        @click="$router.push('/login')"
      >
        <span class="mr-2">Login</span>
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        target="_blank"
        text
        @click="$router.push('/register')"
      >
        <span class="mr-2">Register</span>
      </v-btn>

      <v-btn 
        v-if="$store.state.isUserLoggedIn"
        flat 
        dark
        @click="logout">
        Log Out
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
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
};
</script>

<style>
.danger-alert {
  color: red;
}
</style>

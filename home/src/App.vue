<template>
  <v-app>
    <!-- Logo and title in app bar at top of page 
        Want to go with Electrolize font for text of app
        Replace photo in src with logo
    -->
    <v-app-bar app color="appPrimary" class="text-uppercase">
     <v-app-bar-nav-icon 
     @click="drawer = !drawer"
     v-if="$store.state.isUserLoggedIn">
     </v-app-bar-nav-icon>
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
        Home Utilities Monitor
      </v-app-bar-title>
      </div>



      <v-spacer></v-spacer>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        target="_blank"
        text
        @click="$router.push('/')"
      >
        <span class="mr-2">App Home</span>
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
        dark color="appSecondary"
        @click="logout">
        Log Out
        <v-icon right>exit_to_app</v-icon>
      </v-btn>

    <!-- Nav Bar for Web app -->
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" dark class="appSecondary">
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.path"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="mx-4 mb-4">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home', path: '/' },
        { title: 'Profile', icon: 'mdi-account-box', path: '/profile'},
        { title: 'Settings', icon: 'mdi-cog', path: '/settings'},
        { title: 'About', icon: 'mdi-information', path: '/about'},
        { title: 'Contact', icon: 'mdi-mail', path: '/contact'},
      ],

      drawer: false,
    }
  },
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

<template>
  <v-app>
    
    <v-app-bar
      app
      color="primary"
      dark
    >
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
        HUM
      </v-app-bar-title>
      </div>



      <v-spacer></v-spacer>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        target="_blank"
        text
        @click="$router.push('/app')"
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
        dark
        @click="logout">
        Log Out
      </v-btn>
      
    </v-app-bar>
    <v-navigation-drawer 
    v-model="drawer" 
    app >
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
    <v-main>
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
        { title: 'Home', icon: 'mdi-view-dashboard', path: '/' },
        { title: 'Profile', icon: 'mdi-account-box', path: '/about'},
        { title: 'Settings', icon: 'mdi-cog', path: '/settings'},
        { title: 'About', icon: 'mdi-information', path: '/about'},
        { title: 'Contact', icon: 'mdi-mail', path: '/about'},
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

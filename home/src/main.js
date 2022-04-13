import Vue from 'vue'
import VueGoogleCharts from 'vue-google-charts'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.config.productionTip = false
Vue.use(VueGoogleCharts)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

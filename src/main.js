import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Icon from './icons'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  Icon,
  render: h => h(App)
}).$mount('#app')

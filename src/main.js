import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export const globalData = {
  state: {
    spot1: 0,
    spot2: 0,
    spot3: 0,
    spot4: 0
  }
}

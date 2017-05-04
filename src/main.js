import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

new Vue({
  store,  // inject store instance into all child components; accessible by this.$store
  el: '#app',
  render: h => h(App)
})

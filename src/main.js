import Vue from 'vue'
import App from './App.vue'
import '../src/assets/normalize.module.css'
import '../src/assets/style.module.css'
//import Home from '../src/components/Home.vue'
import router from '../src/router/router.js'





new Vue({
  render: h => h(App),
  router
}).$mount('#app')

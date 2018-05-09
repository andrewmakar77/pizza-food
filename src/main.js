import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {router} from './routes/router'
import {store} from './store/store'
import Accounting from 'accounting-js'


// USE PLUGINS
Vue.use(BootstrapVue);


// VUE FILTER
Vue.filter('currency',(val)=>{
  return Accounting.formatMoney(val)
})

// VUE INSTANCE
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

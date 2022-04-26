import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from "@/components/TypeNav"
import store from './store'

// import {reqCategoryList} from '@/api'
// reqCategoryList();

Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import { Table } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import RookieUI from '@rookie-ui/element-ui'
import { Select } from '@rookie-ui/element-ui'
Vue.config.productionTip = false
Vue.use(Table)
  // .use(RookieUI)
  .use(Select)
  // .use(Pagination)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ElementUI from 'element-ui'
import { Table } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import RookieUI from '@rookie-ui/element-ui'
import { Select } from '../../dist/rookie-ui.mjs'
Vue.config.productionTip = false
Vue.use(Table)
  // .use(RookieUI)
  .use(Select)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

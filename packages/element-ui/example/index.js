import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MyUI from '../index'
console.log('app.js')
// 引入element-ui
Vue.use(ElementUI)
  .use(MyUI)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
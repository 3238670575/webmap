import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '../router'
// 引入vuex仓库
import store from '../store'

Vue.config.productionTip = false

new Vue({
  // 注册路由和仓库
  router,
  store,
  render: h => h(App),
}).$mount('#app')

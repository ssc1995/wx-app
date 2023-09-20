
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

import store from './store';
Vue.prototype.$store = store;
const app = new Vue({
    ...App,
		store
})

// 引入请求封装，将app参数传递到配置中
require('./config/request.js')(app)

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
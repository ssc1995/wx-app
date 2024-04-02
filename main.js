
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

import PickerArea from '@/components/pick/pickerArea.vue';
Vue.component('PickerArea', PickerArea);

import Empty from '@/components/empty/index.vue';
Vue.component('Empty', Empty);

import LoadMore from '@/components/loadMore/index.vue';
Vue.component('LoadMore', LoadMore);

const imgSrc = 'https://mt-1322382233.cos.ap-shanghai.myqcloud.com/webIcon/icon';
Vue.prototype.$imgSrc = imgSrc;

import share from './utils/share.js';
Vue.mixin(share);

// 注册全局过滤器
Vue.filter('decimal', function(value) {
	let number = Number(value);
  if (typeof number !== 'number') return ''; // 如果不是数字类型则直接返回空字符串
  
  const num = parseFloat(number); // 将传入的值转为浮点数
  let result;
  
  if (!isNaN(num)) {
    result = num.toFixed(2); // 设置保留两位小数并去除多余的零
  } else {
    result = ''; // 非法输入时也返回空字符串
  }
  
  return result;
});

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
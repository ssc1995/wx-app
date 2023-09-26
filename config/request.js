import { getCache } from '@/utils/storage';
import store from '@/store';
import { API_URL } from '@/env';

// 是否显示重新登录
export let isRelogin = { show: false };

// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
	// 初始化请求配置
	uni.$u.http.setConfig((config) => {
		/* config 为默认全局配置*/
		config.baseURL = API_URL; /* 根域名 */
		config.timeout = 10000;
		config.header = {
			'Content-Type': 'application/json;charset=utf-8'
		};
		return config
	})

	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
		// 是否需要设置 token
		config.data = config.data || {};
		const isToken = (config.header || {}).isToken === false;
		const storageTokan = getCache('token');
		const token = vm.$store.state.Login.token || storageTokan;
		// 让每个请求携带自定义token 请根据实际情况自行修改
		if (token && !isToken) {
			config.header['Authorization'] = 'Bearer ' + token;
		};
		
		// 不需要携带token的接口
		if(isToken) {
			return config;
		}

		return config
	}, config => { // 可使用async await 做异步操作
		return Promise.reject(config)
	})

	// 响应拦截
	uni.$u.http.interceptors.response.use((res) => {
		// 未设置状态码则默认成功状态
		const code = res.data.code || 200;
		// 获取错误信息
		const msg = res.data.msg;

	if (code === 401) {
			store.dispatch('Login/LogOut').then(res=> {
				uni.reLaunch({
					url: '/pages/login/login'
				});
			});
			return res.data;
		} else if (code === 500) {
			uni.$u.toast(msg)
			return Promise.reject(new Error(msg))
		} else if (code !== 200) {
			uni.$u.toast(msg)
			return Promise.reject('error')
		} else {
			return res.data;
		}
	},
		error => {
			let { message } = error;
			if (message == "Network Error") {
				message = "后端接口连接异常";
			}
			else if (message.includes("timeout")) {
				message = "系统接口请求超时";
			}
			else if (message.includes("Request failed with status code")) {
				message = "系统接口" + message.substr(message.length - 3) + "异常";
			}
			uni.$u.toast(message)
			return Promise.reject(error)
		}
	)
}
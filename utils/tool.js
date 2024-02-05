import {
	getCache
} from '@/utils/storage';
import store from '@/store';
// 判断当前用户是否需要跳转登录页
export function isGologin(url) {
	let dirUrl = '/pages/login/login';
	const token = getCache('token') || store.state.Login.token;
	if (token != null && token != "" && token != undefined) {
		dirUrl = url
	};
	uni.navigateTo({
		url: dirUrl
	})
}

// 节流
export function throttle(func, wait) {
	let timeout;
	return function() {
		let context = this;
		let args = arguments;
		if (!timeout) {
			timeout = setTimeout(() => {
				timeout = null;
				func.apply(context, args)
			}, wait)
		}

	}
}
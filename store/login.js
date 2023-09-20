	import { login, logout, getInfo } from '@/config/login';
	import { setCache } from '@/utils/storage';
	const state = {
		token: '',
		user: {},
		avatar: ''
	}

	const mutations = {
		SET_TOKEN: (state, token) => {
			state.token = token;
		},
		
		SET_AVATAR(state, avatar) {
			state.avatar = avatar;
		},
		
		SET_USERINFO(state, userInfo) {
			state.user = userInfo;
		}
		
	}

	const actions = {
		// 登录
		Login({ commit }, userInfo) {
			const username = userInfo.username.trim();
			const password = userInfo.password;
			const code = userInfo.code;
			const uuid = userInfo.uuid;
			return new Promise((resolve, reject) => {
				login({username, password, code, uuid}).then(res => {
					commit('SET_TOKEN', res.token);
					setCache('token', res.token, 24 * 60 * 60 * 15);
					resolve();
				})
			})
		},
		
	 // 获取用户信息
		GetInfo({ commit, state }) {
				getInfo().then(res => {
					if(res.code == 200) {
						const user = res.user;
						const avatar = (user.avatar == "" || user.avatar == null) ? '' : user.avatar;
						commit('SET_USERINFO', user)
						commit('SET_AVATAR', avatar)
					}
				})
		},
		
		// 退出系统
		LogOut({ commit, state }) {
			return new Promise((resolve, reject) => {
				logout(state.token).then(() => {
					commit('SET_TOKEN', '')
					uni.removeStorageSync('token')
					resolve()
				})
			})
		},
	}
	
	export default {
		namespaced: true,
		state,
		mutations,
		actions
	}


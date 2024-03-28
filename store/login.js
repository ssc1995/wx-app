	import { userInfo, logout } from '@/config/login';
	import { setCache } from '@/utils/storage';
	const state = {
		token: '',
		user: {},
		avatar: '',
		user: {
			totalAmount: 0,
			totalIntegral: 0,
			applyCount: 0,
			useAmount: 0,
			usedAmount: 0,
			amountStatus: 0,
			verifyInfo: [
				{ status: 0 },
				{ status: 0 },
				{ status: 0 },
				{ status: 0 },
				{ status: 0 }
			],
			orderInfo: {}
		},
		scene: "", // 分享者id
	}

	const mutations = {
		SET_TOKEN: (state, token) => {
			state.token = token;
		},
		
		SET_USER(state, data) {
			state.user = data;
		},
		// 设置默认值
		initUser(state) {
			state.user = {
				totalAmount: 0,
				applyCount: 0,
				totalIntegral: 0,
				useAmount: 0,
				usedAmount: 0,
				amountStatus: 0,
				orderInfo: {},
				memberVerifyList: [
					{ status: 0 },
					{ status: 0 },
					{ status: 0 },
					{ status: 0 },
					{ status: 0 }
				]
			}
		},
		
		setOtherId(state, data) {
			state.scene = data;
		}
	}

	const actions = {
		// 获取token
		getToken({commit}, res) {
			commit('SET_TOKEN', res.token);
			setCache('token', res.token, 24 * 60 * 60 * 7);
			uni.showToast({
				title: res.message,
				duration: 500
			});
			setTimeout(function () {
				uni.hideToast();
				uni.navigateBack();
			}, 800);
		},
		
		// 获取用户信息
		getUserInfo({commit}){
			return new Promise((resolve, reject)=> {
				userInfo().then(res=> {
					if(res.success){
						commit('SET_USER', res.data);
						resolve();
					}
				})
			})
		},
		
		// 退出系统
		LogOut({ commit, state }) {
			return new Promise((resolve, reject) => {
				logout(state.token).then(() => {
					commit('SET_TOKEN', '');
					commit('initUser');
					uni.removeStorageSync('token');
					resolve();
				})
			})
		},
		
		// 登录过期
		loginAgain({ commit, state }) {
			return new Promise((resolve, reject) => {
				commit('SET_TOKEN', '');
				commit('initUser');
				uni.removeStorageSync('token');
				resolve();
			})
		},
		
		// 设置分享者id
		getOtherId({ commit }, data) {
			commit('setOtherId', data);
		}
	}
	
	export default {
		namespaced: true,
		state,
		mutations,
		actions
	}


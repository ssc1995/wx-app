const state = {
	areaInfo: {},
	invoiceInfo: {
		type: 0,
		title: '',
		taxNo: ''
	},
<<<<<<< HEAD
	// 自提点信息
=======
<<<<<<< HEAD
	// 自提点信息
=======
	// 门店信息
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
	selfPickInfo: {},
	isStatus: false, // 判断订单列表是否进入订单详情, 默认返回时刷新页面数据
};
const mutations = {
	setArea(state, data) {
		state.areaInfo = data
	},
	
	setInvoice(state, data) {
		state.invoiceInfo = data;
	},
	
	setFrom(state, data) {
		state.isStatus = data
	},
	
	getSelfPick(state, data) {
		state.selfPickInfo = data;
	}
	
};
const actions = {
	// 设置地区的值
	setAddress({ commit }, data) {
		commit('setArea', data)
	},
	// 判断订单列表是否从订单详情返回
	getFromOrder({commit}, data) {
		commit('setFrom', data)
	},
	
	// 设置子提点
	setSelfPick({commit}, data) {
		commit('getSelfPick', data)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
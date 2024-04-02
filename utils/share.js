export default {
	created() {
		//#ifdef MP-WEIXIN
		wx.showShareMenu({
			withShareTicket: true,
			menus: ['shareAppMessage', 'shareTimeline']
		});
		//#endif
	},
	
	// 发送给朋友
	onShareAppMessage(res) {
		if (res.from === 'button') {// 来自页面内分享按钮
			console.log(res.target)
		};
		return {
			path: '/pages/index/index',
			title: '蜜田信易购',
			// imageUrl: 'https://mt-1322382233.cos.ap-shanghai.myqcloud.com/webIcon/icon/logo.png',
			// desc: '更多品质好物'
		}
	},
	
	// 分享到朋友圈
	onShareTimeline() {
		return {
			path: '/pages/index/index',
			title: '蜜田信易购',
			// imageUrl: 'https://mt-1322382233.cos.ap-shanghai.myqcloud.com/webIcon/icon/logo.png',
			// desc: '更多品质好物'
		}
	}
	
}
<template>
	<scroll-view scroll-y="true" class="activity-detail">
		<u-swiper :list="list" height="220" :autoplay="true" :circular="true" :indicator="true"
			indicatorMode="dot"></u-swiper>
		<view class="main">
			<view class="detail">
				<view class="title">
					挑战两小时自信演讲
				</view>
				<view class="action">
					<view>
						<u-icon name="eye" size="20" label="180" :labelSize="14"></u-icon>
					</view>
					<view>
						<u-icon name="chat" size="20" label="60" :labelSize="14"></u-icon>
					</view>
					<view>
						<u-icon name="star" size="20" label="60" :labelSize="14"></u-icon>
					</view>
				</view>
				<view class="date-time">
					<u-icon name="clock-fill" label="09-22 14:00 至 17:00" :labelSize="14" :space="7"></u-icon>
				</view>
				<view class="date-time">
					<u-icon name="map-fill" label="湖南长沙天心区" :labelSize="14" :space="7"></u-icon>
					<u-icon name="arrow-right"></u-icon>
				</view>
				<view class="date-time">
					<u-icon name="account-fill" label="已报名36人" :labelSize="14" :space="7"></u-icon>
				</view>
				<view class="date-time">
					<u-icon name="rmb-circle-fill" label="9.9" :labelSize="14" :space="7" labelColor="#fa3534"></u-icon>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<!-- 底部信息 -->
		<view class="footer">
			<view class="actions">
				<view class="">
					<u-button type="primary" text="收藏"></u-button>
				</view>
				<view class="">
					<u-button type="primary" text="报名" @click="weixinLogin"></u-button>
				</view>
				<view class="">
					<u-button class="avatar-wrapper" text="点击授权获取手机号" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
					</u-button>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import { login } from '@/config/login.js';
	import { getCache, setCache } from '@/utils/storage';
	export default {
		data() {
			return {
				list: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				PhoneCode: ''
			}
		},

		computed: {
			...mapState({
				token: state => state.Login.token
			})
		},

		methods: {
			...mapMutations('Login', ['SET_TOKEN']),
			// 
			getPhoneNumber(e) {
				this.PhoneCode = e.detail.code
				console.log(e.detail.code)
			},

			getUserInfo() {
				return new Promise((resolve, reject) => {
					uni.getUserProfile({
						lang: 'zh_CN',
						desc: '获取你的昵称、头像、地区及性别', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，
						success: (res) => {
							resolve(res.userInfo)
						},
						fail: (err) => {
							reject(err)
						}
					})
				})
			},

			getLogin() {
				let that = this;
				return new Promise((resolve, reject) => {
					uni.login({
						success(res) {
							// 获取用户token、openid
							login({jsCode: res.code}).then(Response=> {
								if(Response.success) {
									that.SET_TOKEN(Response.result.token);
									setCache('token', Response.result.token, 24 * 60 * 60 * 15);
									resolve({...Response.result, code: res.code})
								}
							})
						},
						fail: (err) => {
							console.log(err, 'logoer')
							reject(err)
						}
					})
				})
			},

			weixinLogin() {
				let that = this;
				const storageTokan = getCache('token');
				const token = this.$store.state.Login.token || storageTokan;
				if(!token) {
					uni.getProvider({
						service: 'oauth',
						success: function(res) {
							//支持微信、qq和微博等
							if (~res.provider.indexOf('weixin')) {
								let userInfo = that.getUserInfo();
								let loginRes = that.getLogin();
								Promise.all([userInfo, loginRes]).then((result) => {
									let userInfo = result[0];
									let loginRes = result[1];
									let data = Object.assign(loginRes, userInfo);
									if(!loginRes.token) {
										that.$store.dispatch('Login/addUserInfo',data)
									} else {
										uni.navigateTo({
											url:'/pages/application/application'
										})
									}
								})
					
							}
						},
						fail: function(err) {
							uni.showToast({
								icon: 'none',
								title: err
							})
						}
					})
				} else {
					uni.navigateTo({
						url:'/pages/application/application'
					})
				}
			},

			gotoApplic() {
				this.onLogin()
			}
		}
	}
</script>

<style scoped lang="scss">
	.activity-detail {
		padding-bottom: 70px;
	}

	.main {
		padding: 10px 15px;

		.detail {
			background-color: #fff;
			padding: 10px;
			border-radius: 4px;
			box-shadow: 0 3px 3px 3px rgba(0, 0, 0, .1);

			.title {
				font-weight: bold;
			}

			.action {
				display: flex;
				align-items: center;
				padding: 20px 0 10px 0;

				& view {
					padding-right: 15px;
				}
			}

			.date-time {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-bottom: 10px;
			}
		}
	}

	.footer {
		position: fixed;
		bottom: 0;
		z-index: 1;
		background-color: #fff;
		width: 100%;
		height: 50px;
		padding-top: 5px;

		.actions {
			display: flex;
			justify-content: space-around;

			view {
				width: 40%;
			}
		}
	}
</style>
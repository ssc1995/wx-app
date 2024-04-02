<template>
	<scroll-view enable-flex scroll-y="true" :show-scrollbar="false" class="mine">
		<view class="header">
			<view class="header-image">
<<<<<<< HEAD
				<u--image :src="src" width="100%" height="300rpx"></u--image>
=======
<<<<<<< HEAD
				<u--image :src="src" width="100%" height="300rpx"></u--image>
=======
<<<<<<< HEAD
				<u--image :src="src" width="100%" height="300rpx"></u--image>
=======
				<u--image :src="src" width="100%" height="200rpx"></u--image>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			</view>
			<view class="login">
				<view class="">
					<u--image :src="avatar" width="100rpx" height="100rpx" mode="scaleToFill"></u--image>
				</view>
				<view class="login-btn" v-if="user.phone">
					{{ user.phone }}
				</view>
				<view class="login-btn" v-else>
					<u-button color="rgba(252, 252, 252, 0.3)" class="login_button" @click="login" text="登录"
						size="small"></u-button>
				</view>
			</view>
		</view>
		<!-- 我的订单 -->
		<view class="order">
			<view class="dingdan">
				<view style="font-size: 36rpx; height: 51rpx;line-height: 51rpx;">我的订单</view>
				<view style="display: flex; align-items: center; color: #999; font-size: 22rpx;" @click="goMyOrder(0)">
					<view class="">全部订单</view>
					<view class="">
						<u-icon name="arrow-right" color="#999" size="11px"></u-icon>
					</view>
				</view>
			</view>
			<!-- action -->
			<view class="action">
				<view class="item" v-for="(item, index) in tabs" :key="index" @click="goMyOrder(item.type)">
					<uni-badge type="error" :text="getBadge(index)" absolute="rightTop" size="small" :offset="[8, 2]">
						<view class="imgs">
							<u--image :showLoading="true" :src="item.icon" width="50rpx" height="50rpx"></u--image>
						</view>
						<view style="font-size: 24rpx;">
							{{item.label}}
						</view>
					</uni-badge>
				</view>
			</view>
		</view>
		<!-- 邀请好友 -->
<<<<<<< HEAD
<!-- 		<view class="invite">
=======
<<<<<<< HEAD
<!-- 		<view class="invite">
=======
<<<<<<< HEAD
<!-- 		<view class="invite">
=======
		<view class="invite">
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			<u-cell-group>
				<u-cell title="邀请好友" icon="" isLink @click="inviteFriends">
					<u-icon slot="icon" name="red-packet-fill" color="#FE542C"></u-icon>
					<view slot="value" style="color: #ccc; font-size: 22rpx;">现金红包立即到账</view>
				</u-cell>
			</u-cell-group>
<<<<<<< HEAD
		</view> -->
=======
<<<<<<< HEAD
		</view> -->
=======
<<<<<<< HEAD
		</view> -->
=======
		</view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c

		<!-- 银行卡 -->
		<view class="invite">
			<u-cell-group>
				<u-cell title="银行卡" isLink @click="goBank">
					<u-icon slot="icon" name="integral-fill" color="#FE542C"></u-icon>
				</u-cell>
				<u-cell title="收货地址" isLink @click="goAddress">
					<u-icon slot="icon" name="map-fill" color="#FE542C"></u-icon>
				</u-cell>
<<<<<<< HEAD
<!-- 				<u-cell title="积分商城" isLink @click="goShop">
=======
<<<<<<< HEAD
<!-- 				<u-cell title="积分商城" isLink @click="goShop">
=======
<<<<<<< HEAD
<!-- 				<u-cell title="积分商城" isLink @click="goShop">
=======
				<u-cell title="积分商城" isLink @click="goShop">
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					<u-icon slot="icon" name="gift-fill" color="#FE542C"></u-icon>
					<view slot="value" style="color: #ccc; font-size: 22rpx;">{{user.totalIntegral}} 积分</view>
				</u-cell>
				<u-cell title="兑换记录" isLink @click="goRecord">
					<u-icon slot="icon" name="car-fill" color="#FE542C"></u-icon>
				</u-cell>
				<u-cell title="积分记录" isLink @click="goIntegral">
					<u-icon slot="icon" name="bookmark-fill" color="#FE542C"></u-icon>
<<<<<<< HEAD
				</u-cell> -->
=======
<<<<<<< HEAD
				</u-cell> -->
=======
<<<<<<< HEAD
				</u-cell> -->
=======
				</u-cell>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			</u-cell-group>
		</view>
		<view class="invite">
			<u-cell-group>
				<u-cell title="设置" isLink url="/subPackages/setting/setting">
					<u-icon slot="icon" name="setting-fill" color="#FE542C"></u-icon>
				</u-cell>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
				<u-cell title="我的客服">
					<u-icon slot="icon" name="server-man" color="#FE542C"></u-icon>
					<view slot="value">
						<u-button openType="contact" size="mini" text="联系客服" color="#FE542C"></u-button>
					</view>
				</u-cell>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			</u-cell-group>
		</view>
		<view style="height: 30rpx;"></view>
	</scroll-view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import {
		getCache
	} from '@/utils/storage';
	import {
		isGologin
	} from '@/utils/tool.js';
	export default {
		data() {
			return {
				src: this.$imgSrc + '/login.png',
				avatar: this.$imgSrc + '/herder.png',
				tabs: [{
						label: '待付款',
						icon: this.$imgSrc + '/dfk.png',
						type: 1
					},
					{
						label: '待签约',
						icon: this.$imgSrc + '/dqy.png',
						type: 2
					},
					{
						label: '待发货',
						icon: this.$imgSrc + '/dfh.png',
						type: 3
					},
					{
						label: '待收货',
						icon: this.$imgSrc + '/dsh.png',
						type: 4
					},
					{
						label: '退换/售后',
						icon: this.$imgSrc + '/refund.png',
						type: 5
					}
				],
			}
		},

		onLoad() {},

		onShow() {
			let token = getCache('token');
			if (token == null || token == "" || token == undefined) {
				this.initUser();
			} else {
				this.getUsers();
			}
		},

		computed: {
			...mapState({
				user: state => state.Login.user,
				verifyInfo: state => state.Login.user.memberVerifyList
			}),
		},

		methods: {

			...mapMutations('Login', ['initUser']),

			// 微信登录
			login() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},

			// 获取用户信息
			getUsers() {
				this.$store.dispatch('Login/getUserInfo');
			},

			// 订单数
			getBadge(index) {
				if (index == 0) return this.user.orderInfo.payCount;
				if (index == 1) return this.user.orderInfo.signCount;
				if (index == 2) return this.user.orderInfo.sendCount;
				if (index == 3) return this.user.orderInfo.recCount;
			},

			// 我的订单
			goMyOrder(type) {
				let url = "";
				if(type == 5) {
					url = "/subPackages/refund/refund"
				} else {
					url = `/subPackages/myOrder/myOrder?index=${type}`;
					this.$store.dispatch('Common/getFromOrder', false);
				}
				isGologin(url);
			},

			// 银行卡
			goBank() {
				let url = "/pages/manageBankcards/manageBankcards";
				isGologin(url);
			},

			// 邀请好友
			inviteFriends() {
				if (this.verifyInfo && this.verifyInfo[0].status == 1) {
					let url = "/subPackages/invite/invite";
					isGologin(url);
				} else {
					uni.showToast({
						title: "请先完成实名认证",
						icon: 'none'
					})
				}
			},

			// 收货地址
			goAddress() {
				let url = "/pages/address/address";
				isGologin(url);
			},

			// 积分商城
			goShop() {
				let url = "/subPackages/pointsMall/pointsMall";
				isGologin(url);
			},

			// 兑换记录
			goRecord() {
				let url = "/subPackages/pointsMall/records";
				isGologin(url);
			},

			// 积分记录
			goIntegral() {
				let url = "/subPackages/IntegralVariation/IntegralVariation";
				isGologin(url);
			},

			// 设置
			goSetting() {
				uni.navigateTo({
					url: '/subPackages/setting/setting'
				})
			},

		}
	}
</script>

<style scoped lang="scss">
	.mine {
		color: #333;
		font-size: 28rpx;
		height: 100vh;
	}

	.header {
<<<<<<< HEAD
		height: 300rpx;
=======
<<<<<<< HEAD
		height: 300rpx;
=======
<<<<<<< HEAD
		height: 300rpx;
=======
		height: 200rpx;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
		width: 100%;
		position: relative;

		.header-image {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: -1;
		}

		.login {
			position: absolute;
			left: 54rpx;
<<<<<<< HEAD
			top: 100rpx;
=======
<<<<<<< HEAD
			top: 100rpx;
=======
<<<<<<< HEAD
			top: 100rpx;
=======
			top: 50rpx;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			z-index: 1;
			display: flex;
			align-items: center;
		}

		.login-btn {
			margin-left: 32rpx;
			width: 121rpx;
			height: 54rpx;
			line-height: 54rpx;
			border-radius: 4rpx;
			color: #fff;
			text-align: center;
		}

		.setting-icon {
			position: absolute;
			right: 30rpx;
			top: 30rpx;
			z-index: 1;
		}
	}

	.order {
		margin: 18rpx 18rpx 0 18rpx;
		padding: 24rpx 0 0 0;
		background-color: #fff;
		border-radius: 12rpx;

		.dingdan {
			padding: 0 18rpx;
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			height: 88rpx;
			border-bottom: 1rpx solid #EEE;
		}

		.action {
			padding: 0 18rpx;
			display: flex;
			align-items: center;
			height: 190rpx;

			.item {
				flex: 1;
				display: flex;
				justify-content: center;
			}

			.imgs {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: 18rpx;
			}
		}

		.action>.item:nth-child(5) {
			// border-left: 1px solid #FE542C;
			color: #FE542C;
		}
	}

	.invite {
		margin: 18rpx;
		background-color: #fff;
	}
</style>
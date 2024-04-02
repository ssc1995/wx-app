<template>
	<view class="">
		<!-- <u-loading-page loading-color="#FE542C" font-size="14" color="#FE542C" :loading="loading"></u-loading-page> -->
		<scroll-view enable-flex scroll-y="true" class="container" refresher-enabled="true" @refresherrefresh="onRefresh"
			:refresher-triggered="triggered" :show-scrollbar="false">
			<view class="edu">
				<view class="">
					<u--image :showLoading="true" :src="src" height="360rpx" width="100%"></u--image>
				</view>
				<view class="content">
					<view class="zed">
						总额度(元）
					</view>
					<view class="shuzhi">
						{{user.totalAmount | decimal}}
					</view>
					<view class="btn" @click="application" v-if="user.amountStatus == 0 || user.amountStatus == 4">
						立即申请
					</view>
					<view class="mean">
						*白条额度可用于购买商品
					</view>
				</view>
			</view>
			<view class="jilu">
				<view class="item" @click="goApplictionRecord">
					<view class="cishu">{{user.applyCount}}</view>
					<view class="tit">申请次数(次)</view>
				</view>
				<view class="item item1">
					<view class="cishu">{{user.useAmount | decimal}}</view>
					<view class="tit">剩余额度(元)</view>
				</view>
				<view class="item">
					<view class="cishu">{{user.usedAmount | decimal}}</view>
					<view class="tit">已用额度(元)</view>
				</view>
			</view>

			<!-- 第三方 -->
			<!-- 		<view class="third-party">
				<view class="fuwutuijian">
					第三方服务推荐
				</view>
				<view class="daikuan">
					<view class="">
						<u--image :showLoading="true" :src="thirdSrc" width="160rpx" height="70rpx" mode=""></u--image>
					</view>
					<view class="">
						<view style="font-size: 26rpx;color: #333;line-height: 36rpx;">1000元-100000元</view>
						<view style="font-size: 22rpx;color: #ccc; line-height: 30rpx;">30秒极速申请，日息低于5元</view>
					</view>
					<view>
						<u-button type="primary" color="#FF422F" text="去借贷" plain size="small"></u-button>
					</view>
				</view>
			</view> -->

			<!-- 白条认证 -->
			<view class="authentication">
				<h4>白条认证</h4>
				<u-cell-group>
					<u-cell title="实名认证" isLink @click="authenticationByName">
						<view slot="value" class="color9"
							:class="{load: verifyInfo&&verifyInfo[0].status == 2, succ: verifyInfo&&verifyInfo[0].status == 1}">
							{{ setType(verifyInfo&&verifyInfo[0].status)}}
						</view>
						<u-icon slot="icon" name="account-fill" color="#FE542C"></u-icon>
					</u-cell>
					<u-cell title="银行卡" isLink @click="goBank">
						<view class="color9" slot="value"
							:class="{load: verifyInfo&&verifyInfo[1].status == 2, succ: verifyInfo&&verifyInfo[1].status == 1}">
							{{ setType(verifyInfo&&verifyInfo[1].status)}}
						</view>
						<u-icon slot="icon" name="integral-fill" color="#FE542C"></u-icon>
					</u-cell>
					<u-cell title="工作单位" isLink @click="goWorkUnit" :border="false">
						<view class="color9" slot="value"
							:class="{load: verifyInfo&&verifyInfo[2].status == 2, succ: verifyInfo&&verifyInfo[2].status == 1}">
							{{ setType(verifyInfo&&verifyInfo[2].status) }}
						</view>
						<u-icon slot="icon" name="home-fill" color="#FE542C"></u-icon>
					</u-cell>
				</u-cell-group>
			</view>

			<view class="authentication">
				<h4>其他认证</h4>
				<u-cell-group>
					<u-cell title="信息补充" label="信息补充完整可购买价格更高商品" isLink :border="false" @click="goAdditional">
						<u-icon slot="icon" name="more-circle-fill" color="#FE542C"></u-icon>
					</u-cell>
				</u-cell-group>
			</view>

			<!-- <view class="authentication">
				<h4>征信查询</h4>
				<u-cell-group>
					<u-cell title="征信认证" isLink :border="false" @click="goCredit">
						<view class="color9" slot="value"
							:class="{load: verifyInfo&&verifyInfo[4].status == 2, succ: verifyInfo&&verifyInfo[4].status == 1}">
							{{ setType(verifyInfo&&verifyInfo[4].status)}}
						</view>
						<u--image slot="icon" :src="creditSrc" width="40rpx" height="36rpx"></u--image>
					</u-cell>
				</u-cell-group>
			</view> -->
			<view style="height: 20rpx;"></view>
			<u-toast ref="uToast"></u-toast>
		</scroll-view>
	</view>
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
	import {
		applyAmount
	} from "@/config/api";
	export default {
		data() {
			return {
				src: this.$imgSrc + '/whitebar.png',
				thirdSrc: this.$imgSrc + '/shandianjinggaotubiao.png',
				nameSrc: this.$imgSrc + '/faceIcon.png',
				mobileSrc: this.$imgSrc + '/mobileIcon.png',
				bankSrc: this.$imgSrc + '/bankIcon.png',
				jobSrc: this.$imgSrc + '/jobIcon.png',
				creditSrc: this.$imgSrc + '/icon_qitaxinxi.png',
				loading: false,
				triggered: false
			}
		},

		onLoad() {

		},

		onShow() {
			let token = getCache('token');
			if (!this.isToken()) {
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

			// 判断token是否存在
			isToken() {
				let token = getCache('token');
				if (token == null || token == "" || token == undefined) return false;
				return true;
			},

			// 获取用户信息
			getUsers() {
				if (this.isToken()) {
					this.$store.dispatch('Login/getUserInfo').then(res => {
						this.triggered = false;
					});
				} else {
					setTimeout((e) => {
						this.triggered = false;
						this.initUser();
					}, 100);
				}
			},

			// 下拉刷新
			onRefresh() {
				this.triggered = true;
				this.getUsers();
			},

			// 认证状态
			setType(val) {
				if (val == 0) return "未认证";
				if (val == 1) return "已认证";
				if (val == 2) return "认证中";
				if (val == 2) return "认证未通过";
				return "未认证";
			},

			// 立即申请
			application() {
				if (!this.isToken()) return uni.navigateTo({
					url: '/pages/login/login'
				});
				if (this.verifyInfo[0].status == 0) return this.$refs.uToast.show({
					message: '请先完成实名认证',
					type: 'error'
				});
				if (this.verifyInfo[0].status == 2) return this.$refs.uToast.show({
					message: '实名认证中, 请耐心等待',
					type: 'default'
				});
				if (this.verifyInfo[1].status == 0) return this.$refs.uToast.show({
					message: '请先完成银行卡认证',
					type: 'error'
				});
				if (this.verifyInfo[1].status == 2) return this.$refs.uToast.show({
					message: '银行卡认证中, 请耐心等待',
					type: 'default'
				});
				if (this.verifyInfo[2].status == 0) return this.$refs.uToast.show({
					message: '请先完成工作认证',
					type: 'success',
				});
				if (this.verifyInfo[2].status == 2) return this.$refs.uToast.show({
					message: '工作认证中, 请耐心等待',
					type: 'default',
				});
				applyAmount().then(res => {
					if (res.success) {
						this.$refs.uToast.show({
							message: "申请成功，审核中...",
							type: 'success',
						});
						this.getUsers();
					}
				})
			},

			// 申请额度记录
			goApplictionRecord() {
				let url = '/subPackages/applicationRecord/applicationRecord';
				isGologin(url);
			},

			// 实名认证
			authenticationByName() {
				if (!this.isToken()) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				} else {
					if (this.verifyInfo[0].status == 1) return this.$refs.uToast.show({
						message: '实名认证已完成',
						type: 'success',
					});
					// 判断是否征信授权
					let status = 0;
					let credit = this.verifyInfo.find(item => item.code == "creditVerify");
					if (credit) {
						status = credit.status;
					};
					// 评估
					if (status == 0) return uni.navigateTo({
						url: '/subPackages/creditAuth/creditAuth'
					});
					uni.navigateTo({
						url: '/subPackages/uploadIdcard/uploadIdcard'
					})
				}
			},

			// 银行卡
			goBank() {
				if (!this.isToken()) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				} else {
					if (this.verifyInfo[0].status == 0) return this.$refs.uToast.show({
						message: '请先完成实名认证',
						type: 'error'
					});
					if (this.verifyInfo[0].status == 2) return this.$refs.uToast.show({
						message: '实名认证中, 请耐心等待',
						type: 'default'
					});
					if (this.verifyInfo[1].status == 1) return this.$refs.uToast.show({
						message: '银行卡认证已完成',
						type: 'success'
					});
					if (this.verifyInfo[1].status == 2) return this.$refs.uToast.show({
						message: '银行卡认证中, 请耐心等待',
						type: 'default'
					});
					uni.navigateTo({
						url: '/subPackages/bankVerify/bankVerify'
					})
				}
			},

			// 征信查询
			goCredit() {
				if (!this.isToken()) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				} else {
					if (this.verifyInfo[0].status == 0) return this.$refs.uToast.show({
						message: '请先完成实名认证',
						type: 'error'
					});
					if (this.verifyInfo[0].status == 2) return this.$refs.uToast.show({
						message: '实名认证中, 请耐心等待',
						type: 'default'
					});
					uni.navigateTo({
						url: '/subPackages/creditAuth/creditAuth'
					})
				}
			},

			// 工作单位
			goWorkUnit() {
				if (!this.isToken()) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				} else {
					if (this.verifyInfo[0].status == 0) return this.$refs.uToast.show({
						message: '请先完成实名认证',
						type: 'error'
					});
					if (this.verifyInfo[0].status == 2) return this.$refs.uToast.show({
						message: '实名认证中, 请耐心等待',
						type: 'default'
					});
					if (this.verifyInfo[2].status == 1) return this.$refs.uToast.show({
						message: '工作认证已完成',
						type: 'success',
					});
					if (this.verifyInfo[2].status == 2) return this.$refs.uToast.show({
						message: '工作认证中, 请耐心等待',
						type: 'default',
					});
					uni.navigateTo({
						url: '/subPackages/workUnit/workUnit'
					})
				}
			},

			// 补充资料
			goAdditional() {
				let url = '/subPackages/additional/additional';
				isGologin(url);
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		font-size: 14px;
		color: #333;
		height: 100vh;

		.edu {
			position: relative;
			width: 100%;
			background-color: #fff;

			.content {
				position: absolute;
				left: 64rpx;
				top: 80rpx;
				z-index: 1;

				.zed {
					height: 36rpx;
					font-size: 25rpx;
					font-family: PingFangSC, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
					line-height: 36rpx;
				}

				.shuzhi {
					height: 85rpx;
					font-size: 60rpx;
					font-family: PingFangSC, PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 85rpx;
					letter-spacing: 1px;
				}

				.mean {
					height: 34rpx;
					font-size: 24rpx;
					font-family: PingFangSC, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
					line-height: 34rpx;
				}

				.btn {
					margin: 18rpx 0;
					text-align: center;
					width: 156rpx;
					height: 50rpx;
					border-radius: 5rpx;
					border: 2rpx solid #E5DBDB;
					font-size: 25rpx;
					font-family: PingFangSC, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
					line-height: 50rpx;
				}
			}
		}
	}

	.jilu {
		display: flex;
		align-items: center;
		background-color: #fff;

		.item {
			margin-top: 30rpx;
			margin-bottom: 36rpx;
			flex: 1;
			text-align: center;
			border-left: 1px solid #eee;
			border-right: 1px solid #eee;

			.cishu {
				height: 39rpx;
				font-size: 28rpx;
				font-family: PingFangSC, PingFang SC;
				font-weight: 600;
				color: #333333;
				line-height: 39rpx;
				letter-spacing: 2px;

				.tit {
					height: 30rpx;
					font-size: 22rpx;
					font-family: PingFangSC, PingFang SC;
					font-weight: 400;
					color: #666666;
					line-height: 30rpx;
					letter-spacing: 2px;
				}
			}
		}
	}

	.third-party {
		margin-top: 18rpx;
		background-color: #fff;
		padding: 18rpx;

		.fuwutuijian {
			height: 36rpx;
			font-size: 25rpx;
			font-family: PingFangSC, PingFang SC;
			font-weight: 600;
			color: #333333;
			line-height: 36rpx;
		}

		.daikuan {
			text-align: center;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-top: 30rpx;
		}
	}

	.authentication {
		background-color: #fff;
		margin: 18rpx;
		padding: 18rpx 18rpx 0 18rpx;

		h4 {
			height: 36rpx;
			font-family: PingFangSC, PingFang SC;
			line-height: 36rpx;
			padding-bottom: 18rpx;
			font-weight: 600;
		}
	}

	.color9 {
		color: #999;
	}

	.load {
		color: #4C7EFD;
	}

	.succ {
		color: #FF422F;
	}
</style>
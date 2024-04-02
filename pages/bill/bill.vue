<template>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
	<scroll-view scroll-y="true" class="bill" enable-flex :show-scrollbar="false">
		<view class="main">
			<!-- 待还 -->
			<view class="daihuan" v-if="billDetail.status==0 || billDetail.status==2 || billDetail.status==3">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
	<view class="">
		<!-- <u-loading-page loading-color="#FE542C" font-size="14" color="#FE542C" :loading="loading"></u-loading-page> -->
		<scroll-view scroll-y="true" class="bill" enable-flex :show-scrollbar="false">
			<!-- 待还 -->
			<view class="daihuan" v-if="billDetail.status==0 || billDetail.status ==2 || billDetail.status ==3">
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
				<view class="title">
					本期账单
				</view>
				<view class="content">
					<view style="height: 42rpx; line-height: 42rpx;">
						待还金额(元)
					</view>
<<<<<<< HEAD
					<view class="bill_money">{{amount}}</view>
					<view style="color: #FF422C;" v-if="billDetail.status != -1 && billDetail.overdueDays>0">
=======
<<<<<<< HEAD
					<view class="bill_money">{{amount}}</view>
					<view style="color: #FF422C;" v-if="billDetail.status != -1 && billDetail.overdueDays>0">
=======
<<<<<<< HEAD
					<view class="bill_money">{{amount}}</view>
					<view style="color: #FF422C;" v-if="billDetail.status != -1 && billDetail.overdueDays>0">
=======
					<view class="money">{{billDetail.amount | decimal}}</view>
					<view class="color: #FE542C;" v-if="billDetail.status != -1 && billDetail.overdue_days>0">
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
						已违约{{billDetail.overdueDays}}天</view>
					<view class="repayment-date">最后还款日{{billDetail.repayTimeStr}}</view>
					<view class="detail" @click="goDetail" v-if="billDetail.status==0 || billDetail.status ==3">查看详情</view>
					<view class="detail" @click="goDetail" v-if="billDetail.status==2">查看结果</view>
					<view class="">
<<<<<<< HEAD
						<u-button text="立即还款" @click="handlerOk" color="#FE542C" shape="circle"
							v-if="billDetail.status==0 || billDetail.status ==3" :loading="loadingBtn"></u-button>
=======
<<<<<<< HEAD
						<u-button text="立即还款" @click="handlerOk" color="#FE542C" shape="circle"
							v-if="billDetail.status==0 || billDetail.status ==3" :loading="loadingBtn"></u-button>
=======
<<<<<<< HEAD
						<u-button text="立即还款" @click="handlerOk" color="#FE542C" shape="circle"
							v-if="billDetail.status==0 || billDetail.status ==3" :loading="loadingBtn"></u-button>
=======
						<u-button 
							text="立即还款" 
							@click="handlerOk" 
							color="#FE542C" 
							shape="circle"
							v-if="billDetail.status==0 || billDetail.status ==3"
							:loading="loadingBtn"
						></u-button>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					</view>
				</view>
			</view>
			<!-- 已还清 -->
			<view class="yihuanqing" v-else-if="billDetail.status == 1">
				<view class="title">
					本期账单
				</view>
				<view class="content">
					<text>本期账单已还清</text>
<<<<<<< HEAD
					<view style="color: #999;">已还金额{{amountYet}}</view>
=======
<<<<<<< HEAD
					<view style="color: #999;">已还金额{{amountYet}}</view>
=======
<<<<<<< HEAD
					<view style="color: #999;">已还金额{{amountYet}}</view>
=======
					<view style="color: #999;">已还金额{{billDetail.amountYet | decimal}}</view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					<view class="detail" @click="goDetail">查看详情</view>
				</view>
			</view>
			<!-- 无账单 -->
			<view class="wuzhangdan" v-else>
				<view class="title">
					本期账单
				</view>
				<view class="content">
					<text>您没有待还账单哦</text>
				</view>
			</view>
			<view class="action">
				<view class="item" @click="goPaymentHistory">
					<u--image :src="paymentSrc" width="80rpx" height="80rpx"></u--image>
					<text style="margin-top: 15rpx;">还款记录</text>
				</view>
				<view class="item" @click="goBorrowList">
					<u--image :src="billSrc" width="80rpx" height="80rpx"></u--image>
					<text style="margin-top: 15rpx;">所有账单</text>
				</view>
			</view>
<<<<<<< HEAD
		</view>
	</scroll-view>
=======
<<<<<<< HEAD
		</view>
	</scroll-view>
=======
<<<<<<< HEAD
		</view>
	</scroll-view>
=======
		</scroll-view>
	</view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
</template>
<!-- 还款记录 -->
<script>
	import {
		isGologin
	} from '@/utils/tool.js';
	import {
		currentRepayment,
		repaymentApply,
		wxPayment
	} from '@/config/api.js';
	import {
		getCache
	} from '@/utils/storage';
	export default {
		data() {
			return {
				paymentSrc: this.$imgSrc + '/huankuan.png',
				billSrc: this.$imgSrc + '/zhangdan.png',
				billDetail: {
<<<<<<< HEAD
					status: -1,
					amount: 0,
					amountYet: 0
=======
<<<<<<< HEAD
					status: -1,
					amount: 0,
					amountYet: 0
=======
<<<<<<< HEAD
					status: -1,
					amount: 0,
					amountYet: 0
=======
					status: -1
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
				},
				loading: false,
				loadingBtn: false
			}
		},

		onLoad() {},

		onShow() {
			let token = getCache('token');
			if (token == null || token == "" || token == undefined) {
				this.billDetail.status = -1;
			} else {
				return this.getBills();
			}
		},

		computed: {
			isToken() {
				let token = getCache('token');
				if (token == null || token == "" || token == undefined) return false;
				return true;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			},

			// 待还金额
			amount() {
				let {
					amount
				} = this.billDetail;
				let number = Number(amount);
				if (typeof number !== 'number') return ''; // 如果不是数字类型则直接返回空字符串

				const num = parseFloat(number); // 将传入的值转为浮点数
				let result;

				if (!isNaN(num)) {
					result = num.toFixed(2); // 设置保留两位小数并去除多余的零
				} else {
					result = ''; // 非法输入时也返回空字符串
				}
				return result;
			},
			
			// 已还金额
			amountYet() {
				let { amountYet } = this.billDetail;
				let number = Number(amountYet);
				if (typeof number !== 'number') return ''; // 如果不是数字类型则直接返回空字符串
				const num = parseFloat(number); // 将传入的值转为浮点数
				let result;
				if (!isNaN(num)) {
					result = num.toFixed(2); // 设置保留两位小数并去除多余的零
				} else {
					result = ''; // 非法输入时也返回空字符串
				}
				return result;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			}
		},

		methods: {

			// 查询本期账单
			getBills() {
				// this.loading = true;
				currentRepayment().then(res => {
					if (res.success) {
						this.billDetail = res.data;
						// this.loading = false;
					}
				})
			},

			// 立即还款
			handlerOk() {
<<<<<<< HEAD
				if(this.billDetail.status == 3) return uni.navigateTo({
					url: '/subPackages/borrowDetail/borrowDetail?id=' + this.billDetail.borrowId
				});
=======
<<<<<<< HEAD
				if(this.billDetail.status == 3) return uni.navigateTo({
					url: '/subPackages/borrowDetail/borrowDetail?id=' + this.billDetail.borrowId
				});
=======
<<<<<<< HEAD
				if(this.billDetail.status == 3) return uni.navigateTo({
					url: '/subPackages/borrowDetail/borrowDetail?id=' + this.billDetail.borrowId
				});
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
				let params = {
					amount: this.billDetail.amount,
					borrowId: this.billDetail.borrowId,
					repaymentId: this.billDetail.id,
					type: 1
				};
				let that = this;
				that.loadingBtn = true;
				repaymentApply(params).then(res => {
					if (res.success) {
						wxPayment({
							orderSn: res.data.orderSn,
							orderType: 2
						}).then(result => {
							uni.requestPayment({
								timeStamp: result.data.timeStamp,
								nonceStr: result.data.nonceStr,
								package: result.data.package,
								signType: result.data.signType,
								paySign: result.data.paySign,
								success(respon) {
									// uni.navigateBack();
									that.getBills();
								},
								fail(respon) {

								}
							})
						})
					}
<<<<<<< HEAD
				}).finally(() => {
=======
<<<<<<< HEAD
				}).finally(() => {
=======
<<<<<<< HEAD
				}).finally(() => {
=======
				}).finally(()=> {
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					that.loadingBtn = false;
				})
			},

			// 查看详情
			goDetail() {
				let url = `/subPackages/billDetail/billDetail?id=${this.billDetail.id}`;
				isGologin(url);
			},

			// 所有账单
			goBorrowList() {
				let url = '/pages/borrowList/borrowList';
				isGologin(url);
			},

			// 还款记录
			goPaymentHistory() {
				let url = '/pages/paymentHistory/paymentHistory';
				isGologin(url);
			}
		}
	}
</script>

<style scoped lang="scss">
	.bill {
		font-size: 14px;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
		color: #333;
		background: linear-gradient(360deg, #FFFFFF 0%, #FF654C 100%);

		.main {
			height: calc(100vh - 60rpx);
			margin: 0 60rpx;
			margin-top: 60rpx;
			background-color: #fff;
		}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
		height: 100vh;
		color: #333;
		background-color: #fff;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c

		.daihuan {
			text-align: center;

			.content {
				background-color: #FFF6F6;
				border-radius: 9rpx;
				margin: 0 102rpx;
				padding: 72rpx 18rpx;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
				.money {
					height: 80rpx;
					line-height: 80rpx;
					font-size: 72rpx;
					font-weight: 600;
					padding: 24rpx 0;
				}

>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
				.repayment-date {
					height: 30rpx;
					line-height: 30rpx;
					font-size: 28rpx;
					color: #999;
				}
			}
		}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
		.bill_money {
			height: 80rpx;
			line-height: 80rpx;
			font-size: 72rpx;
			font-weight: 600;
			padding: 24rpx 0;
			color: #333;
		}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
		.wuzhangdan,
		.yihuanqing {
			text-align: center;

			.content {
				background-color: #FFF6F6;
				border-radius: 9rpx;
				margin: 0 102rpx;
				padding: 72rpx 18rpx;
				width: auto;
				height: 300rpx;
				display: flex;
				justify-content: center;
				flex-direction: column;

				text {
					height: 80rpx;
					font-size: 44rpx;
					font-family: PingFangSC, PingFang SC;
					font-weight: 600;
					line-height: 80rpx;
				}
			}
		}
	}

	.detail {
		color: #3890F9;
		height: 30rpx;
		line-height: 30rpx;
		font-size: 30rpx;
		padding-top: 24rpx;
		padding-bottom: 48rpx;
	}

	.title {
		height: 51rpx;
		font-size: 36rpx;
		font-family: PingFangSC, PingFang SC;
		font-weight: 600;
		color: #333333;
		line-height: 51rpx;
		letter-spacing: 2px;
<<<<<<< HEAD
		padding-top: 38rpx;
=======
<<<<<<< HEAD
		padding-top: 38rpx;
=======
<<<<<<< HEAD
		padding-top: 38rpx;
=======
		padding-top: 68rpx;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
		padding-bottom: 65rpx;
	}

	.action {
		padding-top: 108rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		text-align: center;

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
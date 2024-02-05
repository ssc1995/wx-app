<template>
	<view class="">
		<!-- <u-loading-page loading-color="#FE542C" font-size="14" color="#FE542C" :loading="loading"></u-loading-page> -->
		<scroll-view scroll-y="true" class="bill" enable-flex :show-scrollbar="false">
			<!-- 待还 -->
			<view class="daihuan" v-if="billDetail.status==0 || billDetail.status ==2 || billDetail.status ==3">
				<view class="title">
					本期账单
				</view>
				<view class="content">
					<view style="height: 42rpx; line-height: 42rpx;">
						待还金额(元)
					</view>
					<view class="money">{{billDetail.amount | decimal}}</view>
					<view class="color: #FE542C;" v-if="billDetail.status != -1 && billDetail.overdue_days>0">
						已违约{{billDetail.overdueDays}}天</view>
					<view class="repayment-date">最后还款日{{billDetail.repayTimeStr}}</view>
					<view class="detail" @click="goDetail" v-if="billDetail.status==0 || billDetail.status ==3">查看详情</view>
					<view class="detail" @click="goDetail" v-if="billDetail.status==2">查看结果</view>
					<view class="">
						<u-button 
							text="立即还款" 
							@click="handlerOk" 
							color="#FE542C" 
							shape="circle"
							v-if="billDetail.status==0 || billDetail.status ==3"
							:loading="loadingBtn"
						></u-button>
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
					<view style="color: #999;">已还金额{{billDetail.amountYet | decimal}}</view>
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
		</scroll-view>
	</view>
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
					status: -1
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
				}).finally(()=> {
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
		height: 100vh;
		color: #333;
		background-color: #fff;

		.daihuan {
			text-align: center;

			.content {
				background-color: #FFF6F6;
				border-radius: 9rpx;
				margin: 0 102rpx;
				padding: 72rpx 18rpx;

				.money {
					height: 80rpx;
					line-height: 80rpx;
					font-size: 72rpx;
					font-weight: 600;
					padding: 24rpx 0;
				}

				.repayment-date {
					height: 30rpx;
					line-height: 30rpx;
					font-size: 28rpx;
					color: #999;
				}
			}
		}

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
		padding-top: 68rpx;
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
<template>
	<!-- 账单详情 -->
	<view>
		<u-loading-page
			:loading="loading" 
			loading-color="#FE542C" 
			font-size="14" 
			icon-size="30"
			loading-text="蜜田信易购官方旗舰店"
			color="#FE542C"
			image="https://mt-1322382233.cos.ap-shanghai.myqcloud.com/webIcon/icon/logo.png"
		></u-loading-page>	
		<scroll-view enable-flex scroll-y="true" class="borrow-detail" :show-scrollbar="false" v-if="loading==false">
			<u-alert v-if="detail.status == 3" :title="'您已违约' + detail.overdueDays + '天，为了确保账号正常使用，请及时还款'" type="warning"
				:show-icon="true" :fontSize="12"></u-alert>
			<view class="info">
				<view style="font-size: 25rpx; color: 666; height: 25rpx; line-height: 25rpx;">
					剩余待还(元)
				</view>
				<view style="font-size: 72rpx; height: 72rpx;line-height: 72rpx; padding: 18rpx 0;">
					{{(detail.repaymentAmountBalance) | decimal}}
				</view>
				<view style="color: #FF422C; font-size: 25rpx; height: 30rpx;line-height: 30rpx;" v-if="detail.status == 3">
					（已违约{{detail.overdueDays}}天）
				</view>
				<!-- <view style="display: flex; justify-content: center; padding-top: 18rpx;">
				<view style="width: 257rpx;">
					<u-button text="一次结清" size="small" @click="handleOk" color="#FF422C" shape="circle" v-if="detail.status == 2 || detail.status == 3"></u-button>
				</view>
			</view> -->
			</view>
			<!-- 账单信息 -->
			<view class="content">
				<h4>账单信息</h4>
				<u-cell-group>
					<u-cell title="账单类型" value="白条分期"></u-cell>
					<u-cell title="商品名称" :value="detail.productName"></u-cell>
					<u-cell title="创建时间" :value="detail.createTime"></u-cell>
					<u-cell title="订单号" :value="detail.orderSn"></u-cell>
					<u-cell title="分期金额">
						<view slot="value">
							¥ {{detail.loanAmount | decimal}}
						</view>
					</u-cell>
					<u-cell title="已还金额">
						<view slot="value">
							¥ {{ detail.repaymentAmountYet | decimal }}
						</view>
					</u-cell>
					<u-cell title="手续费" :border="false">
						<view slot="value">
							¥ {{ detail.fee | decimal }}
						</view>
					</u-cell>
				</u-cell-group>
			</view>
			<!-- 账单还款计划 -->
			<view class="content">
				<h4>账单还款计划</h4>
				<view class="plans" v-for="(item, index) in detail.repaymentPlan" :key="index" @click="goRepaymentDetail(item)">
					<view class="">
						<view class="">{{item.timePeriod}}/{{item.period}}期 白条分期</view>
						<view style="color: #999; font-size: 24rpx; padding-top: 8rpx;">{{item.repayTime}}</view>
					</view>
					<view style="display: flex;align-items: center;">
						<view class="">
							<view class="">¥ {{item.amount | decimal}}</view>
							<view class="status"
								:class="{isLoading: item.status ==2, isError: item.status ==3, isSucc: item.status == 1}">
								{{getStatus(item.status)}}</view>
						</view>
						<view class="">
							<u-icon name="arrow-right" color="#979797"></u-icon>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		borrowInfo,
		repaymentApply,
		wxPayment
	} from '@/config/api.js';
	export default {
		data() {
			return {
				detail: {},
				loading: false,
				id: ''
			}
		},

		onLoad(option) {
			this.id = option.id;
		},
		
		onShow() {
			this.getDetails(this.id);
		},

		methods: {
			// 获取详情
			getDetails(id) {
				this.loading = true;
				borrowInfo(id).then(res => {
					if (res.success) {
						this.detail = res.data;
						this.loading = false;
					}
				})
			},

			// 状态
			getStatus(status) {
				if (status == 0) return "待还款";
				if (status == 1) return "已还款";
				if (status == 2) return "进行中";
				if (status == 3) return "已违约";
			},

			// 一次还清
			handleOk() {
				let params = {
					amount: this.detail.repaymentAmountBalance,
					borrowId: this.detail.id,
					type: 2
				};
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
									uni.navigateBack();
								},
								fail(respon) {

								}
							})
						})
					}
				})
			},


			// 还款详情
			goRepaymentDetail(data) {
				uni.navigateTo({
					url: '/subPackages/billDetail/billDetail?id=' + data.id
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.borrow-detail {
		color: #333;
		font-size: 28rpx;
		height: 100vh;
	}

	.info {
		background-color: #fff;
		text-align: center;
		padding: 48rpx 0;
	}

	.content {
		background-color: #fff;
		margin-top: 18rpx;
		padding: 22rpx 0 0 0;

		h4 {
			height: 60rpx;
			font-size: 28rpx;
			font-family: PingFangSC, PingFang SC;
			font-weight: 600;
			line-height: 60rpx;
			padding: 0 20rpx;
		}
	}

	.plans {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 120rpx;
		padding: 0 22rpx;
		border-top: 1px solid #eee;
	}

	.status {
		color: #ff9900;
		font-size: 24rpx;
		padding-top: 8rpx;
		text-align: end;
	}

	.isLoading {
		color: #3890F9;
	}

	.isError {
		color: #FE542C;
	}

	.isSucc {
		color: #5ac725;
	}

	::v-deep .u-cell__title-text {
		color: #999 !important;
		min-width: 160rpx;
	}
</style>
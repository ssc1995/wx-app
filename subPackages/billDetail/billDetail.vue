<template>
	<scroll-view enable-flex scroll-y="true" class="bill-detail" :show-scrollbar="false">
		<view class="title">
			<view style="font-size: 25rpx;">
				应还金额(元)
			</view>
			<view style="font-size: 72rpx; height: 72rpx; line-height: 72rpx; font-weight: 600; padding-top: 18rpx;">
				{{info.amount | decimal}}
			</view>
			<view class="tag" :class="{tag1: info.status == 3, tag2: info.status == 1}">
				{{tag}}
			</view>
		</view>
		<view class="content">
			<u-cell-group>
<<<<<<< HEAD
				<u-cell title="赊购金额">
					<view slot="value" class="cell-value">
						¥{{ info.capital | decimal }}
					</view>
				</u-cell>
				<u-cell title="还款日期">
					<view slot="value" class="cell-value">
						{{ info.repayTime }}
					</view>
				</u-cell>
				<u-cell title="违约(天)" :value="info.overdueDays" v-if="info.overdueDays > 0"></u-cell>
				<u-cell title="违约金">
					<view slot="value" class="cell-value">
						¥{{ info.overdueFine | decimal }}
					</view>
				</u-cell>
				<u-cell title="已还金额">
					<view slot="value" class="cell-value">
						¥{{ info.amountYet | decimal }}
=======
				<u-cell title="分期金额">
					<view slot="value">
						¥ {{ info.capital | decimal }}
					</view>
				</u-cell>
				<u-cell title="利息">
					<view slot="value">
						¥ {{ info.interest | decimal }}
					</view>
				</u-cell>
				<u-cell title="服务费">
					<view slot="value">
						¥ {{ info.fee | decimal }}
					</view>
				</u-cell>
				<u-cell title="违约(天)" :value="info.overdueDays" v-if="info.overdueDays > 0"></u-cell>
				<u-cell title="违约滞纳金">
					<view slot="value">
						¥ {{ info.overdueFine | decimal }}
					</view>
				</u-cell>
				<u-cell title="已还金额">
					<view slot="value">
						¥ {{ info.amountYet | decimal }}
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
					</view>
				</u-cell>
			</u-cell-group>
		</view>
		<view style="height: 120rpx;"></view>
<<<<<<< HEAD
		<view class="footer" v-if="info.showRepaymentButton == 1">
=======
		<view class="footer" v-if="info.status== 0 || info.status== 3">
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
			<view class="">
				<u-button text="立即还款" color="#FE542C" @click="handlerOk" shape="circle" :loading="loading"></u-button>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import { borrowtDetail, repaymentApply, wxPayment } from '@/config/api.js';
	export default {
		data() {
			return {
				info: {},
				loading: false
			}
		},
		
		onLoad(option) {
			this.getData(option.id);
		},
		
		computed: {
			// 状态
			tag() {
				let { status }  = this.info;
<<<<<<< HEAD
				if(status == 0) return "待还款";
=======
				if(status == 0) return "未还款";
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
				if(status == 1) return "已还款";
				if(status == 2) return "处理中";
				if(status == 3) return "已违约";
			}
		},
		
		methods: {
			
			// 获取参数
			getData(id) {
				borrowtDetail(id).then(res=> {
					if(res.success) {
						this.info = res.data;
					}
				})
			},
			
			// 立即还款
			handlerOk() {
				let params = {
					amount: this.info.amount,
					borrowId: this.info.borrowId,
					repaymentId: this.info.id,
					type: 1
				};
				this.loading = true;
				repaymentApply(params).then(res=> {
					if(res.success) {
						wxPayment({ orderSn: res.data.orderSn, orderType: 2 }).then(result=> {
							uni.requestPayment({
							    timeStamp: result.data.timeStamp,
									nonceStr: result.data.nonceStr,
									package: result.data.package,
									signType: result.data.signType,
									paySign: result.data.	paySign,
									success (respon) { 
										uni.navigateBack();
									},
									fail (respon) { 
										
									}
							})
						})
					}
				}).finally(()=> {
					this.loading = false;
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.bill-detail {
	color: #333;
	font-size: 28rpx;
	height: 100vh;
}
.title {
	position: relative;
	background-color: #fff;
	height: 129rpx;
	padding: 56rpx 0 64rpx 50rpx;
	.tag {
		position: absolute;
		right: 0;
		top: 44rpx;
		width: 141rpx;
		height: 55rpx;
		line-height: 55rpx;
		border-bottom-left-radius: 27rpx;
		border-top-left-radius: 27rpx;
		text-align: center;
<<<<<<< HEAD
		background-color: #ff9900;
		color: #fff;
	}
	.tag1 {
		color: #FF422C;
=======
		background-color: #3c9cff;
		color: #fff;
	}
	.tag1 {
		color: #FE542C;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
		background: rgba(254, 84, 44, 0.12);
	}
	.tag2 {
		color: #fff;
		background: #5ac725;
	}
}

.content {
	background-color: #fff;
	margin-top: 18rpx;
}

::v-deep .u-cell__title-text {
	color: #999 !important;
}

<<<<<<< HEAD
.cell-value {
	color: #333;
}

=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 1;
		view {
			padding: 18rpx;
		}
	}
</style>

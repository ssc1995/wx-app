<template>
	<view class="">
		<u-loading-page :loading="loading" loading-color="#FE542C" font-size="14" icon-size="30" loading-text="蜜田信易购官方旗舰店"
			color="#FE542C" image="https://mt-1322382233.cos.ap-shanghai.myqcloud.com/webIcon/icon/logo.png"></u-loading-page>
		<scroll-view enable-flex scroll-y="true" :show-scrollbar="false" class="saleService" v-if="loading == false">
			<view class="main">
				<view class="info">
					<view class="">
						<u--image :showLoading="true" :src="details.pic" width="200rpx" height="200rpx"></u--image>
					</view>
					<view style="padding-left: 18rpx; flex: 1;">
						<u--text size="14" :text="details.name" :lines="2" bold></u--text>
						<view style="color: #999; padding-top: 10rpx; font-size: 24rpx;">
							申请数量：1
						</view>
						<view style="padding-top: 10rpx; color: #999; font-size: 24rpx;">
							退款金额：<text style="color: #FF422C;">{{details.downPayment | decimal}}</text>
						</view>
					</view>
				</view>
				
				<!-- 订单详情 -->
				<view style="background-color: #fff; margin-top: 18rpx;">
					<u-cell-group :border="false">
						<u-cell title="订单编号" :border="false">
							<view slot="value" style="color: #FE542C;">
								{{details.orderSn}}
							</view>
						</u-cell>
						<u-cell title="商品名称" :border="false" :value="details.name"></u-cell>
						<u-cell title="商品数量" :border="false" :value="1"></u-cell>
						<u-cell title="商品价格" :border="false">
							<view slot="value">
								{{details.salePrice | decimal}}
							</view>
						</u-cell>
						<u-cell title="首付价格" :border="false">
							<view slot="value">
								{{details.downPayment | decimal}}
							</view>
						</u-cell>
						<u-cell title="申请时间" :border="false" :value="details.applyTime"></u-cell>
						<u-cell title="申请理由" :border="false" value="无忧退货"></u-cell>
						<u-cell title="退款状态" :border="false">
							<view slot="value">
								<u--text v-if="details.refundStatus == 30" size="14" type="success" text="已成功"></u--text>
								<u--text v-else-if="details.refundStatus == 20" size="14" type="primary" text="审核中"></u--text>
								<u--text v-else-if="details.refundStatus == 10" size="14" type="primary" text="待审核"></u--text>
								<u--text v-else-if="details.refundStatus == 40" size="14" type="error" text="已失败"></u--text>
							</view>
						</u-cell>
					</u-cell-group>
				</view>
				<view class="process">
					<view class="title">
						服务进度
					</view>
					<view class="steps">
						<u-steps :current="current" dot activeColor="#FE542C">
							<u-steps-item title="提交申请"></u-steps-item>
							<u-steps-item title="待审核"></u-steps-item>
							<u-steps-item title="审核中"></u-steps-item>
							<u-steps-item title="已完成"></u-steps-item>
						</u-steps>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { getOrderDetails } from '@/config/api';
	export default {
		data() {
			return {
				details: {},
				loading: false,
				current: 0
			}
		},
		
		onLoad(option) {
			this.getDetails(option.id);
			this.details.id = option.id;
		},
		
		methods: {
			getDetails(id) {
				this.loading = true;
				getOrderDetails(id).then(res=> {
					if(res.success) {
						this.details = res.data;
						this.loading = false;
						if(res.data.refundStatus == 10) return this.current = 1;
						if(res.data.refundStatus == 20) return this.current = 2;
						if(res.data.refundStatus == 30 || res.data.refundStatus == 40) return this.current = 3;
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.saleService {
	font-size: 28rpx;
	color: #333;
	height: 100vh;
}

.main {
	// background-color: #fff;
	padding: 18rpx;
}

.process {
	margin-top: 18rpx;
	background-color: #fff;
	padding: 18rpx 0;
	.title {
		font-family: PingFangSC, PingFang SC;
		font-weight: 600;
		color: #333;
		line-height: 44px;
		background-color: #fff;
		padding-left: 18rpx;
	}
}

.info {
	padding: 18rpx;
	background-color: #fff;
	display: flex;
	align-items: center;
}

::v-deep .u-cell__title-text {
	// color: #999 !important;
	width: 135rpx;
}

// ::v-deep .u-cell__value {
// 	font-size: 28rpx !important;
// }
</style>

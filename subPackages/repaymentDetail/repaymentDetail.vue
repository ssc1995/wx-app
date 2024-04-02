<template>
	<!-- 还款详情 -->
<view class="">
	<u-loading-page
		:loading="loading" 
		loading-color="#FE542C" 
		font-size="14" 
		icon-size="30"
		loading-text="蜜田信易购官方旗舰店"
		color="#FE542C"
		image="https://mt-1322382233.cos.ap-shanghai.myqcloud.com/webIcon/icon/logo.png"
	></u-loading-page>	
	<scroll-view enable-flex scroll-y="true" class="repayment-detail" :show-scrollbar="false" v-if="loading==false">
		<view class="title">
			<view style="font-size: 25rpx;">
				应还金额(元)
			</view>
			<view style="font-size: 48rpx; font-weight: 600; padding-top: 18rpx;">
				{{info.repayAmount | decimal}}
			</view>
		</view>
		<view class="info">
			<u-cell-group>
				<u-cell title="还款状态" :value="paymentStatus">
					<view slot="value" :class="{ isError: info.status == 0, status: info.status == 1, isLoading: info.status == 2 }">
						{{ paymentStatus }}
					</view>
				</u-cell>
				<u-cell title="流水号" :value="info.tradeSn"></u-cell>
				<u-cell title="创建时间" :value="info.createTime"></u-cell>
				<u-cell title="还款类型" :value="info.type == 1 ? '在线支付' : '线下转账'"></u-cell>
				<u-cell title="支付方式" :value="info.paymentStr"></u-cell>
				<u-cell title="到账时间" :value="info.payTime"></u-cell>
				<u-cell title="到账金额" :value="'¥' + info.payAmount"></u-cell>
				<u-cell v-if="info.commission > 0" title="违约金" :value="'¥' + info.commission"></u-cell>
				<u-cell title="还款备注" :value="info.remark"></u-cell>
				<u-cell title="失败原因" v-if="this.info.status == 0" :value="info.reviewRemark" :border="false"></u-cell>
			</u-cell-group>
		</view>
	</scroll-view>
</view>
</template>

<script>
	import { repaymentDetail } from '@/config/api.js'
	export default {
		data() {
			return {
				info: {
					
				},
				loading: false
			}
		},
		
		onLoad(option) {
			this.getDetails(option.id);
		},
		
		computed: {
			// 还款状态
			paymentStatus() {
				let { status } = this.info;
				if(status == 0) return "还款失败";
				if(status == 1) return "还款成功";
				if(status ==2) return "进行中";
			}
		},
		
		methods: {
			getDetails(id) {
				this.loading = true;
				repaymentDetail(id).then(res=> {
					if(res.success) {
						this.info = res.data;
						this.info.payAmount = res.data.payAmount&&res.data.payAmount.toFixed(2);
						this.info.commission = res.data.commission&&res.data.commission.toFixed(2);
						this.loading = false;
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.repayment-detail {
	color: #333;
	font-size: 28rpx;
	height: 100vh;
	.title {
		height: 193rpx;
		background: #FFF;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	
	.info {
		margin-top: 18rpx;
		background-color: #FFF;
	}
}

	.status {
		color: #5ac725; 
		font-size: 24rpx; 
		padding-top: 8rpx;
	}
	
	.isLoading {
		color: #ff9900;
	}
	
	.isError {
		color: #FF422C;
	}

	::v-deep .u-cell__title-text {
		color: #999 !important;
		min-width: 160rpx;
	}
</style>

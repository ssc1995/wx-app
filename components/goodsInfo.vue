<template>
	<view class="">
		<view style="height: 18rpx;"></view>
		<view class="title">
			<view style="font-weight: 600;">
				{{item.storeName}}
			</view>
			<view>
				<u--text v-if="item.orderStatus == 50" size="14" type="success" text="已完成"></u--text>
				<u--text v-else-if="item.orderStatus == 60" size="14" color="#FF422C" text="已取消"></u--text>
				<u--text v-else size="14" color="#ff9900" :text="item.orderStatusName"></u--text>
			</view>
		</view>
		<view class="info" @click="gotoDetail(item)">
			<view class="">
				<u--image :showLoading="true" :src="item.pic" width="211rpx" height="237rpx"></u--image>
			</view>
			<view style="padding-left: 46rpx; flex: 1;">
				<view>
					<u--text :text="item.name" :size="14" line-height="38rpx" :lines="2" bold></u--text>
				</view>
				<view style="color: #999; font-size: 24rpx;line-height: 34rpx; padding: 10rpx 0;">
					规格：<text v-for="(lab, index) in item.specList" :key="index" style="margin-right: 10rpx;">{{lab.value}}</text>
				</view>
				<view style="font-size: 30rpx;line-height: 40rpx; font-weight: 600; color: #FE542C;">
					￥{{item.salePrice | decimal}}
				</view>
			</view>
		</view>
		<view class="cell">
			<view class="">
				<text>首付金额: ¥{{item.downPayment | decimal}}</text>
				<!-- <text style="margin: 0 18rpx;" v-if="Number(item.period) != 0">每期应还: ¥{{item.timeAmount | decimal}}</text> -->
				<text v-if="Number(item.period) != 0" style="margin-left: 18rpx;">期数: {{item.period}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				require: true,
				default: ()=> {}
			}
		},
		data() {
			return {
				
			}
		},
		
		methods: {
			// 查看订单详情
			gotoDetail(data) {
				this.$store.dispatch('Common/getFromOrder', true);
				uni.navigateTo({
					url: `/subPackages/orderDetails/orderDetails?id=${data.id}`
				})
			},
		}
	}
</script>
<style scoped lang="scss">
	@import "@/static/order/index.scss"
</style>
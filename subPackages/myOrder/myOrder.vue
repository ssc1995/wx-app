<template>
	<view class="my-order">
		<view class="tabs">
			<u-tabs 
				:list="list" 
				lineWidth="30" 
				lineColor="#FE542C" 
				:activeStyle="{
					color: '#333',
					transform: 'scale(1.05)'
				}" 
				:inactiveStyle="{
						color: '#606266',
						transform: 'scale(1)'
				}" 
				itemStyle="padding-bottom: 12rpx; height: 34px;"
				:current="current"
				@click="click"
			>
			</u-tabs>
		</view>
		<view style="flex: 1;">
			<swiper :current="current" @change="swipeIndex" style="height: 100%;">
				<swiper-item>
					<all-order :current="current" ref="item0"></all-order>
				</swiper-item>
				<swiper-item>
					<stay-payment :current="current" ref="item1"></stay-payment>
				</swiper-item>
				<swiper-item>
					<stay-signed :current="current" ref="item2"></stay-signed>
				</swiper-item>
				<swiper-item>
					<stay-shipped :current="current" ref="item3"></stay-shipped>
				</swiper-item>
				<swiper-item>
					<stay-received :current="current" ref="item4"></stay-received>
				</swiper-item>
				<swiper-item>
					<completed :current="current" ref="item5"></completed>
				</swiper-item>
				<swiper-item>
					<canceled :current="current" ref="item6"></canceled>
				</swiper-item>
				<swiper-item>
					
				</swiper-item>
			</swiper>
		</view>


	</view>
</template>

<script>
	import AllOrder from '@/components/allOrder.vue';
	import StayPayment from '@/components/stayPayment.vue';
	import StaySigned from '@/components/staySigned.vue';
	import StayShipped from '@/components/stayShipped.vue';
	import StayReceived from '@/components/stayReceived.vue';
	import Completed from '@/components/completed.vue';
	import Canceled from '@/components/canceled.vue';
	import { mapState } from 'vuex';
	export default {
		components: { AllOrder,StayPayment,StaySigned,StayShipped,StayReceived,Completed,Canceled },
		data() {
			return {
				list: [
					{ name: '全部' },
					{ name: '待付款' }, 
					{ name: '待签约' },
					{ name: '待发货' },
					{ name: '待收货' },
					{ name: '已完成' },
					{ name: '已取消' },
					// { name: '退款/售后' }
				],
				orderList: [],
				current: 0,
				orderStatus: 0
			}
		},
		
		computed: {
			...mapState({
				isStatus: state=> state.Common.isStatus
			})
		},
		
		onLoad(option) {
			this.current = option.index;
			if(this.current == 0) return this.$refs['item' + this.current].init();
		},
		
		onShow() {
			if(this.isStatus) return this.$refs['item' + this.current].init();
		},
		
		methods: {
		
			// tab点击事件
			click(item) {
				this.current = item.index;
			},
			
			// swiper切换
			swipeIndex(e) {
				this.current = e.detail.current;
				this.$refs['item' + this.current].init();
			}
		}
	}
</script>

<style scoped lang="scss">
	.my-order {
		color: #333;
		font-size: 28rpx;
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
	.tabs {
		height: 80rpx;
		background-color: #fff;
	}
	.order-list {
		flex: 1;
		height: calc(100vh - 80rpx);
	}
	.content {
		margin-left: 18rpx;
		margin-right: 18rpx;
		border-radius: 12rpx;
		.title {
			height: 72rpx;
			line-height: 72rpx;;
			font-size: 25rpx;
			font-family: PingFangSC, PingFang SC;
			font-weight: 600;
			padding: 0 18rpx;
			display: flex; 
			justify-content: space-between; 
			align-items: center;
			background-color: #fff;
		}
		.info {
			display: flex;
			padding: 18rpx 40rpx;
			background: #FBFBFB;
		}
		.cell {
			height: 54rpx;
			line-height: 54rpx;
			background-color: #fff;
			color: #666;
			text-align: end;
			font-size: 24rpx;
			padding-right: 18rpx;
		}
	}
	.action {
		background-color: #fff;
		display: flex;
		justify-content: flex-end;
		height: 72rpx;
		align-items: center;
		padding-right: 18rpx;
	}
	
	::v-deep .u-button--error {
		border-color: #FE542C !important;
	}
	
	::v-deep .u-button--plain.u-button--error {
		color: #FE542C !important;
	}
</style>
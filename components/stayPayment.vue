<template>
	<!-- 待付款 -->
	<div class="stay-payment">
		<scroll-view v-if="isHas" enable-flex class="order-list" scroll-y="true" :show-scrollbar="false" @scrolltolower="lower">
			<view class="content" v-for="(item, index) in list" :key="index">
				<goods-info :item="item"></goods-info>
				<view class="action">
					<view class="">
						<u-button text="取消订单" size="small" @tap.stop="handlerCancel(item)"></u-button>
					</view>
					<view style="padding-left: 18rpx;">
						<u-button text="立即支付" type="error" size="small" plain @click="handlerPay(item)"></u-button>
					</view>
				</view>
			</view>
			<load-more :status="status" />
		</scroll-view>
		<view class="order-list" v-else>
			<empty />
		</view>
		
		<!-- 取消订单提示 -->
		<u-modal
			:show="cancellationShow" 
			title="确认取消该订单？" 
			showCancelButton
			@confirm="cancellationConfirm"
			@cancel="cancellationCancel"
			confirmColor="#FE542C"
		></u-modal>
	</div>
</template>

<script>
	import GoodsInfo from "./goodsInfo";
	import mixin from './minxin';
	export default {
		components: {GoodsInfo},
		mixins: [mixin],
		data() {
			return {
				queryParams: {
					pageSize: 10,
					pageNum: 1,
					orderStatus: 10,
					hasAfterSale: 0
				},
			}
		}
	}
</script>

<style scoped lang="scss">
@import "@/static/order/index.scss"
</style>
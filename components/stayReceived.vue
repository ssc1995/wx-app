<template>
	<!-- 待收货 -->
	<div class="stay-received">
		<scroll-view v-if="isHas" enable-flex class="order-list" scroll-y="true" :show-scrollbar="false" @scrolltolower="lower">
			<view class="content" v-for="(item, index) in list" :key="index">
				<goods-info :item="item"></goods-info>
				<view class="action">
					<view class="" style="margin-right: 18rpx;" v-if="item.deliveryType == 1">
						<u-button text="订单跟踪" type="error" size="small" plain @click="goTracking(item)"></u-button>
					</view>
					<view class="">
						<u-button @tap.stop="handleOk(item, index)" text="确认收货" type="error" size="small" plain></u-button>
					</view>
				</view>
			</view>
			<load-more :status="status" />
		</scroll-view>
		<view class="order-list" v-else>
			<empty />
		</view>
		<!-- 确认收货 -->
		<u-modal :show="dialogVisible" title="请确认收货" showCancelButton @confirm="handleConfirm" @cancel="cancelReceived"
			confirmColor="#FE542C"></u-modal>
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
					orderStatus: 40,
					hasAfterSale: 0
				}
			}
		}
	}
</script>

<style scoped lang="scss">
@import "@/static/order/index.scss"
</style>
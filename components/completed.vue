<template>
	<!-- 已完成 -->
	<view class="completed">
		<scroll-view v-if="isHas" enable-flex class="order-list" scroll-y="true" :show-scrollbar="false" @scrolltolower="lower">
			<view class="content" v-for="(item, index) in list" :key="index">
				<goods-info :item="item"></goods-info>
				<view class="action">
					<view>
						<!-- <u-button @click="refundOk(item, index)" text="退换/售后" type="error" size="small" plain></u-button> -->
					</view>
				</view>
			</view>
			<load-more :status="status" />
		</scroll-view>
		<view class="order-list" v-else>
			<empty />
		</view>
		<!-- 申请退款 -->
		<u-modal 
			:show="refundShow" 
			title="确认申请退款？" 
			showCancelButton 
			@confirm="refundComfirm" 
			@cancel="refundCancel"
			confirmColor="#FE542C"
		></u-modal>
	</view>
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
					orderStatus: 50,
					hasAfterSale: 0
				},
			}
		},
	}
</script>

<style scoped lang="scss">
@import "@/static/order/index.scss"
</style>
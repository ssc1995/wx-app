<template>
	<!-- 已取消 -->
	<view class="completed">
		<scroll-view v-if="isHas" enable-flex class="order-list" scroll-y="true" :show-scrollbar="false" @scrolltolower="lower">
			<view class="content" v-for="(item, index) in list" :key="index">
				<goods-info :item="item"></goods-info>
				<view class="action">
					<view class="">
						<u-button text="删除订单" type="error" size="small" plain @click="deleteRecord(item, index)"></u-button>
					</view>
				</view>
			</view>
			<load-more :status="status" />
		</scroll-view>
		<view class="order-list" v-else>
			<empty />
		</view>
		<!-- 删除提示 -->
		<u-modal 
			:show="show" 
			title="确认删除该订单？" 
			showCancelButton
			@confirm="confirm"
			@cancel="cancel"
			confirmColor="#FE542C"
		></u-modal>
	</view>
</template>

<script>
	import GoodsInfo from "./goodsInfo";
	import mixin from './minxin';
	export default {
		props: {
			current: {
				type: Number,
				require: true
			}
		},
		components: {GoodsInfo},
		mixins: [mixin],
		data() {
			return {
				queryParams: {
					pageSize: 10,
					pageNum: 1,
					orderStatus: 60,
					hasAfterSale: 0
				}
			}
		},
	}
</script>

<style scoped lang="scss">
@import "@/static/order/index.scss";
</style>
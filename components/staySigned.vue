<template>
	<!-- 待签约 -->
	<div class="stay-signed">
		<scroll-view v-if="isHas" enable-flex class="order-list" scroll-y="true" :show-scrollbar="false" @scrolltolower="lower">
			<view class="content" v-for="(item, index) in list" :key="index">
				<goods-info :item="item"></goods-info>
				<view class="action">
					<view class="">
						<u-button text="立即签约" type="error" size="small" plain @click="gotoDetail(item)"></u-button>
					</view>
				</view>
			</view>
			<load-more :status="status" />
		</scroll-view>
		<view class="order-list" v-else>
			<empty />
		</view>
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
					orderStatus: 20,
					hasAfterSale: 0
				},
			}
		}
	}
</script>

<style scoped lang="scss">
@import "@/static/order/index.scss"
</style>
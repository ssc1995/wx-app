<template>
	<!-- 全部订单 -->
	<div class="all-order">
		<scroll-view v-if="isHas" enable-flex class="order-list" scroll-y="true" :show-scrollbar="false" @scrolltolower="lower">
			<view class="content" v-for="(item, index) in list" :key="index">
				<goods-info :item="item"></goods-info>
				<view class="action">
					<view style="padding-left: 18rpx;" v-if="item.orderStatus == 5">
						<u-button text="查看详情" color="#FE542C" size="small" plain @tap.stop="gotoDetail(item)"></u-button>
					</view>
					<view class="" v-if="item.orderStatus == 10">
						<u-button text="取消订单" size="small" @tap.stop="handlerCancel(item)"></u-button>
					</view>
					<view style="padding-left: 18rpx;" v-if="item.orderStatus == 10">
						<u-button text="立即支付" color="#FE542C" size="small" plain @click="handlerPay(item)"></u-button>
					</view>
					<view style="padding-left: 18rpx;" v-if="item.orderStatus == 20">
						<u-button text="立即签约" color="#FE542C" size="small" plain @tap.stop="gotoDetail(item)"></u-button>
					</view>
					<view style="padding-left: 18rpx;" v-if="item.orderStatus == 30">
						<u-button text="查看详情" color="#FE542C" size="small" plain @tap.stop="gotoDetail(item)"></u-button>
					</view>
					<view style="padding-left: 18rpx;" v-if="item.orderStatus == 40&&item.deliveryType == 1">
						<u-button @tap.stop="goTracking(item)" text="订单跟踪" color="#FE542C" size="small" plain></u-button>
					</view>
					<view style="padding-left: 18rpx;" v-if="item.orderStatus == 40">
						<u-button @tap.stop="handleOk(item, index)" text="确认收货" color="#FE542C" size="small" plain></u-button>
					</view>
					<view class="padding-left: 18rpx;" v-if="item.orderStatus == 60">
						<u-button text="删除订单" color="#FE542C" size="small" plain @tap.stop="deleteRecord(item, index)"></u-button>
					</view>
<<<<<<< HEAD
					<!-- <view style="padding-left: 18rpx;" v-if="item.orderStatus == 50">
						<u-button @tap.stop="refundOk(item, index)" text="退换/售后" color="#FE542C" size="small" plain></u-button>
					</view> -->
=======
<<<<<<< HEAD
					<!-- <view style="padding-left: 18rpx;" v-if="item.orderStatus == 50">
						<u-button @tap.stop="refundOk(item, index)" text="退换/售后" color="#FE542C" size="small" plain></u-button>
					</view> -->
=======
					<view style="padding-left: 18rpx;" v-if="item.orderStatus == 50">
						<u-button @tap.stop="refundOk(item, index)" text="退换/售后" color="#FE542C" size="small" plain></u-button>
					</view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
				</view>
			</view>
			<load-more :status="status" />
		</scroll-view>
		<view class="order-list" v-else>
			<empty />
		</view>
		
		<!-- 删除订单提示 -->
		<u-modal 
			:show="show" 
			title="确认删除该订单？" 
			showCancelButton
			@confirm="confirm"
			@cancel="cancel"
			confirmColor="#FE542C"
		></u-modal>
		
		<!-- 取消订单提示 -->
		<u-modal
			:show="cancellationShow" 
			title="确认取消该订单？" 
			showCancelButton
			@confirm="cancellationConfirm"
			@cancel="cancellationCancel"
			confirmColor="#FE542C"
		></u-modal>
		
		<!-- 确认收货 -->
		<u-modal 
			:show="dialogVisible" 
			title="请确认收货" 
			showCancelButton 
			@confirm="handleConfirm" 
			@cancel="cancelReceived"
			confirmColor="#FE542C"
		></u-modal>
		
		<!-- 申请退款 -->
		<u-modal 
			:show="refundShow" 
			title="确认申请退款？" 
			showCancelButton 
			@confirm="refundComfirm" 
			@cancel="refundCancel"
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
					orderStatus: 0,
					hasAfterSale: 0
				},
			}
		},		
	}
</script>

<style scoped lang="scss">
	@import "@/static/order/index.scss"
</style>
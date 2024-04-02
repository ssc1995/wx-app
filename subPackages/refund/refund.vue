<template>
	<view class="refund">
		<view class="tabs">
			<u-tabs :list="tabs" lineWidth="30" lineColor="#FE542C" :activeStyle="{
					color: '#333',
					transform: 'scale(1.05)'
				}" :inactiveStyle="{
						color: '#606266',
						transform: 'scale(1)'
				}" itemStyle="padding-bottom: 12rpx; height: 34px; width: 25%;" :current="currently" @click="click">
			</u-tabs>
		</view>
		<view class="u-page">
			<scroll-view v-if="isHas" enable-flex class="order-list" scroll-y="true" :show-scrollbar="false" @scrolltolower="lower">
				<view class="content" v-for="(item, index) in list" :key="index" @click="goDetail(item)">
					<view class="">
						<view style="height: 18rpx;"></view>
						<view class="title">
							<view>
								订单编号: {{item.orderSn}}
							</view>
						</view>
						<view class="info">
							<view class="">
								<u--image :showLoading="true" :src="item.pic" width="120rpx" height="120rpx"></u--image>
							</view>
							<view style="padding-left: 18rpx; flex: 1;">
								<view style="line-height: 38rpx;">
									<u--text size="14" :text="item.name" :lines="2"></u--text>
									<view class="actions">
										<view class="">
											申请数量: 1
										</view>
										<view>
											<u--text v-if="item.refundStatus == 30" size="12" type="success" text="审核成功"></u--text>
											<u--text v-else-if="item.refundStatus == 20" size="12" type="primary" text="审核中"></u--text>
											<u--text v-else-if="item.refundStatus == 10" size="12" type="primary" text="待审核"></u--text>
											<u--text v-else-if="item.refundStatus == 40" size="12" type="error" text="审核失败"></u--text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<load-more :status="status" />
			</scroll-view>
			<view class="u-page" v-else>
				<empty />
			</view>
		</view>
	</view>
</template>

<script>
	import mixin from '@/components/minxin';
	export default {
		mixins: [mixin],
		data() {
			return {
				currently: 0,
				tabs: [{
						name: '全部',
						status: 0
					},
					{
						name: '处理中',
						status: 20
					},
					{
						name: '已完成',
						status: 30
					}
				],
				queryParams: {
					pageSize: 10,
					pageNum: 1,
					hasAfterSale: 1,
					refundStatus: 0 // 是否申请售后(0 全部 10 待审核 20 处理中 30 已完成 40 已失败)
				}
			}
		},
		
		onLoad(){
			this.init();
		},
		
		watch: {
			currently(value) {
				this.init();
			}
		},
		
		methods: {
			// tab点击事件
			click(item) {
				this.currently = item.index;
				this.queryParams.refundStatus = item.status;
				// this.init();
			},
			
			// 查看详情
			goDetail(item) {
				uni.navigateTo({
					url: '/subPackages/saleService/saleService?id=' + item.id
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "@/static/order/index.scss";
	.refund {
		height: 100vh;
		color: #333;
		font-size: 28rpx;
		.tabs {
			height: 80rpx;
			background-color: #fff;
		}
	}
	.u-page {
		flex: 1;
		height: calc(100vh - 80rpx);
	}
	.actions {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		margin-top: 18rpx;
		color: #FE542C;
	}
</style>
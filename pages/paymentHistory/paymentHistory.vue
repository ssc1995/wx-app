<template>
	<!-- 还款记录列表 -->
	<view class="payment-history">
		<view class="tabs">
				<u-tabs :list="list" lineWidth="30" lineColor="#FF422C" 
					:activeStyle="{
						color: '#333',
						transform: 'scale(1.05)'
					}" 
					:inactiveStyle="{
							color: '#606266',
							transform: 'scale(1)'
					}" 
					itemStyle="padding-bottom: 12rpx; height: 34px; width: 25%;"
					:current="current"
					@click="click"
				>
				</u-tabs>
		</view>
		<scroll-view 
			v-if="loading" 
			scroll-y="true" 
			class="content" 
			enable-flex
			:show-scrollbar="false"
			@scrolltolower="lower"
		>
			<view style="padding-top: 18rpx;" v-for="(item, index) in historyRecords" :key="index" @click="goRepaymentDetail(item)">
				<view class="plans">
					<view>
						<view class="">按期还款—白条赊购(购买商品)</view>
						<view style="color: #666; font-size: 24rpx; padding-top: 20rpx;">{{item.createTime}}</view>
					</view>
					<view style="display: flex;align-items: center;">
						<view style="text-align: end;">
							<view class="">¥{{item.payAmount | decimal}}</view>
							<view class="isError" v-if="item.status == 0">还款失败</view>
							<view class="status" v-if="item.status == 1">还款成功</view>
							<view class="isLoading" v-if="item.status == 2">进行中</view>
						</view>
						<view class="">
							<u-icon name="arrow-right" color="#979797"></u-icon>
						</view>
					</view>
				</view>
			</view>
			<load-more :status="status" />
		</scroll-view>
		<view 
			v-else
			class="content" 
		>
			<empty />
		</view>
	</view>
</template>

<script>
	import { repaymentLog } from '@/config/api.js';
	export default {
		data() {
			return {
				list: [{
					name: '已完成',
					status: 1,
				}, {
					name: '进行中',
					status: 2,
				},{
					name: '已失败',
					status: 0,
				}
			],
			current: 0,
			queryParams: {
				pageNum: 1,
				pageSize: 10,
				status: 1
			},
			pages: 0,
			loading: true,
			status: 'loadmore',
			historyRecords: []
			}
		},
		
		onLoad() {
			this.getList();
		},
		
		watch: {
			current(val) {
				this.init();
			}
		},
		
		methods: {
			
			// 初始化
			init() {
				this.status = 'loading';
				this.loading = true;
				this.pages = 0;
				this.queryParams.pageNum = 1;
				this.historyRecords = [];
				this.getList();
			},
			
			// 获取数据
			getList() {
				repaymentLog(this.queryParams).then(res => {
					if (res.success) {
						this.historyRecords = this.historyRecords.concat(res.data.records);
						this.pages = res.data.pages;
						if(res.data.total == 0) {
							this.loading = false;
						}
						if (this.historyRecords.length < this.queryParams.pageSize) {
							this.status = 'nomore';
						} else {
							this.status = 'loadmore';
						}
					}
				})
			},
			
			// 滚动加载
			lower(e) {
				if (this.queryParams.pageNum < this.pages) {
					this.queryParams.pageNum++;
					this.status = 'loading';
					this.getList();
				} else {
					this.status = 'nomore';
				}
			},
			
			// tab点击事件
			click(item) {
				this.current = item.index;
				this.queryParams.status = item.status;
				// this.init();
			},
			
			// 还款详情
			goRepaymentDetail(data) {
				uni.navigateTo({
					url: '/subPackages/repaymentDetail/repaymentDetail?id=' + data.id
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.payment-history {
	color: #333;
	font-size: 28rpx;
	display: flex;
	flex-direction: column;
	height: 100vh;
	.tabs {
		height: 80rpx;
		background-color: #fff;
	}
}

.content {
		flex: 1;
		height: calc(100vh - 80rpx);
		h4 {
			height: 60rpx;
			font-size: 28rpx;
			font-family: PingFangSC, PingFang SC;
			font-weight: 600;
			line-height: 60rpx;
			padding: 0 20rpx;
			background-color: #fff;
		}
	}
	
	.plans {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		height: 100rpx;
		padding: 18rpx 22rpx;
		
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
</style>

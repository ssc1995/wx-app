<template>
	<!-- 所有账单 -->
	<view class="borrow-list">
		<view class="tabs">
			<u-tabs :list="list" lineWidth="30" lineColor="#FE542C" 
				:activeStyle="{
					color: '#333',
					transform: 'scale(1.05)'
				}" 
				:inactiveStyle="{
						color: '#606266',
						transform: 'scale(1)'
				}" 
				itemStyle="padding-bottom: 12rpx; height: 34px; width: 40%;"
				:current="current"
				@click="click"
			>
			</u-tabs>
		</view>
		<scroll-view 
			v-if="loaidng"
			scroll-y="true" 
			enable-flex
			:show-scrollbar="false" 
			class="u-page"
			@scrolltolower="lower"
		>
			<view>
				<view class="borrow-items" v-for="(item, index) in borrowList" :key="index" @click="goBorrowDetail(item)">
					<view class="item">
						<view class="title">
							<view style="font-size: 25rpx;">{{item.createTime}}</view>
							<view style="display: flex; align-items: center;">
								<text class="status_title" :class="{has: item.status == 1, warn: item.status == 2}">{{statusName(item.status)}}</text>
								<u-icon name="arrow-right" :color="iconColor(item.status)"></u-icon>
							</view>
						</view>
						<view class="content">
							<view class="">
								<u--image :showLoading="true" :src="imgSrc" width="68rpx" height="66rpx"></u--image>
							</view>
							<view class="tit">
								{{item.title}}
							</view>
							<view>
								<u-tag 
									:text="item.styleName" 
									plain 
									size="mini" 
									color="#999" 
									border-color="rgb(237,237,237)" 
									bg-color="rgb(237,237,237)"
									shape="circle"
								></u-tag>
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
</template>

<script>
	import { getBorrows } from '@/config/api.js'
	export default {
		data() {
			return {
				list: [{
					name: '待还款',
					status: 2
				}, {
					name: '已还款',
					status: 1
				}],
				imgSrc: this.$imgSrc + '/baitiao.png',
				borrowList: [],
				current: 0,
				queryParams: {
					pageNum: 1,
					pageSize: 10,
					status: 2
				},
				pages: 0,
				status: 'loadmore',
				loaidng: true
				
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
				this.loaidng = true;
				this.pages = 0;
				this.queryParams.pageNum = 1;
				this.borrowList = [];
				this.getList();
			},
			
			// 获取数据
			getList() {
				getBorrows(this.queryParams).then(res => {
					if (res.success) {
						this.loading = false;
						this.borrowList = this.borrowList.concat(res.data.records);
						this.pages = res.data.pages;
						if(res.data.total == 0) {
							this.loaidng = false;
						}
						if (this.borrowList.length < this.queryParams.pageSize) {
							this.status = 'nomore';
						} else {
							this.status = 'loadmore';
						}
					}
				})
			},
			
			// 状态
			statusName(status) {
				if(status == 1) return "已还款";
				if(status == 2) return "待还款";
				if(status == 3) return "已违约";
			},
			
			// 图标颜色
			iconColor(status) {
				if(status == 1) return "#5ac725";
				if(status == 2) return "#ff9900";
				if(status == 3) return "#FF422C";
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
			
			// 账单详情
			goBorrowDetail(data) {
				uni.navigateTo({
					url: '/subPackages/borrowDetail/borrowDetail?id=' + data.id
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.borrow-list {
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
		.borrow-items {
			padding: 18rpx 18rpx 0 28rpx;
		}
		.item {
			background-color: #fff;
			border-radius: 12rpx;
			padding: 24rpx;
		}
		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	
	.content {
		display: flex;
		align-items: center;
		background-color: #FAFAFA;
		margin-top: 24rpx;
		padding: 40rpx 0 40rpx 34rpx;
		.tit {
			height: 30rpx;
			font-size: 30rpx;
			font-family: PingFangSC, PingFang SC;
			font-weight: 400;
			line-height: 30rpx;
			padding: 0 20rpx 0 22rpx;
		}
	}
	
	.status_title {
		font-size: 25rpx; 
		color: #FF422C;
	}
	
	.warn {
		color: #ff9900;
	}
	
	.has {
		color: #5ac725;
	}

</style>
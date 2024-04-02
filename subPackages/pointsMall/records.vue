<template>
	<!-- 兑换记录 -->
	<view>
		<scroll-view enable-flex scroll-y="true" :show-scrollbar="false" class="points-mall" @scrolltolower="lower"
			v-if="loading">
			<view class="items" v-for="(item,index) in list" :key="index" @click="handleDetails(item)">
				<view class="store">
					<view class="">
						积分商城
					</view>
					<view class="">
						<u--text size="mini" :type="statusList[item.status].type" :text="statusList[item.status].label"></u--text>
					</view>
				</view>
				<view class="flex">
					<view class="">
						<u--image :showLoading="true" :src="item.goodsPic" width="120rpx" height="120rpx"></u--image>
					</view>
					<view class="content">
						<view class="title">
							<u--text :lines="2" :text="item.goodsTitle" bold size="14"></u--text>
						</view>
						<view class="points">
							{{item.integral}} 积分
						</view>
					</view>
				</view>
				<view style="color: #999; margin-top: 18rpx; font-size: 26rpx;">
					共1件商品
				</view>
				<view class="btn">
					<view class="">
						<u-button text="兑换详情" color="#FE542C" size="small" @tap.stop="handleDetails(item)"></u-button>
					</view>
				</view>
			</view>
			<load-more :status="status" />
		</scroll-view>
		<view class="points-mall" v-else>
			<empty />
		</view>
	</view>
</template>

<script>
	import {
		clientGoodLog
	} from '@/config/api.js';
	export default {
		data() {
			return {
				queryParams: {
					pageNum: 1,
					pageSize: 10,
				},
				status: 'loadmore',
				loading: true,
				pages: 0,
				list: [],
				// 0:已退签 1:已签收 2:配送中 3:问题件
				statusList: [{
						label: '兑换失败',
						value: 0,
						type: 'error'
					},
					{
						label: '兑换成功',
						value: 1,
						type: 'success'
					},
					{
						label: '待发货',
						value: 2,
<<<<<<< HEAD
						type: 'warning'
=======
<<<<<<< HEAD
						type: 'warning'
=======
						type: 'primary'
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
					},
					{
						label: '待签收',
						value: 3,
<<<<<<< HEAD
						type: 'warning'
=======
<<<<<<< HEAD
						type: 'warning'
=======
						type: 'primary'
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
					},
				]
			}
		},

		onLoad() {
			this.loading = true;
			this.getList();
		},

		methods: {
			getList() {
				this.status = 'loading';
				clientGoodLog(this.queryParams).then(res => {
					if (res.success) {
						this.list = this.list.concat(res.data.records);
						this.pages = res.data.pages;
						if(res.data.total == 0) {
							this.loading = false;
						};
						if (res.data.records.length < this.queryParams.pageSize) {
							this.status = 'nomore';
						} else {
							this.status = 'loadmore';
						}
					}
				})
			},

			// 滚动加载
			lower() {
				if (this.queryParams.pageNum < this.pages) {
					this.queryParams.pageNum++;
					this.status = 'loading';
					this.getList();
				} else {
					this.status = 'nomore';
				}
			},
			
			// 查看详情
			handleDetails(record) {
				uni.navigateTo({
					url: '/subPackages/redemptionDetails/redemptionDetails?id=' + record.id
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.points-mall {
		height: 100vh;
		color: #333;
		font-size: 28rpx;
	}

	.items {
		padding: 0 18rpx 18rpx 18rpx;
		margin: 0 18rpx;
		margin-bottom: 18rpx;
		background-color: #fff;
		border-radius: 10rpx;
	}

	.store {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70rpx;
		line-height: 70rpx;
	}

	.flex {
		display: flex;
		margin-top: 18rpx;
		margin-left: 18rpx;
	}

	.content {
		margin-left: 18rpx;
		display: flex;
		flex-direction: column;
	}

	.title {
		line-height: 32rpx;
	}

	.points {
		color: #999;
		font-size: 24rpx;
		line-height: 32rpx;
		padding-top: 18rpx;
	}
	
	.btn {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
</style>
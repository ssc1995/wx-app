<template>
	<view>
		<scroll-view enable-flex scroll-y="true" :show-scrollbar="false" class="points-mall" @scrolltolower="lower"
			v-if="loading">
			<view class="main">
				<view class="items" v-for="(item,index) in list" :key="index" @click="gotoDetail(item)">
					<view class="flex">
						<view class="">
							<u--image :showLoading="true" :src="item.goodsPic" width="200rpx" height="200rpx"
								radius="5rpx"></u--image>
						</view>
						<view class="content">
							<view class="title">
								<u--text :lines="1" :text="item.goodsTitle" bold></u--text>
							</view>
							<view class="points">
								{{item.integral}} 积分
							</view>
						</view>
					</view>
					<view class="btn">
						<view class="">
							<u-button text="立即兑换" size="small" color="#FE542C" @tap.stop="gotoDetail(item)"></u-button>
						</view>
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
		goodList
	} from '@/config/api.js';
	export default {
		data() {
			return {
				queryParams: {
					pageNum: 1,
					pageSize: 10,
				},
				status: 'loadmore',
				pages: 0,
				list: [],
				loading: true
			}
		},

		onLoad() {
			this.getList()
		},

		methods: {
			getList() {
				this.status = 'loading';
				goodList(this.queryParams).then(res => {
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
			gotoDetail(record) {
				uni.navigateTo({
					url: '/subPackages/pointsMall/detail?id=' + record.id
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

	.main {
		display: flex;
		flex-wrap: wrap;

		// justify-content: center;
		// align-items: center;
	}

	.items {
		padding: 2%;
		margin: 1%;
		background-color: #fff;
		border-radius: 10rpx;
		width: 44%;
	}

	.content {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
	}

	.title {
		line-height: 32rpx;
		padding-top: 18rpx;
	}

	.points {
		color: #FE542C;
		line-height: 32rpx;
		padding: 18rpx 0;
	}

	.btn {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
</style>
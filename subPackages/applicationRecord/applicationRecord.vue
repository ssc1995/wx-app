<template>
	<scroll-view enable-flex scroll-y="true" :show-scrollbar="false" class="appliction-record" @scrolltolower="lower">
		<view class="list" v-if="loading">
			<view v-for="(item, index) in list" :key="index">
				<view style="height: 18rpx;"></view>
				<view class="item">
					<view class="title">
						<view class="name">白条·申请额度</view>
						<view class="" v-if="item.reviewStatus == 1">
							<u-tag text="审批通过" size="mini" bg-color="#00DC82" borderColor="#00DC82" shape="circle"></u-tag>
						</view>
						<view class="" v-else-if="item.reviewStatus == 0">
							<u-tag text="审核驳回" size="mini" bg-color="#FE542C" borderColor="#FE542C" shape="circle"></u-tag>
						</view>
						<view class="" v-else>
							<u-tag text="审核中" size="mini" bg-color="#3890F9" borderColor="#3890F9" shape="circle"></u-tag>
						</view>
					</view>
					<view class="content">
						获得额度：{{item.finalAmount | decimal}}
					</view>
					<view class="content">
						申请时间：{{item.applyTime}}
					</view>
					<view class="content">
						审核时间：{{item.reviewTime ? item.reviewTime : ''}}
					</view>
					<view class="content">
						审核结果：{{item.remark ? item.remark: ''}}
					</view>
				</view>
			</view>
			<load-more :status="status" />
		</view>
		<view v-else class="list" style="height: 100%;">
			<empty />
		</view>
	</scroll-view>
</template>

<script>
	import {
		applyRecords
	} from '@/config/api.js'
	export default {
		data() {
			return {
				list: [],
				queryParams: {
					pageSize: 10,
					pageNum: 1
				},
				status: 'loading',
				pages: 0,
				loading: true
			}
		},

		onLoad() {
			this.getList();
		},
		methods: {
			getList() {
				applyRecords(this.queryParams).then(res => {
					if (res.success) {
						this.list = this.list.concat(res.data.records);
						this.pages = res.data.pages;
						if(res.data.total == 0) {
							this.loading = false;
						};
						if (this.list.length < this.queryParams.pageSize) {
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
		}
	}
</script>

<style scoped lang="scss">
	.appliction-record {
		font-size: 14px;
		color: #333;
		height: 100vh;
	}

	.item {
		padding: 18rpx 0;
		margin: 0 18rpx;
		background-color: #fff;
		border-radius: 12rpx;

		.title {
			height: 90rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1rpx solid #D8D8D8;
			padding: 0 18rpx;

			.name {
				height: 42rpx;
				font-size: 30rpx;
				font-family: PingFangSC, PingFang SC;
				font-weight: 600;
				line-height: 42rpx;
				letter-spacing: 1px;
			}
		}

		.content {
			font-size: 25rpx;
			font-family: PingFangSC, PingFang SC;
			font-weight: 400;
			color: #999;
			line-height: 50rpx;
			padding: 0 18rpx;
		}
	}
</style>
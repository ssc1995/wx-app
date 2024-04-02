<template>
<view class="">
	<u-loading-page 
		:loading="loading" 
		loading-color="#FE542C" 
		font-size="14" 
		icon-size="30"
		loading-text="蜜田信易购官方旗舰店"
		color="#FE542C"
		image="https://mt-1322382233.cos.ap-shanghai.myqcloud.com/webIcon/icon/logo.png"
	></u-loading-page>
	<scroll-view 
		enable-flex 
		scroll-y="true" 
		class="container" 
		refresher-enabled="true"
		@refresherrefresh="onRefresh"
		@scrolltolower="lower" 
		:refresher-triggered="triggered"
		:show-scrollbar="false" 
		v-if="loading==false"
	>
		<u-swiper 
			:list="swiperList" 
			keyName="picPath"
<<<<<<< HEAD
			height="325" 
=======
<<<<<<< HEAD
			height="325" 
=======
			height="300" 
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
			:autoplay="false" 
			:circular="true" 
			:indicator="true" 
			indicatorMode="dot"
<<<<<<< HEAD
			indicatorActiveColor="#FF422C"
=======
<<<<<<< HEAD
			indicatorActiveColor="#FF422C"
=======
			indicatorActiveColor="#FE542C"
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
			@click="onClickImg"
		>
		</u-swiper>
	
		<!-- 横向滚动列表 -->
		<view class="scrollx">
			<view class="title">
				超值热卖
			</view>
			<u-scroll-list :indicator="false">
				<view 
					v-for="(item, index) in hotList" 
					:key="index" 
					class="item"
					@click="gotoDetail(item.id)"
				>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
					<!-- <view class="">
						<u--text :lines="1" :text="item.name" :size="12" :lineHeight="16" color="#333" bold></u--text>
					</view> -->
					<u--image :showLoading="true" :src="item.pic" width="250rpx" height="181rpx"></u--image>
					<!-- <view class="sales">
						￥{{item.salePrice | decimal}}
					</view> -->
					<view class="by-stages">
						<text style="color: #FF2121;">￥{{item.salePrice | decimal}}</text>
						<!-- <text style="color: #FF2121;">￥{{item.periodPrice | decimal}}</text>
						<text v-if="item.period != 0">×{{item.period}}期</text> -->
					</view>
<<<<<<< HEAD
=======
=======
					<view class="">
						<u--text :lines="1" :text="item.name" :size="12" :lineHeight="16" color="#333" bold></u--text>
					</view>
					<u--image :showLoading="true" :src="item.pic" width="180rpx" height="170rpx"></u--image>
					<view class="sales">
						￥{{item.salePrice | decimal}}
					</view>
					<view class="by-stages">
						<text style="color: #FE542C;">￥{{item.periodPrice | decimal}}</text>
						<text v-if="item.period != 0">×{{item.period}}期</text>
					</view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
				</view>
			</u-scroll-list>
		</view>
		<view class="content">
			<view class="title">
<<<<<<< HEAD
				精品好物
=======
<<<<<<< HEAD
				精品好物
=======
				精品分期
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
			</view>
			<view class="goods-list">
				<view class="goods" v-for="(item,index) in list" :key="index" @click="gotoDetail(item.id)">
					<view class="goods-img">
						<u--image :showLoading="true" :src="item.pic" width="100%" height="300rpx"></u--image>
					</view>
					<view class="goods-info">
						<view class="goods-name">
							<u--text :lines="2" :text="item.name" :size="13" :lineHeight="16" color="#333" :bold="true"></u--text>
						</view>
						<view class="tags">
							<view class="tag" v-for="lab in item.label&&item.label.split('|')" :key="lab">
								<u-tag v-if="lab!=''" :text="lab" size="mini" plain type="warning"></u-tag>
							</view>
						</view>
						<view class="goods-price">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
							<!-- ￥{{item.salePrice | decimal}} -->
						</view>
						<view class="goods-price-by-stages">
							<text style="font-size: 38rpx">￥{{item.salePrice | decimal}}</text>
							<!-- <text>￥</text>
							<text style="font-size: 38rpx">{{item.period != 0 ? item.periodPrice : item.salePrice | decimal}}</text>
							<text style="color: #666" v-if="item.period != 0">×{{item.period}}期</text> -->
<<<<<<< HEAD
=======
=======
							￥{{item.salePrice | decimal}}
						</view>
						<view class="goods-price-by-stages">
							<text>￥</text>
							<text style="font-size: 38rpx">{{item.period != 0 ? item.periodPrice : item.salePrice | decimal}}</text>
							<text style="color: #666" v-if="item.period != 0">×{{item.period}}期</text>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
						</view>
					</view>
				</view>
			</view>
			<load-more :status="status" />
		</view>
	</scroll-view>
</view>
</template>

<script>
	import { queryHotList, queryLoanList, getSwiper } from '@/config/home.js';
<<<<<<< HEAD
	import { isGologin } from '@/utils/tool.js';
=======
<<<<<<< HEAD
	import { isGologin } from '@/utils/tool.js';
=======
		import { isGologin } from '@/utils/tool.js';
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
	export default {
		data() {
			return {
				queryParams: {
					pageNum: 1,
					pageSize: 10,
				},
				status: 'loading',
				pages: 0,
<<<<<<< HEAD
				swiperList: [],
=======
<<<<<<< HEAD
				swiperList: [],
=======
				swiperList: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
				list: [],
				hotList: [],
				loading: true,
				triggered: false
			}
		},

		onLoad(query) {
			const scene = decodeURIComponent(query.scene);
			if(scene != 'undefined' && scene != undefined) {
				this.$store.dispatch('Login/getOtherId', scene);
			};
			this.getSwipe().then(()=> this.getHotList().then(()=> this.getList()));
		},

		methods: {
			
			// 轮播图
			getSwipe(){
				return new Promise((resolve, reject)=> {
					getSwiper().then(res=> {
						if(res.success) {
							resolve();
							this.swiperList = res.data;
						}
					})
				})
			},
			
			// 点击轮播图
			onClickImg(idx) {
				let obj = this.swiperList.find((item, index) => index == idx);
				if(obj) {
					let url = `/pages/goodsDetail/goodsDetail?id=${obj.goodsId}`;
					isGologin(url);
				}
			},
				
			// 超值热卖
			getHotList() {
				return new Promise((resolve, reject)=>{
					queryHotList().then(res=> {
						if(res.success) {
							resolve();
							this.hotList = res.data.records;
						}
					})
				})
			},
			
<<<<<<< HEAD
			// 精品赊购
=======
<<<<<<< HEAD
			// 精品赊购
=======
			// 精品分期
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
			getList() {
				queryLoanList(this.queryParams).then(res => {
					if (res.success) {
						this.list = this.list.concat(res.data.records);
						this.pages = res.data.pages;
						this.loading = false;
						if (res.data.records.length < this.queryParams.pageSize) {
							this.status = 'nomore';
						} else {
							this.status = 'loadmore';
						}
					}
				}).finally(() => {
					this.triggered = false;
				})
			}, 
			
			// 跳转商品详情
			gotoDetail(id) {
				let url = `/pages/goodsDetail/goodsDetail?id=${id}`;
				isGologin(url);
			},
			
			// 下拉刷新
			onRefresh() {
				this.triggered = true;
				this.queryParams.pageNum = 1;
				this.list = [];
				this.getSwipe().then(()=> this.getHotList().then(()=> this.getList()));
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
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		font-size: 14px;
		color: #333;
		height: 100vh;
	}
	.scrollx {
		margin-top: 18rpx;
		.title {
			font-size: 32rpx;
			font-family: PingFangSC, PingFang SC;
			font-weight: 600;
			color: #333;
			line-height: 44px;
			background-color: #fff;
			padding-left: 18rpx;
		}
				
		& .item:first-child {
			margin-left: 18rpx;
		}
		.item {
			margin-top: 18rpx;
			margin-right: 18rpx;
			text-align: center;
			background-color: #fff;
			padding: 18rpx;
			.sales {
				font-size: 24rpx;
				font-family: PingFangSC, PingFang SC;
				font-weight: 400;
				color: #999;
				line-height: 24rpx;
				text-decoration: line-through;
				padding-top: 36rpx;
				background-color: #fff;
			}
			.by-stages {
<<<<<<< HEAD
				padding-top: 18rpx;
=======
<<<<<<< HEAD
				padding-top: 18rpx;
=======
				padding-top: 6rpx;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
				font-size: 25rpx;
				font-family: PingFangSC, PingFang SC;
				font-weight: 400;
				color: #666666;
				line-height: 25rpx;
			}
		}
	}
	
	.content {
		// background-color: #fff;
		.title {
			height: 76rpx;
			font-size: 32rpx;
			font-family: PingFangSC, PingFang SC;
			font-weight: 600;
			color: #333333;
			line-height: 76rpx;
			padding: 10rpx 18.12rpx;
			background-color: #fff;
		}
		.goods-list {
			display: flex;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
			flex-wrap: wrap;
		}
		.goods {
			width: 44%;
			padding: 2%;
			margin: 18rpx 1% 0 1%;
			background-color: #fff;
			border-radius: 10rpx;
			.goods-info {
<<<<<<< HEAD
=======
=======
			// justify-content: space-around;
			// align-items: center;
			flex-wrap: wrap;
		}
		.goods {
			// display: flex;
			width: 44%;
			padding: 2%;
			margin: 18rpx 1% 0 1%;
			// padding: 18rpx 48rpx;
			// margin-bottom: 18rpx;
			background-color: #fff;
			border-radius: 10rpx;
			.goods-info {
				// padding-left: 50rpx;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
				padding-top: 18rpx;
				.goods-name {
					height: 64rpx;
				}
			}
			.tags {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
				display: flex; 
				flex-direction: row;
				flex-wrap: wrap;
				.tag {
					margin-top: 14rpx;
<<<<<<< HEAD
=======
=======
				padding-top: 14rpx;
				display: flex; 
				flex-direction: row;
				.tag {
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
					margin-right: 8rpx;
				}
			}
			.goods-price {
<<<<<<< HEAD
				padding-top: 30rpx;
=======
<<<<<<< HEAD
				padding-top: 30rpx;
=======
				padding-top: 70rpx;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
				height: 25rpx;
				font-size: 25rpx;
				font-family: PingFangSC, PingFang SC;
				font-weight: 400;
				color: #999;
				line-height: 25rpx;
			}
			.goods-price-by-stages {
				font-size: 25rpx;
				font-family: PingFangSC, PingFang SC;
				font-weight: 500;
				color: #FE542C;
			}
		}
	}
</style>
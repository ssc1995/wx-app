<template>
	<scroll-view scroll-y="true" class="container" @scrolltolower="lower">
		<!-- 		<view class="header">
			<view class="">
				<u-icon name="map" label="武汉"></u-icon>
			</view>
			<view class="search">
				<u-search 
					placeholder="请输入搜索内容" 
					v-model="keyword" 
					shape="round"
					:clearabled="true"
					:showAction="false"
					borderColor="#f8f9fd"
				></u-search>
			</view>
		</view> -->
		<view class="content">
			<u-swiper :list="list" height="220" :autoplay="true" :circular="true" :indicator="true" indicatorMode="dot">
			</u-swiper>
			<view>
				<view class="item" v-for="(item,index) in list" :key="index" @click="gotoActivity">
					<view class="">
						<u--image :showLoading="true" :src="item" width="100px" height="100px" radius="4"></u--image>
					</view>
					<view class="mean">
						<view class="title">
							挑战两小时自信演讲
						</view>
						<view class="time">
							活动时间：2023-09-22 ~ 2023-09-25
						</view>
						<view class="address">
							地址：华容区
						</view>
						<view class="applic">
							<view class="">
								<u-tag text="免费" plain size="mini" type="warning"></u-tag>
							</view>
							<view class="applic-btn">
								<u-tag text="258人已报名" plain size="mini" type="error"></u-tag>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				current: 0,
				list: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/7.jpg',
					'https://cdn.uviewui.com/uview/album/8.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',
					'https://cdn.uviewui.com/uview/album/10.jpg',
				],
			}
		},

		mounted() {
			// uni.getLocation({
			// 	type: 'wgs84',
			// 	success: function(res) {
			// 		console.log('当前位置的经度：' + res.longitude);
			// 		console.log('当前位置的纬度：' + res.latitude);
			// 	}
			// });
		},

		methods: {
			gotoActivity() {
				uni.navigateTo({
					url: '/pages/activityDetail/activityDetail'
				})
			},

			lower: function(e) {
				console.log(e)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		font-size: 14px;
		color: #333;

		.content {
			padding: 10px 15px;
		}
	}

	.header {
		display: flex;
		align-items: center;
		margin-bottom: 10px;

		.search {
			margin-left: 10px;
		}
	}

	.item {
		margin-top: 15px;
		display: flex;
		justify-content: flex-start;
		background-color: #fff;
		padding: 10px;
		border-radius: 4px;
		box-shadow: 0 3px 3px 3px rgba(0, 0, 0, .1);

		.mean {
			padding-left: 15px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;

			.title {
				font-weight: bold;
			}

			.time,
			.address {
				font-size: 10px;
				color: #999;
				line-height: 18px;
			}

			.applic {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}
</style>
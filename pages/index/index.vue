<template>
	<view class="container">
		<view class="header">
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
		</view>
		<u-swiper :list="list" height="200" :autoplay="true" :circular="true"></u-swiper>

		<!--  -->
		<u-scroll-list>
			<view v-for="(item, index) in list1" :key="index" class="list" @click="gotoActivity">
				<u--image :showLoading="true" :src="item.thumb" width="60px" height="60px" shape="circle"></u--image>
				<view class="title">
					{{item.title}}
				</view>
			</view>
		</u-scroll-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				list: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				list1: [{
					thumb: "https://cdn.uviewui.com/uview/goods/1.jpg",
					title: '短期工'
				}, 
				{
					thumb: "https://cdn.uviewui.com/uview/goods/2.jpg",
					title: '长期工'
				}]
			}
		},

		mounted() {
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
				}
			});
		},

		methods: {
			gotoActivity() {
				uni.navigateTo({
					url: '/pages/activityClassify/activityClassify'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 10px 15px;
		font-size: 14px;
	}

	.header {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		.search {
			margin-left: 10px;
		}
	}
	.list {
		margin: 15px;
		text-align: center;
		.title {
			padding-top: 15px;
		}
	}
</style>
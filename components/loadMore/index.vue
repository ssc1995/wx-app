<template>
	<view class="loadmore">
		<u-loadmore
			:status="status" 
		  :loading-text="loadingText" 
		  :nomore-text="nomoreText" 
			lineColor="#FE542C"
			iconColor="#FE542C"
			color="#FE542C"
			line
			loadingIcon="semicircle"
		/>
		<view style="height: 18rpx;"></view>
	</view>
</template>

<script>
	export default {
		props: {
			status: {
				type: String,
				default: 'loading'
			}
		},
		data() {
			return {
				loadingText: '努力加载中',
				nomoreText: '我是有底线的',
			}
		}
	}
</script>

<style>
</style>
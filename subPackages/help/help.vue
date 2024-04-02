<template>
	<scroll-view enable-flex scroll-y="true" class="help" :show-scrollbar="false">
		<view class="title">
			<view class="line"></view>
			<view style="padding: 0 8rpx; color: #999;">
				热门问题
			</view>
			<view class="line"></view>
		</view>
		<view class="content">
			<u-cell-group>
				<u-cell 
					v-for="(item, index) in list" 
					:key="index" 
					:title="item.name" 
					isLink
					:url="'/subPackages/webView/webView?id=' + item.id"
				></u-cell>
			</u-cell-group>
		</view>
	</scroll-view>
</template>

<script>
	import { clientListCode } from '@/config/home.js'
	export default {
		data() {
			return {
				list: []
			}
		},
			
		onLoad() {
			this.getList()
		},
		
		methods: {
			getList() {
				clientListCode("help").then(res=> {
					if(res.success) {
						this.list = res.data;
					}
				})
			},
		}
	}
</script>

<style scoped lang="scss">
.help {
	color: #333;
	height: 100vh;
	font-size: 28rpx;
}
.title {
	height: 62rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	.line {
		width: 42rpx;
		height: 2rpx;
		background: #D8D8D8;
	}
}
.content {
	background-color: #fff;
}
</style>

<template>
	<view class="u-content">
		<u-parse :content="content"></u-parse>
	</view>
</template>

<script>
	import { docDetail } from '@/config/home.js';
	export default {
		data() {
			return {
				info: {},
				content: ""
			}
		},
		
		onLoad(option) {
			let { id } = option;
			this.getDetail(id);
		},
		
		methods: {
			getDetail(id) {
				docDetail(id).then(res=> {
					if(res.success) {
						this.info = res.data;
						this.content = res.data.content;
						uni.setNavigationBarTitle({
						    title: res.data.name
						})
					}
				})
			}
		}
	}
</script>

<style>
.u-content {
	padding: 18rpx;
	font-size: 28rpx;
	background-color: #fff;
	line-height: 1.6;
}
</style>

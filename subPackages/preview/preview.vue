<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="h5Url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				},
				h5Url: ''
			}
		},
		
		//接受参数
		onLoad(option) {
			const item = JSON.parse(decodeURIComponent(option.item));
			this.h5Url = item;
		},
		
		
	}
</script>

<style>

</style>

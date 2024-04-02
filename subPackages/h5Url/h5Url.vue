<template>
	<web-view :src="src"></web-view>
</template>

<script>
	export default {
		data() {
			return {
				src: ''
			}
		},
		
		// 在test.vue页面接受参数
		onLoad(option) {
			const url = JSON.parse(decodeURIComponent(option.url));
			this.src = url;
		},
		
		methods: {
			
		}
	}
</script>

<style>

</style>

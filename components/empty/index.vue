<template>
	<view class="set_empty">
		<u-empty :icon="emtpyImg" text="这里空空的哦~"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				emtpyImg: this.$imgSrc + '/empty.png',
			}
		},
	}
</script>

<style scoped lang="scss">
	.set_empty {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
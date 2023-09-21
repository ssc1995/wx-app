<template>
	<view class="mine">
		<view class="info">
			<view class="info-avater">
				<u-avatar 
					src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"
					shape="circle"
				></u-avatar>
				<text>用户昵称</text>
			</view>
			<view>
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.mine {
		padding: 0 15px;
	}
	.info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.info-avater {
			display: flex;
			align-items: flex-end;
			text {
				padding-left: 5px;
			}
		}
	}

</style>

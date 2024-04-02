<template>
	<scroll-view enable-flex scroll-y="true" :show-scrollbar="false" class="about">
		<view class="title">
			<view class="icon">
				<u-image 
					src="https://mt-1322382233.cos.ap-shanghai.myqcloud.com/webIcon/icon/logo.png" 
					width="181rpx"
					height="182rpx"
					radius="47rpx"
				></u-image>
			</view>
			<view style="font-size: 30rpx;height: 42rpx;line-height: 42rpx; padding-top: 32rpx; letter-spacing: 1px;">
				当前版本：V{{detail.version}}
			</view>
		</view>
		<view class="content">
			<u-cell-group>
				<u-cell title="介绍" isLink @click="openModal"> </u-cell>
				<u-cell title="客服QQ" :value="detail.qq"> </u-cell>
				<u-cell title="客服电话" :value="detail.tel"> </u-cell>
				<u-cell title="客服在线时间" :value="detail.time"> </u-cell>
			</u-cell-group>
		</view>
	</scroll-view>
</template>

<script>
	import { about, clientListCode } from '@/config/home.js';
	export default {
		data() {
			return {
				detail: {},
				show:false,
				title: "",
				content: "",
				list: []
			}
		},
		
		onLoad() {
			this.getList();
			clientListCode("introduce").then(res=> {
				if(res.success) {
					this.list = res.data;
				}
			})
		},
		
		methods: {
			getList() {
				about().then(res=> {
					if(res.success) {
						this.detail = res.data;
					}
				})
			},
			
			// 打开
			openModal() {
				uni.navigateTo({
					url: '/subPackages/webView/webView?id=' + this.list[0].id
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.about {
	color: #333;
	font-size: 28rpx;
	height: 100vh;
}
.title {
	height: 466rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.icon {
	width: 181rpx;
	height: 182rpx;
	// background: linear-gradient(69deg, #FF8972 0%, #FE5364 100%);
	border-radius: 47rpx;
}

.content {
	background-color: #fff;
}

::v-deep .u-modal__content {
	max-height: 600rpx;
}
::v-deep .slot-content {
	overflow-y: scroll;
}
</style>

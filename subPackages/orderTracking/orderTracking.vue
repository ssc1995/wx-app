<template>
<view class="">
	<u-loading-page loading-color="#FE542C" font-size="14" color="#FE542C" :loading="loading"></u-loading-page>
	<scroll-view enable-flex class="order-tracking" scroll-y="true" :show-scrollbar="false" v-if="loading == false">
		<view class="title">
			<view class="cell">
				<view class="label">
					快递单号：
				</view>
				<view class="">
					{{info.expressSn}}
				</view>
			</view>
			<view class="cell">
				<view class="label">
					物流公司：
				</view>
				<view class="">
					{{info.name}}
				</view>
			</view>
			<view class="cell">
				<view class="label">
					支付时间：
				</view>
				<view class="">
					{{info.payTime}}
				</view>
			</view>
		</view>
		<view class="content">
			<u-steps 
				:current="current" 
				direction="column" 
				activeColor="#FE542C" 
				inactiveColor="#D3D3D3"
			>
				<u-steps-item 
					v-for="(item, index) in list" 
					:key="index" 
					:title="item.context" 
					:desc="item.time"
				>
					<template slot="icon">
						<u-icon
						 v-if="current >= index"
							name="checkmark-circle-fill" 
							size="20" 
							color="#FE542C"
						></u-icon>
						<view v-else class="slot-icon"> </view>
					</template>
				</u-steps-item>
			</u-steps>
		</view>
		<!-- 确定 -->
	<!-- 	<view class="footer">
			<view class="">
				<u-button text="确 定" color="#FE542C" @click="handlerOk"></u-button>
			</view>
		</view> -->
	</scroll-view>
</view>
</template>

<script>
	import { orderExpress } from '@/config/api.js'
	export default {
		data() {
			return {
				current: 0,
				list: [],
				info: {},
				loading: false
			}
		},
		
		onLoad(option) {
			let { id } = option;
			this.getDetails(id);
		},
		
		methods: {
			// 获取详情
			getDetails(id) {
				this.loading = true;
				orderExpress(id).then(res=> {
					if(res.success) {
						this.info = res.data;
						this.list = res.data.expressList;
						this.loading = false;
					}
				})
			},
			
			// 确认
			handlerOk() {
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="scss">
.order-tracking {
	color: #333;
	height: 100vh;
	font-size: 28rpx;
}

.title {
	background-color: #fff;
}
.cell {
	display: flex;
	align-items: center;
	line-height: 48rpx;
	padding: 0 18rpx;
	color: #666;
	font-size: 22rpx;
	.label {
		width: 135rpx;
	}
}
.content {
	margin-top: 18rpx;
	background-color: #fff;
	padding: 30rpx 38rpx 30rpx 38rpx;
}
.slot-icon {
	width: 30rpx;
	height: 30rpx;
	background: #D3D3D3;
	opacity: 0.99;
	border-radius: 50%;
}
.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: #fff;
		z-index: 1;
		view {
			padding: 36rpx;
		}
	}
</style>

<template>
	<scroll-view enable-flex scroll-y="true" class="address-list" :show-scrollbar="false">
		<view class="content">
			<view class="u-card" v-for="item in list" :key="item.id" @click="onSelect(item)"> 
				<view style="padding: 0 44rpx; display: flex; align-items: baseline;">
					<view class="">
						<text class="title">{{item.consignee}}</text>
					</view>
					<view class="">
						<text class="mobile">{{item.phone}}</text>
					</view>
				</view>
				<view class="address">
					<text v-if="item.isDefault == 1" style="color: #FE542C;">[默认地址]</text>
					{{item.areaName}} {{item.address}}
				</view>
			</view>
			<view class="footer" v-if="disabled">
				<view class="">
					<u-button text="地址管理" color="#FE542C" @click="rightClick" shape="circle"></u-button>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import {getAddress} from '@/config/home.js'
	export default {
		data() {
			return {
				list: [],
				disabled: true,
				backRefresh: false
			}
		},
		
		onLoad(option) {
			// 确认订单 confirmOrder
			if(option.type == 'confirmOrder') {
				this.disabled = false;
			};
		},
		
		onShow() {
			this.getList();
		},
		
		methods: {
			
			// 获取地址
			getList() {
				getAddress().then(res=> {
					if(res.success) {
						this.list = res.data;
					}
				})
			},
			
			// 管理
			rightClick() {
				uni.navigateTo({
					url: '/subPackages/manageAddress/manageAddress'
				})
			},
			
			// 选择地址
			onSelect(item) {
				if(this.disabled) return false;
				this.$store.dispatch('Common/setAddress', {...item, addressId: item.id});
				uni.navigateBack();
			},
		}
	}
</script>

<style scoped lang="scss">
	.address-list {
		padding-bottom: 120rpx;
	}
	.u-card {
		background-color: #fff;
		padding: 18rpx 0;
		margin-top: 18rpx;
	}
	.title {
		height: 48rpx;
		font-size: 30rpx;
		font-family: PingFangSC, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 48rpx;
	}
	.mobile {
		margin-left: 8rpx;
		height: 60rpx;
		font-size: 25rpx;
		font-family: PingFangSC, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 60rpx;
		letter-spacing: 2px;
	}
	
	.address {
		padding: 8rpx 44rpx 18rpx 44rpx;
		font-size: 27rpx;
		font-family: PingFangSC, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 36rpx;
		// border-bottom: 1px solid #D8D8D8;
	}
	
	.u-nav-slot {
		font-size: 30rpx;
		font-family: PingFangSC, PingFang SC;
		font-weight: 400;
		color: #333333;
		letter-spacing: 1px;
	}

::v-deep .u-navbar__content__title{
	font-family: PingFangSC, PingFang SC;
	font-weight: 700;
	color: #000;
	letter-spacing: 1px;
}

.footer {
	position: fixed;
	z-index: 1;
	bottom: 0;
	left: 0;
	width: 100%;
	view {
		padding: 18rpx;
	}
}
</style>
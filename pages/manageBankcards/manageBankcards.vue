<template>
	<scroll-view enable-flex scroll-y="true" class="manage-bankcards" :show-scrollbar="false">
		<view class="u-cards" v-if="loading">
			<view class="card" v-for="(item,index) in list" :key="index">
				<view class="icon">
					<u-image width="72rpx" height="72rpx" :src="bankImg"></u-image>
				</view>
				<view class="info">
					<view style="display: flex; align-items: center;justify-content: space-between; padding-right: 90rpx;">
						<view class="">
							<text style="font-size: 35rpx;height: 50rpx;line-height: 50rpx;">{{item.bankName}}</text>
							<text style="font-size: 21rpx;height: 30rpx;line-height: 30rpx;margin-left: 15rpx;">快捷支付</text>
						</view>
						<view class="" @click="updateBankCard(item)">
							<u-icon color="#fff" name="edit-pen-fill" size="25"></u-icon>
						</view>
					</view>
					<view style="font-size: 25rpx; height: 36rpx;line-height: 36rpx;">
						储蓄卡
					</view>
					<view class="card-num">
						{{item.bankCard}}
					</view>
				</view>
			</view>
		</view>
		<view class="manage-bankcards" v-else>
			<empty />
		</view>
		<view style="height: 120rpx;"></view>
		<!-- 添加银行卡 -->
		<view class="footer">
			<view class="">
				<u-button text="添加银行卡" color="#FE542C" @click="addBankCard" shape="circle"></u-button>
			</view>
		</view>
	</scroll-view>
</template>
<script>
	import { queryBankList } from '@/config/home.js';
	export default {
		data() {
			return {
				list: [],
				bankImg: this.$imgSrc + '/bankCard.png',
				loading: true
			}
		},
		
		onShow() {
			this.getList();
		},
		
		methods: {
			
			// 列表
			getList() {
				queryBankList().then(res=> {
					if(res.success) {
						this.list = res.data;
						if(this.list.length == 0) {
							this.loading = false;
						}
					}
				})
			},
			
			// 添加银行卡
			addBankCard() {
				uni.navigateTo({
					url: '/subPackages/addBankcard/addBankcard'
				})
			},
			
			// 编辑
			updateBankCard(data) {
				uni.navigateTo({
					url: `/subPackages/addBankcard/addBankcard?item=${encodeURIComponent(JSON.stringify(data))}`
				})
			},
		}
	}
</script>

<style scoped lang="scss">
.manage-bankcards {
	color: #fff;
	font-size: 28rpx;
	height: 100vh;
}
.u-cards {
	padding: 18rpx;
	.card {
		margin-top: 18rpx;
		height: 200rpx;
		background: linear-gradient(69deg, #FF8972 0%, #FE5364 100%);
		border-radius: 12rpx;
		display: flex;
		padding-top: 44rpx;
		padding-left: 40rpx;
	}
	.card2 {
		background: linear-gradient(69deg, #7CCDFB 0%, #5090DC 100%);
	}
	.card3 {
		background: linear-gradient(69deg, #4CD4B0 0%, #1EBB94 100%);
	}
	
	.info {
		padding-left: 20rpx;
		width: 100%;
	}
	.card-num {
		font-size: 36rpx;
		height: 50rpx;
		line-height: 50rpx;
		padding-top: 17rpx;
	}
}

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 1;
		background-color: #F2F2F2;
		view {
			padding: 18rpx;
		}
	}
</style>

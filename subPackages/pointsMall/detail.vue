<template>
	<!-- 兑换商品详情 -->
	<view class="">
		<u-loading-page
			:loading="loading" 
			loading-color="#FE542C" 
			font-size="14" 
			icon-size="30"
			loading-text="蜜田信易购官方旗舰店"
			color="#FE542C"
			image="https://mt-1322382233.cos.ap-shanghai.myqcloud.com/webIcon/icon/logo.png"
		></u-loading-page>
		<view class="points-detail" v-if="loading == false">
			<view class="header">
				账户积分: {{totalIntegral}}
			</view>
			<view class="main">
				<view class="" v-if="info.goodsType == 2">
					<view class="address" @click="selectAddress" v-if="initAddress.consignee">
						<view style="width: 100%;">
								<view class="address-header">
									<view style="width: 130rpx;">收货人: </view>
									<view>{{initAddress.consignee}}</view>
								</view>
								<view class="address-header">
									<view style="width: 130rpx;">联系方式: </view>
									<view>{{initAddress.phone}}</view>
								</view>
							<view class="address-header">
								<view style="width: 130rpx;">收货地址: </view>
								<view style="flex: 1;">{{initAddress.areaName}} {{initAddress.address}}</view>
							</view>
						</view>
					</view>
					<view class="address" v-else>
						<u-cell-group :border="false">
							<u-cell icon="plus" title="添加收货地址" isLink url="/pages/address/address?type=confirmOrder" :border="false">
							</u-cell>
						</u-cell-group>
					</view>
				</view>
				<view class="flex">
					<view class="">
						<u--image :showLoading="true" :src="info.goodsPic" width="200rpx" height="200rpx"></u--image>
					</view>
					<view class="content">
						<view class="title">
							<u--text :lines="2" :text="info.goodsTitle" bold size="14"></u--text>
						</view>
						<view class="points">
							{{info.integral}} 积分
						</view>
					</view>
				</view>
				<u-cell-group :border="false">
					<u-cell title="数量" :border="false" value="1"></u-cell>
					<u-cell title="合计" :value="pointsNum + ' 积分'" :border="false"></u-cell>
				</u-cell-group>
				<view class="btn">
					<u-button text="提交订单" color="#FE542C" size="small" @click="handlerSumbit"></u-button>
				</view>
			</view>
			<!-- 确认弹窗 -->
			<u-modal :show="show" :title="title" :content='content' showCancelButton @confirm="handlerOk" @cancel="handlerCancel"></u-modal>
		</view>
	</view>

</template>

<script>
	import {
		clientGoodDetail,
		clientExchange
	} from '@/config/api.js';
	import {
		mapState
	} from "vuex";
	export default {
		data() {
			return {
				info: {},
				show: false,
				title: '兑换提示',
				content: '商品下单后, 将无法更改, 请确认商品及地址',
				loading: false
			};
		},

		onLoad(option) {
			let {
				id
			} = option;
			this.getDetail(id);
		},

		computed: {
			// 所需积分
			pointsNum() {
				return Number(this.info.integral);
			},

			...mapState({
				initAddress: state => state.Common.areaInfo,
				totalIntegral: state => state.Login.user.totalIntegral,
			})
		},

		methods: {
			// 详情信息
			getDetail(id) {
				this.loading = true;
				clientGoodDetail(id).then(res => {
					if (res.success) {
						this.info = res.data;
						this.loading = false;
					}
				})
			},

			// 选择地址
			selectAddress() {
				uni.navigateTo({
					url: '/pages/address/address?type=confirmOrder'
				})
			},
			
			// 提交订单
			handlerSumbit() {
				if(Number(this.totalIntegral) < this.pointsNum) return uni.showToast({
					title: '很抱歉，您的积分不足，无法兑换该商品',
					icon: 'none'
				});
				
				// 实物商品
				if(this.info.goodsType == 2 && !this.initAddress.consignee) return uni.showToast({
					title: '请选择收货地址',
					icon: 'none'
				})
				
				return this.show = true;
			},
			
			// 确认
			handlerOk() {
				let params = {
					addressId: this.initAddress.addressId,
					goodsId: this.info.id
				};
				clientExchange(params).then(res=> {
					if(res.success) {
						this.handlerCancel();
						uni.showToast({
							title: '兑换成功'
						});
						setTimeout(()=> {
							uni.navigateBack();
						}, 1500)
					}
				}).catch(err=> {
					this.handlerCancel();
				})
			},
			
			// 取消
			handlerCancel() {
				this.show = false;
			}
		}
	}
</script>

<style lang="scss">
	.points-detail {
		height: 100vh;
		color: #333;
		font-size: 28rpx;
	}

	.header {
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 5%;
		margin-bottom: 18rpx;
		background-color: #fff;
		color: #FE542C;
	}

	.main {
		background-color: #fff;
	}

	.flex {
		display: flex;
		padding: 18rpx;
		margin: 18rpx;
	}

	.content {
		margin-top: 18rpx;
		margin-left: 18rpx;
		display: flex;
		flex-direction: column;
	}

	.title {
		line-height: 32rpx;
	}

	.points {
		color: #FE542C;
		line-height: 32rpx;
		padding-top: 18rpx;
	}

	.address {
		background-color: #fff;
		display: flex;
		padding: 18rpx 20rpx;
		font-size: 25rpx;
		border-bottom: 1px solid #D8D8D8;

		.address-header {
			display: flex;
			line-height: 48rpx;
		}
	}
	
	.btn {
		padding: 5%;
	}
</style>
<template>
	<scroll-view enable-flex scroll-y="true" class="manage-address" :show-scrollbar="false">
		<view class="u-card" v-for="(item, index) in list" :key="index">
			<view style="padding: 0 44rpx; display: flex; align-items: center;">
				<view style="margin-right: 12rpx;">
					<u-tag text="默认" 
						plain 
						size="mini" 
						v-if="queryParams.id == item.id"
						borderColor="#FE542C"
						color="#FE542C"
					></u-tag>
				</view>
				<view class="">
					<text class="title">{{item.consignee}}</text>
				</view>
				<view class="">
					<text class="mobile">{{item.phone}}</text>
				</view>
			</view>
			<view class="address">
				{{item.areaName}} {{item.address}}
			</view>
			<view class="moren">
				 <u-radio-group v-model="queryParams.id" @change="onchange">
				 	<u-radio label="设为默认地址" :name="item.id" active-color="#FE542C"></u-radio>
				 </u-radio-group>
				 <view style="display: flex; padding-top: 20rpx;">
				 	<view class="">
				 		<u-button icon="edit-pen" text="编辑" size="mini" color="#FE542C" plain @click="updateInfo(item)"></u-button>
				 	</view>
					<view style="padding-left: 24rpx;">
						<u-button icon="trash" text="删除" size="mini" color="#FE542C" plain @click="handlerDelete(item, index)"></u-button>
					</view>
				 </view>
			</view>
		</view>
		<!-- 新增收货地址 -->
		<view class="footer">
			<view class="">
				<u-button text="新建收货地址" color="#FE542C" @click="handlerOk" shape="circle"></u-button>
			</view>
		</view>
		<!-- 删除提示 -->
		<u-modal 
			:show="show" 
			:title="title" 
			showCancelButton
			@confirm="confirm"
			@cancel="cancel"
			confirmColor="#FE542C"
		></u-modal>
		<u-toast ref="uToast"></u-toast>
	</scroll-view>
</template>

<script>
	import {getAddress} from '@/config/home.js';
	import { setDefaultAddress, deleteAddress } from '@/config/api.js';
	export default {
		data() {
			return {
				show:false,
				title:'是否删除该地址',
				list: [],
				queryParams: {
					id: ''
				},
				deleteId: '',
				indx: ''
			}
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
						let obj = res.data.find(item=> item.isDefault == 1);
						if(obj) {
							this.queryParams.id = obj.id;
						};
					}
				})
			},
			
			// 默认地址变化
			onchange(name) {
				let that = this;
				setDefaultAddress(this.queryParams.id).then(res=> {
					if(res.success) {
						this.$refs.uToast.show({
							message: '设置成功',
							type: 'success',
						})
					}
				})
			},
			
			// 编辑
			updateInfo(item) {
				item.isDisabled = false;
				uni.navigateTo({
					url: `/subPackages/updateAddress/updateAddress?item=${encodeURIComponent(JSON.stringify(item))}`
				})
			},
			
			// 删除弹窗
			handlerDelete(item, index){
				this.deleteId = item.id;
				this.indx = index;
				this.show = true;
			},
			
			// 删除确认
			confirm() {
				deleteAddress(this.deleteId).then(res=> {
					if(res.success) {
						this.show = false;
						this.$refs.uToast.show({
							message: '删除成功',
							type: 'success',
						});
						this.list.splice(this.indx, 1);
					}
				})
			},
			
			// 删除取消
			cancel() {
				this.show = false;
			},
			
			// 添加收货地址
			handlerOk() {
				uni.navigateTo({
					url: '/subPackages/createAddress/createAddress'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.manage-address {
		padding-bottom: 120rpx;
	}
	.u-card {
		background-color: #fff;
		padding: 24rpx 0;
		margin-bottom: 18rpx;
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
		padding: 8rpx 44rpx 0 44rpx;
		height: 85rpx;
		font-size: 27rpx;
		font-family: PingFangSC, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 36rpx;
		border-bottom: 1px solid #D8D8D8;
	}
	
	.moren {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 44rpx;
		color: #999999;
		font-size: 24rpx;
	}
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: #F2F2F2;
		z-index: 1;
		view {
			padding: 18rpx;
		}
	}
</style>

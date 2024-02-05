<template>
	<view class="self-list">
		<view class="content">
			<view class="u-card" v-for="item in list" :key="item.id" @click="onSelect(item)"> 
				<u-cell-group :arrow="false">
					<u-cell title="门店名称" :value="item.name"></u-cell>
					<u-cell title="联系方式" :value="item.mobile">
						<u-icon slot="right-icon" name="phone-fill" color="#FE542C" @tap.stop="callPhone(item.mobile)"></u-icon>
					</u-cell>
					<u-cell title="详细地址" :value="item.areaName + item.address"></u-cell>
				</u-cell-group>
			</view>
		</view>
	</view>
</template>

<script>
	import { selfPickList } from '@/config/api.js'
	export default {
		data() {
			return {
				list: []
			}
		},	
		
		onLoad() {
			this.getList();
		},
		
		methods: {
			getList() {
				selfPickList().then(res=> {
					if(res.success) {
						this.list = res.data;
					}
				})
			},
			
			// 选择门店
			onSelect(item) {
				this.$store.dispatch('Common/setSelfPick', item);
				uni.navigateBack();
			},
			
			// 拨打手机号
			callPhone(mobile) {
				uni.makePhoneCall({
					phoneNumber: mobile 
				});
			},
		}
	}
</script>

<style scoped lang="scss">
	.self-list {
		padding-bottom: 18rpx;
	}
	.u-card {
		background-color: #fff;
		margin: 18rpx 0;
	}
</style>

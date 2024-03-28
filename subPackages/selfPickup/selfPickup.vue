<template>
	<view class="self-list">
		<view class="content">
<<<<<<< HEAD
			<view class="u-card" v-for="item in list" :key="item.id" @click="onSelect(item)">
				<u-cell-group :arrow="false" :border="false">
					<u-cell title="自提点名称" :value="item.name"></u-cell>
					<u-cell title="联系方式" :value="item.mobile">
						<u-button slot="right-icon" color="#FE542C" size="mini" @tap.stop="callPhone(item.mobile)">咨询</u-button>
					</u-cell>
					<u-cell title="详细地址" :label="item.areaName + item.address">
						<!-- <u-button slot="right-icon" color="#fe542c" size="mini" @tap.stop="toMapAPP(item)">导航</u-button> -->
					</u-cell>
=======
			<view class="u-card" v-for="item in list" :key="item.id" @click="onSelect(item)"> 
				<u-cell-group :arrow="false">
					<u-cell title="门店名称" :value="item.name"></u-cell>
					<u-cell title="联系方式" :value="item.mobile">
						<u-icon slot="right-icon" name="phone-fill" color="#FE542C" @tap.stop="callPhone(item.mobile)"></u-icon>
					</u-cell>
					<u-cell title="详细地址" :value="item.areaName + item.address"></u-cell>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
				</u-cell-group>
			</view>
		</view>
	</view>
</template>

<script>
<<<<<<< HEAD
	import {
		selfPickList
	} from '@/config/api.js'
=======
	import { selfPickList } from '@/config/api.js'
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
	export default {
		data() {
			return {
				list: []
			}
<<<<<<< HEAD
		},

		onLoad() {
			this.getList();
		},

		methods: {
			getList() {
				selfPickList().then(res => {
					if (res.success) {
=======
		},	
		
		onLoad() {
			this.getList();
		},
		
		methods: {
			getList() {
				selfPickList().then(res=> {
					if(res.success) {
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
						this.list = res.data;
					}
				})
			},
<<<<<<< HEAD

			// 选择自提点
=======
			
			// 选择门店
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
			onSelect(item) {
				this.$store.dispatch('Common/setSelfPick', item);
				uni.navigateBack();
			},
<<<<<<< HEAD

			// 拨打手机号
			callPhone(mobile) {
				uni.makePhoneCall({
					phoneNumber: mobile
				});
			},

			// 导航
			toMapAPP(record) {
				uni.getLocation({
					type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					success: function (res) {
						const latitude = res.latitude;
						const longitude = res.longitude;
						uni.openLocation({
							latitude: latitude,
							longitude: longitude,
							success: function () {
								console.log('success');
							}
						});
					}
				});
			}

=======
			
			// 拨打手机号
			callPhone(mobile) {
				uni.makePhoneCall({
					phoneNumber: mobile 
				});
			},
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
		}
	}
</script>

<style scoped lang="scss">
	.self-list {
		padding-bottom: 18rpx;
	}
<<<<<<< HEAD

	.u-card {
		background-color: #fff;
		margin: 18rpx;
		padding: 18rpx;
		border-radius: 10rpx;
	}
</style>
=======
	.u-card {
		background-color: #fff;
		margin: 18rpx 0;
	}
</style>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1

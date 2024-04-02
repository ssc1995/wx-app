<template>
	<view class="self-list">
		<view class="content">
			<view class="u-card" v-for="item in list" :key="item.id" @click="onSelect(item)">
				<u-cell-group :arrow="false" :border="false">
					<u-cell title="自提点名称" :value="item.name"></u-cell>
					<u-cell title="联系方式" :value="item.mobile">
						<u-button slot="right-icon" color="#FE542C" size="mini" @tap.stop="callPhone(item.mobile)">咨询</u-button>
					</u-cell>
					<u-cell title="详细地址" :label="item.areaName + item.address">
						<!-- <u-button slot="right-icon" color="#fe542c" size="mini" @tap.stop="toMapAPP(item)">导航</u-button> -->
					</u-cell>
				</u-cell-group>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		selfPickList
	} from '@/config/api.js'
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
				selfPickList().then(res => {
					if (res.success) {
						this.list = res.data;
					}
				})
			},

			// 选择自提点
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

		}
	}
</script>

<style scoped lang="scss">
	.self-list {
		padding-bottom: 18rpx;
	}

	.u-card {
		background-color: #fff;
		margin: 18rpx;
		padding: 18rpx;
		border-radius: 10rpx;
	}
</style>
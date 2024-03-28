<template>
	<view class="u-page">
		<u-list>
			<u-list-item v-for="(item, index) in list" :key="index">
				<view class="main">
					<view class="left-title">
						<text>[{{item.timePeriod}}/{{item.period}}期]</text>
						<text style="color: #999;margin-left: 10rpx;">{{item.repayTime}}</text>
					</view>
					<view class="right-title">
						￥{{item.amount | decimal}}
					</view>
				</view>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	import {
		repaymentPlan
	} from '@/config/api.js';
	export default {
		data() {
			return {
				list: []
			}
		},

		onLoad(option) {
			this.getList(option.id);
		},

		methods: {
			// 列表数据
			getList(id) {
				repaymentPlan(id).then(res => {
					if (res.success) {
						this.list = res.data;
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.main {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30rpx 22rpx;
	background: #FFF;
	box-shadow: inset 0rpx -1rpx 0rpx 0rpx #EEEEEE;
	.left-title {
		height: 28rpx;
		font-size: 28rpx;
		font-family: PingFangSC, PingFang SC;
		font-weight: 400;
		color: #333;
		line-height: 28rpx;
	}
	.right-title {
		color: #FE542C;
	}
}
</style>
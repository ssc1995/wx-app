<template>
	<!-- 兑换详情 -->
	<view class="">
		<u-loading-page :loading="loading" loading-color="#FE542C" font-size="14" icon-size="30" loading-text="蜜田信易购官方旗舰店"
			color="#FE542C" image="https://mt-1322382233.cos.ap-shanghai.myqcloud.com/webIcon/icon/logo.png"></u-loading-page>
		<view class="redemption-details" v-if="loading == false">
			<view class="main">
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
				<view style="background-color: #fff;">
					<u-cell-group :border="false">
						<u-cell title="兑换时间" :border="false" :value="info.createTime"></u-cell>
						<u-cell title="数量" :border="false" :value="info.goodsNumber"></u-cell>
						<u-cell title="兑换积分" :value="pointsNum + ' 积分'" :border="false"></u-cell>
						<u-cell title="状态">
							<view slot="value">
								<u-tag v-if="info.status == 0" text="兑换失败" type="error" size="mini"></u-tag>
								<u-tag v-if="info.status == 1" text="兑换成功" type="success" size="mini"></u-tag>
<<<<<<< HEAD
								<u-tag v-if="info.status == 2" text="待发货" size="mini" type="warning"></u-tag>
								<u-tag v-if="info.status == 3" text="待签收" size="mini" type="warning"></u-tag>
=======
<<<<<<< HEAD
								<u-tag v-if="info.status == 2" text="待发货" size="mini" type="warning"></u-tag>
								<u-tag v-if="info.status == 3" text="待签收" size="mini" type="warning"></u-tag>
=======
								<u-tag v-if="info.status == 2" text="待发货" size="mini"></u-tag>
								<u-tag v-if="info.status == 3" text="待签收" size="mini"></u-tag>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
							</view>
						</u-cell>
					</u-cell-group>
				</view>
				<view class="content1">
					<view style="font-weight: bold;">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
						快递凭证
					</view>
					<view class="">
						<view class="">
							<u-upload
								:fileList="fileList"
								:disabled="true"
								:deletable="false"
								:maxCount="0"
							></u-upload>
						</view>
					</view>
					<view style="font-weight: bold;">
<<<<<<< HEAD
=======
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
						订单状态
					</view>
					<u-steps :current="current" direction="column" activeColor="#FE542C" inactiveColor="#D3D3D3">
						<u-steps-item v-for="(item, index) in info.changeExpressInfo.expressInfoList" :key="index" :title="item.context" :desc="item.time">
							<template slot="icon">
								<u-icon v-if="current <= index" name="checkmark-circle-fill" size="20" color="#FE542C"></u-icon>
								<view v-else class="slot-icon"> </view>
							</template>
						</u-steps-item>
					</u-steps>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		exchangeDetail
	} from '@/config/api.js';
	export default {
		data() {
			return {
				current: 0,
				info: {},
<<<<<<< HEAD
				fileList: [],
=======
<<<<<<< HEAD
				fileList: [],
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
		},

		methods: {
			// 详情信息
			getDetail(id) {
				this.loading = true;
				exchangeDetail(id).then(res => {
					if (res.success) {
						this.info = res.data;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
						let list = res.data.changeExpressInfo.expressVoucher!=''&&res.data.changeExpressInfo.expressVoucher.split(',');
						list&&list.forEach(item=> {
							this.fileList.push({
								url: item
							})
						})
<<<<<<< HEAD
=======
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
						this.loading = false;
					}
				})
			},

		}
	}
</script>

<style lang="scss">
	.redemption-details {
		// height: 100vh;
		color: #333;
		font-size: 28rpx;
	}
	.main {
		// background-color: #fff;
	}

	.flex {
		display: flex;
		padding: 18rpx;
		margin: 18rpx;
		background-color: #fff;
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

	.content1 {
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

	.btn {
		padding: 5%;
	}
</style>
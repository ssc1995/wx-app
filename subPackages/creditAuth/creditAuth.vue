<template>
	<view class="credit">
		<view class="info">
			<template>
				<u-cell-group :border="false">
					<u-cell icon="account-fill" title="用户姓名" :value="userInfo.realName"></u-cell>
					<u-cell icon="file-text-fill" title="身份证号" :value="userInfo.idCard"></u-cell>
					<u-cell icon="phone-fill" title="手机号码" :value="userInfo.phone"></u-cell>
				</u-cell-group>
			</template>
			<view class="btn">
				<view class="check-box">
					<u-checkbox-group v-model="checked" @change="changeCheck">
						<u-checkbox shape="circle" activeColor="#FE542C"></u-checkbox>
					</u-checkbox-group>
					<view style="color: #FE542C; font-size: 24rpx;">
						<text style="color: #999; margin-right: 6rpx;">本人已阅读并同意</text>
						<text @click="open">《个人信用报告授权查询协议》</text>
					</view>
				</view>
				<!-- <u-button @click="submit" text="申请查询" color="#FE542C" shape="circle"></u-button> -->
				<view style="margin-bottom: 18rpx; text-align: center; font-size: 24rpx; color: #ff9900;">
					<text>{{ '征信查询需支付￥' + userInfo.creditFee + '元' }}</text>
				</view>
				<u-button @click="submit" text="申请额度" color="#FE542C" shape="circle" :loading="loadingBtn"></u-button>
			</view>
		</view>
		<u-modal 
			:show="show" 
			title="个人信用报告授权查询协议" 
		>
			<view class="slot-content">
				<scroll-view scroll-y="true" style="height: 800rpx;">
					<rich-text :nodes="content"></rich-text>
				</scroll-view>
			</view>
			<view slot="confirmButton">
				<view class="btns">
					<view style="width: 40%;">
						<u-button text="取消" @click="cancel" size="small"></u-button>
					</view>
					<view style="width: 40%;">
						<u-button type="primary" :text="confirmText" size="small" :disabled="disabled" @click="confirm"></u-button>
					</view>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import {
		clientListCode
	} from '@/config/home.js';
	import {
		applyAmount,
		creditCreate,
		wxPayment
	} from '@/config/api.js';
	export default {
		data() {
			return {
				checked: [],
				disabled: false,
				show: false,
				content: '',
				agreeList: [],
				confirmText: '阅读并同意5s',
				timer: null,
				loadingBtn: false
			}
		},

		computed: {
			...mapState({
				userInfo: state => state.Login.user,
			}),
		},

		onLoad() {
			clientListCode("credit").then(res => {
				if (res.success) {
					this.agreeList = res.data;
					this.content = res.data[0].content;
				}
			})
		},
		
		onUnload() {
			clearInterval(this.timer);
			this.timer = null;
		},

		methods: {
			// change事件
			changeCheck(n) {
				this.open();
			},
			
			// 打开弹窗
			open() {
				this.show = true;
				this.disabled = true;
				let num = 5;
					this.timer = setInterval(() => {
						num -= 1;
						if(num > 0) {
							this.confirmText = `阅读并同意${num}s`;
						} else {
							clearInterval(this.timer);
							this.timer = null;
							this.disabled = false;
							this.confirmText = `阅读并同意`;
						}
					}, 1000);
			},
			
			// 同意
			confirm() {
				this.show = false;
				this.checked = [""];
			},
			
			// 取消
			cancel() {
				this.show = false;
				this.checked = [];
				clearInterval(this.timer);
				this.timer = null;
				this.confirmText = '阅读并同意5s';
			},
			
			// 查询
			submit() {
				if(this.checked.length === 0) return this.open();
				// uni.navigateTo({
				// 	url: '/subPackages/creditReport/creditReport'
				// })
				let that = this;
				that.loadingBtn = true;
				creditCreate({creditFee: this.userInfo.creditFee}).then(res => {
					if (res.success) {
						wxPayment({
							orderSn: res.data.orderSn,
							orderType: 3
						}).then(result => {
							uni.requestPayment({
								timeStamp: result.data.timeStamp,
								nonceStr: result.data.nonceStr,
								package: result.data.package,
								signType: result.data.signType,
								paySign: result.data.paySign,
								success(respon) {
									applyAmount().then(res => {
										if (res.success) {
											uni.showToast({
												title: '申请成功，审核中...',
												duration: 2000
											});
											setTimeout(()=> {
												uni.navigateBack();
											}, 1500)
										}
									})
								},
								fail(respon) {
				
								}
							})
						})
					}
				}).finally(()=> {
					that.loadingBtn = false;
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.credit {
		font-size: 14px;
		color: #333;
		height: 100vh;
		background-color: #fff;
	}

	.info {
		padding: 0 18rpx 20rpx 18rpx;
	}
	
	::v-deep .u-cell__title-text {
		color: #999 !important;
	}

	.btn {
		margin-top: 50rpx;
	}

	.check-box {
		padding-bottom: 18rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.btns {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
</style>
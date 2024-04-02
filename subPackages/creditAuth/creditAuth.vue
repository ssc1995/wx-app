<template>
	<view class="credit">
		<view class="info">
			<template>
<<<<<<< HEAD
=======
<<<<<<< HEAD
				<!-- <u-cell-group :border="false">
					<u-cell icon="account-fill" title="用户姓名" :value="userInfo.realName"></u-cell>
					<u-cell icon="file-text-fill" title="身份证号" :value="userInfo.idCard"></u-cell>
					<u-cell icon="phone-fill" title="手机号码" :value="userInfo.phone"></u-cell>
				</u-cell-group> -->
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
				<u--form labelPosition="left" :model="model" :rules="rules" ref="uForm" labelWidth="90">
					<!-- <u-form-item leftIcon="account-fill" label="用户姓名" prop="realName" borderBottom>
						<u--input v-model="model.realName" placeholder="请填写姓名" border="none"></u--input>
					</u-form-item> -->
					<u-form-item leftIcon="file-text-fill" label="身份证号" prop="idCard" borderBottom>
						<u--input v-model="model.idCard" placeholder="请填写身份证号" border="none"></u--input>
					</u-form-item>
					<u-form-item leftIcon="phone-fill" label="手机号码" prop="phone" borderBottom>
						<u--input v-model="userInfo.phone" placeholder="请填写手机号码" border="none" disabled disabledColor="#fff"></u--input>
					</u-form-item>
				</u--form>
<<<<<<< HEAD
=======
=======
				<u-cell-group :border="false">
					<u-cell icon="account-fill" title="用户姓名" :value="userInfo.realName"></u-cell>
					<u-cell icon="file-text-fill" title="身份证号" :value="userInfo.idCard"></u-cell>
					<u-cell icon="phone-fill" title="手机号码" :value="userInfo.phone"></u-cell>
				</u-cell-group>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
				<view style="margin-bottom: 18rpx; text-align: center; font-size: 24rpx; color: #ff9900;">
					<text>{{ '赊购评估需支付第三方机构￥' + userInfo.creditFee + '元' }}</text>
				</view>
				<u-button @click="submit" text="立即评估" color="#FE542C" shape="circle" :loading="loadingBtn"></u-button>
				<view style="margin-top: 18rpx; text-align: center; font-size: 24rpx; color: #ff9900;">
					<text>提示: 请确认填写信息真实有效</text>
				</view>
			</view>
		</view>
		<u-modal :show="show" title="个人信用报告授权查询协议">
<<<<<<< HEAD
=======
=======
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
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
<<<<<<< HEAD
						<u-button color="#FE542C" :text="confirmText" size="small" :disabled="disabled" @click="confirm"></u-button>
=======
<<<<<<< HEAD
						<u-button color="#FE542C" :text="confirmText" size="small" :disabled="disabled" @click="confirm"></u-button>
=======
						<u-button type="primary" :text="confirmText" size="small" :disabled="disabled" @click="confirm"></u-button>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
<<<<<<< HEAD
		wxPayment,
		memberQueryWyRsik
=======
<<<<<<< HEAD
		wxPayment,
		memberQueryWyRsik
=======
		wxPayment
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
				loadingBtn: false,
				model: {
					realName: "",
					phone: "",
					idCard: ""
				},
				rules: {
<<<<<<< HEAD
=======
					// realName: {
					// 	type: 'string',
					// 	required: true,
					// 	message: '请填写真实姓名',
					// 	trigger: ['blur', 'change']
					// },
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
					idCard: [{
							required: true,
							message: '请填写身份证号',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								return uni.$u.test.idCard(value);
							},
							message: '身份证号码不正确',
							trigger: ['change', 'blur'],
						}
<<<<<<< HEAD
					]
=======
					],
					// phone: [{
					// 		required: true,
					// 		message: '请输入手机号',
					// 		trigger: ['change', 'blur'],
					// 	},
					// 	{
					// 		validator: (rule, value, callback) => {
					// 			return uni.$u.test.mobile(value);
					// 		},
					// 		message: '手机号码不正确',
					// 		trigger: ['change', 'blur'],
					// 	}
					// ],
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
				},
			}
		},

		onReady() {
			//onReady 为uni-app支持的生命周期之一
			this.$refs.uForm.setRules(this.rules)
		},

<<<<<<< HEAD
=======
=======
				loadingBtn: false
			}
		},

>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
		
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
		onUnload() {
			clearInterval(this.timer);
			this.timer = null;
		},

		methods: {
			// change事件
			changeCheck(n) {
<<<<<<< HEAD
				if(n.length != 0) return this.open();
			},

=======
<<<<<<< HEAD
				if(n.length != 0) return this.open();
			},

=======
				this.open();
			},
			
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
			// 打开弹窗
			open() {
				this.show = true;
				this.disabled = true;
				let num = 5;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
				this.timer = setInterval(() => {
					num -= 1;
					if (num > 0) {
						this.confirmText = `阅读并同意${num}s`;
					} else {
						clearInterval(this.timer);
						this.timer = null;
						this.disabled = false;
						this.confirmText = `阅读并同意`;
					}
				}, 1000);
			},

<<<<<<< HEAD
=======
=======
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
			
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
			// 同意
			confirm() {
				this.show = false;
				this.checked = [""];
			},
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
			
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
			// 取消
			cancel() {
				this.show = false;
				this.checked = [];
				clearInterval(this.timer);
				this.timer = null;
				this.confirmText = '阅读并同意5s';
			},
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc

			// 查询
			submit() {
				this.$refs.uForm.validate().then(res => {
					if (this.checked.length === 0) return this.open();
					let that = this;
					that.model.phone = that.userInfo.phone;
					that.loadingBtn = true;
					// 支付
					creditCreate({
<<<<<<< HEAD
						creditFee: that.userInfo.creditFee,
						idCard: that.model.idCard,
=======
						creditFee: this.userInfo.creditFee
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
					}).then(res => {
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
										memberQueryWyRsik(that.model).then(res=> {
											if(res.code == 200) {
												uni.showToast({
													title: "评估成功",
													duration: 2000
												});
												setTimeout(() => {
													uni.redirectTo({
														url: '/subPackages/uploadIdcard/uploadIdcard'
													})
												}, 1500);
											} else {
												uni.showToast({
													title: res.message,
													duration: 2000
												});
											}
										})
										// applyAmount().then(res => {
										// 	if (res.success) {
										// 		uni.showToast({
										// 			title: '申请成功，审核中...',
										// 			duration: 2000
										// 		});
										// 		setTimeout(()=> {
										// 			uni.navigateBack();
										// 		}, 1500)
										// 	}
										// })
									},
									fail(respon) {

									}
								})
							})
						}
					}).finally(() => {
						that.loadingBtn = false;
					})
				}).catch(() => {})
<<<<<<< HEAD
=======
=======
			
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
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
	
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
	
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
	.btns {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
</style>
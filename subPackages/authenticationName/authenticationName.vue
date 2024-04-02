<template>
	<scroll-view enable-flex scroll-y="true" class="container" :show-scrollbar="false">
		<view class="msg">
			请完成以下信息
		</view>
		<view class="info">
			<u--form labelPosition="left" :model="model" :rules="rules" ref="uForm" labelWidth="90">
				<u-form-item label="真实姓名" prop="userInfo.realName" borderBottom>
					<u--input v-model="model.userInfo.realName" border="none" placeholder="请填写姓名"></u--input>
				</u-form-item>
				<u-form-item label="身份证号" prop="userInfo.idCard" borderBottom>
					<u--input v-model="model.userInfo.idCard" border="none" placeholder="请填写身份证号"></u--input>
				</u-form-item>
				<u-form-item label="联系电话" prop="userInfo.phone" borderBottom>
					<u--input v-model="model.userInfo.phone" border="none" placeholder="请输入手机号码"></u--input>
				</u-form-item>
				<u-form-item label="邮箱地址" prop="userInfo.email" borderBottom>
					<u--input v-model="model.userInfo.email" border="none" placeholder="请填写邮箱地址"></u--input>
				</u-form-item>
				<u-form-item label="QQ号码" prop="userInfo.qq" borderBottom>
					<u--input v-model="model.userInfo.qq" border="none" placeholder="请填写QQ号码"></u--input>
				</u-form-item>
				<u-form-item label="户籍地址" prop="userInfo.registerAddress" borderBottom>
					<u--input v-model="model.userInfo.registerAddress" border="none" placeholder="请填写户籍地址"></u--input>
				</u-form-item>
				<u-form-item label="现住地址" prop="userInfo.areaName" borderBottom @click="openModal">
					<u--input v-model="model.userInfo.areaName" disabledColor="#fff" placeholder="请选择现住地址" border="none"
						disabled></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="" label-width="0" prop="userInfo.address" borderBottom>
					<u--textarea 
						v-model="model.userInfo.address" 
						border="none" 
						placeholder="详细地址: 如街道、门牌号、小区、楼栋号、单元室等"
						height="50"
					></u--textarea>
				</u-form-item>
				<u-form-item label="验证码" prop="userInfo.phoneCode" borderBottom>
					<u--input v-model="model.userInfo.phoneCode" border="none" placeholder="请填写验证码"></u--input>
					<view class="wrap" slot="right">
						<u-code ref="uCode" @change="codeChange"></u-code>
						<u-button @tap="getCode" color="#FE542C" size="small">{{tips}}</u-button>
					</view>
				</u-form-item>
			</u--form>
		</view>
		<view style="height: 120rpx;"></view>
		<!-- 下一步 -->
		<view class="footer">
			<view class="">
				<u-button text="保 存" color="#FE542C" @click="goNext" shape="circle"></u-button>
			</view>
		</view>
		<!-- 地区选择 -->
		<picker-area ref="aPicker" @getareaInfo="getareaInfo"></picker-area>
		<u-toast ref="uToast"></u-toast>
	</scroll-view>
</template>

<script>
	import {
		verifyUserInfo,
		verifyPhoneCode
	} from '@/config/api.js';
	export default {
		data() {
			return {
				model: {
					userInfo: {
						address: '',
						area: '',
						areaName: '',
						city: '',
						email: '',
						phoneCode: '',
						idCard: '',
						phone: '',
						province: '',
						qq: '',
						realName: '',
						personalIdentity3Key: '',
						registerAddress: '',
						gender: '',
						race: ''
					},
				},
				tips: '',
				show: false,
				rules: {
					'userInfo.realName': {
						type: 'string',
						required: true,
						message: '请填写真实姓名',
						trigger: ['blur', 'change']
					},
					'userInfo.idCard': [{
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
					],
					'userInfo.phone': [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								return uni.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							trigger: ['change', 'blur'],
						}
					],
					'userInfo.phoneCode': {
						required: true,
						message: '请填写验证码',
						trigger: ['blur']
					},
					'userInfo.email': [{
							required: true,
							message: '请填写邮箱地址',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								return uni.$u.test.email(value);
							},
							message: '邮箱地址不正确',
							trigger: ['change', 'blur'],
						}
					],
					'userInfo.registerAddress': {
						type: 'string',
						required: true,
						message: '请输入户籍地址',
						trigger: ['blur', 'change']
					},
					'userInfo.areaName': {
						type: 'string',
						required: true,
						message: '请选择现住地址',
						trigger: ['blur', 'change']
					},
					'userInfo.address': {
						type: 'string',
						required: true,
						// min: 7,
						message: '请输入详细地址',
						trigger: ['blur', 'change']
					},
				},
			}
		},

		onReady() {
			//onReady 为uni-app支持的生命周期之一
			this.$refs.uForm.setRules(this.rules)
		},

		onLoad(option) {
			const item = JSON.parse(decodeURIComponent(option.item));
			this.model.userInfo.idCard = item.idcardNum;
			this.model.userInfo.realName = item.realName;
			this.model.userInfo.identityBackImageUrl = item.param.identityBackImageUrl;
			this.model.userInfo.identityImageUrl = item.param.identityImageUrl;
			this.model.userInfo.gender = item.gender;
			this.model.userInfo.race = item.race;
			this.model.userInfo.registerAddress = item.address;
			this.$refs.aPicker.initCityData();
		},

		methods: {
			// 选择地址
			openModal() {
				this.$refs.aPicker.show = true;
			},

			// 获取地址
			getareaInfo(data) {
				this.model.userInfo.province = data.province;
				this.model.userInfo.city = data.city;
				this.model.userInfo.area = data.area;
				this.model.userInfo.areaName = data.areaName;
				this.$refs.uForm.validateField('userInfo.areaName');
			},

			codeChange(text) {
				this.tips = text;
			},
			// 获取验证码
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					verifyPhoneCode({
						idCard: this.model.userInfo.idCard,
						realName: this.model.userInfo.realName,
						phone: this.model.userInfo.phone
					}).then(res => {
						if (res.success) {
							// 这里此提示会被this.start()方法中的提示覆盖
							uni.$u.toast('验证码已发送');
							// 通知验证码组件内部开始倒计时
							this.$refs.uCode.start();
							this.model.userInfo.personalIdentity3Key = res.data.personalIdentity3Key;
						}
					})
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},

			// 下一步
			goNext() {
				this.$refs.uForm.validate().then(res => {
					verifyUserInfo(this.model.userInfo).then(response => {
						if (response.success) {
							// uni.navigateTo({
							// 	url: '/subPackages/faceRecognition/faceRecognition'
							// })
							uni.showModal({
								title: '认证通过',
								content: '恭喜您！身份验证通过',
								showCancel: false,
								success: function() {
									uni.switchTab({
										url: '/pages/whiteBar/whiteBar'
									})
								}
							})
						} else {
							uni.showToast({
								title: response.message,
								icon: 'none'
							})
						}
					})
				}).catch(errors => {
					// uni.$u.toast('校验失败')
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.container {
		font-size: 14px;
		color: #333;
		height: 100vh;

		.msg {
			height: 36rpx;
			font-size: 25rpx;
			font-family: PingFangSC, PingFang SC;
			font-weight: 400;
			color: #999999;
			line-height: 36rpx;
			letter-spacing: 1px;
			padding-top: 24rpx;
			padding-left: 24rpx;
			padding-bottom: 12rpx;
		}

		.info {
			background-color: #fff;
			padding: 0 28rpx 0 24rpx;
		}
	}

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 1;

		view {
			padding: 18rpx;
		}
	}
</style>
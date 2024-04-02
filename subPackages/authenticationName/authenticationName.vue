<template>
	<scroll-view enable-flex scroll-y="true" class="container" :show-scrollbar="false">
		<view class="msg">
			请完成以下信息
		</view>
		<view class="info">
			<u--form labelPosition="left" :model="model" :rules="rules" ref="uForm" labelWidth="90">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
				<u-form-item label="真实姓名" prop="userInfo.realName" borderBottom>
					<u--input v-model="model.userInfo.realName" border="none" placeholder="请填写姓名"></u--input>
				</u-form-item>
				<u-form-item label="身份证号" prop="userInfo.idCard" borderBottom>
<<<<<<< HEAD
=======
=======
				<u-form-item label="真实姓名" prop="userInfo.realName" borderBottom ref="item1">
					<u--input v-model="model.userInfo.realName" border="none" placeholder="请填写姓名"></u--input>
				</u-form-item>
				<u-form-item label="身份证号" prop="userInfo.idCard" borderBottom ref="item1">
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
					<u--input v-model="model.userInfo.idCard" border="none" placeholder="请填写身份证号"></u--input>
				</u-form-item>
				<u-form-item label="联系电话" prop="userInfo.phone" borderBottom>
					<u--input v-model="model.userInfo.phone" border="none" placeholder="请输入手机号码"></u--input>
				</u-form-item>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
<<<<<<< HEAD
=======
=======
				<u-form-item label="E-mail邮箱" prop="userInfo.email" borderBottom ref="item1">
					<u--input v-model="model.userInfo.email" border="none" placeholder="请填写E-mail邮箱"></u--input>
				</u-form-item>
				<u-form-item label="QQ号码" prop="userInfo.qq" borderBottom ref="item1">
					<u--input v-model="model.userInfo.qq" border="none" placeholder="请填写QQ号码"></u--input>
				</u-form-item>
				<u-form-item label="现住地址" prop="userInfo.areaName" borderBottom @click="openModal">
					<u--input v-model="model.userInfo.areaName" disabledColor="#ffffff" placeholder="请选择现住地址" border="none"
						disabled></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="" label-width="0" prop="userInfo.address" borderBottom ref="item1">
					<u--textarea 
						v-model="model.userInfo.address" 
						border="none" 
						placeholder="详细地址：如街道、门牌号、小区、楼栋号、单元室等"
					></u--textarea>
				</u-form-item>
			</u--form>
		</view>
		<!-- 下一步 -->
		<view class="footer">
			<view class="">
				<u-button text="下一步" color="#FE542C" @click="goNext" shape="circle"></u-button>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
			</view>
		</view>
		<!-- 地区选择 -->
		<picker-area ref="aPicker" @getareaInfo="getareaInfo"></picker-area>
<<<<<<< HEAD
		<u-toast ref="uToast"></u-toast>
=======
<<<<<<< HEAD
		<u-toast ref="uToast"></u-toast>
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
	</scroll-view>
</template>

<script>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
	import {
		verifyUserInfo,
		verifyPhoneCode
	} from '@/config/api.js';
<<<<<<< HEAD
=======
=======
	import { verifyUserInfo } from '@/config/api.js';
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
<<<<<<< HEAD
						phoneCode: '',
=======
<<<<<<< HEAD
						phoneCode: '',
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
						idCard: '',
						phone: '',
						province: '',
						qq: '',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
						realName: '',
						personalIdentity3Key: '',
						registerAddress: '',
						gender: '',
						race: ''
					},
				},
				tips: '',
<<<<<<< HEAD
=======
=======
						realName: ''				
					}
				},
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
					'userInfo.phoneCode': {
						required: true,
						message: '请填写验证码',
						trigger: ['blur']
					},
					'userInfo.email': [{
							required: true,
							message: '请填写邮箱地址',
<<<<<<< HEAD
=======
=======
					'userInfo.email': [{
							required: true,
							message: '请填写E-mail邮箱',
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								return uni.$u.test.email(value);
							},
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
<<<<<<< HEAD
=======
=======
							message: 'E-mail邮箱不正确',
							trigger: ['change', 'blur'],
						}
					],
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
					'userInfo.areaName': {
						type: 'string',
						required: true,
						message: '请选择现住地址',
						trigger: ['blur', 'change']
					},
					'userInfo.address': {
						type: 'string',
						required: true,
<<<<<<< HEAD
						// min: 7,
=======
<<<<<<< HEAD
						// min: 7,
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
		
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
		onLoad(option) {
			const item = JSON.parse(decodeURIComponent(option.item));
			this.model.userInfo.idCard = item.idcardNum;
			this.model.userInfo.realName = item.realName;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
			this.model.userInfo.identityBackImageUrl = item.param.identityBackImageUrl;
			this.model.userInfo.identityImageUrl = item.param.identityImageUrl;
			this.model.userInfo.gender = item.gender;
			this.model.userInfo.race = item.race;
			this.model.userInfo.registerAddress = item.address;
<<<<<<< HEAD
=======
=======
			this.model.userInfo.address = item.address;
			this.model.userInfo.identityBackImageUrl = item.param.identityBackImageUrl;
			this.model.userInfo.identityImageUrl = item.param.identityImageUrl;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
			this.$refs.aPicker.initCityData();
		},

		methods: {
			// 选择地址
			openModal() {
				this.$refs.aPicker.show = true;
			},
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
			
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
			// 获取地址
			getareaInfo(data) {
				this.model.userInfo.province = data.province;
				this.model.userInfo.city = data.city;
				this.model.userInfo.area = data.area;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
<<<<<<< HEAD
=======
=======
				this.model.userInfo.areaName = data.areaName; 
				this.$refs.uForm.validateField('userInfo.areaName');
			},
			
			// 下一步
			goNext() {
				this.$refs.uForm.validate().then(res => {
					verifyUserInfo(this.model.userInfo).then(response=> {
						if(response.success) {
							uni.navigateTo({
								url: '/subPackages/faceRecognition/faceRecognition'
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
			padding: 0 28rpx 0 24rpx;
		}
	}

<<<<<<< HEAD
=======
=======
			padding: 0 28rpx 120rpx 24rpx;
		}
	}
	
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 1;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
		view {
			padding: 18rpx;
		}
	}
</style>
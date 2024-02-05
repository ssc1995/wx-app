<template>
	<scroll-view enable-flex scroll-y="true" class="container" :show-scrollbar="false">
		<view class="msg">
			请完成以下信息
		</view>
		<view class="info">
			<u--form labelPosition="left" :model="model" :rules="rules" ref="uForm" labelWidth="90">
				<u-form-item label="真实姓名" prop="userInfo.realName" borderBottom ref="item1">
					<u--input v-model="model.userInfo.realName" border="none" placeholder="请填写姓名"></u--input>
				</u-form-item>
				<u-form-item label="身份证号" prop="userInfo.idCard" borderBottom ref="item1">
					<u--input v-model="model.userInfo.idCard" border="none" placeholder="请填写身份证号"></u--input>
				</u-form-item>
				<u-form-item label="联系电话" prop="userInfo.phone" borderBottom>
					<u--input v-model="model.userInfo.phone" border="none" placeholder="请输入手机号码"></u--input>
				</u-form-item>
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
			</view>
		</view>
		<!-- 地区选择 -->
		<picker-area ref="aPicker" @getareaInfo="getareaInfo"></picker-area>
	</scroll-view>
</template>

<script>
	import { verifyUserInfo } from '@/config/api.js';
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
						idCard: '',
						phone: '',
						province: '',
						qq: '',
						realName: ''				
					}
				},
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
					'userInfo.email': [{
							required: true,
							message: '请填写E-mail邮箱',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								return uni.$u.test.email(value);
							},
							message: 'E-mail邮箱不正确',
							trigger: ['change', 'blur'],
						}
					],
					'userInfo.areaName': {
						type: 'string',
						required: true,
						message: '请选择现住地址',
						trigger: ['blur', 'change']
					},
					'userInfo.address': {
						type: 'string',
						required: true,
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
			this.model.userInfo.address = item.address;
			this.model.userInfo.identityBackImageUrl = item.param.identityBackImageUrl;
			this.model.userInfo.identityImageUrl = item.param.identityImageUrl;
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
			
			// 下一步
			goNext() {
				this.$refs.uForm.validate().then(res => {
					verifyUserInfo(this.model.userInfo).then(response=> {
						if(response.success) {
							uni.navigateTo({
								url: '/subPackages/faceRecognition/faceRecognition'
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
			padding: 0 28rpx 120rpx 24rpx;
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
<template>
	<view class="content">
		<u--form labelPosition="left" :model="model" :rules="rules" ref="uForm" labelWidth="80">
			<u-form-item label="真实姓名" prop="userInfo.consignee" borderBottom>
				<u--input v-model="model.userInfo.consignee" border="none" placeholder="请输入收货人姓名"></u--input>
			</u-form-item>
			<u-form-item label="联系电话" prop="userInfo.phone" borderBottom>
				<u--input v-model="model.userInfo.phone" border="none" placeholder="请输入手机号码"></u--input>
			</u-form-item>
			<u-form-item label="收货地址" prop="userInfo.areaName" borderBottom @click="openModal">
				<u--input v-model="model.userInfo.areaName" disabledColor="#fff" placeholder="请选择收货地址" border="none"
					disabled></u--input>
				<u-icon slot="right" name="arrow-right" v-if="!this.model.userInfo.isDisabled"></u-icon>
			</u-form-item>
			<u-form-item label="" label-width="0" prop="userInfo.address" borderBottom>
				<u--textarea v-model="model.userInfo.address" placeholder="详细地址：如街道、门牌号、小区、楼栋号、单元室等" autoHeight
					border="none"></u--textarea>
			</u-form-item>
		</u--form>
		<view style="padding-top: 60px;">
			<u-button @click="submit" color="#FE542C">提交</u-button>
		</view>

		<!-- 地区选择 -->
		<picker-area ref="aPicker" @getareaInfo="getareaInfo"></picker-area>
	</view>
</template>
<script>
	import { addOrUpdate, updateOrderAddress } from '@/config/api.js';
	export default {
		data() {
			return {
				model: {
					userInfo: {
						consignee: '',
						phone: '',
						address: '',
						areaName: '',
						city: '',
						area: '',
						province: '',
						isDefault: 0,
						isDisabled: false
					},
				},
				type: '',
				rules: {
					'userInfo.consignee': {
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
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
					'userInfo.areaName': {
						type: 'string',
						required: true,
						message: '请选择收货地址',
						trigger: ['blur', 'change']
					},
					'userInfo.address': {
						type: 'string',
						required: true,
						message: '请输入详细地址',
						trigger: ['blur', 'change']
					},
				}
			}
		},

		onReady() {
			//onReady 为uni-app支持的生命周期之一
			this.$refs.uForm.setRules(this.rules)
		},

		onLoad(option) {
			const item = JSON.parse(decodeURIComponent(option.item));
			this.model.userInfo = item;
			this.$refs.aPicker.initCityData();
		},

		methods: {
			
			// 选择地址
			openModal() {
				if(!this.model.userInfo.isDisabled) this.$refs.aPicker.show = true;
			},
			
			// 获取地址
			getareaInfo(data) {
				this.model.userInfo.province = data.province;
				this.model.userInfo.city = data.city;
				this.model.userInfo.area = data.area;
				this.model.userInfo.areaName = data.areaName; 
				this.$refs.uForm.validateField('userInfo.areaName');
			},
			
			// 提交
			submit() {
				this.$refs.uForm.validate().then(res => {
					this.$store.dispatch('Common/setAddress', this.model.userInfo);
					if(!this.model.userInfo.isDisabled) {
						addOrUpdate(this.model.userInfo).then(Response=> {
							if(Response.success) {
								uni.navigateBack()
							}
						});
					} else {
						updateOrderAddress(this.model.userInfo).then(Response=> {
							if(Response.success) {
								uni.navigateBack()
							}
						})
					}
				}).catch(errors => {})
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		background-color: #fff;
		padding: 24rpx;
	}
</style>
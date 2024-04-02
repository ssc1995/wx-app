<template>
	<scroll-view enable-flex scroll-y="true" :show-scrollbar="false" class="add-bank-card">
		<u-alert show-icon title="为保障账号安全，需使用本人银行卡预留手机号" type="warning" fontSize="12"></u-alert>
		<view class="content">
			<u--form labelPosition="top" :model="model" :rules="rules" ref="uForm" labelWidth="80" :borderBottom="false">
				<view class="form">
					<u-form-item label="持卡人姓名" prop="userInfo.realName" borderBottom ref="item1">
						<u--input v-model="model.userInfo.realName" border="none" placeholder="请填写姓名"></u--input>
					</u-form-item>
					<u-form-item label="身份证号" prop="userInfo.idCard" borderBottom ref="item1">
						<u--input v-model="model.userInfo.idCard" border="none" placeholder="请填写身份证号"></u--input>
					</u-form-item>
					<u-form-item label="手机号" prop="userInfo.phone" borderBottom ref="item1">
						<u--input v-model="model.userInfo.phone" border="none" placeholder="请填写银行卡预留手机号" type="number"></u--input>
					</u-form-item>
				</view>
				<view class="form" style="margin-top: 18rpx;">
					<u-form-item label="所属银行" prop="userInfo.bankName" borderBottom ref="item1" @click="show = true">
						<u--input v-model="model.userInfo.bankName" border="none" disabled disabledColor="#ffffff"
							placeholder="请选择银行"></u--input>
						<u-icon slot="right" name="arrow-right"></u-icon>
					</u-form-item>
					<u-form-item label="银行卡号" prop="userInfo.bankCard" borderBottom ref="item1">
						<u--input v-model="model.userInfo.bankCard" border="none" placeholder="请填写银行卡号" @input="onInput"></u--input>
					</u-form-item>
				</view>
			</u--form>
		</view>
		<view class="footer">
			<view class="">
				<u-button text="保 存" color="#FE542C" @click="handlerOk" shape="circle"></u-button>
			</view>
		</view>
		<!-- 银行卡 -->
		<u-picker :show="show" ref="uPicker" keyName="name" :defaultIndex="defaultIndex" :columns="list"
			@confirm="cityConfirm" @cancel="show = false"></u-picker>
	</scroll-view>
</template>

<script>
	import {
		addOrUpdateBanks
	} from '@/config/api.js';
	import {
		selectType
	} from '@/config/home.js';
	export default {
		data() {
			return {
				model: {
					userInfo: {
						bankCard: '',
						bankCode: '',
						bankName: '',
						isDefault: '',
						phone: '',
						realName: '',
						idCard: ''
					}
				},
				rules: {
					'userInfo.realName': {
						required: true,
						message: '请输入姓名',
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
							message: '请填写手机号',
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
					'userInfo.bankName': {
						required: true,
						message: '请选择开户银行',
						trigger: ['blur', 'change']
					},
					'userInfo.bankCard': {
						required: true,
						message: '请填写银行卡号',
						trigger: ['blur', 'change']
					}
				},
				list: [],
				show: false,
				isAdd: true,
				defaultIndex: [0],
			}
		},

		onReady() {
			//onReady 为uni-app支持的生命周期之一
			this.$refs.uForm.setRules(this.rules);
			if (!this.isAdd) return uni.setNavigationBarTitle({
				title: '编辑银行卡'
			});
		},

		onLoad(option) {
			if (option.item) {
				const item = JSON.parse(decodeURIComponent(option.item));
				this.model.userInfo = item;
				this.isAdd = false;
			};
			this.bankList();
		},

		methods: {
			// 开户行
			bankList() {
				const params = {
					type: 'bank'
				};
				selectType(params).then(res => {
					if (res.success) {
						this.list = [res.data];
						let index = res.data.findIndex(item => item.name == this.model.userInfo.bankName);
						this.defaultIndex = [index];
					}
				})
			},

			// 选择银行
			cityConfirm(e) {
				let data = e.value[0];
				this.model.userInfo.bankCode = data.code;
				this.model.userInfo.bankName = data.name;
				this.$refs.uForm.validateField('userInfo.bankCode');
				this.show = false;
			},

			//操作银行卡
			onInput(event) {
				this.model.userInfo.bankCard = this.model.userInfo.bankCard.replace(/(\d{4})(?=\d)/g, '$1 ') // 4位
			},

			// 保存
			handlerOk() {
				this.$refs.uForm.validate().then(res => {
					addOrUpdateBanks(this.model.userInfo).then(response => {
						if (response.success) {
							uni.navigateBack()
						}
					})
				}).catch(errors => {})
			}
		}
	}
</script>

<style scoped lang="scss">
	.add-bank-card {
		font-size: 28rpx;
		color: #333;
		height: 100vh;
	}

	.content {

		.form {
			padding: 0 22rpx;
			padding-top: 15rpx;
			background-color: #fff;
		}
	}

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 1;
		background-color: #F2F2F2;

		view {
			padding: 18rpx;
		}
	}
</style>
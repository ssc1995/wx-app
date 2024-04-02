<template>
	<scroll-view enable-flex scroll-y="true" class="container" :show-scrollbar="false">
		<view class="msg">
			请完成以下信息
		</view>
		<view class="info">
			<u--form labelPosition="left" :model="model" :rules="rules" ref="uForm" labelWidth="90">
				<u-form-item label="手机号码" prop="userInfo.phone" borderBottom ref="item1">
					<u--input v-model="model.userInfo.phone" border="none" placeholder="请填写手机号"></u--input>
				</u-form-item>
				<u-form-item label="开户银行" prop="userInfo.bankName" borderBottom ref="item1" @click="show = true">
<<<<<<< HEAD
					<u--input v-model="model.userInfo.bankName" border="none" placeholder="请选择开户银行" disabled
						disabledColor="#fff"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
=======
<<<<<<< HEAD
					<u--input v-model="model.userInfo.bankName" border="none" placeholder="请选择开户银行" disabled
						disabledColor="#fff"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
=======
					<u--input 
						v-model="model.userInfo.bankName" 
						border="none" 
						placeholder="请选择开户银行"
						disabled
						disabledColor="#fff"
					></u--input>
					<u-icon
						slot="right"
						name="arrow-right"
					></u-icon>
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
				</u-form-item>
				<u-form-item label="银行卡号" prop="userInfo.bankCard" borderBottom ref="item1">
					<u--input v-model="model.userInfo.bankCard" border="none" placeholder="请填写银行卡号" @input="onInput"></u--input>
				</u-form-item>
			</u--form>
		</view>
		<view class="remark">
			*手机号码必须是银行预留手机号
		</view>
		<view class="footer">
			<view class="">
				<u-button text="保 存" color="#FE542C" @click="handlerOk" shape="circle"></u-button>
			</view>
		</view>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
		
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
		<!-- 银行卡 -->
		<u-picker :show="show" ref="uPicker" keyName="name" :columns="list" @confirm="cityConfirm" @cancel="show = false">
		</u-picker>
	</scroll-view>
</template>

<script>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
	import {
		selectType
	} from '@/config/home.js';
	import {
		verifyBank
	} from '@/config/api.js'
<<<<<<< HEAD
=======
=======
	import { selectType } from '@/config/home.js';
	import { verifyBank } from '@/config/api.js'
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
	export default {
		data() {
			return {
				model: {
					userInfo: {
						phone: '',
						bankName: '',
						bankCode: '',
						bankCard: '',
					}
				},
				rules: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
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
				show: false,
				list: []
			}
		},

		onLoad() {
			this.bankList()
		},

		onReady() {
			//onReady 为uni-app支持的生命周期之一
			this.$refs.uForm.setRules(this.rules)
		},
		methods: {

			// 开户行
			bankList() {
				const params = {
					type: 'bank'
				};
				selectType(params).then(res => {
					if (res.success) {
<<<<<<< HEAD
=======
=======
					'userInfo.phone': [
							{
								required: true, 
								message: '请填写手机号',
								trigger: ['change','blur'],
							},
							{
								validator: (rule, value, callback) => {
									return uni.$u.test.mobile(value);
								},
								message: '手机号码不正确',
								trigger: ['change','blur'],
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
				show:false,
				list: []
			}
		},
		
		onLoad() {
			this.bankList()
		},
		
		onReady() {
				//onReady 为uni-app支持的生命周期之一
		    	this.$refs.uForm.setRules(this.rules)
		},
		methods: {
			
			// 开户行
			bankList() {
				const params = { type: 'bank' };
				selectType(params).then(res=> {
					if(res.success) {
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
						this.list = [res.data];
					}
				})
			},
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
			
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			// 选择银行
			cityConfirm(e) {
				let data = e.value[0];
				this.model.userInfo.bankCode = data.code;
				this.model.userInfo.bankName = data.name;
				this.$refs.uForm.validateField('userInfo.bankCode');
				this.show = false;
			},
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
			
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			//操作银行卡
			onInput(event) {
				// this.model.userInfo.bankCard = this.model.userInfo.bankCard.replace(/\D/g, '') // 不允许输入非数字字符
				this.model.userInfo.bankCard = this.model.userInfo.bankCard.replace(/(\d{4})(?=\d)/g, '$1 ') // 4位
			},
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
			
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			// 确认信息
			handlerOk() {
				this.$refs.uForm.validate().then(res => {
					verifyBank(this.model.userInfo).then(res=> {
						if(res.success) {
							uni.navigateBack()
						}
					})
				}).catch(errors => {
					// uni.$u.toast('校验失败')
				})
			}
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
			padding: 24rpx 0 12rpx 24rpx;
		}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
		
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
		.info {
			background-color: #fff;
			padding: 0 28rpx 0 24rpx;
		}
	}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
	
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
	.remark {
		height: 36rpx;
		font-size: 25rpx;
		font-family: PingFangSC, PingFang SC;
		font-weight: 400;
		color: #fcbd71;
		line-height: 36rpx;
		padding-left: 24rpx;
		padding-top: 20rpx;
	}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
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
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
		view {
			padding: 18rpx;
		}
	}
<<<<<<< HEAD
</style>
=======
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c

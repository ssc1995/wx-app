<template>
	<scroll-view enable-flex scroll-y="true" class="container" :show-scrollbar="false">
		<view class="msg">
			请完成以下信息
		</view>
		<view class="info">
			<u--form labelPosition="left" :model="model" :rules="rules" ref="uForm" labelWidth="80">
				<u-form-item label="职业" prop="userInfo.jobName" borderBottom ref="item1" @click="jobShow = true">
					<u--input border="none" placeholder="请选择职业" disabled disabledColor="#fff"
						v-model="model.userInfo.jobName"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="月收入" prop="userInfo.incomeName" borderBottom ref="item1" @click="revenueShow = true">
					<u--input border="none" placeholder="请选择月收入" disabled disabledColor="#fff"
						v-model="model.userInfo.incomeName"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="单位名称" prop="userInfo.companyName" borderBottom ref="item1">
					<u--input border="none" placeholder="请填写单位名称" v-model="model.userInfo.companyName"></u--input>
				</u-form-item>
				<u-form-item label="公司地址" prop="userInfo.areaName" borderBottom ref="item1" @click="openModal">
					<u--input border="none" placeholder="请选择公司地址" disabled disabledColor="#fff"
						v-model="model.userInfo.areaName"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="" label-width="0" prop="userInfo.address" borderBottom ref="item1">
					<u--textarea border="none" v-model="model.userInfo.address"
						placeholder="详细地址：如街道、门牌号、小区、楼栋号、单元室等"></u--textarea>
				</u-form-item>
			</u--form>
		</view>
		<view class="footer">
			<view class="">
				<u-button text="提 交" color="#FE542C" @click="handlerOk" shape="circle"></u-button>
			</view>
		</view>

		<!-- 职业选择 -->
		<u-picker :show="jobShow" keyName="name" :columns="jobList" @confirm="jobConfirm" @cancel="jobShow = false">
		</u-picker>

		<!-- 收入选择 -->
		<u-picker :show="revenueShow" keyName="name" :columns="revenueList" @confirm="revenueConfirm"
			@cancel="revenueShow = false">
		</u-picker>

		<!-- 地区选择 -->
		<picker-area ref="aPicker" @getareaInfo="getareaInfo"></picker-area>
	</scroll-view>
</template>

<script>
	import {
		selectType
	} from '@/config/home.js';
	import {
		verifyJob
	} from '@/config/api.js';
	export default {
		data() {
			return {
				model: {
					userInfo: {
						province: '',
						city: '',
						area: '',
						address: '',
						areaName: '',
						companyName: '',
						income: '',
						incomeName: '',
						job: '',
						jobName: ''
					}
				},
				jobList: [],
				revenueList: [],
				rules: {
					'userInfo.jobName': {
						type: 'string',
						required: true,
						message: '请选择职业',
						trigger: ['blur', 'change']
					},
					'userInfo.incomeName': {
						type: 'string',
						required: true,
						message: '请选择月收入',
						trigger: ['blur', 'change']
					}
				},
				jobShow: false,
				revenueShow: false,
			}
		},

		onReady() {
			//onReady 为uni-app支持的生命周期之一
			this.$refs.uForm.setRules(this.rules)
		},

		onLoad() {
			this.getJobs();
			this.getIncome();
			this.$refs.aPicker.initCityData();
		},

		methods: {

			// 职业
			getJobs() {
				let params = {
					type: 'job'
				};
				selectType(params).then(res => {
					if (res.success) {
						this.jobList = [res.data];
					}
				})
			},

			// 收入
			getIncome() {
				let params = {
					type: 'income'
				};
				selectType(params).then(res => {
					if (res.success) {
						this.revenueList = [res.data];
					}
				})
			},

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
			},

			// 选择职业
			jobConfirm(e) {
				let arr = e.value;
				this.model.userInfo.jobName = arr[0].name;
				this.model.userInfo.job = arr[0].id;
				this.$refs.uForm.validateField('userInfo.jobName');
				this.jobShow = false;
			},

			// 选择月收入
			revenueConfirm(e) {
				let arr = e.value;
				this.model.userInfo.incomeName = arr[0].name;
				this.model.userInfo.income = arr[0].id;
				this.$refs.uForm.validateField('userInfo.incomeName');
				this.revenueShow = false;
			},

			// 提交
			handlerOk() {
				this.$refs.uForm.validate().then(res => {
					verifyJob(this.model.userInfo).then(result => {
						if (result.success) {
							uni.navigateBack()
						}
					})
				}).catch(errors => {

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
		height: 160rpx;
		background-color: #F2F2F2;

		view {
			padding: 18rpx;
		}
	}
</style>
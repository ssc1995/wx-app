<template>
	<scroll-view enable-flex scroll-y="true" :show-scrollbar="false" class="invoice-info">
		<view class="title">
			<view style="font-size: 25rpx;height: 36rpx;line-height: 36rpx;">发票类型</view>
			<view class="tag isSelect">
				普通发票
			</view>
			<view style="color: #999;font-size: 25rpx;height: 36rpx;line-height: 36rpx;">
				默认提供电子发票，暂不支持纸质发票邮寄。
			</view>
		</view>
		<view class="title" style="margin-top: 18rpx; height: auto;">
			<view style="font-size: 25rpx;height: 36rpx;line-height: 36rpx;">发票信息</view>
			<view style="display: flex;align-items: center;">
				<view class="tag tag1" :class="{isSelect: model.userInfo.type == 0}" style="margin-right: 36rpx;" @click="onChange(0)">
					个人
				</view>
				<view class="tag tag1" :class="{isSelect: model.userInfo.type == 1}" @click="onChange(1)">
					公司
				</view>
			</view>
			<!-- 名称 税号 -->
			<u--form labelPosition="left" :model="model" :rules="rules" ref="uForm">
				<u-form-item label="姓名" prop="userInfo.title" borderBottom ref="item1">
					<u--input v-model="model.userInfo.title" border="none" placeholder="请输入发票抬头"></u--input>
				</u-form-item>
				<u-form-item label="税号" prop="userInfo.taxNo" :borderBottom="false" ref="item1">
					<u--input v-model="model.userInfo.taxNo" border="none" placeholder="请输入纳税人识别号或统一社会信用代码"></u--input>
				</u-form-item>
			</u--form>
			<!-- 确定 -->
			<view class="footer">
				<view class="">
					<u-button text="确 定" color="#FE542C" @click="onSubmit" shape="circle"></u-button>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import { ticketApply } from '@/config/api';
	import { mapMutations } from 'vuex';
	export default {
		data() {
			return {
				isCheck: 1,
				model: {
					userInfo: {
						orderId: '',
						type: 0,
						title: '',
						taxNo: '',
					}
				},
				rules: {
					'userInfo.title': {
						type: 'string',
						required: true,
						message: '请输入发票抬头',
						trigger: ['blur', 'change']
					},
					'userInfo.taxNo': {
						type: 'string',
						required: true,
						message: '请输入纳税人识别号或统一社会信用代码',
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
			this.model.userInfo.title = option.name;
			this.model.userInfo.orderId = option.orderId;
		},

		methods: {
			
			...mapMutations('Common',[
				'setInvoice'
			]),
			
			// 选择发票类型
			onChange(val) {
				this.model.userInfo.type = val;
			},
			
			// 提交
			onSubmit() {
				this.$refs.uForm.validate().then(res => {
					ticketApply(this.model.userInfo).then(res=> {
						if(res.success) {
							this.setInvoice(this.model.userInfo);
							uni.showToast({
								title: "提交成功",
							});
							setTimeout(()=> {
								uni.navigateBack();
							}, 1500)
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
	.invoice-info {
		color: #333;
		font-size: 28rpx;
		height: 100vh;
	}

	.title {
		height: 162rpx;
		background: #fff;
		display: flex;
		flex-direction: column;
		padding: 24rpx 0 24rpx 34rpx;
	}

	.tag {
		width: 140rpx;
		height: 48rpx;
		border-radius: 2rpx;
		border: 1rpx solid #666;
		font-size: 25rpx;
		font-family: PingFangSC, PingFang SC;
		font-weight: 400;
		line-height: 48rpx;
		text-align: center;
		margin-top: 18rpx;
		margin-bottom: 24rpx;
	}

	.tag1 {
		width: 89rpx;
	}

	.isSelect {
		color: #FE542C;
		border: 1rpx solid #FE542C;
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
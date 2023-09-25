<template>
	<view>
		<u--image :showLoading="true" src="https://cdn.uviewui.com/uview/album/1.jpg" width="100%"
			height="200px"></u--image>
		<view class="info">
			<text class="line">—</text>
			<text class="title">填写报名信息</text>
			<text class="line">—</text>
		</view>
		<view class="content">
			<u--form :model="form" ref="uForm" :labelWidth="60">
				<u-form-item label="姓名" prop="name" borderBottom>
					<u--input v-model="form.name" placeholder="请输入姓名" border="none" />
				</u-form-item>
				<u-form-item label="手机号" prop="mobile" borderBottom>
					<u--input v-model="form.mobile" placeholder="请输入手机号" type="number" border="none" />
				</u-form-item>
				<u-form-item label="性别" prop="sex" borderBottom @click="showSex = true; hideKeyboard()" ref="item1">
					<u--input v-model="form.sex" disabled disabledColor="#ffffff" placeholder="请选择性别" border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="年龄" prop="age" borderBottom>
					<u--input v-model="form.age" placeholder="请输入年龄" type="number" border="none" />
				</u-form-item>
			</u--form>
			<view class="btn">
				<u-button @click="submit" type="primary">提交报名</u-button>
			</view>
			<u-action-sheet :show="showSex" :actions="actions" title="请选择性别" @close="showSex = false" @select="sexSelect">
			</u-action-sheet>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					mobile: ''
				},
				showSex: false,
				actions: [{
						name: '男',
					},
					{
						name: '女',
					}
				],
				rules: {
					// 字段名称
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: ['blur'],
					}],
					mobile: [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur'],
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								// this.$u.test.mobile()就是返回true或者false的
								return this.$u.test.mobile(value);
							},
							message: '手机号码格式不正确',
							// 触发器可以同时用blur和change
							trigger: ['change', 'blur'],
						}
					]
				}
			}
		},

		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},

		onLoad() {

		},

		onShow() {},

		methods: {
			sexSelect(e) {
				this.form.sex = e.name
			},

			submit() {
				this.$refs.uForm.validate().then(res => {
					// uni.$u.toast('校验通过')
				}).catch(errors => {
					// uni.$u.toast('校验失败')
					return false
				})
			}

		}
	}
</script>

<style scoped lang="scss">
	.info {
		text-align: center;
		margin-top: 30px;
		margin-bottom: 20px;

		.line {
			color: brown;
			font-size: 20px;
		}

		.title {
			padding: 0 10px;
		}
	}

	.content {
		padding: 0 15px;
	}
	.btn {
		margin-top: 30px;
	}
</style>
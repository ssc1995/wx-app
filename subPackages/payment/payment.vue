<template>
	<view>
		<u--form labelPosition="left" :model="ruleForm" :rules="rules" ref="uForm">
			<u-form-item prop="price" borderBottom ref="item1">
				<u--input 
					v-model="ruleForm.name" 
					border="none"
					prefixIcon="rmb"
				></u--input>
			</u-form-item>
		</u--form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					price: 0
				},
				rules: {

				}
			}
		},

		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.uForm.setRules(this.rules)
		},
		methods: {

		}
	}
</script>

<style>

</style>
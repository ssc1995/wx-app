<template>
	<scroll-view enable-flex scroll-y="true" :show-scrollbar="false" class="login">
		<view class="title">
			<view class="icon">蜜田</view>
		</view>
		<view class="content">
			<u-button 
				v-if="disabled"
				text="手机号一键登录" 
				color="#FE542C" 
				size="large"  
				class="login_button" 
				open-type="getPhoneNumber"
				@getphonenumber="login"
			></u-button>
			<u-button v-else text="手机号一键登录" color="#FE542C" size="large" @click="setChecked"></u-button>
		</view>
		<view class="check-box">
			<u-checkbox-group>
				<u-checkbox 
					shape="circle" 
					activeColor="#FE542C" 
					v-model="checked"
					@change="changeCheck"
				></u-checkbox>
			</u-checkbox-group>
			<view style="color: #FE542C; font-size: 24rpx;">
				<text style="color: #999; margin-right: 6rpx;">我已阅读并同意</text>
				<text @click="show = true">蜜田信易购用户注册协议、隐私政策</text>
			</view>
		</view>
		<u-action-sheet 
			cancelText="取消" 
			@close="show = false"
			:actions="agreeList" 
			:title="name" 
			:show="show" 
			safeAreaInsetBottom
			round="10"
			@select="selectClick"
		></u-action-sheet>
	</scroll-view>
</template>

<script>
	import { loginWx, miniLogin } from '@/config/login.js';
	import { clientListCode } from '@/config/home.js';
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				checked: false,
				disabled: false,
				agreeList: [],
				show: false
			}
		},
		
		onLoad() {
			clientListCode("login").then(res=> {
				if(res.success) {
					this.agreeList = res.data;
				}
			})
		},
		
		computed: {
			...mapState({
				scene: state=> state.Login.scene,
			}),
		},
				
		methods: {
			
			// change事件
			changeCheck(n) {
				this.disabled = n;
			},	
			
			// 选择协议
			selectClick(object) {
				uni.navigateTo({
					url: '/subPackages/webView/webView?id=' + object.id
				})
			},
			
			// 是否勾选用户协议
			setChecked() {
				if(!this.checked) return uni.showToast({ title: '请阅读并勾选用户协议', icon: 'none' });
			},
			
			// 获取手机号登录
			// login() {
			//  uni.getUserProfile({  
			// 		lang: 'zh_CN',
			// 		desc:'获取用户信息',
			// 		success: userInfo=> {
			// 				console.log(userInfo,'userInfo');
			// 				uni.login({
			// 						provider: 'weixin',
			// 						success: loginInfo=> {
			// 							console.log(loginInfo, 'sss')
			// 							if(loginInfo.errMsg == 'login:ok') {
			// 								let params = {
			// 									...userInfo,
			// 									code: loginInfo.code
			// 								};
			// 								miniLogin(params).then(res=> {
			// 									if(res.success) {
			// 										console.log('ddd')
			// 									}
			// 								}) 
			// 							}
   
			// 						}
			// 				});
			// 		 },
			// 		fail:err=>{
			// 				console.log(err,'err')
			// 		}
			// 	});
			// },
			login(e) {
				let detail = e.detail;
				if (detail.errMsg == "getPhoneNumber:ok") {
				  let code = detail.code;
					uni.login({
						provider: 'weixin',
						success: loginInfo=> {
							if(loginInfo.errMsg == 'login:ok') {
								let params = {
									code: code,
									userCode: loginInfo.code,
									fromMemberId: this.scene
								}
								loginWx(params).then(res=> {
									if(res.success) {
										this.$store.dispatch('Login/getToken', res.data);
									}
								})
							}
						}
					});
				} else {
					uni.showModal({
						title: '提示',
						content: '您已拒绝授权，请重新点击并授权!',
						showCancel: false,
					});
				}
			}
			
		}
	}
</script>

<style scoped lang="scss">
.login {
	color: #333;
	font-size: 28rpx;
	height: 100vh;
}
.title {
	height: 466rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.icon {
	width: 181rpx;
	height: 182rpx;
	line-height: 182rpx;
	color: #fff;
	font-size: 70rpx;
	text-align: center;
	background: linear-gradient(69deg, #FF8972 0%, #FE5364 100%);
	border-radius: 47rpx;
}

.content {
	background-color: #fff;
	padding: 0 18rpx;
}
.check-box {
	padding-top: 70rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>

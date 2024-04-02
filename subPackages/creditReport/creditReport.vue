<template>
	<view class="credit-report">
		<view class="header">
			<view class="header-image">
				<u--image :src="bgc" width="100%" height="300rpx"></u--image>
			</view>
			<view class="avatar">
				<view class="">
					<u--image :src="avatar" width="100rpx" height="100rpx" mode="scaleToFill"></u--image>
				</view>
				<view style="margin-top: 10rpx;">
					{{ getName(userInfo.realName) }}
				</view>
				<view style="margin-top: 10rpx;">
					{{ getIdCard(userInfo.idCard) }}
				</view>
			</view>
		</view>
		
		<view style="margin-top: 18rpx; background-color: #fff;">
			<u-cell-group>
				<u-cell title="基本信息" value="待解锁"></u-cell>
				<u-cell title="二要素验证" value="待解锁"></u-cell>
				<u-cell title="申请记录" value="待解锁"></u-cell>
				<u-cell title="赊账记录" value="待解锁"></u-cell>
				<u-cell title="关联申请记录" value="待解锁"></u-cell>
				<u-cell title="法院失信名单" value="待解锁"></u-cell>
				<u-cell title="风险联系人" value="待解锁"></u-cell>
				<u-cell title="风险关注名单" value="待解锁"></u-cell>
			</u-cell-group>
		</view>
		<view style="height: 120rpx;"></view>
		<view class="footer">
			<view class="">
				<u-button :text="'征信查询需支付￥' + userInfo.creditFee + '元'" color="#FE542C" @click="handlerOk" shape="circle" :loading="loadingBtn"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	import {
		repaymentApply,
		wxPayment,
		creditCreate
	} from '@/config/api.js';
	export default {
		data() {
			return {
				bgc: this.$imgSrc + '/login.jpg',
				avatar: this.$imgSrc + '/ava.png',
				loadingBtn: false
			}
		},
		
		computed: {
			...mapState({
				userInfo: state => state.Login.user,
			}),
		},
		
		methods: {
			
			// 名字脱敏
			getName(name) {
			  let newStr
			  if (name.length === 2) {
			     newStr = name.substr(0, 1) + '*'
			  } else if (name.length > 2) {
			     let char = ''
			     for (let i = 0, len = name.length - 2; i < len; i++) {
			        char += '*'
			     }
			     newStr = name.substr(0, 1) + char + name.substr(-1, 1)
			  } else {
			     newStr = name
			  }
			  return newStr
			},
			
			// 手机号脱敏
			getPhone(tel) {
			    if(!tel) return tel;
			    const phone = tel.replace(tel.substring(3,7),'****')
			    return phone
			},
			
			// 身份证脱敏 str：要进行处理的值，frontLen: 前面保留的位数，endLen: 后面保留的位数
			getIdCard(str,frontLen = 6,endLen = 4) {   
			    var len = str.length-frontLen-endLen;
			    var start = '';   
			    for (var i=0;i<len;i++) {
			      start+='*';
			   }
			    // 最后的返回值由三部分组成
			   return str.substring(0,frontLen)+start+str.substring(str.length-endLen);
			  },

			// 征信查询
			handlerOk() {			
				let that = this;
				that.loadingBtn = true;
				creditCreate({creditFee: this.userInfo.creditFee}).then(res => {
					if (res.success) {
						wxPayment({
							orderSn: res.data.orderSn,
							orderType: 3
						}).then(result => {
							uni.requestPayment({
								timeStamp: result.data.timeStamp,
								nonceStr: result.data.nonceStr,
								package: result.data.package,
								signType: result.data.signType,
								paySign: result.data.paySign,
								success(respon) {
									uni.switchTab({
										url: '/pages/whiteBar/whiteBar'
									})
								},
								fail(respon) {
				
								}
							})
						})
					}
				}).finally(()=> {
					that.loadingBtn = false;
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.credit-report {
	height: 100vh;
	color: #333;
	font-size: 28rpx;
	padding: 0 18rpx;
}
	.header {
		height: 300rpx;
		width:100%;
		position: relative;
		.header-image {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: -1;
		}
	}
	.avatar {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		flex-direction: column;
		color: #FE542C;
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

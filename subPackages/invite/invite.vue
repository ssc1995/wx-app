<template>
	<view class="invite">
		<view class="bgc">
			<u--image :src="src" width="100%" height="100vh" @click="click"></u--image>
		</view>
		<view class="integral-rule" @click="goRules">
			积分规则
		</view>
		<view class="upload">
			<u--image :src="imageUrl" width="300rpx" height="300rpx">
				<template v-slot:loading>
				    <u-loading-icon color="#FE542C"></u-loading-icon>
				  </template>
			</u--image>
		</view>
		<view class="flex">
			<u-grid :border="false" :col="3" @click="goDetails">
				<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
					<view class="">
						{{baseListItem.num}}
					</view>
					<text class="grid-text">{{baseListItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>
	</view>
</template>

<script>
	import {
		goodInfo
	} from '@/config/api.js';
	import { clientListCode } from '@/config/home.js';
	import { mapState } from 'vuex';
	export default {
		name: 'Invite',
		data() {
			return {
				src: this.$imgSrc + '/friends.png',
				imageUrl: '',
				baseList: [],
				agreeList: []
			}
		},
		
		computed: {
			...mapState({
				user: state=> state.Login.user,
			}),
		},

		onLoad() {
			this.getInfo();
			clientListCode("integralRule").then(res=> {
				if(res.success) {
					this.agreeList = res.data;
				}
			})
		},
		
		onReady() {
			this.getAccessToken();
		},

		methods: {

			// 获取邀请信息
			getInfo() {
				goodInfo().then(res => {
					if (res.success) {
						this.baseList = [{
								title: '邀请成功(人)',
								num: res.data.inviteCount
							},
							{
								title: '下单成功(人)',
								num: res.data.orderCount
							},
							{
								title: '邀请奖励(元)',
								num: Number(res.data.totalMoney).toFixed(2)
							}
						]
					}
				})
			},

			// 查看详情
			goDetails() {
				uni.navigateTo({
					url: '/subPackages/pointsMall/pointsMall'
				})
			},
			
			// 积分规则
			goRules() {
				uni.navigateTo({
					url: '/subPackages/webView/webView?id=' + this.agreeList[0].id
				})
			},

			// 获取 access_token
			getAccessToken() {
<<<<<<< HEAD
				const appid = "";
				const secret = "";
=======
				const appid = "wx3ad83387bbb7622f";
				const secret = "2cd0093a7b4879761143cf6e3b979d25";
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
				uni.request({
					method: "GET",
					url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`,
					success: (result) => {
						let access_token = result.data.access_token
						// 获取到 access_token 后 获取二维码
						this.getQrCode(access_token)
					}
				})
			},

			// 获取二维码
			getQrCode(token) {
				// 注意 access_token 参数是必须放在url后面 其余参数 要在data里面
				let path = 'pages/index/index'
				uni.request({
					method: "POST",
					responseType: 'arraybuffer', // 注意一定要加 不然返回的Buffer流会乱码 导致无法转base64
					url: `https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${token}`,
					data: {
						"page": "pages/index/index",
						"scene": this.user.id,
						"check_path": false,
						"env_version": "develop"
					},
					success: (result) => {
						// 拿到buffer流 通过uni.arrayBufferToBase64 转成base64 在页面展示
						// 如果不加请求时 responseType: 'arraybuffer' 则会转码失败
						this.imageUrl = "data:image/png;base64," + uni.arrayBufferToBase64(result.data);
					}
				})
			},

		}
	}
</script>

<style scoped lang="scss">
	.invite {
		width: 100%;
		height: 100vh;
		position: relative;
		overflow: hidden;

		.bgc {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: -1;
		}
		.integral-rule {
			position: absolute;
			top: 0;
			right: 0;
			top: 30%;
			right: 40%;
			color: #fff;
			border-bottom: 1px solid #fff;
		}

		.upload {
			position: absolute;
			width: 100%;
			bottom: 150rpx;
			display: flex;
			justify-content: center;

		}

		.flex {
			position: absolute;
			width: 100%;
			bottom: 50rpx;
			display: flex;
			justify-content: center;
			flex-direction: column;
			color: #fff;
			font-size: 22rpx;
		}
	}
</style>
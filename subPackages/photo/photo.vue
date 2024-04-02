<template>
	<view class="photoImg" :style="{ height: windowHeight + 'px' }">
		<view class="warn">
			 {{ photoType=='idpositive' ? '身份证人像面' : '身份证国徽面' }} 
		</view>
		<camera 
			mode="normal" 
			resolution="high"
			:device-position="devicePosition" 
			frame-size="small"
			style="height: 500rpx; width: 90%;"
			@error="errorCamera"
		>
			<cover-view class="controls" style="width: 100%;height: 100%;">
				<!-- <cover-view class="controls1-bgcolor"></cover-view> -->
				<!-- <cover-view class="controls2-bgcolor"> -->
					<!-- 人像照 -->
					<cover-image v-if="photoType=='idpositive'" class="w569-h828" :src="front" />
					<!-- 国徽照 -->
					<cover-image v-else class="w569-h828" :src="side" />
				</cover-view>
				<!-- <cover-view class="controls3-bgcolor"></cover-view> -->
			</cover-view>
		</camera>
		<view class="warn">拍摄时确保身份证边框完整，字体清晰，亮度均匀</view>
		<view class="bottom font-36-fff">
			<view class="wrap">
				<view @click="takePhoto">
					<u-button color="#FE542C" size="small" text="拍照"></u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		API_URL
	} from '@/env';
	import {
		getCache
	} from '@/utils/storage';
	export default {
		data() {
			return {
				front: this.$imgSrc + "/front.png", // 人像照
				side: this.$imgSrc + "/back.png", // 国徽照
				flip: "", // 反转
				icon: "", // 相机
				picture: "", // 照片
				cameraContext: {},
				windowHeight: '',
				cameraHeight: '',
				idcardFrontSide: true,
				photoType: '',
				devicePosition: 'back', // 摄像头默认后置
				flashStyle: 'off',
			};
		},
		onLoad(options) {
			if (uni.createCameraContext) {
				this.cameraContext = uni.createCameraContext()
			} else {
				// 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
				uni.showModal({
					title: '提示',
					content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
				})
			}
			this.photoType = options.photoType;
			this.devicePosition = 'back';
		},
		onShow() {
			const systemInfo = uni.getSystemInfoSync()
			this.windowHeight = systemInfo.windowHeight
			this.cameraHeight = systemInfo.windowHeight - 120
		},
		methods: {
			errorCamera(e) {
				const that = this;
				uni.getSetting({
					success(res) {
						if (!res.authSetting["scope.camera"]) {
							uni.showModal({
								title: '提示',
								content: '请开启摄像头权限，否则无法拍照',
								confirmText: '去开启',
								success(res) {
									if (res.confirm) {
										uni.openSetting({
											success(res) {
												if (res.authSetting["scope.camera"]) {
													uni.navigateBack({
														delta: 1
													})
												} else {
													uni.navigateBack({
														delta: 1
													})
												}
											}
										})
									} else if (res.cancel) {
										uni.navigateBack({
											delta: 1
										})
									}
								}
							})
						}
					}
				})
			},
			// 拍照
			takePhoto() {
				uni.showLoading({
					title: '拍摄中'
				});
				let that = this;
				this.cameraContext.takePhoto({
					quality: 'high',
					success: (res) => {
						let idPhoto = res.tempImagePath;
						const storageTokan = getCache('token');
						const token = that.$store.state.Login.token || storageTokan;
						uni.uploadFile({
							url: API_URL + '/common/file/fileUpload', // 上传接口的URL
							filePath: idPhoto,
							name: 'file', // 服务器接收参数名称
							header: {
								token: token
							},
							formData: {}, // 可选，上传时携带的formdata信息
							success(res) {
								let data = JSON.parse(res.data);
								that.chosePhoto(data.data.url);
							},
							fail(err) {
								console.error('上传失败', err)
							}
						})
					},
					fail: (err) => {
						uni.showToast({
							title: '拍照失败，请检查系统是否授权',
							icon: 'none',
							duration: 1200
						})
					}
				})
			},

			// 选择图片跳转
			chosePhoto(item) {
				if (this.photoType == 'idpositive') {
					let pages = getCurrentPages(); //获取所有页面栈实例列表
					let nowPage = pages[pages.length - 1]; //当前页页面实例
					let prevPage = pages[pages.length - 2]; //上一页页面实例
					prevPage.$vm.idCardFront = item; //修改上一页data里面的参数值
					prevPage.$vm.idCardFrontChoose = false; //修改上一页data里面的参数值
					uni.navigateBack({ //uni.navigateTo跳转的返回，默认1为返回上一级
						delta: 1
					});
				} else if (this.photoType == 'idback') {
					let pages = getCurrentPages(); //获取所有页面栈实例列表
					let nowPage = pages[pages.length - 1]; //当前页页面实例
					let prevPage = pages[pages.length - 2]; //上一页页面实例
					prevPage.$vm.idCardBack = item; //修改上一页data里面的参数值
					prevPage.$vm.idCardBackChoose = false; //修改上一页data里面的参数值
					uni.navigateBack({ //uni.navigateTo跳转的返回，默认1为返回上一级
						delta: 1
					});
				}

			}
		},
	}
</script>

<style lang="scss" scoped>
.photoImg {
	// background-color: #000;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
	.controls {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.controls1-bgcolor {
		list-style: none;
		padding: 0;
		margin: 0;
		width: 100%;
		height: 60%;
		background-color: rgba(0, 0, 0, 0.6);
	}

	.controls2-bgcolor {
		list-style: none;
		padding: 0;
		margin: 0;
		width: 80%;
		height: 110%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.controls2-bgcolor1 {
		width: 7%;
		height: 150%;
		background-color: rgba(0, 0, 0, 0.6);
	}

	.controls3-bgcolor {
		list-style: none;
		padding: 0;
		margin: 0;
		width: 100%;
		height: 60%;
		background-color: rgba(0, 0, 0, 0.6);
	}

	.bottom {
		width: 100%;
		// background-color: #000;

		.wrap {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 80px;
			padding: 0 73rpx;
		}
	}

	.w569-h828 {
		width: 650rpx;
		height: 460rpx;
		background-color: rgba(0, 0, 0, 0) !important;
	}

	.w131-h131 {
		width: 131rpx;
		height: 131rpx;
	}

	.font-36-fff {
		font-size: 36rpx;
		color: #fff;
	}
	
	.warn {
		color: #fff;
		padding: 18rpx 0;
		text-align: center;
	}
</style>
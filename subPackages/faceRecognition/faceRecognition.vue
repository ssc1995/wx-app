<template>
	<view class="page-body">
		<view class="page-body-wrapper">
			<view v-if="cameraStatus">
				<camera device-position="front" flash="off" binderror="error" style="width:100%;height:600rpx;"></camera>
				<canvas v-if="canvasshow" style="width: 100%;height:600rpx;position:absolute;" canvas-id="canvas"></canvas>
			</view>
			<view v-if="!cameraStatus">
				<view v-if="!picSrc">
					<view class="sketch">
						<view class="sketch-img">
							<image :src="sketchSrc"></image>
						</view>
					</view>
				</view>
				<view v-if="picSrc" style="text-align: center;">
					<image class='video' :src="picSrc"></image>
				</view>
			</view>
			<view class="prompt">
				<view v-if="next === 1" class="prompt-next">
					<view class="foot-bth">
						<u-button text="下一步" color="#FE542C" @click="goNext"></u-button>
					</view>
				</view>
				<view v-if="next === 2" class="prompt-next">
					<view class="foot-bth">
						<u-button text="拍摄照片" color="#FE542C" @click="takePhoto"></u-button>
					</view>
				</view>
				<view v-if="next === 3" class="prompt-next">
					<view class="foot-bth">
						<view class="">
							<u-button text="重新拍摄" @click="retryTakePhoto" type="success"></u-button>
						</view>
						<view style="margin-top: 30rpx;">
							<u-button text="提交验证" color="#FE542C" @click="submitVerify"></u-button>
						</view>
					</view>
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
	import {
		verifyFace
	} from '@/config/api.js';
	export default {
		data() {
			return {
				src: "",
				fengmian: '',
				picSrc: "",
				windowWidth: 0,
				canvasshow: true,
				cameraStatus: false,
				next: 1,
				sketchSrc: this.$imgSrc + '/face.png',
			}
		},

		onLoad() {
			let that = this
			//屏幕宽度
			let sysInfo = uni.getSystemInfoSync()
			that.windowWidth = sysInfo.windowWidth;
			that.ctx = uni.createCameraContext()
		},
		methods: {
			// 点击下一步，获取 h5视频认证对code
			goNext() {
				this.cameraStatus = true;
				this.next = 2;
			},
			takePhoto() {
				let that = this;
				this.ctx.takePhoto({
					success: (res) => {
						that.next = 3;
						that.cameraStatus = false;
						that.picSrc = res.tempImagePath;
					},
				})
			},
			retryTakePhoto() {
				this.next = 2;
				this.cameraStatus = true;
				this.picSrc = '';
			},
			submitVerify() {
				let that = this;
				uni.showLoading({
					title: '身份验证中...',
				})
				const storageTokan = getCache('token');
				const token = that.$store.state.Login.token || storageTokan;
				uni.uploadFile({
					url: API_URL + '/common/file/fileUpload', // 上传接口的URL
					filePath: that.picSrc,
					name: 'file', // 服务器接收参数名称
					header: {
						token: token
					},
					formData: {}, // 可选，上传时携带的formdata信息
					success(res) {
						let data = JSON.parse(res.data);
						verifyFace({
							faceImageUrl: data.data.url
						}).then(result => {
							if (result.success) {
								uni.showModal({
									title: '认证通过',
									content: '恭喜您！身份验证通过',
									showCancel: false,
									success: function() {
										uni.switchTab({
											url: '/pages/whiteBar/whiteBar'
										})
									}
								})
							} else {
								uni.showToast({
									title: data.message,
									icon: 'none'
								})
							}
						})
					},
					fail(err) {
						console.error('上传失败', err)
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.page-body {
		height: 100%;
	}

	video {
		width: 100%;
		height: 700rpx;
	}

	.prompt {
		-webkit-box-shadow: 0 -4px 10px 0 #e8e8e8;
		-moz-box-shadow: 0 -4px 10px 0 #e8e8e8;
		box-shadow: 0 -4px 10px 0 #e8e8e8;
		padding-bottom: .833rem;
	}

	.prompt-box {
		padding: 45rpx;
	}

	.prompt-next {
		// margin:20rpx;
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 1;

		.foot-bth {
			padding: 36rpx;
		}
	}

	.prompt-box-text {
		margin: 0 0 70rpx;
		height: 35rpx;
	}

	.prompt-box-text-number {
		-webkit-border-radius: 200px;
		-moz-border-radius: 200px;
		border-radius: 200px;
		border: 1px solid #0073eb;
		text-align: center;
		color: #0073eb;
		display: inline-block;
		width: 50rpx;
		height: 50rpx;
		line-height: 50rpx;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		font-size: 12px;
		margin-right: 25rpx;
		letter-spacing: 0;
		vertical-align: top;
	}

	.prompt-box-text-content {
		color: #333;
		white-space: nowrap;
		font-size: 30rpx;
	}

	.prompt-box-text-border {
		height: 52rpx;
		margin: 0 0 0 25rpx;
		width: 0;
		border-left: 1px dotted #0073eb;
		display: block;
	}

	.prompt-box-text:last-child {
		margin-bottom: 0;
	}

	.sketch {
		padding-top: 60rpx;
	}

	.sketch-text {
		font-size: 14px;
		color: #999;
		letter-spacing: 0;
		line-height: 24px;
		text-align: center;
	}

	.sketch-img {
		width: 100%;
		height: 900rpx;
		margin: 0 auto;
	}

	.sketch-img image {
		width: 100%;
		height: 100%;
	}
</style>
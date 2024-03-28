<template>
	<view class="container">
		<view class="idCardFront">
<<<<<<< HEAD
			<view class="idCard-img" @click="chooseIdCardImg" data-type="idCardFront">
				<image :src="idCardFront"></image>
			</view>
			<view class="idCard-title">身份证正面</view>
			<view calss="idCard-desc">拍照上传您的身份证人面像</view>
		</view>
		<view class="idCardBack">
			<view class="idCard-img" @click="chooseIdCardImg" data-type="idCardBack">
				<image :src="idCardBack"></image>
			</view>
			<view class="idCard-title">身份证反面</view>
			<view calss="idCard-desc">拍照上传您的身份证国徽项</view>
=======
			<view class="idCard-img" @click='chooseIdCardImg' data-type="idCardFront">
				<image :src="idCardFront"></image>
			</view>
			<view class="idCard-title">身份证正面</view>
			<view calss="idCard-desc">拍照/上传您的身份证人面像</view>
		</view>
		<view class="idCardBack">
			<view class="idCard-img" @click='chooseIdCardImg' data-type="idCardBack">
				<image :src="idCardBack"></image>
			</view>
			<view class="idCard-title">身份证反面</view>
			<view calss="idCard-desc">拍照/上传您的身份证国徽项</view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
		</view>
		<view class="buttom-next">
			<view class="">
				<u-button text="下一步" color="#FE542C" @click="next"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
<<<<<<< HEAD
	import {
		sendOcrIdCard
	} from '@/config/api.js';
	import {
		API_URL
	} from '@/env';
	import {
		getCache
	} from '@/utils/storage';
=======
	import { sendOcrIdCard } from '@/config/api.js';
	import { API_URL } from '@/env';
	import { getCache } from '@/utils/storage';
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
	export default {
		data() {
			return {
				idCardFrontChoose: true,
				idCardBackChoose: true,
				idCardFront: this.$imgSrc + "/idCard1.png",
				idCardBack: this.$imgSrc + "/idCard2.png"
			}
		},

		methods: {
			// 拍照上传身份证正面
			chooseIdCardImg(e) {
				let type = e.currentTarget.dataset.type;
				if (type === 'idCardFront' && !this.idCardFrontChoose) {
					return false;
				} else if (type === 'idCardBack' && !this.idCardBackChoose) {
					return false;
				}
				this.chooseuniImage(type);
			},
			getExtension: function(path) {
				let _type = '';
				let parts = path.split('.');
				if (path.lastIndexOf('.') >= 0) {
					_type = parts.slice(-1)[0]
				}
				return _type
			},
			chooseuniImage: function(uploadtype) { // 绘制图片到canvas上
				let ctx = uni.createCanvasContext(uploadtype); //画布
				let that = this;
				uni.chooseImage({ //上传图片事件
					count: 1, //数量
					sizeType: ['compressed'], //original 原图，compressed 压缩图，默认二者都有
<<<<<<< HEAD
					sourceType: ['camera'], //album 从相册选图，camera 使用相机，默认二者都有
					success: function(result) {
						let ext, filepath = result.tempFilePaths[0],
							file = result.tempFiles[0];
=======
					sourceType: ['album', 'camera'], //album 从相册选图，camera 使用相机，默认二者都有
					success: function(result) {
						let ext, filepath = result.tempFilePaths[0], file = result.tempFiles[0];
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
						ext = that.getExtension(filepath).toLowerCase();
						if (!(ext in {
								png: 1,
								jpeg: 1,
								jpg: 1
							})) {
							return uni.showModal({
								title: '出错啦',
								content: '只允许上传png,jpeg,jpg文件'
							})
<<<<<<< HEAD
						} else {
=======
						} 
						// else if (file.size / 1024 > 1024) {
						// 	return uni.showModal({
						// 		title: '出错啦',
						// 		content: '图片文件不能超过1M'
						// 	})
						// } 
						else {
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
							const storageTokan = getCache('token');
							const token = that.$store.state.Login.token || storageTokan;
							uni.uploadFile({
								url: API_URL + '/common/file/fileUpload', // 上传接口的URL
								filePath: filepath,
								name: 'file', // 服务器接收参数名称
<<<<<<< HEAD
								header: {
									token: token
								},
								formData: {}, // 可选，上传时携带的formdata信息
								success(res) {
									let data = JSON.parse(res.data);
									if (uploadtype == "idCardFront") {
										that.idCardFrontChoose = false;
										that.idCardFront = data.data.url;
									} else {
=======
								header: { token: token },
								formData: {}, // 可选，上传时携带的formdata信息
								success(res) {
									let data = JSON.parse(res.data);
									if(uploadtype == "idCardFront") {
										that.idCardFrontChoose = false;
										that.idCardFront = data.data.url;
									}else {
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
										that.idCardBackChoose = false;
										that.idCardBack = data.data.url;
									}
								},
								fail(err) {
									console.error('上传失败', err)
								}
							})
						}
					},
					error(e) {
						uni.showToast({
							title: '上传失败',
							icon: 'none',
							duration: 1000
						})
					}
				})
			},

			// 识别成功，点击下一步
			next() {
				if (this.idCardFrontChoose) return uni.showToast({
<<<<<<< HEAD
					title: '请上传身份证正面照片',
					icon: "none"
				});
				if (this.idCardBackChoose) return uni.showToast({
					title: '请上传身份证国徽面照片',
					icon: "none"
				});
				let params = {
					identityImageUrl: this.idCardFront,
					identityBackImageUrl: this.idCardBack
				};
				sendOcrIdCard(params).then(res => {
					if (res.code == 200) {
=======
						title: '请上传身份证正面照片',
						icon: "none"
					});
				if (this.idCardBackChoose) return uni.showToast({
						title: '请上传身份证国徽面照片',
						icon: "none"
					});
					let params = {
						identityImageUrl: this.idCardFront,
						identityBackImageUrl: this.idCardBack
					};
				sendOcrIdCard(params).then(res=> {
					if(res.success) {
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
						let item = encodeURIComponent(JSON.stringify(res.data));
						uni.navigateTo({
							url: `/subPackages/authenticationName/authenticationName?item=${item}`
						})
<<<<<<< HEAD
					} else if (res.code == 60069) {
						this.idCardFrontChoose = true;
						this.idCardFront = this.$imgSrc + "/idCard1.png";
						return uni.showToast({
							title: res.message,
							icon: "none",
							duration: 2000
						});
					} else if (res.code == 60070) {
						this.idCardBackChoose = true;
						this.idCardBack = this.$imgSrc + "/idCard2.png";
						return uni.showToast({
							title: res.message,
							icon: "none"
						});
					} else {
						return uni.showToast({
							title: res.message,
							icon: "none",
							duration: 2000
						});
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		// background-color: #fff;
	}

	.idCardFront,
	.idCardBack,
	.buttom-next {
		width: 80%;
		margin: auto;
		text-align: center;
		margin-top: 30rpx;
	}

	.idCard-title {
		font-size: 30rpx;
		font-weight: bold;
		margin-top: 30rpx;
	}

	.idCard-desc {
		color: gray;
	}

	.idCard-img {
		width: 90%;
		margin: 0 auto;
		// border: dashed 1rpx #e7e7eb;
	}

	.idCard-img image {
		width: 96%;
		height: 310rpx;
		margin: 10rpx;
	}

	.buttom-next {
		font-size: 25rpx;
		position: fixed;
		z-index: 1;
		bottom: 0;
		display: flex;
		width: 100%;
		justify-content: center;
		filter: alpha(Opacity=60);
<<<<<<< HEAD

=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
		view {
			width: 100%;
			padding: 36rpx;
		}
<<<<<<< HEAD

=======
		
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
	}
</style>
<template>
	<view class="additional">
		<view class="items" v-for="(item, index) in list" :key="index">
			<view class="content">
				<view class="title">
					{{ item.name }}
				</view>
				<view class="">
					<u-upload 
						width="100"
						height="100"
						accept="image" 
						:fileList="item.pathList" 
						@afterRead="afterRead" 
						@delete="deletePic"
						previewFullImage
						:name="index"  
						:maxCount="3"
					></u-upload>
				</view>
			</view>
		</view>
		<view style="height: 120rpx;"></view>
		<view class="footer">
			<view class="">
				<u-button text="提交信息" color="#FE542C" @click="handlerOk" shape="circle"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import { informationQuery, informationAdd } from '@/config/api';
	import { API_URL } from '@/env';
	import { getCache } from '@/utils/storage';
	export default {
		data() {
			return {
				list: [],
				timer: null
			}
		},

		onLoad() {
			this.getData();
		},
		
		onUnload() {
			this.timer = null;
		},

		methods: {
			getData() {
				informationQuery().then(res => {
					if (res.success) {
						let _data = res.data;
						this.list = _data;
					}
				})
			},

			// 上传图片
			afterRead(event) {
				let { file, name, index } = event;
				let filePath = file.url;
				let that = this;
				const storageTokan = getCache('token');
				const token = this.$store.state.Login.token || storageTokan;
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: API_URL + '/common/file/fileUpload',
						filePath: filePath,
						name: 'file',
						header: { token: token },
						success: (res) => {
							let data = JSON.parse(res.data);
							this.list[name].pathList.push({url: data.data.url})
						}
					});
				})
			},

			// 删除图片
			deletePic(event) {
				let { file, name, index } = event;
				this.list[name].pathList.splice(index, 1)
			},
			
			// 提交信息
			handlerOk() {
				informationAdd(this.list).then(res=> {
					if(res.success) {
						uni.showToast({
							title: "提交成功"
						});
						this.timer = setTimeout(()=> {
							uni.navigateBack()
						}, 1500)
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.additional {
		font-size: 28rpx;
		color: #333;
		height: 100vh;
	}

	.items {
		padding: 18rpx 18rpx 0 18rpx;

		.content {
			background-color: #fff;
			padding: 18rpx;
		}

		.title {
			font-weight: 600;
			height: 38rpx;
			line-height: 38rpx;
			padding-bottom: 18rpx;
		}
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
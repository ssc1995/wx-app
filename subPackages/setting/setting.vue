<template>
	<view>
		<view class="container">
			<!-- 功能列表 -->
			<view class="center">
				<u-cell-group>
					<u-cell title="帮助中心" isLink url="/subPackages/help/help"></u-cell>
					<u-cell title="关于我们" isLink url="/subPackages/about/about"></u-cell>
					<u-cell 
						v-for="(item, index) in list" 
						:key="index" 
						:title="item.name" 
						isLink
						:url="'/subPackages/webView/webView?id=' + item.id"
					></u-cell>
				</u-cell-group>
			</view>
			<!-- 退出当前账号 -->
			<view style="margin-top: 18rpx;">
				<u-button text="退出当前账号" @click="layOut"></u-button>
			</view>
		</view>
		<u-modal
			:show="show" 
			:title="title" 
			showCancelButton
			@confirm="confirm"
			@cancel="cancel"
			confirmColor="#FE542C"
		></u-modal>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import { getCache } from '@/utils/storage';
	import { clientListCode } from '@/config/home.js';
	export default {
		data() {
			return {
				show: false,
				title: "请确认退出",
				currentSize: 0,
				list: []
			}
		},
		
		computed: {
			...mapState({
				token: state=> state.Login.token,
			}),
			isToken() {
				let token = this.token || getCache('token');
				if(token == null || token == "" || token == undefined) return false;
				return true;
			}
		},

		onLoad() {
			let storage = uni.getStorageInfoSync();
			this.currentSize = storage.currentSize;
			clientListCode("user").then(res=> {
				if(res.success) {
					this.list = res.data;
				}
			})
		},

		methods: {
			// 点击安全中心
			safetyCenter() {
				
			},

			//点击清除缓存
			clearStorage() {
				try {
					uni.clearStorageSync();
					uni.showToast({
						title: '清理成功',
						duration: 1000
					})
					this.currentSize = 0;
				} catch (e) {
					uni.showToast({
						title: '清理失败',
						icon: 'none',
						duration: 1000
					})
				}
			},
			
			// 退出确认
			confirm() {
				this.$store.dispatch('Login/LogOut').then(()=> {
					uni.showToast({
						title: '您已退出登录',
						icon: 'none',
						duration: 500
					});
					uni.navigateBack();
				})
			},
			
			// 取消
			cancel() {
				this.show = false;
			},
			
			// 退出
			layOut() {
				if(this.isToken) return this.show = true;
				return uni.showToast({
					title: '请先去登录哦',
					icon: 'none'
				});
			},
		}
	}
</script>

<style scoped>
	.center {
		background-color: #fff;
	}

	::v-deep .u-button__text {
		color: #FE542C;
	}
</style>
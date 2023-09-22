<template>
	<scroll-view scroll-y="true" class="activity-detail">
		<u-swiper :list="list" height="220" :autoplay="true" :circular="true" :indicator="true" indicatorMode="dot"></u-swiper>
		<view class="main">
			<view class="detail">
				<view class="title">
					挑战两小时自信演讲
				</view>
				<view class="action">
					<view>
						<u-icon name="eye" size="20" label="180" :labelSize="14"></u-icon> 
					</view>
					<view>
						<u-icon name="chat" size="20" label="60" :labelSize="14"></u-icon> 
					</view>
					<view>
						<u-icon name="star" size="20" label="60" :labelSize="14"></u-icon> 
					</view>
				</view>
				<view class="date-time">
					<u-icon name="clock-fill" label="09-22 14:00 至 17:00" :labelSize="14" :space="7"></u-icon> 
				</view>	
				<view class="date-time">
					<u-icon name="map-fill" label="湖南长沙天心区" :labelSize="14" :space="7"></u-icon> 
					<u-icon name="arrow-right"></u-icon>
				</view>
				<view class="date-time">
					<u-icon name="account-fill" label="已报名36人" :labelSize="14" :space="7"></u-icon> 
				</view>
				<view class="date-time">
					<u-icon name="rmb-circle-fill" label="9.9" :labelSize="14" :space="7" labelColor="#fa3534"></u-icon> 
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<!-- 底部信息 -->
		<view class="footer">
			<view class="actions">
				<view class="">
					<u-button type="primary" text="收藏"></u-button>
				</view>
				<view class="">
					<u-button type="primary" text="报名" @click="gotoApplic"></u-button>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				list: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
			}
		},
		
		computed: {
			...mapState({
				token: state => state.Login.token
			})
		},
		
		methods: {
			
			onLogin() {
				uni.getUserProfile({
					desc: '获取您的登录信息',
					success (userInfo) {
						console.log(userInfo, 'sss')
					}
				})
			},
			
			gotoApplic() {
				this.onLogin()
				// uni.navigateTo({
				// 	url:'/pages/application/application'
				// })
			}
		}
	}
</script>

<style scoped lang="scss">
	.activity-detail {
		padding-bottom: 70px;
	}
.main {
	padding: 10px 15px;
	.detail {
		background-color: #fff;
		padding: 10px;
		border-radius: 4px;
		box-shadow: 0 3px 3px 3px rgba(0, 0, 0, .1);
		.title {
			font-weight: bold;
		}
		.action {
			display: flex;
			align-items: center;
			padding: 20px 0 10px 0;
			& view {
				padding-right: 15px;
			}
		}
		.date-time {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 10px;
		}
	}
}
	.footer {
		position: fixed;
		bottom: 0;
		z-index: 1;
		background-color: #fff;
		width: 100%;
		height: 50px;
		padding-top: 5px;
		.actions {
			display: flex;
			justify-content: space-around;
			view {
				width: 40%;
			}
		}
	}
</style>

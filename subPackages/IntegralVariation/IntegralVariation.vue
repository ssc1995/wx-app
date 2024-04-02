<template>
	<view>
		<view class="">
			<scroll-view 
				enable-flex 
				scroll-y="true" 
				:show-scrollbar="false" 
				class="integral" 
				@scrolltolower="lower"
				v-if="loading"
			>
				<view class="content" v-for="(item,index) in list" :key="index">
					<view style="padding: 18rpx 36rpx; background-color: #fff;">
						<view class="" style="">
							{{ item.remark }}
						</view>
						<view style="color: #19be6b; line-height: 42rpx;">
							<span v-if="item.type == 1">+{{ item.integral }}</span>
<<<<<<< HEAD
							<span v-if="item.type == 2" style="color: #FF422C;">-{{ item.integral }}</span>
=======
<<<<<<< HEAD
							<span v-if="item.type == 2" style="color: #FF422C;">-{{ item.integral }}</span>
=======
							<span v-if="item.type == 2" style="color: #FE542C;">-{{ item.integral }}</span>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
						</view>
						<view style="color: #999; line-height: 42rpx;">
							{{ item.createTime }}
						</view>
						<view style="color: #999; text-align: end; font-size: 24rpx;">
							总积分：
							<span style="font-size: 30rpx; color: #2979ff;">{{ item.totalIntegral }}</span>
						</view>
					</view>
				</view>
				<load-more :status="status" />
			</scroll-view>
			<view class="integral" v-else>
				<empty />
			</view>
		</view>
	</view>
</template>

<script>
	import { clientIntegralLog } from '@/config/api.js';
	export default {
		data() {
			return {
				queryParams: {
					pageNum: 1,
					pageSize: 10,
				},
				status: 'loadmore',
				pages: 0,
				list: [],
				loading: true
			}
		},
		
		onLoad() {
			this.getList();
		},
		
		methods: {
			getList() {
				this.status = 'loading';
				clientIntegralLog(this.queryParams).then(res => {
					if (res.success) {
						this.list = this.list.concat(res.data.records);
						this.pages = res.data.pages;
						if(res.data.total == 0) {
							this.loading = false;
						};
						if (res.data.records.length < this.queryParams.pageSize) {
							this.status = 'nomore';
						} else {
							this.status = 'loadmore';
						}
					}
				})
			},
			
			// 滚动加载
			lower() {
				if (this.queryParams.pageNum < this.pages) {
					this.queryParams.pageNum++;
					this.status = 'loading';
					this.getList();
				} else {
					this.status = 'nomore';
				}
			},
		}
	}
</script>

<style lang="scss">
.integral {
	height: 100vh;
	color: #333;
	font-size: 28rpx;
}
.content{
	padding: 9rpx;
}
</style>

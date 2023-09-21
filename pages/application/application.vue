<template>
	<view>
		<u-sticky bgColor="#fff">
			<u-tabs :list="list" lineWidth="30"></u-tabs>
		</u-sticky>
		<view class="u-page">
			<u-list @scrolltolower="scrolltolower" v-if="indexList.length>0">
				<u-list-item v-for="(item, index) in indexList" :key="index">
					<!-- <u-cell :title="`列表长度-${index + 1}`">
						<u-avatar slot="icon" shape="square" size="35" :src="item.url"
							customStyle="margin: -3px 5px -3px 0"></u-avatar>
					</u-cell> -->
				</u-list-item>
			</u-list>
			<view v-else style="margin-top: 50px;">
				<u-empty mode="order" text="暂无数据" iconSize="60"></u-empty>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '全部',
				}, {
					name: '待支付',
				}, {
					name: '待参与'
				}, {
					name: '已完成'
				}, {
					name: '已取消'
				}, {
					name: '已退款'
				}],
				indexList: [],
			}
		},

		onLoad() {
			this.loadmore()
		},

		methods: {
			click(item) {},

			// 滚动到底部触发事件
			scrolltolower() {
				this.loadmore()
			},

			// 数据加载
			loadmore() {}
		}
	}
</script>

<style>

</style>
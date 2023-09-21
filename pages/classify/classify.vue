<template>
	<scroll-view scroll-y="true">
		<view class="classify-list">
			<u-cell-group>
				<u-cell 
					v-for="(item,index) in list"
					:key="index"
					icon="account-fill" 
					:title="item.title" 
					:isLink="true"
					url="/pages/activityClassify/activityClassify"
				></u-cell>
			</u-cell-group>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						title: '长期工',
						value: 1
					},
					{
						title: '短期工',
						value: 2
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.classify-list {
	margin-top: 15px;
}
 ::v-deep .u-cell {
	background-color: #fff;
	margin: 5px 15px;
	border-radius: 5px;
}
</style>

<template>
	<view>
		<!-- 地区选择 -->
		<u-picker :show="show" ref="uPicker" keyName="name" :columns="cityList" @confirm="cityConfirm" @change="changeHandler" @cancel="show = false">
		</u-picker>
	</view>
</template>

<script>
	import { getArea } from '@/config/home.js';
	export default {
		data() {
			return {
				show: false, // 城市选择器
				cityList: [],
				cityLevel1: [],
				cityLevel2: [],
				cityLevel3: [],
				userInfo: {
					province: '',
					city: '',
					area: '',
					areaName: '',
				}
			}
		},
		
		methods: {
			// 获取地区
			initCityData() {
				getArea().then(res => {
					if (res.success) {
						// 遍历城市js
						let cityData = res.data;
						cityData.forEach((item1, index1) => {
							let temp2 = [];
							this.cityLevel1.push({
								name: item1.name,
								id: item1.id
							});
							let temp4 = [];
							let temp3 = [];
							// 遍历市
							item1.children.forEach((item2, index2) => {
								temp2.push({
									name: item2.name,
									id: item2.id
								});
								// 遍历区
								item2.children.forEach((item3, index3) => {
									temp3.push({
										name: item3.name,
										id: item3.id
									});
								})
								temp4[index2] = temp3;
								temp3 = [];
							})
							this.cityLevel3[index1] = temp4;
							this.cityLevel2[index1] = temp2;
						})
						// 选择器默认城市
						this.cityList.push(this.cityLevel1, this.cityLevel2[0], this.cityLevel3[0][0]);
					}
				})
			},
			
			// 选中时执行
			changeHandler(e) {
				const {
					columnIndex,
					index,
					indexs,
					value,
					values,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker
				} = e;
				if (columnIndex === 0) { // 选择第一列数据时
					// 设置第二列关联数据
					picker.setColumnValues(1, this.cityLevel2[index]);
					// 设置第三列关联数据
					picker.setColumnValues(2, this.cityLevel3[index][columnIndex]);
				} else if (columnIndex === 1) { // 选择第二列数据时
					// 设置第三列关联数据
					picker.setColumnValues(2, this.cityLevel3[indexs[0]][index]);
				}
			},
			
			// 单击确认按钮时执行
			cityConfirm(e) {
				// 输出数组 [省, 市, 区]
				let arr = e.value;
				let cityName = [];
				this.userInfo.province = arr[0].id;
				this.userInfo.city = arr[1].id;
				this.userInfo.area = arr[2].id;
				arr.forEach(item => {
					cityName.push(item.name)
				});
				this.userInfo.areaName = cityName.join(' ');
				this.$emit('getareaInfo', this.userInfo);
				this.show = false;
			},
		}
	}
</script>

<style>

</style>

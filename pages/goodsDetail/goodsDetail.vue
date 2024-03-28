<template>
	<view class="">
<<<<<<< HEAD
		<u-loading-page :loading="loading" loading-color="#FE542C" font-size="14" icon-size="30" loading-text="蜜田信易购官方旗舰店"
			color="#FE542C" image="https://mt-1322382233.cos.ap-shanghai.myqcloud.com/webIcon/icon/logo.png"></u-loading-page>
		<scroll-view enable-flex scroll-y="true" class="container" v-if="loading==false">
			<u-swiper :list="albumPics" height="375" :autoplay="true" @change="e => currentNum = e.current" :circular="true"
				indicatorStyle="right: 20px" @click="previewImg">
=======
		<u-loading-page
			:loading="loading" 
			loading-color="#FE542C" 
			font-size="14" 
			icon-size="30"
			loading-text="蜜田信易购官方旗舰店"
			color="#FE542C"
			image="https://mt-1322382233.cos.ap-shanghai.myqcloud.com/webIcon/icon/logo.png"
		></u-loading-page>	
		<scroll-view enable-flex scroll-y="true" class="container" v-if="loading==false">
			<u-swiper :list="albumPics" height="375" :autoplay="true" @change="e => currentNum = e.current" :circular="true"
				indicatorStyle="right: 20px">
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
				<view slot="indicator" class="indicator-num">
					<text class="indicator-num__text">{{ currentNum + 1 }}/{{ albumPics.length }}</text>
				</view>
			</u-swiper>
			<view class="main">
				<view class="sales">
					<view class="">
						<view class="">
							<text style="font-size: 32rpx; font-weight: 500;">￥</text>
							<text style="font-size: 64rpx;">{{details.salePrice | decimal}}</text>
						</view>
					</view>
<<<<<<< HEAD
					<!-- 			<view class="by-stages" @click="openStages" v-if="details.isLoan==1">
=======
					<view class="by-stages" @click="openStages" v-if="details.isLoan==1">
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
						<view class="" v-if="period != 0">
							<text>￥{{periodPrice | decimal}}</text>
							<text style="color: #666;">×{{period}}期</text>
						</view>
						<view class="">
							<u-icon name="arrow-right" color="#666"></u-icon>
						</view>
<<<<<<< HEAD
					</view> -->
=======
					</view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
				</view>
				<view class="tags">
					<view class="">
						<u-tag :text="details.isNew == 0 ? '二手' : '全新'" bg-color="#FE542C" borderColor="#FE542C"
							size="mini"></u-tag>
					</view>
					<view class="">
						<u-tag text="自营" borderColor="#FE542C" color="#FE542C" plain size="mini"></u-tag>
					</view>
					<view style="margin-left: 5px; flex: 1;">
<<<<<<< HEAD
=======
						<!-- {{details.name}} -->
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
						<u--text :text="details.name" :lines="2" lineHeight="42rpx" bold></u--text>
					</view>
				</view>
				<view class="remark">
					{{details.description}}
				</view>
			</view>

			<!-- 配置 -->
			<view style="background-color: #fff;">
				<u-cell-group>
					<u-cell isLink @click="selectModel">
						<view slot="title" class="u-slot-title">
							<text class="u-cell-text">已选</text>
<<<<<<< HEAD
							<text v-for="(item, index) in specList" :key="index"
								style="margin-right: 10rpx; font-size: 26rpx;">{{item.value}}</text>
=======
							<text v-for="(item, index) in specList" :key="index" style="margin-right: 10rpx; font-size: 26rpx;">{{item.value}}</text>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
						</view>
					</u-cell>
					<u-cell isLink @click="show = true">
						<view slot="title" class="u-slot-title">
							<text class="u-cell-text">送至</text>
							<text v-if="details.areaName" style="font-size: 26rpx;">{{details.areaName}}</text>
						</view>
					</u-cell>
<<<<<<< HEAD
					<u-cell isLink url="/subPackages/mean/mean">
						<view slot="title" style="color: #999;">
							手机/平板等级说明
						</view>
					</u-cell>
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
				</u-cell-group>
				<view class="mean">
					<view style="letter-spacing: 2px; white-space: nowrap;">
						说明
					</view>
					<view style="display: flex; flex-wrap: wrap;">
						<view class="labels" v-for="(item, index) in serviceList" :key="index">
							<u--image :showLoading="true" :src="src" width="36rpx" height="36rpx"></u--image>
							<text>{{item}}</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 商品描述 -->
			<view class="goods-descinfo">
				<view v-if="paramList.length>0">
					<h4>商品参数</h4>
					<div class="param-list">
						<u-row v-for="(item, index) in paramList" :key="index">
							<u-col span="4">
<<<<<<< HEAD
								<view class="param-col"
									style="text-align: right; padding-right: 18rpx; background-color: #f5f5f5; font-weight: bold;">
=======
								<view class="param-col" style="text-align: right; padding-right: 18rpx; background-color: #f5f5f5;">
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
									{{item.name}}
								</view>
							</u-col>
							<u-col span="8">
								<view class="param-col" style="padding-left: 30rpx;">
									{{item.value}}
								</view>
							</u-col>
						</u-row>
					</div>
				</view>
<<<<<<< HEAD
				<h4 style="margin-bottom: 18rpx;">商品描述</h4>
				<u--image v-for="item in detailAlbumPics" :key="item" :showLoading="true" :src="item" width="100%" height="420"
					mode="scaleToFill"></u--image>
=======
				<h4 style="margin-bottom: 30rpx;">商品描述</h4>
				<u--image v-for="item in detailAlbumPics" :key="item" :showLoading="true" :src="item" width="100%" height="600rpx"></u--image>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
			</view>

			<!-- 底部信息 -->
			<view class="footer">
				<!-- 无货提示 -->
<<<<<<< HEAD
				<view class="stock" v-if="isDisable">
					{{ areaStock.message }}
				</view>
				<view class="action">
					<!-- <view style="padding-right: 24rpx;">
						<text style="color: #333;">首付：</text>
						<text style="color: #FE542C;">¥{{period != 0 ? downPayment : periodPrice | decimal}}</text>
					</view> -->
					<view class="">
						<u-button text="立即购买" color="#FE542C" @click="buyNow" size="large" :disabled="isDisable"></u-button>
=======
				<view class="stock" v-if="areaStock.hasStock == 0">
					{{ areaStock.message }}
				</view>
				<view class="action">
					<view style="padding-right: 24rpx;">
						<text style="color: #333;">首付：</text>
						<text style="color: #FE542C;">¥{{period != 0 ? downPayment : periodPrice | decimal}}</text>
					</view>
					<view class="">
						<u-button text="立即购买" color="#FE542C" @click="buyNow" size="large"
							:disabled="areaStock.hasStock == 0"></u-button>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
					</view>
				</view>
			</view>

			<!-- 配送地址 -->
			<u-popup :show="show" @close="close" @open="selectAddress" closeable>
				<view class="delivery">
					<view class="title">
						配送至
					</view>
					<view class="delivery-list">
						<u-radio-group placement="column" iconPlacement="right" @change="onchangeAddress" v-model="form.addressId">
							<u-radio v-for="item in addressList" :key="item.id" activeColor="#FE542C"
<<<<<<< HEAD
								:label="item.areaName + '' + item.address" shape="square" :name="item.id"
=======
								:label="item.areaName + ' ' + item.address" shape="square" :name="item.id"
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
								:labelColor="item.id == form.addressId ? '#FE542C' : '#666'"></u-radio>
						</u-radio-group>
					</view>
					<view>
						<u-button color="#FE542C" @click="addAddress">新增收货地址</u-button>
					</view>
				</view>
			</u-popup>

			<!-- 规格选择 -->
			<u-popup :show="showModal" @open="showModal = true">
				<view class="warp">
					<view class="rect">
						<view class="modal-title">
							<h4>选择规格</h4>
							<view class="submit" @click="onsubmit">
								确定
							</view>
						</view>
						<view class="specifications">
							<view v-for="(item, index) in specList" :key="index" class="parameter">
								<text>{{item.name}}</text>
								<view class="classification">
									<view class="phone-color">
										{{item.value}}
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</u-popup>

<<<<<<< HEAD
			<!-- 赊购 -->
=======
			<!-- 分期 -->
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
			<u-popup :show="showStages" @open="showStages = true">
				<view class="warp">
					<view class="rect">
						<view class="modal-title">
<<<<<<< HEAD
							<h4>赊购计算</h4>
=======
							<h4>分期计算</h4>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
							<view class="submit" @click="onBystages">
								确定
							</view>
						</view>
						<view class="stages">
							<view class="stages-num">
<<<<<<< HEAD
								<h4>赊购数</h4>
=======
								<h4>分期数</h4>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
								<view class="stages-list">
									<view v-for="(item, index) in details.borrowPeriodList" :key="index" class="stages-item"
										:class="{isSelect: form.periodId == item.id}" @click="selectPeriod(item, index)">{{item.title}}
									</view>
								</view>
							</view>
							<view class="detail">
								<view class="">
									<text>首付</text>
									<text style="color: #FE542C;">￥{{period != 0 ? downPayment : periodPrice | decimal}}</text>
									<text style="margin-left: 40rpx;" v-if="period!=0">月供</text>
									<text style="color: #FE542C;" v-if="period != 0">￥{{periodPrice | decimal}}</text>
<<<<<<< HEAD
									<text style="color: #666;" v-if="period != 0">×{{period}}期</text>
								</view>
								<view style="padding-top: 46rpx;">
									<!-- <view>*0利息 0手续费</view> -->
=======
									<text style="color: #666;" v-if="period != 0">×{{period}}期</text>0
									<text v-if="period != 0" style="color: #FE542C;">（含服务费￥{{fee | decimal}}/期）</text>
								</view>
								<view style="padding-top: 46rpx;">
									<view>*0利息 0手续费</view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
									<view>*首期还款日为 {{ firstTime }}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</u-popup>
		</scroll-view>
	</view>
</template>

<script>
	import {
		productDetail,
		getAddress,
		queryAreaStock
	} from "@/config/home.js";
	export default {
		data() {
			return {
				albumPics: [],
				details: {},
				currentNum: 0,
				show: false,
				iscolor: '#666',
				showModal: false,
				src: this.$imgSrc + '/yes.png',
				showStages: false,
				downPayment: 0, // 首付
				period: '', // 期数
				periodPrice: '', // 每期金额
<<<<<<< HEAD
				fee: '', // 
=======
				fee: '', // 服务费
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
				specList: [], // 规格
				serviceList: [], // 服务说明
				paramList: [], // 商品参数
				detailAlbumPics: [], // 商品描述
				addressList: [], // 选择地址
				consignee: '',
				phone: '',
				form: {
					addressId: '',
					downPayment: '',
					isLoan: '',
					loanMoney: '',
					periodId: 0,
					productId: ''
				},
				areaStock: {},
				loading: false
			}
		},

		onLoad(option) { //option为object类型，会序列化上个页面传递的参数
			const {
				id
			} = option;
			this.getDetail(id);
		},

<<<<<<< HEAD
=======
		onShow() {
			this.close();
		},
		
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
		computed: {
			// 首期还款日
			firstTime() {
				let now = new Date();
				let date = now.getTime();
				let differ = 15 * 24 * 3600 * 1000;
				let num = date + differ;
				return uni.$u.timeFormat(num.toString(), 'yyyy年mm月dd日');
<<<<<<< HEAD
			},

			// 购买按钮是否可用
			isDisable() {
				let {
					hasStock
				} = this.areaStock;
				if (this.details.areaName) {
					if (hasStock == 0) {
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
			}
		},

		methods: {

			// 商品详情
			getDetail(id) {
				this.loading = true;
				productDetail(id).then(res => {
					if (res.success) {
						this.details = res.data;
						this.loading = false;
						this.albumPics = res.data.albumPics && res.data.albumPics.split(",");
						this.detailAlbumPics = res.data.detailAlbumPics && res.data.detailAlbumPics.split(",");
						this.specList = res.data.specList;
						this.serviceList = res.data.serviceList;
						this.paramList = res.data.paramList;
						this.form.productId = res.data.id;
						this.form.addressId = res.data.addressId;
						this.consignee = res.data.consignee;
						this.phone = res.data.phone;
						this.form.periodId = res.data.borrowPeriodId;
<<<<<<< HEAD
						// 赊购
=======
						// 分期
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
						let obj = res.data.borrowPeriodList && res.data.borrowPeriodList.find(item => item.id == this.form
							.periodId);
						if (obj) {
							this.period = obj.period;
							this.periodPrice = obj.price;
							this.fee = obj.fee;
							this.downPayment = obj.downPayment;
						};
						let params = {
							provinceId: this.details.province,
							cityId: this.details.city,
							areaId: this.details.area,
							productId: this.details.id,
						};
						this.queryArea(params);
					}
				})
			},

<<<<<<< HEAD
			// 预览图片
			previewImg() {
				uni.previewImage({
					urls: this.albumPics,
					current: this.currentNum
				});
			},

=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
			// 获取用户地址
			getAddre() {
				getAddress().then(res => {
					if (res.success) {
						this.addressList = res.data;
						this.show = true;
					}
				})
			},

			// 查询地区是否有货
			queryArea(data) {
				queryAreaStock(data).then(res => {
					if (res.success) {
						this.areaStock = res.data;
					}
				})
			},

<<<<<<< HEAD
			// 赊购
=======
			// 分期
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
			openStages() {
				this.showStages = true;
			},

<<<<<<< HEAD
			// 选择赊购
=======
			// 选择分期
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
			selectPeriod(data, index) {
				this.form.periodId = index;
				this.period = data.period;
				this.periodPrice = data.price;
				this.fee = data.fee;
				this.downPayment = data.downPayment;
				this.form.periodId = data.id;
			},

			// 确定
			onBystages() {
				this.showStages = false;
			},

			// 选择规格
			selectModel() {
				this.showModal = true;
			},

			// 规格弹窗
			onsubmit() {
				this.showModal = false;
			},

			// 选择地址
			selectAddress() {
				this.getAddre();
			},
			// 关闭
			close() {
				this.show = false;
			},

			// 勾选地址
			onchangeAddress(id) {
				let obj = this.addressList.find(item => item.id == id);
				if (obj) {
					this.details.areaName = obj.areaName;
					this.details.address = obj.address;
					this.consignee = obj.consignee;
					this.phone = obj.phone;
					let params = {
						provinceId: obj.province,
						cityId: obj.city,
						areaId: obj.area,
						productId: this.details.id,
					};
					this.queryArea(params);
				};
				this.close();
			},

			// 新增收货地址
			addAddress() {
				uni.navigateTo({
					url: `/subPackages/createAddress/createAddress?type=goodsDetail`
				})
			},

			// 立即购买
			buyNow() {
<<<<<<< HEAD
				if (this.details.areaName == "" || this.details.areaName == null) return uni.showToast({
					title: '请添加收货地址',
					icon: "error"
				});
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
				let item = {
					addressId: this.form.addressId,
					period: this.period,
					periodPrice: this.periodPrice,
					fee: this.fee,
					consignee: this.consignee,
					phone: this.phone,
					areaName: this.details.areaName,
					address: this.details.address
				};
				this.$store.dispatch("Common/setAddress", item);
				uni.navigateTo({
					url: `/subPackages/confirmOrderInformation/confirmOrderInformation?id=${this.details.id}&periodId=${this.form.periodId}&warehouseId=${this.areaStock.warehouseId}`
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.container {
		font-size: 14px;
		color: #333;
		height: 100vh;
	}

	.indicator {
		@include flex(row);
		justify-content: center;

		&__dot {
			height: 6px;
			width: 6px;
			border-radius: 100px;
			background-color: rgba(255, 255, 255, 0.35);
			margin: 0 5px;
			transition: background-color 0.3s;

			&--active {
				background-color: #ffffff;
			}
		}
	}

	.indicator-num {
		padding: 2px 0;
		background: rgba(11, 11, 11, 0.2);
		border-radius: 100px;
		width: 83rpx;
		border-radius: 19rpx;
		@include flex;
		justify-content: center;

		&__text {
			color: #FFFFFF;
			font-size: 12px;
		}
	}

	.main {
		background-color: #fff;
		padding: 24rpx 18rpx;
		margin: 18rpx 0;

		.sales {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			color: #FE542C;
		}

		.by-stages {
			display: flex;
			align-items: center;
			line-height: 36rpx;
			font-size: 25rpx;
		}

		.tags {
			padding-top: 16rpx;
			display: flex;
			// align-items: center;
		}

		.remark {
			padding-top: 12rpx;
			font-size: 24rpx;
			font-family: PingFangSC, PingFang SC;
			font-weight: 400;
			color: #999;
			line-height: 34rpx;
		}
	}

	.u-cell-text {
		font-family: PingFangSC, PingFang SC;
		font-weight: 400;
		color: #999;
		letter-spacing: 2px;
	}

	.mean {
		display: flex;
		color: #999;
		font-size: 28rpx;
		padding: 10px 15px;
	}

	.labels {
		display: flex;
		align-items: center;
		color: #666;
		font-size: 20rpx;
	}

	.goods-descinfo {
		margin-top: 18rpx;
		background-color: #fff;
<<<<<<< HEAD
		padding: 18rpx;
		padding-bottom: 120rpx;
=======
		padding: 22rpx 30rpx;
		padding-bottom: 180rpx;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1

		h4 {
			padding-bottom: 10rpx;
		}
	}

	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
		z-index: 1;

		.action {
<<<<<<< HEAD
			// display: flex;
			// justify-content: flex-end;
			// align-items: center;
=======
			display: flex;
			justify-content: flex-end;
			align-items: center;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
			background-color: #fff;
		}
	}

	::v-deep .u-radio-label--right {
		min-height: 80rpx;
	}

	::v-deep .u-radio__text {
		line-height: 40rpx !important;
	}

	.warp {
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}

	.rect {
		width: 100%;
		background-color: #fff;
	}

	.modal-title {
		padding: 0 36rpx 0 46rpx;
		height: 80rpx;
		line-height: 80rpx;
		border-bottom: 1px solid #D8D8D8;
		text-align: center;
		position: relative;

		h4 {
			font-size: 31rpx;
			font-family: PingFangSC, PingFang SC;
			font-weight: 600;
			letter-spacing: 1px;
		}

		.submit {
			position: absolute;
			right: 36rpx;
			top: 0;
			font-size: 25rpx;
			font-family: PingFangSC, PingFang SC;
			font-weight: 400;
			color: #FE542C;
			letter-spacing: 1px;
			z-index: 1;
		}
	}

	.phone-color {
		// width: 109rpx;
		padding: 0 10rpx;
		height: 48rpx;
		line-height: 48rpx;
		text-align: center;
		border-radius: 2rpx;
		color: #FE542C;
		border: 1rpx solid #FE542C;
	}

	.classification {
		display: flex;
		align-items: center;
		padding-top: 28rpx;
	}

	.stages {
		min-height: 500rpx;
		padding-top: 30rpx;

		.stages-num {
			padding-bottom: 87rpx;
			padding-left: 44rpx;

			h4 {
				height: 36rpx;
				font-size: 25rpx;
				font-family: PingFangSC, PingFang SC;
				font-weight: 400;
				color: #999;
				line-height: 36rpx;
				letter-spacing: 1px;
			}

			.stages-list {
				display: grid;
				grid-template-columns: 20% 20% 20% 20% 20%;

				.stages-item {
					width: 109rpx;
					height: 48rpx;
					line-height: 48rpx;
					text-align: center;
					border-radius: 2rpx;
					border: 1rpx solid #D8D8D8;
					margin-top: 28rpx;
				}
			}
		}
	}

	.detail {
		padding-left: 44rpx;
		border-top: 1px solid #D8D8D8;
		padding-top: 32rpx;
		color: #999;
		font-size: 25rpx;
		height: 36rpx;
		line-height: 36rpx;
	}

	.isSelect {
		background-color: #FE542C;
		color: #fff;
		border: 1px solid #FE542C !important;
	}

	.specifications {
		padding: 30rpx 36rpx 30rpx 46rpx;
		min-height: 330rpx;

		.parameter {
			padding-top: 48rpx;
		}

		.parameter:first-child {
			padding-top: 0;
		}
	}

	::v-deep .u-button--square {
		border-radius: 0 !important;
	}

	::v-deep .u-tag--square {
		border-radius: 0 !important;
	}

	.delivery {
		.title {
			font-size: 31rpx;
			text-align: center;
			height: 80rpx;
			line-height: 80rpx;
			font-weight: 600;
		}

		.delivery-list {
			padding: 30rpx;
			min-height: 600rpx;
		}
	}

	.param-list {
		color: #666;
		line-height: 50rpx;
		font-size: 24rpx;
		border-top: 1px solid #D8D8D8;
		border-right: 1px solid #D8D8D8;
		margin: 20rpx 0 30rpx 0;

		.param-col {
			border-bottom: 1px solid #D8D8D8;
			border-left: 1px solid #D8D8D8;
			padding: 5rpx;
		}
	}

	.stock {
		width: 100%;
		height: 60rpx;
		background-color: rgba(139, 139, 139, 0.8);
		text-align: center;
		line-height: 60rpx;
		color: #fff;
		font-size: 24rpx;
	}
</style>
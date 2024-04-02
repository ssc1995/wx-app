<template>
	<view class="">
		<u-loading-page :loading="loading" loading-color="#FE542C" font-size="14" icon-size="30" loading-text="蜜田信易购官方旗舰店"
			color="#FE542C" image="https://mt-1322382233.cos.ap-shanghai.myqcloud.com/webIcon/icon/logo.png"></u-loading-page>
		<scroll-view enable-flex scroll-y="true" :show-scrollbar="false" class="order-infomation" v-if="loading == false">
			<!-- 快递信息 -->
			<view class="address" v-if="deliveryType == 1" @click="selectAddress">
				<view>
					<view class="address-header" style="justify-content: space-between;">
						<view style="display: flex;">
<<<<<<< HEAD
							<view style="width: 150rpx;">收货人: </view>
=======
<<<<<<< HEAD
							<view style="width: 150rpx;">收货人: </view>
=======
<<<<<<< HEAD
							<view style="width: 150rpx;">收货人: </view>
=======
							<view style="width: 130rpx;">收货人: </view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
							<view>{{initAddress.consignee}}</view>
						</view>
						<view>{{initAddress.phone}}</view>
					</view>
					<view class="address-header">
<<<<<<< HEAD
						<view style="width: 150rpx;">收货地址: </view>
=======
<<<<<<< HEAD
						<view style="width: 150rpx;">收货地址: </view>
=======
<<<<<<< HEAD
						<view style="width: 150rpx;">收货地址: </view>
=======
						<view style="width: 130rpx;">收货地址: </view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
						<view style="flex: 1;">{{initAddress.areaName}} {{initAddress.address}}</view>
					</view>
				</view>
				<view class="arrow-icon">
					<u-icon name="arrow-right" color="#979797"></u-icon>
				</view>
			</view>
			<!-- 自提 -->
			<view v-if="deliveryType == 2" @click="gotoSelf">
				<view class="address" v-if="selfPickInfo.name">
					<view>
						<view class="address-header" style="justify-content: space-between;">
							<view style="display: flex;">
<<<<<<< HEAD
								<view style="width: 150rpx;">自提点名称: </view>
=======
<<<<<<< HEAD
								<view style="width: 150rpx;">自提点名称: </view>
=======
<<<<<<< HEAD
								<view style="width: 150rpx;">自提点名称: </view>
=======
								<view style="width: 130rpx;">门店名称: </view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
								<view>{{selfPickInfo.name}}</view>
							</view>
							<view>{{selfPickInfo.mobile}}</view>
						</view>
						<view class="address-header">
<<<<<<< HEAD
							<view style="width: 150rpx;">自提点地址: </view>
=======
<<<<<<< HEAD
							<view style="width: 150rpx;">自提点地址: </view>
=======
<<<<<<< HEAD
							<view style="width: 150rpx;">自提点地址: </view>
=======
							<view style="width: 130rpx;">门店地址: </view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
							<view style="flex: 1;">{{selfPickInfo.areaName}}{{selfPickInfo.address}}</view>
						</view>
					</view>
					<view class="arrow-icon">
						<u-icon name="arrow-right" color="#979797"></u-icon>
					</view>
				</view>
				<view class="address" v-else>
					<view class="address-header">
<<<<<<< HEAD
						<view>请选择自提点</view>
=======
<<<<<<< HEAD
						<view>请选择自提点</view>
=======
<<<<<<< HEAD
						<view>请选择自提点</view>
=======
						<view>请选择门店</view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					</view>
					<view class="arrow-icon">
						<u-icon name="arrow-right" color="#979797"></u-icon>
					</view>
				</view>
			</view>
			<!-- 商品信息 -->
			<view class="content">
				<view class="title">
					{{details.storeName}}
				</view>
				<view class="info">
					<view class="">
						<u--image :showLoading="true" :src="details.pic" width="211rpx" height="237rpx"></u--image>
					</view>
					<view style="padding-left: 50rpx; flex: 1;">
						<view style="line-height: 38rpx; font-weight: 600;">
							{{details.name}}
						</view>
						<view style="color: #999; font-size: 24rpx;line-height: 34rpx;">
							规格：<text v-for="(item, index) in specList" :key="index" style="margin-right: 10rpx;">{{item.value}}</text>
						</view>
						<view style="color: #FE542C; font-size: 25rpx; text-align: end; padding-top: 32rpx;">
							×1
						</view>
						<view style="font-size: 30rpx;line-height: 40rpx; color: #FE542C; font-weight: 600;">
							￥{{details.salePrice | decimal}}
						</view>
						<view class="label">
							<view style="display: flex; padding-top: 12rpx;" v-for="item in serviceList" :key="item">
								<u-icon name="checkmark-circle" color="#E4393B" size="11"></u-icon>
								<view style="padding: 0 16rpx; color: #666;font-size: 23rpx;">
									{{item}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 自提或物流 -->
			<view class="invoicing">
				<view class="">配送方式</view>
				<view>
					<u-radio-group v-model="deliveryType" placement="row" active-color="#FE542C">
						<u-radio :name="1" label="快递"></u-radio>
						<u-radio :name="2" label="自提"></u-radio>
					</u-radio-group>
				</view>
			</view>

			<!-- 开具发票 -->
			<!-- 	<view class="invoicing" @click="goInvoiceInfo" v-if="details.isBill == 1">
				<view class="">开具发票</view>
				<view style="display: flex; justify-content: flex-end; align-items: baseline;">
					<view style="color: #999;">
						{{ invoiceInfo.type == 0 ? '个人' : '公司' }}({{invoiceInfo.title!='' ? invoiceInfo.title : initAddress.consignee }})
					</view>
					<view class="">
						<u-icon name="arrow-right" color="#979797"></u-icon>
					</view>
				</view>
			</view> -->

			<!-- 销售协议 -->
			<view class="invoicing" @click="checkAgree">
				<view class="">销售协议</view>
				<view style="display: flex; justify-content: flex-end; align-items: baseline;">
					<view class="">
						<u-icon name="arrow-right" color="#979797"></u-icon>
					</view>
				</view>
			</view>

			<!-- 表单 -->
			<view class="uni-forms">
				<u-cell-group>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					<u-cell title="首付金额">
						<view slot="value" class="num">￥{{period != 0 ? downPayment : periodPrice | decimal}}</view>
					</u-cell>
					<u-cell title="白条赊购" isLink @click="showStages = true">
						<view slot="value">
							<!-- <text class="num" v-if="period!=0">￥{{periodPrice | decimal}}</text> -->
							<text style="color: #999; font-size: 30rpx;" v-if="period!=0">{{period}}期</text>
						</view>
					</u-cell>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
					<u-cell title="首付">
						<view slot="value" class="num">￥{{period != 0 ? downPayment : periodPrice | decimal}}</view>
					</u-cell>
					<u-cell title="白条分期" isLink @click="showStages = true">
						<view slot="value">
							<text class="num" v-if="period!=0">￥{{periodPrice | decimal}}</text>
							<text style="color: #999; font-size: 30rpx;" v-if="period!=0">×{{period}}期</text>
						</view>
					</u-cell>
					<u-cell title="服务费">
						<view slot="value" class="num">￥{{ serviceMoney | decimal }}</view>
					</u-cell>
					<u-cell title="利息">
						<view slot="value" class="num">￥0.00</view>
					</u-cell>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
				</u-cell-group>
			</view>
			<view style="height: 100rpx;"></view>
			<!-- 底部信息 -->
			<view class="footer">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
				<view class="actions">
					<view style="padding-right: 24rpx;">
						<view style="line-height: 40rpx;" v-if="period!=0">
							<text>赊购金额：</text>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
				<view class="stock" v-if="details.isAudit == 1">
					该订单需人工审核
				</view>
				<view class="actions">
					<view style="padding-right: 24rpx;">
						<view style="line-height: 40rpx;" v-if="period!=0">
							<text>分期金额：</text>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
							<text style="color: #FE542C;">¥{{(Number(details.salePrice) - Number(downPayment)) | decimal}}</text>
						</view>
						<view style="color: #999; font-size: 25rpx;">
							白条余额：¥{{Number(details.useAmount) | decimal}}
						</view>
					</view>
					<view class="">
						<u-button text="提交订单" color="#FE542C" size="large" @click="handlerOk" :loading="handlerLoading"></u-button>
					</view>
				</view>
			</view>
<<<<<<< HEAD
			<!-- 赊购 -->
=======
<<<<<<< HEAD
			<!-- 赊购 -->
=======
<<<<<<< HEAD
			<!-- 赊购 -->
=======
			<!-- 分期 -->
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			<u-popup :show="showStages" @open="showStages = true">
				<view class="warp">
					<view class="rect">
						<view class="modal-title">
<<<<<<< HEAD
							<h4>赊购计算</h4>
=======
<<<<<<< HEAD
							<h4>赊购计算</h4>
=======
<<<<<<< HEAD
							<h4>赊购计算</h4>
=======
							<h4>分期计算</h4>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
							<view class="submit" @click="onBystages">
								确定
							</view>
						</view>
						<view class="stages">
							<view class="stages-num">
<<<<<<< HEAD
								<h4>赊购数</h4>
=======
<<<<<<< HEAD
								<h4>赊购数</h4>
=======
<<<<<<< HEAD
								<h4>赊购数</h4>
=======
								<h4>分期数</h4>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
								<view class="stages-list">
									<view v-for="(item, index) in details.borrowPeriodList" :key="index" class="stages-item"
										:class="{isSelect: periodId == item.id}" @click="selectPeriod(item, index)">{{item.title}}</view>
								</view>
							</view>
							<view class="detail">
								<view class="">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
									<view class="">
										<text>首付：</text>
										<text style="color: #FE542C;">￥{{ period != 0 ? downPayment : periodPrice | decimal }}</text>
									</view>
									<view style="padding-top: 20rpx;" v-if="period != 0">
										<text>首期应付：</text>
										<text style="color: #FE542C;">{{ firstTimeAmount | decimal }}</text>
										<text style="margin-left: 40rpx;">剩余月付：</text>
										<text style="color: #FE542C;">￥{{ periodPrice | decimal }}</text>
										<text style="color: #666;">×{{ period - 1 }}期</text>
										<view style="padding-top: 20rpx; color: #FF2121;">
											<view>*首期还款日为 {{ firstTime }}</view>
										</view>
									</view>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
									<text>首付</text>
									<text style="color: #FE542C;">￥{{ period != 0 ? downPayment : periodPrice | decimal }}</text>
									<text style="margin-left: 40rpx;" v-if="period != 0">月供</text>
									<text style="color: #FE542C;" v-if="period">￥{{ periodPrice | decimal }}</text>
									<text style="color: #666;" v-if="period">×{{ period }}期</text>
									<text v-if="period != 0" style="color: #FE542C;">（含服务费￥{{ fee | decimal }}/期）</text>
								</view>
								<view style="padding-top: 46rpx;">
									<view>*0利息 0手续费</view>
									<view>*首期还款日为 {{ firstTime }}</view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
								</view>
							</view>
						</view>
					</view>
				</view>
			</u-popup>
		</scroll-view>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
		<u-modal :show="show" title="无额外费用提醒">
			<view class="slot-content">
				<scroll-view scroll-y="true" style="height: 300rpx;">
					<rich-text :nodes="content"></rich-text>
				</scroll-view>
			</view>
			<view slot="confirmButton">
				<view class="btns">
					<view style="width: 40%;">
						<u-button color="#FE542C" :text="confirmText" size="small" :disabled="disabled" @click="confirm"></u-button>
					</view>
				</view>
			</view>
		</u-modal>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
	</view>
</template>

<script>
	import {
		productDetail,
		clientListCode,
	} from "@/config/home.js";
	import {
		placeOrder,
		wxPayment
	} from '@/config/api.js';
	import {
		mapState
	} from "vuex";
	import {
		throttle
	} from '@/utils/tool.js'
	export default {
		data() {
			return {
				showStages: false,
				details: {},
<<<<<<< HEAD
				firstTimeAmount: "",
=======
<<<<<<< HEAD
				firstTimeAmount: "",
=======
<<<<<<< HEAD
				firstTimeAmount: "",
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
				period: "",
				periodPrice: "",
				fee: '',
				downPayment: "",
				periodId: "",
<<<<<<< HEAD
				days: 0,
=======
<<<<<<< HEAD
				days: 0,
=======
<<<<<<< HEAD
				days: 0,
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
				specList: [], // 规格
				serviceList: [], // 服务说明
				warehouseId: '', // 仓库id
				loading: false,
				deliveryType: 1, // 1.快递 2.自提  
				handlerLoading: false,
				sales: [], // 销售协议
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
				show: false,
				content: '亲爱的客户，感谢选择蜜田信易购平台选购心仪商品，本平台所有产品价格均为真实销售价格，我司严禁工作人员向客户索取任何额外费用；同时未授权任何第三方公司及个人收取任何费用；在您选购商品过程中，如有相关人员向您收取费用，请联系在线客服或向公司举报。',
				confirmText: '阅读并同意5s',
				timer: null,
				checked: [],
				disabled: false,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			}
		},

		computed: {
			...mapState({
				initAddress: state => state.Common.areaInfo,
				invoiceInfo: state => state.Common.invoiceInfo,
				selfPickInfo: state => state.Common.selfPickInfo
			}),
			
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
			// 服务费
			serviceMoney() {
				return Number(this.fee) * Number(this.period);
			},
			
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			// 首期还款日
			firstTime() {
				let now = new Date();
				let date = now.getTime();
<<<<<<< HEAD
				let differ = Number(this.days - 1) * 24 * 3600 * 1000;
=======
<<<<<<< HEAD
				let differ = Number(this.days - 1) * 24 * 3600 * 1000;
=======
<<<<<<< HEAD
				let differ = Number(this.days - 1) * 24 * 3600 * 1000;
=======
				let differ = 15 * 24 * 3600 * 1000;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
				let num = date + differ;
				return uni.$u.timeFormat(num.toString(), 'yyyy年mm月dd日');
			}
		},

		onLoad(option) {
			let {
				id,
				periodId,
				warehouseId
			} = option;
			this.getDetail(id);
			this.periodId = periodId;
			this.warehouseId = warehouseId;
			clientListCode("sale").then(res => {
				if (res.success) {
					this.sales = res.data
				}
			})
		},

		methods: {

			// 详情信息
			getDetail(id) {
				this.loading = true;
				productDetail(id).then(res => {
					if (res.success) {
						this.details = res.data;
						this.loading = false;
						this.downPayment = res.data.minDownPayment;
						this.specList = res.data.specList;
						this.serviceList = res.data.serviceList;
<<<<<<< HEAD
						// 赊购
=======
<<<<<<< HEAD
						// 赊购
=======
<<<<<<< HEAD
						// 赊购
=======
						// 分期
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
						let obj = res.data.borrowPeriodList && res.data.borrowPeriodList.find(item => item.id == this.periodId);
						if (obj) {
							this.period = obj.period;
							this.periodPrice = obj.price;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
							this.firstTimeAmount = obj.firstTimeAmount;
							this.fee = obj.fee;
							this.downPayment = obj.downPayment;
							this.days = obj.days;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
							this.fee = obj.fee;
							this.downPayment = obj.downPayment;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
						}
					}
				})
			},

<<<<<<< HEAD
			// 选择赊购
=======
<<<<<<< HEAD
			// 选择赊购
=======
<<<<<<< HEAD
			// 选择赊购
=======
			// 选择分期
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			selectPeriod(data, index) {
				this.periodIndex = index;
				this.period = data.period;
				this.periodPrice = data.price;
<<<<<<< HEAD
				this.firstTimeAmount = data.firstTimeAmount;
				this.days = data.days;
=======
<<<<<<< HEAD
				this.firstTimeAmount = data.firstTimeAmount;
				this.days = data.days;
=======
<<<<<<< HEAD
				this.firstTimeAmount = data.firstTimeAmount;
				this.days = data.days;
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
				this.fee = data.fee;
				this.downPayment = data.downPayment;
				this.periodId = data.id;
			},

			// 确定
			onBystages() {
				this.showStages = false;
			},

			// 选择地址
			selectAddress() {
				uni.navigateTo({
					url: '/pages/address/address?type=confirmOrder'
				})
			},

<<<<<<< HEAD
			// 自提点设置
=======
<<<<<<< HEAD
			// 自提点设置
=======
<<<<<<< HEAD
			// 自提点设置
=======
			// 门店设置
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			gotoSelf() {
				uni.navigateTo({
					url: '/subPackages/selfPickup/selfPickup'
				})
			},

			// 发票索取
			goInvoiceInfo() {
				uni.navigateTo({
					url: `/subPackages/invoiceInfo/invoiceInfo?name=${this.initAddress.consignee}`
				})
			},

			// 销售协议
			checkAgree() {
				uni.navigateTo({
					url: '/subPackages/webView/webView?id=' + this.sales[0].id
				})
			},

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			// 打开弹窗
			open() {
				this.show = true;
				this.disabled = true;
				let num = 5;
				this.timer = setInterval(() => {
					num -= 1;
					if (num > 0) {
						this.confirmText = `阅读并同意${num}s`;
					} else {
						clearInterval(this.timer);
						this.timer = null;
						this.disabled = false;
						this.confirmText = `阅读并同意`;
					}
				}, 1000);
			},

			// 同意
			confirm() {
				this.show = false;
				this.checked = [""];
			},

			// 取消
			cancel() {
				this.show = false;
				this.checked = [];
				clearInterval(this.timer);
				this.timer = null;
				this.confirmText = '阅读并同意5s';
			},

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			// 提交订单
			handlerOk() {
				if (this.deliveryType == 2 && !this.selfPickInfo.name) {
					return uni.showToast({
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
						title: "请选择自提点",
						icon: "none"
					})
				};

				if (this.checked.length === 0) return this.open();

				// 赊购金额
				let balance = Number(this.details.salePrice) - Number(this.downPayment);
				let loanMoney = this.period == 0 ? 0 : balance;
				// 赊购
				if (this.period != 0 && Number(this.details.useAmount) < balance) {
					// 判断白条额度是否可赊购购买
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
						title: "请选择门店",
						icon: "none"
					})
				};
				// 分期金额
				let balance = Number(this.details.salePrice) - Number(this.downPayment);
				let loanMoney = this.period == 0 ? 0 : balance;
				// 分期
				if (this.period != 0 && Number(this.details.useAmount) < balance) {
					// 判断白条额度是否可分期购买
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					return uni.showToast({
						title: "您的白条额度不足",
						icon: "none"
					});
				};
				// 传参
				let params = {
					deliveryType: this.deliveryType,
					downPayment: this.period != 0 ? this.downPayment : Number(this.details.salePrice),
					isLoan: this.period == 0 ? 0 : 1,
					loanMoney,
					fee: this.fee,
					periodId: this.periodId,
					productId: this.details.id,
					warehouseId: this.warehouseId,
					type: this.invoiceInfo.type,
					title: this.invoiceInfo.title != '' ? this.invoiceInfo.title : this.initAddress.consignee,
					taxNo: this.invoiceInfo.taxNo
				};
				// 快递方式
				if (this.deliveryType == 1) {
					params.addressId = this.initAddress.addressId
				} else {
					// 自提方式
					params.storeAddressId = this.selfPickInfo.id
				};
				// 下单
				let that = this;
				that.handlerLoading = true;
				placeOrder(params).then(res => {
<<<<<<< HEAD
					if (that.details.isAudit == 1) return uni.redirectTo({
=======
<<<<<<< HEAD
					if (that.details.isAudit == 1) return uni.redirectTo({
=======
<<<<<<< HEAD
					if (that.details.isAudit == 1) return uni.redirectTo({
=======
					if (that.details.isAudit == 1) return uni.navigateTo({
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
						url: `/subPackages/orderDetails/orderDetails?id=${res.data.id}`
					})
					if (res.success) {
						wxPayment({
							orderSn: res.data.orderSn,
							orderType: 1
						}).then(result => {
							// 调用微信支付
							uni.requestPayment({
								timeStamp: result.data.timeStamp,
								nonceStr: result.data.nonceStr,
								package: result.data.package,
								signType: result.data.signType,
								paySign: result.data.paySign,
								success(respon) {
									// 跳转订单详情页
									uni.showToast({
										title: "支付成功",
										duration: 2000,
										icon: "none",
										success() {
<<<<<<< HEAD
											uni.redirectTo({
												url: `/subPackages/orderDetails/orderDetails?id=${res.data.id}&type=confirmOrder`
=======
<<<<<<< HEAD
											uni.redirectTo({
												url: `/subPackages/orderDetails/orderDetails?id=${res.data.id}&type=confirmOrder`
=======
<<<<<<< HEAD
											uni.redirectTo({
												url: `/subPackages/orderDetails/orderDetails?id=${res.data.id}&type=confirmOrder`
=======
											uni.navigateTo({
												url: `/subPackages/orderDetails/orderDetails?id=${res.data.id}`
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
											})
										}
									});
								},
								fail(respon) {
<<<<<<< HEAD
									uni.redirectTo({
										url: `/subPackages/orderDetails/orderDetails?id=${res.data.id}&type=confirmOrder`
=======
<<<<<<< HEAD
									uni.redirectTo({
										url: `/subPackages/orderDetails/orderDetails?id=${res.data.id}&type=confirmOrder`
=======
<<<<<<< HEAD
									uni.redirectTo({
										url: `/subPackages/orderDetails/orderDetails?id=${res.data.id}&type=confirmOrder`
=======
									uni.navigateTo({
										url: `/subPackages/orderDetails/orderDetails?id=${res.data.id}`
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
									})
								}
							})
						})
					}
				}).finally(() => {
					that.handlerLoading = false;
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.order-infomation {
		color: #333;
		font-size: 28rpx;
		height: 100vh;
		// padding-bottom: 100rpx;
	}

	.address {
		// height: 154rpx;
		background-color: #fff;
		padding: 18rpx 20rpx;
		display: flex;
	}

	.address-header {
		display: flex;
		line-height: 48rpx;
		font-size: 25rpx;
	}

	.content {
		background-color: #fff;
		margin-top: 18rpx;

		.title {
			height: 72rpx;
			line-height: 72rpx;
			;
			font-size: 25rpx;
			font-family: PingFangSC, PingFang SC;
			font-weight: 600;
			padding: 0 18rpx;
		}

		.info {
			display: flex;
			border-top: 1px solid #F2F2F2;
			padding: 18rpx;
		}

		.cell {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 72rpx;
			padding: 18rpx;
			border-top: 1rpx solid #F2F2F2;
		}
	}

	.invoicing {
		margin-top: 18rpx;
		display: flex;
		padding: 0 30rpx;
		height: 72rpx;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		font-size: 30rpx;
	}

	.uni-forms {
		margin-top: 18rpx;
		background-color: #fff;
		margin-bottom: 100rpx;

		.num {
			color: #FF2121;
			font-size: 30rpx;
		}
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

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 1;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
		.actions {
			background-color: #fff;
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
	}

	.arrow-icon {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
	}

	::v-deep .u-cell__body {
		padding-left: 18rpx;
		padding-right: 18rpx;
	}

	::v-deep .u-button--square {
		border-radius: 0 !important;
	}

	::v-deep .u-radio {
		margin-left: 20rpx;
	}

	.label {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c

	.stock {
		width: 100%;
		height: 60rpx;
		background-color: rgba(253, 246, 236, 0.5);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
	
	.stock {
		width: 100%;
		height: 60rpx;
		background-color: rgba(253,246,236, 0.5);
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
		text-align: center;
		line-height: 60rpx;
		color: #f9ae3d;
		font-size: 24rpx;
	}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c

	.btns {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
</style>
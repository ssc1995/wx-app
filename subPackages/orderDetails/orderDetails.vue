<template>
	<view class="">
		<u-loading-page :loading="loading" loading-color="#FE542C" font-size="14" icon-size="30" loading-text="蜜田信易购官方旗舰店"
			color="#FE542C" image="https://mt-1322382233.cos.ap-shanghai.myqcloud.com/webIcon/icon/logo.png"></u-loading-page>
		<view 
			class="order-details"
			v-if="loading == false"
		>
			<view class="header">
				<u--image :showLoading="true" :src="showBgc" width="100%" height="254rpx"></u--image>
				<view class="header-center">
					<view class="order_info">
						<view class="title">
							<view>{{status}}</view>
							<view v-if="details.orderStatus == 10 || details.orderStatus == 20">{{rocallTime}}</view>
						</view>
						<view class="">
							<u--image :showLoading="true" :src="showIcon" width="120rpx" height="120rpx"></u--image>
						</view>
					</view>
				</view>
			</view>
			<!-- 快递地址 -->
			<view class="address" @click="selectAddress" v-if="details.deliveryType == 1">
				<view class="">
					<u--image :showLoading="true" :src="mapImg" width="80rpx" height="80rpx"></u--image>
				</view>
				<view class="">
					<view style="padding-bottom: 10rpx;">
						<text>{{initAddress.consignee}}</text>
<<<<<<< HEAD
						<text style="color: #666; font-size: 25rpx; margin-left: 20rpx;">{{initAddress.phone}}</text>
=======
<<<<<<< HEAD
						<text style="color: #666; font-size: 25rpx; margin-left: 20rpx;">{{initAddress.phone}}</text>
=======
<<<<<<< HEAD
						<text style="color: #666; font-size: 25rpx; margin-left: 20rpx;">{{initAddress.phone}}</text>
=======
						<text style="color: #999; font-size: 25rpx; margin-left: 20rpx;">{{initAddress.phone}}</text>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					</view>
					<view style="font-size: 28rpx;">
						{{initAddress.areaName}} {{initAddress.address}}
					</view>
				</view>
			</view>
			<!-- 自提地址 -->
			<view class="address" v-if="details.deliveryType == 2">
				<view class="">
					<u--image :showLoading="true" :src="mapImg" width="80rpx" height="80rpx"></u--image>
				</view>
				<view class="">
					<view style="padding-bottom: 10rpx;">
<<<<<<< HEAD
						<text>自提点名称：{{selfPickInfo.name}}</text>
=======
<<<<<<< HEAD
						<text>自提点名称：{{selfPickInfo.name}}</text>
=======
<<<<<<< HEAD
						<text>自提点名称：{{selfPickInfo.name}}</text>
=======
						<text>门店名称：{{selfPickInfo.name}}</text>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					</view>
					<view style="padding-bottom: 10rpx; display: flex;">
						<text>联系方式：{{selfPickInfo.mobile}}</text>
						<u-icon slot="right-icon" name="phone-fill" color="#FE542C" @tap="callPhone()"></u-icon>
					</view>
					<view style="font-size: 28rpx;">
<<<<<<< HEAD
						自提点地址：{{selfPickInfo.areaName}} {{selfPickInfo.address}}
=======
<<<<<<< HEAD
						自提点地址：{{selfPickInfo.areaName}} {{selfPickInfo.address}}
=======
<<<<<<< HEAD
						自提点地址：{{selfPickInfo.areaName}} {{selfPickInfo.address}}
=======
						门店地址：{{selfPickInfo.areaName}} {{selfPickInfo.address}}
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
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
						<view>
							<u--text :text="details.name" :size="13" line-height="38rpx" :lines="2" bold></u--text>
						</view>
						<view style="color: #999; font-size: 24rpx;line-height: 34rpx;">
							规格：<text v-for="(item, index) in details.specList" :key="index"
								style="margin-right: 10rpx;">{{item.value}}</text>
						</view>
						<view style="color: #FE542C; font-size: 25rpx; text-align: end; padding-top: 32rpx;">
							×1
						</view>
						<view style="font-size: 30rpx;line-height: 40rpx; color: #FE542C; font-weight: 600;">
							￥{{details.salePrice | decimal}}
						</view>
					</view>
				</view>
				<view class="cell">
					<view class="">订单金额</view>
					<view style="color: #FF2121; font-size: 30rpx;">￥{{details.orderPrice | decimal}}</view>
				</view>
				<view class="cell">
					<view class="">首付金额</view>
					<view style="color: #FF2121; font-size: 30rpx;">￥{{details.downPayment | decimal}}</view>
				</view>
				<view class="cell" @click="goRepaymentPlan" v-if="details.period!=0">
<<<<<<< HEAD
					<view class="">赊购账单</view>
=======
<<<<<<< HEAD
					<view class="">赊购账单</view>
=======
<<<<<<< HEAD
					<view class="">赊购账单</view>
=======
					<view class="">分期账单</view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					<view style="display: flex;align-items: center;">
						<view class="">
							<u--image :showLoading="true" :src="helpImg" width="50rpx" height="70rpx"></u--image>
						</view>
<<<<<<< HEAD
						<view style="font-size: 30rpx;color: #666;">{{details.period}}期</view>
=======
<<<<<<< HEAD
						<view style="font-size: 30rpx;color: #666;">{{details.period}}期</view>
=======
<<<<<<< HEAD
						<view style="font-size: 30rpx;color: #666;">{{details.period}}期</view>
=======
						<view style="font-size: 30rpx;color: #666;">￥{{details.timeAmount | decimal}}×{{details.period}}期</view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
						<view class="">
							<u-icon name="arrow-right" color="#979797"></u-icon>
						</view>
					</view>
				</view>
			</view>
			<!-- 订单详情 -->
			<view class="details">
				<view class="u-cell" style="position: relative;">
					<view style="width: 135rpx;">订单编号:</view>
					<view>{{details.orderSn}}</view>
					<view class="copy" @click="copyOrder">
						复制
					</view>
				</view>
				<view class="u-cell">
					<view style="width: 135rpx;">下单时间</view>
					<view>{{ details.createTime }}</view>
				</view>
				<view class="u-cell" v-if="details.auditTime">
					<view style="width: 135rpx;">审核时间</view>
					<view>{{ details.auditTime }}</view>
				</view>
				<view class="u-cell" v-if="details.payTime">
					<view style="width: 135rpx;">支付时间</view>
					<view>{{ details.payTime }}</view>
				</view>
				<view class="u-cell" v-if="details.signTime">
					<view style="width: 135rpx;">签约时间</view>
					<view>{{ details.signTime }}</view>
				</view>
				<view class="u-cell" v-if="details.sendTime">
					<view style="width: 135rpx;">发货时间</view>
					<view>{{ details.sendTime }}</view>
				</view>
				<view class="u-cell" v-if="details.confirmTime">
					<view style="width: 135rpx;">完成时间</view>
					<view>{{ details.confirmTime }}</view>
				</view>
			</view>
			<!-- 发票 -->
			<view class="invoice" @click="goInvoiceInfo" v-if="details.isBill == 1&&details.orderStatus == 50&&details.ticketStatus == 3">
				<view class="">发票索取</view>
				<view class="">
					<u-icon name="arrow-right" color="#979797"></u-icon>
				</view>
			</view>
			<view class="invoice" @click="goPreview" v-if="details.orderStatus == 20">
				<u-checkbox-group>
<<<<<<< HEAD
					<u-checkbox shape="circle" activeColor="#FE542C" :checked="isReadAgreement" label="销售协议"
=======
<<<<<<< HEAD
					<u-checkbox shape="circle" activeColor="#FE542C" :checked="isReadAgreement" label="销售协议"
=======
<<<<<<< HEAD
					<u-checkbox shape="circle" activeColor="#FE542C" :checked="isReadAgreement" label="销售协议"
=======
					<u-checkbox shape="circle" activeColor="#FE542C" :checked="isReadAgreement" label="我就要买分期购物协议"
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
						@change="changeCheck"></u-checkbox>
				</u-checkbox-group>
				<view>
					<u-icon name="arrow-right" color="#979797"></u-icon>
				</view>
			</view>
			<view style="height: 120rpx;"></view>
			<view class="footer">
				<view class="actions" v-if="details.orderStatus == 10">
					<view>
						<u-button text="取消订单" plain size="small" @click="cancellationShow = true"></u-button>
					</view>
					<view style="margin-left: 18rpx;">
						<u-button text="立即支付" color="#FE542C" @click="handlerPay" size="small" plain></u-button>
					</view>
				</view>
				<view class="actions" v-if="details.orderStatus == 20">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					<view v-if="details.deliveryType == 1">
						<u-button text="修改收货地址" color="#FE542C" plain size="small" @click="selectAddress"></u-button>
					</view>
					<view style="padding-left: 18rpx;">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
					<view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
						<u-button text="立即签约" color="#FE542C" plain size="small" @click="goSign"></u-button>
					</view>
				</view>
				<view class="actions" v-if="details.orderStatus == 30">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
					<view v-if="details.deliveryType == 1">
						<u-button text="修改收货地址" color="#FE542C" plain size="small" @click="selectAddress"></u-button>
					</view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					<view style="padding-left: 18rpx;">
						<u-button @click="refundOk" color="#FE542C" text="申请退款" size="small" plain></u-button>
					</view>
				</view>
				<view class="actions" v-if="details.orderStatus == 40">
					<view>
						<u-button text="订单跟踪" color="#FE542C" plain size="small" @click="goTracking" v-if="details.deliveryType == 1"></u-button>
					</view>
					<view style="margin-left: 18rpx;">
						<u-button @click="handleOk" text="确认收货" color="#FE542C" size="small" plain></u-button>
					</view>
				</view>
				<view class="actions" v-if="details.orderStatus == 50">
					<view>
						<u-button text="订单跟踪" color="#FE542C" plain size="small" @click="goTracking" v-if="details.deliveryType == 1"></u-button>
					</view>
<<<<<<< HEAD
					<!-- <view style="padding-left: 18rpx;">
						<u-button @click="refundOk" text="申请退款" color="#FE542C" size="small" plain></u-button>
					</view> -->
=======
<<<<<<< HEAD
					<!-- <view style="padding-left: 18rpx;">
						<u-button @click="refundOk" text="申请退款" color="#FE542C" size="small" plain></u-button>
					</view> -->
=======
<<<<<<< HEAD
					<!-- <view style="padding-left: 18rpx;">
						<u-button @click="refundOk" text="申请退款" color="#FE542C" size="small" plain></u-button>
					</view> -->
=======
					<view style="padding-left: 18rpx;">
						<u-button @click="refundOk" text="申请退款" color="#FE542C" size="small" plain></u-button>
					</view>
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
				</view>
				<view class="actions" v-if="details.orderStatus == 60">
					<view>
						<u-button text="删除订单" color="#FE542C" plain size="small" @click="show = true"></u-button>
					</view>
				</view>
			</view>
			<!-- 删除提示 -->
			<u-modal :show="show" title="确认删除该订单？" showCancelButton @confirm="confirm" @cancel="cancel"
				confirmColor="#FE542C"></u-modal>

			<!-- 取消订单提示 -->
			<u-modal :show="cancellationShow" title="确认取消该订单？" showCancelButton @confirm="cancellationConfirm"
				@cancel="cancellationCancel" confirmColor="#FE542C"></u-modal>

			<!-- 确认收货 -->
			<u-modal :show="dialogVisible" title="请确认收货" showCancelButton @confirm="handleConfirm" @cancel="cancelReceived"
				confirmColor="#FE542C"></u-modal>

			<!-- 申请退款 -->
			<u-modal :show="refundShow" title="确认申请退款？" showCancelButton @confirm="refundComfirm" @cancel="refundCancel"
				confirmColor="#FE542C"></u-modal>
		</view>
	</view>
</template>

<script>
	import {
		getOrderDetails,
		cancelOrder,
		deleteOrder,
		confirmOrder,
		getPreviewUrl,
		signTemplate,
		wxPayment,
		applyRefund
	} from '@/config/api.js';
	import {
		mapState
	} from "vuex";
	export default {
		data() {
			return {
				mapImg: this.$imgSrc + '/address1.png',
				helpImg: this.$imgSrc + '/helps.png',
				details: {},
				show: false, // 删除订单
				timer: null, // 计时器
				rocallTime: '',
				loading: false,
				isReadAgreement: false, // 是否阅读协议
				dialogVisible: false, // 确认收货
				cancellationShow: false, // 取消订单
				refundShow: false, // 退货确认
<<<<<<< HEAD
				triggered: false,
				type: ""
=======
<<<<<<< HEAD
				triggered: false,
				type: ""
=======
<<<<<<< HEAD
				triggered: false,
				type: ""
=======
				triggered: false
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c

			}
		},

		onLoad(option) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			let { type, id } = option;
			this.type = type;
			this.details.id = id;
		},
		
		onShow() {
			this.loading = true;
			this.getDetails(this.details.id);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
			this.loading = true;
			this.getDetails(option.id);
			this.details.id = option.id;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
		},
		
		// 下拉刷新
		onPullDownRefresh() {
			this.getDetails(this.details.id);
		},

		onUnload() {
			clearInterval(this.timer);
			this.timer = null;
		},

		computed: {
			...mapState({
				initAddress: state => state.Common.areaInfo,
				invoiceInfo: state => state.Common.invoiceInfo,
				selfPickInfo: state => state.Common.selfPickInfo
			}),

			// 展示图
			showIcon() {
				let {
					orderStatus
				} = this.details;
				switch (orderStatus) {
					case 10:
						return this.$imgSrc + '/orderStatus2.png';
						break;
					case 20:
						return this.$imgSrc + '/orderStatus20.png';
						break;
					case 30:
						return this.$imgSrc + '/orderStatus30.png';
						break;
					case 40:
						return this.$imgSrc + '/orderStatus40.png';
						break;
					case 50:
						return this.$imgSrc + '/orderStatus1.png';
						break;
					case 60:
						return this.$imgSrc + '/orderStatus0.png';
						break;
					default:
						return this.$imgSrc + '/orderStatus5.png';
						break;
				}
			},
			// 背景图
			showBgc() {
				let {
					orderStatus
				} = this.details;
				switch (orderStatus) {
					case 10:
						return this.$imgSrc + '/loading.png';
						break;
					case 20:
						return this.$imgSrc + '/loading.png';
						break;
					case 30:
						return this.$imgSrc + '/loading.png';
						break;
					case 40:
						return this.$imgSrc + '/loading.png';
						break;
					case 50:
						return this.$imgSrc + '/successBgc.png';
						break;
					case 60:
						return this.$imgSrc + '/error.png';
						break;
					default:
						return this.$imgSrc + '/loading.png';
						break;
				}
			},

			// 状态
			status() {
				let {
					orderStatus
				} = this.details;
				switch (orderStatus) {
					case 5:
						return '待审核'
						break;
					case 10:
						return '待支付'
						break;
					case 20:
						return '待签约'
						break;
					case 30:
						return '待发货'
						break;
					case 40:
						return '待收货'
						break;
					case 50:
						return '已完成'
						break;
					case 60:
						return '交易关闭'
						break;
				}
			}
		},

		methods: {

			// change事件
			changeCheck(n) {
				this.isReadAgreement = n;
			},

<<<<<<< HEAD
			// 倒计时
=======
<<<<<<< HEAD
			// 倒计时
=======
<<<<<<< HEAD
			// 倒计时
=======
			// 支付时间 倒计时
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
			countdown(start, end) {
				let currentTime = new Date(start);
				let endTime = new Date(end);
				// 将日期转换成时间戳
				let timestamp1 = currentTime.getTime();
				let timestamp2 = endTime.getTime();
				let val = timestamp2 - timestamp1;
				if (val > 0) {
					let remainingSeconds = Math.floor(val);
					this.timer = setInterval(() => {
						remainingSeconds -= 1000;
						if (remainingSeconds > 0) {
							this.rocallTime = uni.$u.timeFormat(remainingSeconds.toString(), 'MM:ss');
						} else {
							this.rocallTime = "";
							clearInterval(this.timer);
							this.timer = null;
							uni.navigateBack()
						}
					}, 1000);
				} else {
					if (this.timer) {
						clearInterval(this.timer);
						this.timer = null;
					}
				}
			},

			// 详情
			getDetails(id) {
				if(this.timer) {
					this.rocallTime = "";
					clearInterval(this.timer);
					this.timer = null;
				};
				getOrderDetails(id).then(res => {
					if (res.success) {
						this.details = res.data;
						this.loading = false;
						uni.stopPullDownRefresh();
						if (res.data.deliveryType == 1) {
							let params = {
								addressId: res.data.addressId,
								consignee: res.data.consignee,
								phone: res.data.phone,
								areaName: res.data.areaName,
								address: res.data.address
							};
							this.$store.dispatch('Common/setAddress', params);
						} else {
							let params = {
								id: res.data.addressId,
								name: res.data.storeAddressName,
								mobile: res.data.mobile,
								areaName: res.data.areaName,
								address: res.data.address
							};
							this.$store.dispatch('Common/setSelfPick', params);
						}
						this.periodId = res.data.periodId;
						if (this.details.orderStatus == 10) {
							this.countdown(this.details.currentTime, this.details.payOutTime);
						};
						if (this.details.orderStatus == 20) {
							this.countdown(this.details.currentTime, this.details.signOutTime);
						}
					}
				})
			},

			// 选择地址
			selectAddress() {
				if (this.details.orderStatus == 10 || this.details.orderStatus == 30) {
					let item = {
						addressId: this.details.addressId,
						consignee: this.details.consignee,
						phone: this.details.phone,
						areaName: this.details.areaName,
						address: this.details.address,
						orderId: this.details.id,
						isDisabled: true
					};
					uni.navigateTo({
						url: `/subPackages/updateAddress/updateAddress?item=${encodeURIComponent(JSON.stringify(item))}`
					})
				}
			},

			// 微信支付
			handlerPay() {
				let that = this;
				wxPayment({
					orderSn: this.details.orderSn,
					orderType: 1
				}).then(result => {
					uni.requestPayment({
						timeStamp: result.data.timeStamp,
						nonceStr: result.data.nonceStr,
						package: result.data.package,
						signType: result.data.signType,
						paySign: result.data.paySign,
						success(respon) {
							that.getDetails(that.details.id);
						},
						fail(respon) {

						}
					})
				})
			},

			// 拨打手机号
			callPhone() {
				uni.makePhoneCall({
					phoneNumber: this.selfPickInfo.mobile
				});
			},

			// 还款计划
			goRepaymentPlan() {
				let {
					borrowId
				} = this.details;
				uni.navigateTo({
					url: `/subPackages/repaymentPlan/repaymentPlan?id=${borrowId}`
				})
			},

			// 复制内容
			copyOrder() {
				uni.setClipboardData({
					data: this.details.orderSn,
					success: function() {

					}
				});
			},

			// 发票索取
			goInvoiceInfo() {
				uni.navigateTo({
					url: '/subPackages/invoiceInfo/invoiceInfo?orderId=' + this.details.id
				})
			},

			// 预览合同
			goPreview() {
				getPreviewUrl(this.details.id).then(res => {
					if (res.success) {
						uni.navigateTo({
							url: '/subPackages/preview/preview?item=' + encodeURIComponent(JSON.stringify(res.message))
						})
					}
				})
			},

			// 签约
			goSign() {
				if (!this.isReadAgreement) return uni.showToast({
<<<<<<< HEAD
					title: '请阅读并勾选赊购购物协议',
=======
<<<<<<< HEAD
					title: '请阅读并勾选赊购购物协议',
=======
<<<<<<< HEAD
					title: '请阅读并勾选赊购购物协议',
=======
					title: '请阅读并勾选分期购物协议',
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					icon: 'none'
				});
				signTemplate(this.details.id).then(res => {
					if (res.success) {
<<<<<<< HEAD
						uni.navigateTo({
							url: '/subPackages/h5Url/h5Url?url=' + encodeURIComponent(JSON.stringify(res.data.shortUrl))
						})
=======
<<<<<<< HEAD
						uni.navigateTo({
							url: '/subPackages/h5Url/h5Url?url=' + encodeURIComponent(JSON.stringify(res.data.shortUrl))
						})
=======
<<<<<<< HEAD
						uni.navigateTo({
							url: '/subPackages/h5Url/h5Url?url=' + encodeURIComponent(JSON.stringify(res.data.shortUrl))
						})
=======
						uni.showToast({
							title: "签约成功",
						});
						this.getDetails(this.details.id);
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					}
				})
			},

			// 确认收货
			handleConfirm() {
				confirmOrder(this.details.id).then(res => {
					if (res.success) {
						this.cancelReceived();
						this.getDetails(this.details.id);
					}
				})
			},

			// 取消确认
			cancelReceived() {
				this.dialogVisible = false;
			},

			// 确认收货弹窗
			handleOk() {
				this.dialogVisible = true;
			},

			// 订单跟踪
			goTracking() {
				uni.navigateTo({
					url: '/subPackages/orderTracking/orderTracking?id=' + this.details.id
				})
			},

			// 关闭取消订单弹窗
			cancellationCancel() {
				this.cancellationShow = false;
			},

			// 取消订单
			cancellationConfirm() {
				cancelOrder(this.details.id).then(res => {
					if (res.success) {
<<<<<<< HEAD
						this.cancellationCancel();
=======
<<<<<<< HEAD
						this.cancellationCancel();
=======
<<<<<<< HEAD
						this.cancellationCancel();
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
						uni.showToast({
							title: res.message,
							icon: 'none'
						});
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
						setTimeout(()=> {
							if(this.type == "confirmOrder") return uni.redirectTo({
								url: '/subPackages/myOrder/myOrder?index=0'
							})
							return uni.navigateBack();
						}, 1500)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
						this.cancellationCancel();
						uni.navigateBack()
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					}
				})
			},

			// 删除订单
			confirm() {
				deleteOrder(this.details.id).then(res => {
					if (res.success) {
<<<<<<< HEAD
						this.cancel();
=======
<<<<<<< HEAD
						this.cancel();
=======
<<<<<<< HEAD
						this.cancel();
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
						uni.showToast({
							title: res.message,
							icon: 'none'
						});
<<<<<<< HEAD
						setTimeout(()=> {
							uni.navigateBack();
						}, 1500)
=======
<<<<<<< HEAD
						setTimeout(()=> {
							uni.navigateBack();
						}, 1500)
=======
<<<<<<< HEAD
						setTimeout(()=> {
							uni.navigateBack();
						}, 1500)
=======
						this.cancel();
						uni.navigateBack();
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					}
				})
			},

			// 删除取消
			cancel() {
				this.show = false;
			},

			// 打开退款弹窗
			refundOk() {
				this.refundShow = true;
			},

			// 退款确认
			refundComfirm() {
				applyRefund(this.details.id).then(res => {
					if (res.success) {
<<<<<<< HEAD
						this.refundCancel();
=======
<<<<<<< HEAD
						this.refundCancel();
=======
<<<<<<< HEAD
						this.refundCancel();
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
						uni.showToast({
							title: "申请退款成功",
							icon: 'none'
						});
<<<<<<< HEAD
						setTimeout(()=> {
							uni.navigateBack();
						}, 1500)
=======
<<<<<<< HEAD
						setTimeout(()=> {
							uni.navigateBack();
						}, 1500)
=======
<<<<<<< HEAD
						setTimeout(()=> {
							uni.navigateBack();
						}, 1500)
=======
						this.refundCancel();
						uni.navigateBack();
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
					}
				})
			},

			// 取消退款
			refundCancel() {
				this.refundShow = false;
			}
		}
	}
</script>

<style scoped lang="scss">
	.order-details {
		color: #333;
		font-size: 28rpx;
		height: 100vh;
	}

	.header {
		width: 100%;
		height: 254rpx;
		position: relative;

		.header-center {
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;

			.order_info {
				display: flex;
				align-items: center;
				height: 100%;
				justify-content: space-between;
				padding-left: 56rpx;
				padding-right: 48rpx;
			}

			.title {
				height: 53rpx;
				font-size: 38rpx;
				font-family: PingFangSC, PingFang SC;
				color: #FFF;
				line-height: 53rpx;
			}
		}
	}

	.address {
		display: flex;
		align-items: center;
		min-height: 141rpx;
		padding: 18rpx;
		background-color: #fff;
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
			border-top: 1px solid #D8D8D8;
			padding: 18rpx;
		}

		.cell {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 72rpx;
			padding: 18rpx;
			border-top: 1rpx solid #D8D8D8;
		}
	}

	.details {
		background-color: #fff;
		margin-top: 18rpx;
		padding: 18rpx;
		color: #666;
<<<<<<< HEAD
		// font-size: 26rpx;
=======
<<<<<<< HEAD
		// font-size: 26rpx;
=======
<<<<<<< HEAD
		// font-size: 26rpx;
=======
		font-size: 26rpx;
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c

		.u-cell {
			display: flex;
			align-items: center;
			height: 72rpx;
		}
	}

	.copy {
		position: absolute;
		right: 0;
		width: 72rpx;
		height: 30rpx;
		border-radius: 2rpx;
		border: 1rpx solid #FE542C;
		z-index: 1;
		text-align: center;
		color: #FE542C;
		font-size: 22rpx;
	}

	.invoice {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 18rpx;
		background-color: #fff;
		margin-top: 18rpx;
		height: 72rpx;
	}

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 1;
		background-color: #fff;

		.actions {
			padding: 18rpx;
			display: flex;
			justify-content: flex-end;
			align-items: center;

			view {
				width: 157rpx;
			}
		}
	}
</style>
import { userOrderList } from '@/config/home.js';
import { cancelOrder, confirmOrder, deleteOrder, wxPayment, applyRefund } from '@/config/api.js';
export default {
	props: {
		current: {
			type: Number,
			require: true,
		}
	},
		data() {
			return {
				list: [],
				pages: 0,
				status: 'loadmore',
				isHas: true,
				show: false, // 删除订单
				dialogVisible: false, // 确认收货
				record: {},
				index: 0,
				cancellationShow: false, // 取消订单
				refundShow: false, // 退货确认
			}
		},
		methods: {
			// 初始加载
			init() {
				this.pages = 0;
				this.queryParams.pageNum = 1;
				this.isHas = true;
				this.list = [];
				this.getList()
			},
			// 列表数据
			getList() {
				this.status = 'loading';
				userOrderList(this.queryParams).then(res=> {
					if(res.success) {
						this.list = this.list.concat(res.data.records);
						this.pages = res.data.pages;
						if(res.data.total == 0) {
							this.isHas = false;
						};
						if (this.list.length < this.queryParams.pageSize) {
							this.status = 'nomore';
						} else {
							this.status = 'loadmore';
						}
					}
				})
			},
			
			// 滚动加载
			lower(e) {
				if (this.queryParams.pageNum < this.pages) {
					this.queryParams.pageNum++;
					this.status = 'loading';
					this.getList();
				} else {
					this.status = 'nomore';
				}
			},
			
			// 查看订单详情
			gotoDetail(data) {
				this.$store.dispatch('Common/getFromOrder', true);
				uni.navigateTo({
					url: `/subPackages/orderDetails/orderDetails?id=${data.id}`
				})
			},
			
			// 微信支付
			handlerPay(data) {
				let that = this;
				wxPayment({ orderSn: data.orderSn, orderType: 1 }).then(result=> {
					uni.requestPayment({
						timeStamp: result.data.timeStamp,
						nonceStr: result.data.nonceStr,
						package: result.data.package,
						signType: result.data.signType,
						paySign: result.data.	paySign,
						success (respon) { 
							that.init();
						},
						fail (respon) { 
							
						}
					})
				})
			},
			
			// 订单跟踪
			goTracking(record) {
				uni.navigateTo({
					url: '/subPackages/orderTracking/orderTracking?id=' + record.id
				})
			},
			
			// 取消订单弹窗
			handlerCancel(record) {
				this.cancellationShow = true;
				this.record = record;
			},
			
			// 关闭取消订单弹窗
			cancellationCancel() {
				this.cancellationShow = false;
			},
			
			// 取消订单
			cancellationConfirm() {
				cancelOrder(this.record.id).then(res=> {
					if(res.success) {
						uni.showToast({
<<<<<<< HEAD
							title: res.message,
=======
							title: "订单已取消",
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
							icon: 'none'
						})
						this.cancellationCancel();
						this.init();
					}
				})
			},
			
			
			// 关闭确认收货
			cancelReceived() {
				this.dialogVisible = false;
			},
						
			// 确认收货弹窗
			handleOk(data, index) {
				this.dialogVisible = true;
				this.record = data;
				this.index = index;
			},
			
			// 确认收货
			handleConfirm() {
<<<<<<< HEAD
				//拉起确认收货组件
				// if (wx.openBusinessView) {
				//   wx.openBusinessView({
				//     businessType: 'weappOrderConfirm',
				//     extraData: {
				//       merchant_id: '',
				//       merchant_trade_no: '',
				//       transaction_id: '4200002156202403285340713341'
				//     },
				//     success() {
				// 			uni.showModal({
				// 				title: 'ssss'
				// 			})
				//     },
				//     fail() {
				//       //dosomething
				//     },
				//     complete() {
				//       //dosomething
				//     }
				//   });
				// } else {
				//   //引导用户升级微信版本
				// }
=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
				confirmOrder(this.record.id).then(res=> {
					if(res.success) {
						uni.showToast({
							title: "收货成功",
							icon: 'none'
						});
						this.cancelReceived();
						this.init();
					}
				})
			},
			
			// 打开删除弹窗
			deleteRecord(data, index) {
				this.show = true; 
				this.record = data; 
				this.index = index;
			},
			
			// 删除确认
			confirm() {
				deleteOrder(this.record.id).then(res=> {
					if(res.success) {
						uni.showToast({
<<<<<<< HEAD
							title: res.message,
=======
							title: "订单已删除",
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
							icon: 'none'
						})
						this.cancel();
						this.list.splice(this.index, 1);
					}
				})
			},
			
			// 关闭删除订单
			cancel() {
				this.show = false;
			},
			
			// 打开退款弹窗
			refundOk(data, index) {
				this.refundShow = true;
				this.record = data;
				this.index = index;
			},
			
			// 退款确认
			refundComfirm() {
				applyRefund(this.record.id).then(res=> {
					if(res.success){
						uni.showToast({
<<<<<<< HEAD
							title: res.message,
=======
							title: "申请退款成功",
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
							icon: 'none'
						});
						this.refundCancel();
						this.init();
					}
				})
			},
			
			// 取消退款
			refundCancel() {
				this.refundShow = false;
			}
		}
	}
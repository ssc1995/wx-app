const http = uni.$u.http

// post请求，获取菜单
// export const postMenu = (params, config = {}) => http.post('/ebapi/public_api/index', params, config)

// // get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
// export const getMenu = (data) => http.get('/ebapi/public_api/index', data);

// 新增 / 修改地址
export const addOrUpdate = (params) => http.post('/wechat/address/addOrUpdate',params);

// 设置默认地址
export const setDefaultAddress = (id) => http.get(`/wechat/address/setDefault/${id}`);

// 删除地址
export const deleteAddress = (id) => http.get(`/wechat/address/delete/${id}`);

<<<<<<< HEAD
// 自提点列表
=======
<<<<<<< HEAD
// 自提点列表
=======
// 门店列表
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
export const selfPickList = () => http.get('/wechat/store/address/queryList');

// 用户下单
export const placeOrder = (params) => http.post('/wechat/order/create', params);

// 微信支付
export const wxPayment = (params) => http.post('/wechat/payment/pay', params);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
// 立即还款
export const repaymentApply = (params) => http.post('/wechat/repayment/apply', params);

// 一次结清
export const repaymentApplyAll = (params) => http.post('/wechat/repayment/applyAll', params);

<<<<<<< HEAD
=======
=======
// 一次结清 / 立即还款
export const repaymentApply = (params) => http.post('/wechat/repayment/apply', params);

>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
// 订单详情
export const getOrderDetails = (id) => http.get(`/wechat/order/detail/${id}`);

// 订单取消
export const cancelOrder = (orderId) =>http.get(`/wechat/order/cancel/${orderId}`);

// 确认收货
export const confirmOrder = (orderId) => http.get(`/wechat/order/confirm/${orderId}`);

// 删除订单
export const deleteOrder = (orderId) => http.get(`/wechat/order/delete/${orderId}`);

// 订单跟踪
export const orderExpress = (id) => http.get('/wechat/order/express/' + id);

// 退款
export const applyRefund = (id) => http.get('/wechat/order/apply/refund/' + id);

// 预览合同
export const getPreviewUrl = (id)=> http.get('wechat/order/getPreviewUrl/' + id);

// 签署合同
export const signTemplate = (id) => http.get('/wechat/order/signTemplate/' + id);

// 修改订单地址
export const updateOrderAddress = (params) => http.post('/wechat/order/update', params);

// 申请发票
export const ticketApply = (params) => http.post('/wechat/ticket/apply', params);

// 还款计划
export const repaymentPlan = (borrowId) => http.get(`/wechat/order/repayment/${borrowId}`);

// 白条认证信息
export const getVerify = (data) => http.get('/wechat/member/verifyList', {params: data});

<<<<<<< HEAD
// 评估
export const memberQueryWyRsik = (params) => http.post('/wechat/member/queryWyRsik', params);

=======
<<<<<<< HEAD
// 评估
export const memberQueryWyRsik = (params) => http.post('/wechat/member/queryWyRsik', params);

=======
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
// 身份证识别
export const sendOcrIdCard = (params) => http.post('/wechat/bestsign/ocrIdCard', params);

// 实名认证基本信息
export const verifyUserInfo = (params) => http.post('/wechat/member/verify/name', params);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
export const verifyFace = (params) => http.post('/wechat/member/verify/face', params);

// 实名认证-基本信息-获取手机三要素短信
export const verifyPhoneCode = (params)=> http.post('/wechat/member/verify/phoneCode', params)

<<<<<<< HEAD
=======
=======
// 人脸识别
export const verifyFace = (params) => http.post('/wechat/member/verify/face', params);

>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
// 银行卡认证
export const verifyBank = (params) => http.post('/wechat/member/verify/bank', params);

// 工作信息认证
export const verifyJob = (params) => http.post('/wechat/member/verify/job', params);

// 征信认证
export const creditCreate = (params) => http.post('/wechat/credit/create', params);

// 查询补充资料
export const informationQuery = () => http.get('/wechat/member/information/query');

// 提交补充资料 
export const informationAdd = (params) => http.post('/wechat/member/information/add', params);

// 白条额度申请
export const applyAmount = (params) => http.post('/wechat/member/apply', params);

// 额度申请记录
export const applyRecords = (data) => http.get('/wechat/amount/applyList', {params: data});

// 新增银行卡
export const addOrUpdateBanks = (params) => http.post('/wechat/bank/addOrUpdate', params); 

// 本期账单
export const currentRepayment = (data) => http.get('/wechat/borrow/currentRepayment');

// 查看账单详情
export const borrowtDetail = (repaymentId) => http.get(`/wechat/borrow/detailV2/${repaymentId}`);

// 账单列表
export const getBorrows = (data) => http.get('/wechat/borrow/all', {params: data});

// 账单列表 ->详情
export const borrowInfo = (id) => http.get('/wechat/borrow/detail/' + id);

// 还款记录列表
export const repaymentLog = (data) => http.get('/wechat/repayment/log', {params: data});

// 还款记录详情
export const repaymentDetail = (id) => http.get(`/wechat/repayment/detail/${id}`);

// 邀请信息
export const goodInfo = () => http.get('/client/invite/info');

// 积分兑换 - 商品列表
export const goodList = (data) => http.get('/client/good/list', {params: data});

// 积分兑换 - 商品详情
export const clientGoodDetail = (id) => http.get('/client/good/detail/' + id);

// 积分兑换 - 兑换商品
export const clientExchange = (params) => http.post('/client/good/exchange', params);

// 积分兑换 - 兑换记录
export const clientGoodLog = (params) => http.post('/client/good/exchange/log', params);

// 积分商品-兑换详情
export const exchangeDetail = (id) => http.get('/client/good/exchange/detail/' + id);

// 积分变化 - 列表
export const clientIntegralLog = (params) => http.post('/client/integral/log', params);







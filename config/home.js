
const http = uni.$u.http;

// 超值热卖
export const queryHotList = (data) => http.get('/wechat/product/queryHotList', {params: data, header: {isToken: false }});

<<<<<<< HEAD
// 精品赊购
=======
<<<<<<< HEAD
// 精品赊购
=======
<<<<<<< HEAD
// 精品赊购
=======
// 精品分期
>>>>>>> c1072c9e1b2748d1fec973258a258dd0911dcac1
>>>>>>> c99f9cf05289b2b1faef6ed7d6fbdf14af4fc9fc
>>>>>>> da37f3b5e06f3c824e9a20f3300eab7d07a8240c
export const queryLoanList = (data) => http.get('/wechat/product/queryLoanList', {params: data, header: {isToken: false }});

// 首页轮播图
export const getSwiper = (data) => http.get('/wechat/index/slideshowsList', {params: data,  header: {isToken: false }});

// 帮助中心
export const help = (data) => http.get('/wechat/doc/help', {params: data,  header: {isToken: false }});

// 关于我们
export const about = (data) => http.get('/wechat/doc/about', {params: data,  header: {isToken: false }});

// 协议列表
export const clientListCode = (code) => http.get('/wechat/doc/clientList/' + code, { header: {isToken: false }});

// 协议详情
export const docDetail = (id) => http.get('/wechat/doc/detail/' + id, { header: {isToken: false }});

// 商品详情
export const productDetail = (id) => http.get(`/wechat/product/detail/${id}`);

// 用户地址
export const getAddress = (data) => http.get('/wechat/address/queryList');

// 地区树
export const getArea = (data) => http.get('/common/area/tree');

// 选项列表-职业、月收入、开户银行
export const selectType = (data) => http.get('/wechat/config/options', {params: data});

// 查询地区库存
export const queryAreaStock = (data) => http.get('/wechat/product/queryAreaStock', {params: data});

// 银行卡列表
export const queryBankList = () => http.get('/wechat/bank/queryList');

// 用户订单列表
export const userOrderList = (data) => http.get('/wechat/order/queryList', {params: data});

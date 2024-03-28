
const http = uni.$u.http;

// 获取用户的token、openid信息
export const loginWx = (data) => http.get(`/wechat/member/miniLogin`, { params: data }, { 
	header: {isToken: false },
});

// 获取用户信息
export const userInfo = () => http.get('/wechat/member/info');

// 退出登录
export const logout = () => http.get('/wechat/member/miniLogout');

// 登录获取用户信息
export const miniLogin = (params) => http.post('/wechat/member/miniLogin/userInfo', params, { 
	header: {isToken: false },
})

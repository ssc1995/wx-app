
const http = uni.$u.http;

// 获取用户的token、openid信息
export const login = (data) => http.get('/wxUser/wxLogin', { 
	params: data, 
	header: {isToken: false },
});

// 新增用户信息
export const addUserInfo = (params)=> http.post('/wxUser/addUserInfo', params, {header: {isToken: false }});

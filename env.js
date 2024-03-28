// .env.js 文件
const ENV_API_URL = {
	// development: 'http://192.168.2.48:8964', //开发环境
	// development: 'http://test.mitian.net/api',
	// production: 'http://test.mitian.net/api', // 测试环境
	development: 'https://www.mitian.net/api', // 生产环境
	production: 'https://www.mitian.net/api'
}
const ENV_BASE_URL = {
	development: '', //开发环境
	production: '', //生产环境
}
 
export const BASE_URL = ENV_BASE_URL[process.env.NODE_ENV || 'development']; //后台根域名
export const API_URL = ENV_API_URL[process.env.NODE_ENV || 'development']; //后台接口域名
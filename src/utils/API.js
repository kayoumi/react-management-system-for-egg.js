import request from './request';

const host = 'http://localhost:7001/';

const API = {};

//用户注册 
//data: mobile, password, nickname, code
API.signUp = (data) => {
    return request('post', host + 'api/user/signUp', data)
}

//检测登录状态
API.verifyLogin = () => {
    const mobile = sessionStorage.getItem('mobile');
    const token = sessionStorage.getItem('token');
    if(mobile || token) {
        return false;
    }
    return request('post', host + 'api/user/verifyLogin');
}

//账号密码登录
//data: mobile, password
API.login = (data) => {
    return request('post', host + 'api/user/signUp', data)
}

export default API;















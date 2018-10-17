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
    const mobile = localStorage.getItem('mobile');
    const token = localStorage.getItem('token');
    const data = {
        mobile: mobile,
        token: token
    };
    //本地检测mobile和token是否为空
    if(!mobile || !token) {
        return new Promise(function(resolve, reject) {
            const res = {
                code: 999
            };
            resolve(res);
        });
    }
    console.log(data);
    return request('post', host + 'api/user/verifyLogin', data);
}

//账号密码登录
//data: mobile, password
API.login = (data) => {
    return request('post', host + 'api/user/login', data)
}

export default API;















import request from './request';
import helper from './helper';

// const host = 'http://localhost:7001/';
const host = 'http://192.168.1.142:7001/';

const API = {};

//用户注册
//data: mobile, password, nickname, code
API.signUp = (data) => {
    return request('post', host + 'api/user/signUp', data)
}

//检测登录状态
API.verifyLogin = () => {
    const data = helper.getLocalStorage();
    console.log(data);
    return request('post', host + 'api/user/verifyLogin', data);
}

//账号密码登录
//data: mobile, password
API.login = (data) => {
    return request('post', host + 'api/user/login', data)
}

//提交文章
//data: mobile, token, title, tag, summary, content
API.postArticle = (data) => {
    const { mobile, token } = helper.getLocalStorage();
    data.mobile = mobile;
    data.token = token;
    console.log(data);
    return request('post', host + 'api/article', data);
}







export default API;















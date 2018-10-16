import axios from 'axios';

export default function request(method, url, data, authority) {
    const mobile = sessionStorage.getItem('mobile') || '';
    const nickName = sessionStorage.getItem('nickName') || '';
    const token = sessionStorage.getItem('token') || '';
    const adminToken = sessionStorage.getItem('adminToken') || '';
    const superAdminToken = sessionStorage.getItem('superAdminToken') || '';
    method = method.toUpperCase();

    //添加mobile和nickName
    data = data ? data : {};
    data.mobile = mobile;
    data.nickName = nickName;
    //添加token
    if(authority == 'user') {
        data.token = token;
    } else if(authority == 'admin') {
        data.token = token;
        data.adminToken = adminToken;
    } else if(authority == 'superAdmin') {
        data.token = token;
        data.superAdminToken = superAdminToken;
    }

    return axios({
        method: method,
        url: url,
        data: data
    });
};



















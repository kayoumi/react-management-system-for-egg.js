import axios from 'axios';

export default function request(method, url, data) {
    return axios({
        method: method,
        url: url,
        data: data
    });
};



















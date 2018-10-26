import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function request(method, url, data, params) {
    return axios({ method, url, data, params });
};



















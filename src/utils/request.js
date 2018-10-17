import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function request(method, url, data) {
    return axios({
        method: method,
        url: url,
        data: data
    });
};



















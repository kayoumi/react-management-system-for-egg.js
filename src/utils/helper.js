import moment from 'moment';

const helper = {};

helper.getLocalStorage = () => {
    const mobile = localStorage.getItem('mobile') || '';
    const token = localStorage.getItem('token') || '';
    return {
        mobile: mobile,
        token: token
    };
};

helper.verifyStorage = () => {
    const mobile = localStorage.getItem('mobile') || '';
    const token = localStorage.getItem('token') || '';
    if(!mobile || !token) {
        return false;
    } else {
        return true;
    }
};

helper.makePromise = (code) => {
    return new Promise(function(resolve, reject) {
        const res = { code };
        resolve(res);
    });
};

helper.formatTime = (time) => {
    return moment(time).format('YYYY-MM-DD hh:mm:ss');
}

helper.setLocalStorage = (data, propertyArr) => {
    propertyArr.map(item => {
        data[item] && localStorage.setItem(item, data[item]);
    });
}

export default helper;
































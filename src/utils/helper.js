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

export default helper;
































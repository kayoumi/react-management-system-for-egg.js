import API from '../utils/API';
import helper from '../utils/helper';

// login
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export const ARTICLE_REFRESH = 'ARTICLE_REFRESH';
export const ARTICLE_NOFRESH = 'ARTICLE_NOFRESH';

export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const POST_ARTICLE = 'POST_ARTICLE';

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        text: '登录成功！',
        data: data
    }
}

export function loginError(err) {
    return {
        type: LOGIN_ERROR,
        text: '登录失败,' + err
    }
}

export function verifyLogin() {
    return dispatch => API.verifyLogin()
    .then(res => {
        if(res.data.code == 0) {
            return dispatch(loginSuccess());
        } else {
            return dispatch(loginError(res.data.error));
        }
    }).catch(() => dispatch(loginError('请稍后重试！')));
}

export function loginWithPSW(data) {
    return dispatch => API.login(data)
    .then(res => {
        let storageArr = ['mobile', 'nickname', 'token', 'adminToken', 'superAdminToken'];
        if(res.data.code == 0) {
            helper.setLocalStorage(res.data, storageArr);
            return dispatch(loginSuccess(res.data));
        } else {
            return dispatch(loginError(res.data.error));
        }
    }).catch(() => dispatch(loginError('请稍后重试！')));
}

export function logout() {
    return {
        type: LOGOUT,
        text: '退出登录！'
    }
}

export function articleRefresh() {
    return {
        type: ARTICLE_REFRESH
    }
}

export function articleNofresh() {
    return {
        type: ARTICLE_NOFRESH
    }
}

export function receiveError() {
    return {
        type: RECEIVE_ERROR,
        error: '数据请求错误！'
    }
}






import API from '../utils/api';
import helper from '../utils/helper';
import { info } from '../config';

// login
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

// article
export const ARTICLE_GET_ING = 'ARTICLE_GET_ING';
export const ARTICLE_GET_SUCCESS = 'ARTICLE_GET_SUCCESS';
export const ARTICLE_GET_ERROR = 'ARTICLE_GET_ERROR';
export const ARTICLE_POST_ING = 'ARTICLE_POST_ING';
export const ARTICLE_POST_SUCCESS = 'ARTICLE_POST_SUCCESS';
export const ARTICLE_POST_ERROR = 'ARTICLE_POST_ERROR';
export const ARTICLE_NEED_REFRESH = 'ARTICLE_NEED_REFRESH';
export const ARTICLE_HAS_REFREASHED = 'ARTICLE_HAS_REFREASHED';


export const ARTICLE_REFRESH = 'ARTICLE_REFRESH';
export const ARTICLE_NOFRESH = 'ARTICLE_NOFRESH';

export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const POST_ARTICLE = 'POST_ARTICLE';

// login=====================================================
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

export function logout() {
    return {
        type: LOGOUT,
        text: '退出登录！'
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
        let storageArr = ['nickname', 'token', 'adminToken', 'superAdminToken'];
        if(res.data.code == 0) {
            helper.setLocalStorage(data, ['mobile']);
            helper.setLocalStorage(res.data, storageArr);
            return dispatch(loginSuccess(res.data));
        } else {
            info('登录失败，' + res.data.error);
            console.log('action的登录！');
            return dispatch(loginError(res.data.error));
        }
    }).catch(() => {
        info('登录失败');
        console.log('action的登录错误！');
        return dispatch(loginError('请稍后重试！'));
    });
}

// article=====================================================
export function articleGetIng() {
    return {
        type: ARTICLE_GET_ING,
        text: '文章获取中...'
    }
}

export function articleGetSuccess(data) {
    return {
        type: ARTICLE_GET_SUCCESS,
        text: '文章获取成功！',
        data: data
    }
}

export function articleGetError(err) {
    return {
        type: ARTICLE_GET_ERROR,
        text: '文章获取失败！' + err
    }
}

export function articlePostIng() {
    return {
        type: ARTICLE_POST_ING,
        text: '文章提交中...'
    }
}

export function articlePostSuccess(data) {
    return {
        type: ARTICLE_POST_SUCCESS,
        text: '文章提交成功！',
        data: data
    }
}

export function articlePostError(err) {
    return {
        type: ARTICLE_POST_ERROR,
        text: '文章提交失败！' + err
    }
}

export function articleNeedRefresh() {
    return {
        type: ARTICLE_NEED_REFRESH
    }
}

export function articleHasRefreshed() {
    return {
        type: ARTICLE_HAS_REFREASHED,
        text: '刷新成功！'
    }
}


// 待重构 =====================================================
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






import NProgress from 'nprogress';
import API from '../utils/api';
import helper from '../utils/helper';
import { info } from '../config';

// login
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_FILL_DATA = 'LOGIN_FILL_DATA';
export const LOGOUT = 'LOGOUT';

// article
export const ARTICLE_GET_ING = 'ARTICLE_GET_ING';
export const ARTICLE_GET_SUCCESS = 'ARTICLE_GET_SUCCESS';
export const ARTICLE_GET_ERROR = 'ARTICLE_GET_ERROR';
export const ARTICLE_GET_DATA = 'ARTICLE_GET_DATA';
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
export function loginSuccess() {
    info('登录成功！');
    return {
        type: LOGIN_SUCCESS
    }
}

export function loginFillData(data) {
    return {
        type: LOGIN_FILL_DATA,
        data: data
    }
}

export function loginError(err) {
    info('登录失败，' + err);
    return {
        type: LOGIN_ERROR
    }
}

export function logout() {
    info('退出登录成功！');
    return {
        type: LOGOUT
    }
}

export function verifyLogin() {
    return dispatch => API.verifyLogin()
    .then(res => {
        if(res.data.code == 0) {
            dispatch(loginSuccess());
        } else {
            dispatch(loginError(res.data.msg));
        }
    }).catch((res) => dispatch(loginError('请重新登录！')));
}

export function loginWithPSW(data) {
    NProgress.start();
    return dispatch => API.login(data)
    .then(res => {
        NProgress.done();
        let storageArr = ['nickname', 'token', 'adminToken', 'superAdminToken'];
        if(res.data.code == 0) {
            helper.setLocalStorage(data, ['mobile']);
            helper.setLocalStorage(res.data, storageArr);
            dispatch(loginSuccess());
            dispatch(loginFillData(res.data));
        } else {
            dispatch(loginError(res.data.msg));
        }
    }).catch(() => dispatch(loginError('请稍后重试！')));
}

// article=====================================================
export function articleGetIng() {
    info('文章获取中');
    return {
        type: ARTICLE_GET_ING
    }
}

export function articleGetSuccess() {
    info('文章获取成功！');
    return {
        type: ARTICLE_GET_SUCCESS
    }
}

export function articleGetError(err) {
    info('文章获取失败,' + err);
    return {
        type: ARTICLE_GET_ERROR
    }
}

export function articleGetData(data, page) {
    return {
        type: ARTICLE_GET_DATA,
        page: page,
        data: data
    }
}

export function articlePostIng() {
    info('文章提交中...');
    return {
        type: ARTICLE_POST_ING
    }
}

export function articlePostSuccess() {
    info('文章提交成功！');
    return {
        type: ARTICLE_POST_SUCCESS
    }
}

export function articlePostError(err) {
    info('文章提交失败！' + err);
    return {
        type: ARTICLE_POST_ERROR
    }
}

export function articleNeedRefresh() {
    return {
        type: ARTICLE_NEED_REFRESH
    }
}

export function articleHasRefreshed() {
    info('刷新成功！');
    return {
        type: ARTICLE_HAS_REFREASHED
    }
}

export function postArticle(data) {
    return dispatch => API.postArticle(data)
    .then(res => {
        if(res.data.code == 0) {
            dispatch(articlePostSuccess());
            dispatch(articleNeedRefresh());
        } else {
            dispatch(articlePostError());
        }
    }).catch(res => dispatch(articlePostError()));
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






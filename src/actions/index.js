import API from '../utils/API';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const POST_ARTICLE = 'POST_ARTICLE';

export function login() {
    return {
        type: LOGIN
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function receiveError() {
    return {
        type: RECEIVE_ERROR,
        error: '数据请求错误！'
    }
}

export function postArticle(data) {
    // return dispatch => API.postArticle(data)
    // .then(response => response.json())
    // .then(json => {
    // if(!json.title) {
    //     return dispatch(receiveError())
    // }
    // return dispatch(receivePosts(json))
    // })
    // .catch(() => dispatch(receiveError()))
}




import {
    ARTICLE_GET_ING,
    ARTICLE_GET_SUCCESS,
    ARTICLE_GET_ERROR,
    ARTICLE_GET_DATA,
    ARTICLE_POST_ING,
    ARTICLE_POST_SUCCESS,
    ARTICLE_POST_ERROR,
    ARTICLE_NEED_REFRESH,
    ARTICLE_HAS_REFREASHED
} from '../actions';

const defaultState = {
    isGetted: false,
    getErr: false,
    isPosted: false,
    postErr: false,
    page: 0,
    data: [],
    needRefresh: false
}

const article = (state = defaultState, action) => {
    switch(action.type) {

        case ARTICLE_GET_ING:
            return {
                ...state,
                isGetted: false
            };

        case ARTICLE_GET_SUCCESS:
            return {
                ...state,
                isGetted: true,
                getErr: false
            };

        case ARTICLE_GET_ERROR:
            return {
                ...state,
                isGetted: false,
                getErr: true
            };

        case ARTICLE_GET_DATA:
            return {
                ...state,
                page: action.page,
                data: [
                    ...state.data,
                    ...action.data
                ]
            };

        case ARTICLE_POST_ING:
            return {
                ...state,
                isPosted: false
            };

        case ARTICLE_POST_SUCCESS:
            return {
                ...state,
                isPosted: true,
                postErr: false
            };

        case ARTICLE_POST_ERROR:
            return {
                ...state,
                isPosted: false,
                postErr: true
            };

        case ARTICLE_NEED_REFRESH:
            return {
                ...state,
                needRefresh: true
            };

        case ARTICLE_HAS_REFREASHED:
            return {
                ...state,
                needRefresh: false
            };

        default:
            return state;
    }
};

export default article;







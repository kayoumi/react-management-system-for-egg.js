import {
    ARTICLE_GET_ING,
    ARTICLE_GET_SUCCESS,
    ARTICLE_GET_ERROR,
    ARTICLE_POST_ING,
    ARTICLE_POST_SUCCESS,
    ARTICLE_POST_ERROR,
    ARTICLE_NEED_REFRESH,
    ARTICLE_HAS_REFREASHED
} from '../actions';

const defaultState = {
    isGetted: false,
    isPosted: false,
    page: 0,
    data: []
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
                ...state
            };

        case ARTICLE_GET_ERROR:
            return {
                ...state
            };

        case ARTICLE_POST_ING:
            return {
                ...state
            };

        case ARTICLE_POST_SUCCESS:
            return {
                ...state
            };

        case ARTICLE_POST_ERROR:
            return {
                ...state
            };

        case ARTICLE_NEED_REFRESH:
            return {
                ...state
            };

        case ARTICLE_HAS_REFREASHED:
            return {
                ...state
            };

        default:
            return state;
    }
};

export default article;







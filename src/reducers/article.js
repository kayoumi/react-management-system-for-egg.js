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
    isGetting: false,
    isGetted: false,
    isPosting: false,
    isPosted: false,
    needRefresh: false,
    text: '',
    data: []
}

const article = (state = defaultState, action) => {
    switch(action.type) {

        case ARTICLE_GET_ING:
            return {
                ...state,
                text: action.text
            };

        case ARTICLE_GET_SUCCESS:
            return {
                ...state,
                text: action.text
            };

        case ARTICLE_GET_ERROR:
            return {
                ...state,
                text: action.text
            };

        case ARTICLE_POST_ING:
            return {
                ...state,
                text: action.text
            };

        case ARTICLE_POST_SUCCESS:
            return {
                ...state,
                text: action.text
            };

        case ARTICLE_POST_ERROR:
            return {
                ...state,
                text: action.text
            };

        case ARTICLE_NEED_REFRESH:
            return {
                ...state,
                text: action.text
            };

        case ARTICLE_HAS_REFREASHED:
            return {
                ...state,
                text: action.text
            };

        default:
            return state;
    }
};

export default article;







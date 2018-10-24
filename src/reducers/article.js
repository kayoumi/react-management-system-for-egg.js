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


        case ARTICLE_GET_SUCCESS:


        case ARTICLE_GET_ERROR:


        case ARTICLE_POST_ING:


        case ARTICLE_POST_SUCCESS:


        case ARTICLE_POST_ERROR:


        case ARTICLE_NEED_REFRESH:


        case ARTICLE_HAS_REFREASHED:


        default:
            return state;
    }
};

export default article;







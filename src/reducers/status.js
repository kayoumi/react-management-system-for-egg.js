import {
    ARTICLE_REFRESH,
    ARTICLE_NOFRESH
} from '../actions';

const defaultState = {
    artRefresh: false, //查看文章是否需要刷新
}

const status = (state = defaultState, action) => {
    switch(action.type) {

        case ARTICLE_REFRESH:
            return {
                ...state,
                artRefresh: true
            };

        case ARTICLE_NOFRESH:
            return {
                ...state,
                artRefresh: false
            };

        default:
            return state;
    }
};

export default status;







import { combineReducers } from 'redux';
import status from './status';
import login from './login';
import article from './article';

const reducer = combineReducers({
    status,
    login,
    article
})

export default reducer;

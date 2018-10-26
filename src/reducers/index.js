import { combineReducers } from 'redux';
import status from './status';
import login from './login';

const reducer = combineReducers({
    status,
    login
})

export default reducer;

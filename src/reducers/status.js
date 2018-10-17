import {
    LOGIN,
    LOGOUT
} from '../actions';

const status = (state = false, action) => {
    if(action.type == LOGIN) {
        return true;
    } else if(action.type == LOGOUT) {
        return false;
    } else {
        return state;
    }
};

export default status;







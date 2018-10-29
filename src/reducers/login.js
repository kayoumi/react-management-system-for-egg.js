import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_FILL_DATA,
    LOGOUT
} from '../actions';

const defaultState = {
    isLogin: false,
    loginErr: false,
    mobile: '',
    nickname: '',
}

const login = (state = defaultState, action) => {
    switch(action.type) {
            
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                loginErr: false
            };

        case LOGIN_ERROR:
            return {
                ...state,
                isLogin: false,
                loginErr: true
            };

        case LOGOUT:
            return {
                ...state,
                isLogin: false
            };

        case LOGIN_FILL_DATA:
            return {
                ...state,
                mobile: action.data.mobile,
                nickname: action.data.nickname
            };

        default:
            return state;
    }
};

export default login;







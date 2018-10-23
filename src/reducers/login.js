import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from '../actions';

const defaultState = {
    isLogin: false,
    text: '登陆中...',
    mobile: '',
    nickname: '',
}

const login = (state = defaultState, action) => {
    switch(action.type) {

        case LOGIN_SUCCESS:
            if(action.data == null) {
                return {
                    ...state,
                    isLogin: true,
                    text: action.text
                };
            } else {
                return {
                    ...state,
                    isLogin: true,
                    text: action.text,
                    mobile: action.data.mobile,
                    nickname: action.data.nickname
                };
            }

        case LOGIN_ERROR:
            return {
                ...state,
                isLogin: false,
                text: action.text
            };

        case LOGOUT:
            return {
                ...state,
                isLogin: false,
                text: action.text
            };

        default:
            return state;
    }
};

export default login;







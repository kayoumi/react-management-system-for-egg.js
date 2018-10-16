import API from '../utils/API';

export const VERIFY_LOGIN = 'VERIFY_LOGIN';

export function verifyLogin(login_status, token) {
    return {
        type: VERIFY_LOGIN,
        login_status: login_status,
        token: token
    }
}




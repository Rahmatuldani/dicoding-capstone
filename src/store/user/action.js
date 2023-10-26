import { USER_ACTION_TYPES } from './types';

function signInStart({email, password}) {
    return {
        type: USER_ACTION_TYPES.SIGN_IN_START,
        payload: {
            email,
            password
        }
    };
}

function signInSuccess(currentUser) {
    return {
        type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
        payload: {
            currentUser
        }
    };
}

function signInFailed(error) {
    return {
        type: USER_ACTION_TYPES.SIGN_IN_FAILED,
        payload: {
            error
        }
    };
}

export {
    signInStart,
    signInSuccess,
    signInFailed
};
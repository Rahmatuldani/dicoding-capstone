import { createAction } from '../../utils/reducer';
import { AUTH_ACTION_TYPES } from './types';

function signInStart({email, password}) { 
    return createAction(AUTH_ACTION_TYPES.SIGN_IN_START, {email, password});
}

function signInSuccess(currentUser) {
    return createAction(AUTH_ACTION_TYPES.SIGN_IN_SUCCESS, currentUser);
}

function signInFailed(error) {
    return createAction(AUTH_ACTION_TYPES.SIGN_IN_FAILED, error);
}

export {
    signInStart,
    signInSuccess,
    signInFailed
};
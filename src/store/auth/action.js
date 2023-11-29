import AlertUtil from '../../utils/alert';
import { createAction } from '../../utils/reducer';
import { AUTH_ACTION_TYPES } from './types';

function setCurrentUser(user) {
    return createAction(AUTH_ACTION_TYPES.SET_CURRENT_USER, user);
}

function setError(error) {
    AlertUtil('error', error);
    return createAction(AUTH_ACTION_TYPES.SET_ERROR, error);
}

function signIn({email, password}) {
    return createAction(AUTH_ACTION_TYPES.SIGN_IN_START, {email, password});
}

function signOut() {
    return createAction(AUTH_ACTION_TYPES.SET_CURRENT_USER, null);
}

export {
    setCurrentUser,
    setError,
    signIn,
    signOut
};
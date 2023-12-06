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

function signUp(formData) {
    return createAction(AUTH_ACTION_TYPES.SIGN_UP_START, formData);
}

function signOut() {
    return createAction(AUTH_ACTION_TYPES.SET_CURRENT_USER, null);
}

function forgotPassword({email}) {
    return createAction(AUTH_ACTION_TYPES.FORGOT_PASSWORD_START, {email});
}

function resetPassword(formData) {
    return createAction(AUTH_ACTION_TYPES.RESET_PASSWORD_START, formData);
}
export {
    setCurrentUser,
    setError,
    signIn,
    signOut,
    signUp,
    forgotPassword,
    resetPassword
};
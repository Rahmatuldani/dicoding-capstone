import AlertUtil from '../../utils/alert';
import { all, call, takeLatest, put } from 'typed-redux-saga';
import api from '../../data/api';
import { setCurrentUser, setError } from './action';
import { AUTH_ACTION_TYPES } from './types';

export function* signInStart({payload: {email, password}}) {
    try {
        const currentUser = yield* call(api.login, {email, password});
        yield* put(setCurrentUser(currentUser.data.user));
    } catch (error) {
        yield* put(setError(error.response.data.message));
    }
}

export function* signUpStart({payload: formData}) {
    try {
        const result = yield* call(api.register, formData);
        AlertUtil('success', result.data.message);
    } catch (error) {
        yield* put(setError(error.response.data.message));
    }
}

export function* forgotPassword({payload: {email}}) {
    try {
        const currentUser = yield* call(api.forgotPassword, {email});
        yield* put(setCurrentUser(currentUser));
    } catch (error) {
        yield* put(setError(error));
    }
}

export function* changePassword({ payload: formData }) {
    try {
        const currentUser = yield* call(api.changePassword, formData);
        yield* put(setCurrentUser(currentUser));
    } catch (error) {
        yield* (setError(error));
    }
}

export function* onSignUpStart() {
    yield* takeLatest(AUTH_ACTION_TYPES.SIGN_UP_START, signUpStart);
}

export function* onSignInStart() {
    yield* takeLatest(AUTH_ACTION_TYPES.SIGN_IN_START, signInStart);
}

export function* onForgotPassword() {
    yield* takeLatest(AUTH_ACTION_TYPES.FORGOT_PASSWORD_START, forgotPassword);
}

export function* onChangePassword() {
    yield* takeLatest(AUTH_ACTION_TYPES.CHANGE_PASSWORD_START, changePassword);
}

export function* authSagas() {
    yield* all([
        call(onSignInStart),
        call(onSignUpStart),
        call(onForgotPassword),
        call(onChangePassword),
    ]);
}

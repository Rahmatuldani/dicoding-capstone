import { all, call, takeLatest, put } from 'typed-redux-saga';
import api from '../../data/api';
import { resetPassword, setCurrentUser, setError } from './action';
import { AUTH_ACTION_TYPES } from './types';

export function* signUpStart({payload: {name, email, password, ktp}}) {
    try {
        const currentUser = yield*call(api.register, {name, email, password, ktp});
        yield* put(setCurrentUser(currentUser));
    } catch (error) {
        yield* put(setError(error));
    }
}

export function* signInStart({payload: {email, password}}) {
    try {
        const currentUser = yield* call(api.login, {email, password});
        yield* put(setCurrentUser(currentUser));
    } catch (error) {
        yield* put(setError(error));
    }
}

export function* forgotPassword({payload: {email}}) {
    try {
        const currentUser = yield* call(api.login, {email});
        yield* put(setCurrentUser(currentUser));
    } catch (error) {
        yield* put(setError(error));
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

export function* onResetPassword() {
    yield* takeLatest(AUTH_ACTION_TYPES.RESET_PASSWORD_START, resetPassword);
}

export function* authSagas() {
    yield* all([
        call(onSignInStart),
        call(onSignUpStart),
        call(onForgotPassword)
    ]);
}

import { all, call, takeLatest, put } from 'redux-saga/effects';
import api from '../../data/api';
import { setCurrentUser, setError } from './action';
import { AUTH_ACTION_TYPES } from './types';

function* signIn({ payload: { email, password } }) {
    try {
        const response = yield call(api.post, '/auth/login', { email, password });
        const currentUser = response.data;
        yield put(setCurrentUser(currentUser));
    } catch (error) {
        yield put(setError(error));
    }
}

function* register({ payload: { nik, name, email, password } }) {
    try {
        const response = yield call(api.post, '/auth/register', { nik, name, email, password });
        const currentUser = response.data;
        yield put(setCurrentUser(currentUser));
    } catch (error) {
        yield put(setError(error));
    }
}

export function* onSignIn() {
    yield takeLatest(AUTH_ACTION_TYPES.SIGN_IN_START, signIn);
}

export function* onRegister() {
    yield takeLatest(AUTH_ACTION_TYPES.REGISTER_START, register);
}

export function* authSagas() {
    yield all([call(onSignIn), call(onRegister)]);
}
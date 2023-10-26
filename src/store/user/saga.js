import { all, call, takeLatest, put } from 'typed-redux-saga';
import { USER_ACTION_TYPES } from './types';
import { signInSuccess, signInFailed } from './action';
import api from '../../data/api';

export function* signInStart({payload: {email, password}}) {
    try {
        const currentUser = yield* call(api.login, {email, password});
        yield* put(signInSuccess(currentUser));
    } catch (error) {
        yield* put(signInFailed(error));
    }
}

export function* onSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.SIGN_IN_START, signInStart);
}

export function* userSagas() {
    yield* all([
        call(onSignInStart)
    ]);
}
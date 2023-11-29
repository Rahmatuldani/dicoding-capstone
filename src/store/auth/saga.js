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

export function* onSignInStart() {
    yield* takeLatest(AUTH_ACTION_TYPES.SIGN_IN_START, signInStart);
}

export function* authSagas() {
    yield* all([
        call(onSignInStart),
    ]);
}
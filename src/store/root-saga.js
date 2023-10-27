import { all, call } from 'typed-redux-saga';
import { authSagas } from './auth/saga';
import { booksSagas } from './books/saga';
import { borrowSagas } from './borrow/saga';

export function* rootSaga() {
    yield* all([
        call(authSagas),
        call(booksSagas),
        call(borrowSagas),
    ]);
}
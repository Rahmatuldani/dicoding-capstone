import { all, call } from 'typed-redux-saga';
import { userSagas } from './user/saga';
import { booksSagas } from './books/saga';
import { borrowSagas } from './borrow/saga';

export function* rootSaga() {
    yield* all([
        call(userSagas),
        call(booksSagas),
        call(borrowSagas),
    ]);
}
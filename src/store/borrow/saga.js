import { all, call, takeLatest, put } from 'typed-redux-saga';
import { BORROW_ACTION_TYPES } from './types';
import { addBorrowFailed, addBorrowSuccess, fetchBorrowFailed, fetchBorrowSuccess } from './action';
import api from '../../data/api';

export function* addBorrow({payload: {bookTitle, bookQuantity}}) {
    try {
        const borrow = yield* call(api.createBorrow, {bookTitle, bookQuantity});
        yield* put(addBorrowSuccess(borrow));
    } catch (error) {
        yield* put(addBorrowFailed(error));
    }
}

export function* fetchBorrow() {
    try {
        const borrow = yield* call(api.getAllBorrowed);
        yield* put(fetchBorrowSuccess(borrow));
    } catch (error) {
        yield* put(fetchBorrowFailed(error));
    }
}

export function* onAddBorrowStart() {
    yield takeLatest(BORROW_ACTION_TYPES.ADD_BORROW_START, addBorrow);
}

export function* onFetchBorrowStart() {
    yield* takeLatest(BORROW_ACTION_TYPES.FETCH_BORROW_START, fetchBorrow);
}

export function* borrowSagas() {
    yield* all([
        call(onAddBorrowStart),
        call(onFetchBorrowStart)
    ]);
}
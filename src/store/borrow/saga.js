import { all, call, takeLatest, put } from 'typed-redux-saga';
import { BORROW_ACTION_TYPES } from './types';
import { fetchBorrowFailed, fetchBorrowSuccess } from './action';
import api from '../../data/api';

export function* addBorrow({payload}) {
    try {
      const borrow = yield call(api.addBorrow, payload); 
      yield put(addBorrowSuccess(borrow));
    } catch (error) {
      yield put(addBorrowFailed(error));
    }
  }

export function* fetchBorrow({ payload: {id} }) {
    try {
        const borrow = yield* call(api.getAllBorrowed, {id});
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
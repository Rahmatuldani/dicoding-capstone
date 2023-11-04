import { createAction } from '../../utils/reducer';
import { BORROW_ACTION_TYPES } from './types';

function addBorrow(borrowData) {
    return createAction(BORROW_ACTION_TYPES.ADD_BORROW_START, borrowData)
}

function fetchBorrowStart({id}) {
    return createAction(BORROW_ACTION_TYPES.FETCH_BORROW_START, {id});
}

function fetchBorrowSuccess(borrow) {
    return createAction(BORROW_ACTION_TYPES.FETCH_BORROW_SUCCESS, borrow);
}

function fetchBorrowFailed(error) {
    return createAction(BORROW_ACTION_TYPES.FETCH_BORROW_FAILED, error);
}

export {
    addBorrow,
    fetchBorrowStart,
    fetchBorrowSuccess,
    fetchBorrowFailed
};
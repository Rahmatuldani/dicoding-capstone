import { createAction } from '../../utils/reducer';
import { BORROW_ACTION_TYPES } from './types';

function addBorrowStart(borrow) {
    return createAction(BORROW_ACTION_TYPES.ADD_BORROW_START, borrow)
}

function addBorrowSuccess(borrow) {
    return createAction(BORROW_ACTION_TYPES.ADD_BORROW_SUCCESS, borrow)
}

function addBorrowFailed(error) {
    return createAction(BORROW_ACTION_TYPES.ADD_BORROW_FAILED, error)
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
    addBorrowStart,
    addBorrowSuccess,
    addBorrowFailed,
    fetchBorrowStart,
    fetchBorrowSuccess,
    fetchBorrowFailed
};
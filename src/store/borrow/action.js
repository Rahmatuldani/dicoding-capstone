import { createAction } from '../../utils/reducer';
import { BORROW_ACTION_TYPES } from './types';

function addBorrowStart(bookTitle, bookAuthor, startDate, endDate) {
    return createAction(BORROW_ACTION_TYPES.ADD_BORROW_START, {bookTitle, bookAuthor, startDate, endDate});
}

function addBorrowSuccess(borrow) {
    return createAction(BORROW_ACTION_TYPES.ADD_BORROW_SUCCESS, borrow);
}

function addBorrowFailed(error) {
    return createAction(BORROW_ACTION_TYPES.ADD_BORROW_FAILED, error);
}

function fetchBorrowStart() {
    return createAction(BORROW_ACTION_TYPES.FETCH_BORROW_START);
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
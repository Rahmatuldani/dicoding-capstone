import { BORROW_ACTION_TYPES } from './types';

function fetchBorrowStart({id}) {
    return {
        type: BORROW_ACTION_TYPES.FETCH_BORROW_START,
        payload: {
            id
        },
    };
}

function fetchBorrowSuccess(borrow) {
    return {
        type: BORROW_ACTION_TYPES.FETCH_BORROW_SUCCESS,
        payload: borrow
    };
}

function fetchBorrowFailed(error) {
    return {
        type: BORROW_ACTION_TYPES.FETCH_BORROW_FAILED,
        payload: error
    };
}

export {
    fetchBorrowStart,
    fetchBorrowSuccess,
    fetchBorrowFailed
};
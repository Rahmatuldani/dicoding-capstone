import { createAction } from '../../utils/reducer';
import { BOOKS_ACTION_TYPES } from './types';

function fetchBooksStart() {
    return createAction(BOOKS_ACTION_TYPES.FETCH_BOOKS_START);
}

function fetchBooksSuccess(books) {
    return createAction(BOOKS_ACTION_TYPES.FETCH_BOOKS_SUCCESS, books);
}

function fetchBooksFailed(error) {
    return createAction(BOOKS_ACTION_TYPES.FETCH_BOOKS_FAILED, error);
}

export {
    fetchBooksStart,
    fetchBooksSuccess,
    fetchBooksFailed
};
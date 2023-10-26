import { BOOKS_ACTION_TYPES } from './types';

function fetchBooksStart() {
    return {
        type: BOOKS_ACTION_TYPES.FETCH_BOOKS_START,
        payload: null,
    };
}

function fetchBooksSuccess(books) {
    return {
        type: BOOKS_ACTION_TYPES.FETCH_BOOKS_SUCCESS,
        payload: books
    };
}

function fetchBooksFailed(error) {
    return {
        type: BOOKS_ACTION_TYPES.FETCH_BOOKS_FAILED,
        payload: error
    };
}

export {
    fetchBooksStart,
    fetchBooksSuccess,
    fetchBooksFailed
};
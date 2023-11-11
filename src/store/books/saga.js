import { all, call, takeLatest, put } from 'typed-redux-saga';
import { BOOKS_ACTION_TYPES } from './types';
import { isSuccess, isFailed } from './action';
import api from '../../data/api';

export function* fetchBooks() {
    try {
        const result = yield* call(api.getAllBooks);
        const books = result.data.data.books;
        yield* put(isSuccess(BOOKS_ACTION_TYPES.FETCH_BOOKS_SUCCESS, books));
    } catch (error) {
        console.log('error');
        yield* put(isFailed(BOOKS_ACTION_TYPES.FETCH_BOOKS_FAILED, error));
    }
}

export function* insertBook({payload: {isbn, title}}) {
    try {
        const book = yield* call(api.createBook, {isbn, title});
        yield* put(isSuccess(BOOKS_ACTION_TYPES.INSERT_BOOKS_SUCCESS, book));
    } catch (error) {
        yield* put(isFailed(BOOKS_ACTION_TYPES.INSERT_BOOKS_FAILED, error));
    }
}

export function* onInsertBooksStart() {
    yield* takeLatest(BOOKS_ACTION_TYPES.INSERT_BOOKS_START, insertBook);
}

export function* onFetchBooksStart() {
    console.log('fetch start');
    yield* takeLatest(BOOKS_ACTION_TYPES.FETCH_BOOKS_START, fetchBooks);
}


export function* booksSagas() {
    yield* all([
        call(onFetchBooksStart),
        call(onInsertBooksStart)
    ]);
}
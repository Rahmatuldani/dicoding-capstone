import { all, call, takeLatest, put } from 'typed-redux-saga';
import { BOOKS_ACTION_TYPES } from './types';
import { fetchBooksFailed, fetchBooksSuccess, insertBooksFailed, insertBooksSuccess } from './action';
import api from '../../data/api';

export function* fetchBooks() {
    try {
        const books = yield* call(api.getAllBooks);
        yield* put(fetchBooksSuccess(books));
    } catch (error) {
        yield* put(fetchBooksFailed(error));
    }
}

export function* insertBook({payload: {isbn, title}}) {
    try {
        const book = yield* call(api.createBook, {isbn, title});
        yield* put(insertBooksSuccess(book));
    } catch (error) {
        yield* put(insertBooksFailed(error));
    }
}

export function* onInsertBooksStart() {
    yield* takeLatest(BOOKS_ACTION_TYPES.INSERT_BOOKS_START, insertBook);
}

export function* onFetchBooksStart() {
    yield* takeLatest(BOOKS_ACTION_TYPES.FETCH_BOOKS_START, fetchBooks);
}


export function* booksSagas() {
    yield* all([
        call(onFetchBooksStart),
        call(onInsertBooksStart)
    ]);
}
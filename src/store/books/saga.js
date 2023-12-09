import { all, call, takeLatest, put } from 'typed-redux-saga';

import { BOOKS_ACTION_TYPES } from './types';
import { isSuccess, isFailed } from './action';
import api from '../../data/api';
import AlertUtil from '../../utils/alert';

export function* fetchBooks({payload: {page}}) {
    try {
        const result = yield* call(api.getAllBooks, {page});
        yield* put(isSuccess(BOOKS_ACTION_TYPES.FETCH_BOOKS_SUCCESS, result));
    } catch (error) {
        yield* put(isFailed(error));
    }
}

export function* fetchBooksPage() {
    try {
        const result = yield* call(api.getBooksPages);
        yield* put(isSuccess(BOOKS_ACTION_TYPES.FETCH_BOOKS_PAGE_SUCCESS, result));
    } catch (error) {
        yield* put(isFailed(error));
    }

}

export function* insertBook({payload: {
    isbn,
    title,
    year,
    genre,
    author,
    publisher,
    stock,
    price,
    poster,
    desc,
}}) {
    try {
        const book = yield* call(api.createBook, {
            isbn,
            title,
            year,
            genre,
            author,
            publisher,
            stock,
            price,
            poster,
            desc,
        });
        yield* put(isSuccess(BOOKS_ACTION_TYPES.INSERT_BOOKS_SUCCESS, book));

    } catch (error) {
        yield* put(isFailed(error.response.data.message));
    }
}
export function* editBook({payload: {
    isbn,
    title,
    year,
    genre,
    author,
    publisher,
    stock,
    price,
    desc,
    id,
}}) {
    try {
        const book = yield* call(api.updateBook, {
            isbn,
            title,
            year,
            genre,
            author,
            publisher,
            stock,
            price,
            desc,
            id,
        });
        const result = yield* put(isSuccess(BOOKS_ACTION_TYPES.EDIT_BOOKS_SUCCESS, book));
        AlertUtil('success', result.payload.data.message);
    } catch (error) {
        yield* put(isFailed(error.response.data.message));
    }
}

export function* onInsertBooksStart() {
    yield* takeLatest(BOOKS_ACTION_TYPES.INSERT_BOOKS_START, insertBook);
}

export function* onEditBooksStart() {
    yield* takeLatest(BOOKS_ACTION_TYPES.EDIT_BOOKS_START, editBook);
}

export function* onFetchBooksStart() {
    yield* takeLatest(BOOKS_ACTION_TYPES.FETCH_BOOKS_START, fetchBooks);
}

export function* onFetchBooksPageStart() {
    yield* takeLatest(BOOKS_ACTION_TYPES.FETCH_BOOKS_PAGE_START, fetchBooksPage);
}



export function* booksSagas() {
    yield* all([
        call(onFetchBooksStart),
        call(onFetchBooksPageStart),
        call(onInsertBooksStart),
        call(onEditBooksStart),
    ]);
}
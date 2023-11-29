import { all, call, takeLatest, put } from 'typed-redux-saga';
import { BOOKS_ACTION_TYPES } from './types';
import { isSuccess, isFailed } from './action';
import api from '../../data/api';

export function* fetchBooks() {
    try {
        const result = yield* call(api.getAllBooks);

        yield* put(isSuccess(BOOKS_ACTION_TYPES.FETCH_BOOKS_SUCCESS, result));
    } catch (error) {
        console.log('error');
        yield* put(isFailed(BOOKS_ACTION_TYPES.FETCH_BOOKS_FAILED, error));
    }
}

export function* insertBook({payload: {
    isbn,
    title,
    year,
    genre,
    author,
    publisher,
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
            price,
            poster,
            desc,
        });

        console.log(book);
        yield* put(isSuccess(BOOKS_ACTION_TYPES.INSERT_BOOKS_SUCCESS, book));
    } catch (error) {
        yield* put(isFailed(BOOKS_ACTION_TYPES.INSERT_BOOKS_FAILED, error));
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
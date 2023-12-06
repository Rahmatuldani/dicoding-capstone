import { createAction } from '../../utils/reducer';
import { BOOKS_ACTION_TYPES } from './types';
import AlertUtil from '../../utils/alert';


function  isSuccess(action ,books) {
    return createAction(action, books);
}

function isFailed(error) {
    AlertUtil('error', error);
    return createAction(BOOKS_ACTION_TYPES.SET_ERROR, error);
}
function fetchBooksStart({page}) {
    return createAction(BOOKS_ACTION_TYPES.FETCH_BOOKS_START, {page});
}

function fetchBooksPageStart(){
    return createAction(BOOKS_ACTION_TYPES.FETCH_BOOKS_PAGE_START);
}

function insertBooksStart({
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
}) {
    return createAction(BOOKS_ACTION_TYPES.INSERT_BOOKS_START, {
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
}

export {
    isSuccess,
    isFailed,
    fetchBooksStart,
    fetchBooksPageStart,
    insertBooksStart,
};
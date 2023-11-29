import { createAction } from '../../utils/reducer';
import { BOOKS_ACTION_TYPES } from './types';


function  isSuccess(action ,books) {
    return createAction(action, books);
}

function isFailed(action ,error) {
    return createAction(action, error);
}
function fetchBooksStart() {
    return createAction(BOOKS_ACTION_TYPES.FETCH_BOOKS_START);
}

function insertBooksStart({
    isbn,
    title,
    year,
    genre,
    author,
    publisher,
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
        price,
        poster,
        desc,
    });
}

export {
    isSuccess,
    isFailed,
    fetchBooksStart,
    insertBooksStart,
};
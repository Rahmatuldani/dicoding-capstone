import { createSelector } from 'reselect';

const selectBooksReducer = (state) => state.books;

export const selectBooks = createSelector(
    selectBooksReducer,
    (booksSlice) => booksSlice
);
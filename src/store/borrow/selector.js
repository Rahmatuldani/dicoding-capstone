import { createSelector } from 'reselect';

const selectBorrowReducer = (state) => state.borrow;

export const selectBorrow = createSelector(
    selectBorrowReducer,
    (borrowSlice) => borrowSlice
);
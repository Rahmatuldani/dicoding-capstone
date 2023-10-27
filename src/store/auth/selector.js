import { createSelector } from 'reselect';

const selectAuthReducer = (state) => state.auth;

export const selectAuth = createSelector(
    selectAuthReducer,
    (userSlice) => userSlice
);
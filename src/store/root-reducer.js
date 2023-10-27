import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import { booksReducer } from './books/reducer';
import { borrowReducer } from './borrow/reducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    books: booksReducer,
    borrow: borrowReducer,
});
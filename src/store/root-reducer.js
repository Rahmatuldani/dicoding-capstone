import { combineReducers } from 'redux';
import { userReducer } from './user/reducer';
import { booksReducer } from './books/reducer';
import { borrowReducer } from './borrow/reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    books: booksReducer,
    borrow: borrowReducer,
});
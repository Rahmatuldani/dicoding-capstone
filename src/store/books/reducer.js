import { BOOKS_ACTION_TYPES } from './types';

const INITIAL_STATE = {
    books: [],
    isLoading: false,
    error: null
};

export function booksReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {

    case BOOKS_ACTION_TYPES.FETCH_BOOKS_START:
        return {...state, isLoading: true};

    case BOOKS_ACTION_TYPES.FETCH_BOOKS_SUCCESS:
        return {...state, isLoading: false, books: action.payload, error: null};

    case BOOKS_ACTION_TYPES.FETCH_BOOKS_FAILED:
        return {...state, isLoading: false, error: action.payload};
    
    default:
        return state;
    }
}
import { BORROW_ACTION_TYPES } from './types';

const INITIAL_STATE = {
    borrow: [],
    isLoading: false,
    error: null
};

export function borrowReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {

    case BORROW_ACTION_TYPES.ADD_BORROW_START:
        return {...state, isLoading: true};

    case BORROW_ACTION_TYPES.ADD_BORROW_SUCCESS:
        return {...state, isLoading: false, borrow: [...state.borrow, action.payload], error: null};

    case BORROW_ACTION_TYPES.ADD_BORROW_FAILED:
        return {...state, isLoading: false, error: action.payload};

    case BORROW_ACTION_TYPES.FETCH_BORROW_START:
        return {...state, isLoading: true};

    case BORROW_ACTION_TYPES.FETCH_BORROW_SUCCESS:
        return {...state, isLoading: false, borrow: action.payload, error: null};

    case BORROW_ACTION_TYPES.FETCH_BORROW_FAILED:
        return {...state, isLoading: false, error: action.payload};
    
    default:
        return state;
    }
}
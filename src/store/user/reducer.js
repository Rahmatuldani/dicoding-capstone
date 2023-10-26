import { USER_ACTION_TYPES } from './types';

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
};

export function userReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {

    case USER_ACTION_TYPES.SIGN_IN_START:
        return {...state, isLoading: true};

    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
        return {...state, isLoading: false, currentUser: action.payload, error: null};
    
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
        return {...state, isLoading: false, error: action.payload};
    default:
        return state;
    }
}
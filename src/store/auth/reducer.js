import { AUTH_ACTION_TYPES } from './types';

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
};

export function authReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {

    case AUTH_ACTION_TYPES.SIGN_IN_START:
    case AUTH_ACTION_TYPES.SIGN_UP_START:
    case AUTH_ACTION_TYPES.FORGOT_PASSWORD_START:
    case AUTH_ACTION_TYPES.CHANGE_PASSWORD_START:
        return {...state, isLoading: true};

    case AUTH_ACTION_TYPES.SET_CURRENT_USER:
        return {...state, isLoading: false, currentUser: action.payload, error: null};
    
    case AUTH_ACTION_TYPES.SET_ERROR:
        return {...state, isLoading: false, error: action.payload};
    default:
        return state;
    }
}
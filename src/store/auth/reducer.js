import { AUTH_ACTION_TYPES } from './types';

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
};

export function authReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
    case AUTH_ACTION_TYPES.SIGN_IN:
    case AUTH_ACTION_TYPES.REGISTER:
        return { ...state, isLoading: true, error: null };

    case AUTH_ACTION_TYPES.SET_CURRENT_USER:
        return { ...state, isLoading: false, currentUser: action.payload, error: null };

    case AUTH_ACTION_TYPES.SET_ERROR:
        return { ...state, isLoading: false, error: action.payload };

    default:
        return state;
    }
}

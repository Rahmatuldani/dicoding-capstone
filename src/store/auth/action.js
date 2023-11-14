import { createAction } from '../../utils/reducer';
import { AUTH_ACTION_TYPES } from './types';
import api from '../../data/api';

function setCurrentUser(user) {
    return createAction(AUTH_ACTION_TYPES.SET_CURRENT_USER, user);
}

function setError(error) {
    return createAction(AUTH_ACTION_TYPES.SET_ERROR, error);
}

function signIn({ email, password }) {
    return async (dispatch) => {
        try {
            const response = await api.post('/auth/login', { email, password });
            const currentUser = response.data;
            dispatch(setCurrentUser(currentUser));
        } catch (error) {
            dispatch(setError(error));
        }
    };
}

function register({ nik, name, email, password }) {
    return async (dispatch) => {
        try {
            const response = await api.post('/auth/register', { nik, name, email, password });
            const currentUser = response.data;
            dispatch(setCurrentUser(currentUser));
        } catch (error) {
            dispatch(setError(error));
        }
    };
}

export { setCurrentUser, setError, signIn, register };
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';
import { rootSaga } from './root-saga';


if (typeof window !== 'undefined') {
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = compose;
}

const persistConfig = {
    key: 'library',
    storage,
    keyPrefix: '',
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
    import.meta.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware
].filter(function(middleware){ return Boolean(middleware); });

const composeEnhancer = (
    import.meta.env.NODE_ENV !== 'production' && window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
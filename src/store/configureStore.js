/**
 * @fileOverview The file configures the store - the entire state of the app
 */

import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';

// Saga Middleware
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// Thunk Middleware
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middlewares = [thunk, sagaMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
// Create a Redux store holding the state of the app
// Its API is { subscribe, dispatch, getState }
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;

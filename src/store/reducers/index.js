/**
 * @fileOverview The file that contains the root reducer
 */

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * Source: https://redux.js.org/introduction/getting-started
 */

import { combineReducers } from 'redux';

const rootReducer = combineReducers({});

export default rootReducer;

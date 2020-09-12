/**
 * @fileOverview The file that contains the root saga configuration
 */

import 'regenerator-runtime/runtime';
import { all, takeLatest } from 'redux-saga/effects';
import actionTypes from '../actions';
import fetchCaughtBySagaDataSaga from './fetchCaughtBySagaDataSaga';

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_CAUGHT_BY_SAGA, fetchCaughtBySagaDataSaga),
    // TODO: action type, saga inside takelatest
  ]);
}

export default rootSaga;

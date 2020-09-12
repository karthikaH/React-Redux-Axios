/**
 * @fileOverview The file that contains the root saga configuration
 */

import 'regenerator-runtime/runtime';
import { all, takelatest } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    takelatest(),
    // TODO: action type, saga inside takelatest
  ]);
}

export default rootSaga;

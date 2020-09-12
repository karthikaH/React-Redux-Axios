import { call, put } from 'redux-saga/effects';
import actionTypes from '../actions';
import createAction from '../actions/createAction';
import restAPIRequest from '../../Services/restAPI';

function* fetchCaughtBySagaDataSaga(action) {
  const { STORE_CAUGHT_BY_SAGA_RES } = actionTypes;
  try {
    const response = yield call(restAPIRequest, '/actionCaughtBySaga', 'post', {
      actionDispatched: action.payload.actionDispatched,
      actionInSaga: STORE_CAUGHT_BY_SAGA_RES,
    });
    yield put(createAction(STORE_CAUGHT_BY_SAGA_RES, response));
  } catch (err) {
    // handle err
  }
}

export default fetchCaughtBySagaDataSaga;

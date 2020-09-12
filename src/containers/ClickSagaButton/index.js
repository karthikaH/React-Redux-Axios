/**
 * @fileOverview The click a button to dispatch an action using Hooks
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../../store/actions';
import createAction from '../../store/actions/createAction';

function ClickSagaButton() {
  const { actionDispatched, actionInSaga, middleware, using } = useSelector(
    (state) => state.caughtBySaga
  );
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    const fetchCaughtBySaga = createAction(actionTypes.FETCH_CAUGHT_BY_SAGA, {
      actionDispatched: actionTypes.FETCH_CAUGHT_BY_SAGA,
    });
    dispatch(fetchCaughtBySaga);
  };
  return (
    <>
      <h3>Click the button to see</h3>
      <ul>
        <li>how action gets dispatched to store</li>
        <li>
          where the reducer in the store is equipped to handle
          <strong>
            <i>&nbsp;Action Type</i>
          </strong>
        </li>
        <li>
          the reducer takes the current state and the action type and returns a
          new state
        </li>
        <li>the reducer is always a pure function</li>
      </ul>
      <button onClick={handleBtnClick}>Have Fun</button>
      {actionDispatched && (
        <ul>
          <li>
            Action dispatched on click of button:{' '}
            <strong>{actionDispatched}</strong>
          </li>
          <li>
            Middleware used: <strong>{middleware}</strong>
          </li>
          <li>
            Action dispatched inside the middleware:{' '}
            <strong>{actionInSaga}</strong>
          </li>
          <li>
            Component is using: <strong>{using}</strong>
          </li>
        </ul>
      )}
    </>
  );
}

export default ClickSagaButton;

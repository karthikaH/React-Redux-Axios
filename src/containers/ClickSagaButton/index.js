/**
 * @fileOverview The click a button to dispatch an action using Hooks
 */

import React from 'react';

function ClickSagaButton() {
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
      <button>Have Fun</button>
    </>
  );
}

export default ClickSagaButton;

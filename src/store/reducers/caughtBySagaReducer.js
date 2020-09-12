import actionTypes from '../actions';

const initialState = {
  caughtBySaga: {
    actionDispatched: '',
    actionInSaga: '',
    middleware: '',
    using: '',
  },
};

function caughtBySagaReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.STORE_CAUGHT_BY_SAGA_RES:
      return action.payload;
    default:
      return state;
  }
}

export default caughtBySagaReducer;

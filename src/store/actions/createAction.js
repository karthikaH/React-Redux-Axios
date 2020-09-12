/**
 * Bases on flux-standard-action
 * source: https://github.com/redux-utilities/flux-standard-action
 *
 * An action MUST be a plain JavaScript object
 * have a type property.
 *
 * An action MAY
 * have an error property.
 * have a payload property.
 * have a meta property.
 *
 * An action MUST NOT include properties other than type, payload, error, and meta.
 */

/**
 * Create Action util function
 * @param {string} actionType - the string denoting the type of action that was dispatched to store
 * @param {*} payload - payload required for changing the state in reducer
 */
function createAction(actionType, payload) {
  return {
    type: actionType,
    payload,
  };
}

export default createAction;

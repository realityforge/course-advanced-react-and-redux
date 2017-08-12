export default function({ dispatch }) {
  return next => action => {
    // If action does not have a payload or the payload
    // does not have a then property then we don't care
    // about it so send it on
    if (!action.payload || !action.payload.then) {
      next(action);
    } else {
      // Wait until promise resolves and dispatch the resultant action through middleware chain
      action.payload.then(response => dispatch({ ...action, payload: response.data }));
    }
  };
}

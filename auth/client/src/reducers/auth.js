import {AUTH_ERROR, AUTH_USER, UNAUTH_USER} from '../actions/types';

export default function(state = { authenticated: false }, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, error: null };
    case UNAUTH_USER:
      return { ...state, authenticated: false, error: null };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}

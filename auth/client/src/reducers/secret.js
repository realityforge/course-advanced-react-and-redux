import {SHOW_SECRET, UNAUTH_USER} from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SHOW_SECRET:
      return action.payload;
    case UNAUTH_USER:
      return null;
  }
  return state;
}

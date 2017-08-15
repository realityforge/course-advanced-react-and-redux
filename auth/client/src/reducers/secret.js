import {SHOW_SECRET} from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SHOW_SECRET:
      return action.payload;
  }
  return state;
}

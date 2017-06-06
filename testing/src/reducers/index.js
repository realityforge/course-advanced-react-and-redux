import { combineReducers } from 'redux';
import commentsReduducer from './comments';

const rootReducer = combineReducers({
  comments: commentsReduducer
});

export default rootReducer;

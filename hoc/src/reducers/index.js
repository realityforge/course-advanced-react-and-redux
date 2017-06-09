import { combineReducers } from 'redux';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  authenticated: authReducer
});

export default rootReducer;

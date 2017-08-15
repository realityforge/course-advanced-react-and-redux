import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import authReducer from './auth';
import secretReducer from './secret';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  auth: authReducer,
  secret: secretReducer
});

export default rootReducer;

import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import authReducer from './auth';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  auth: authReducer
});

export default rootReducer;

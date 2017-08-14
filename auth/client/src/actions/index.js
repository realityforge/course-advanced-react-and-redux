import axios from 'axios';
import history from '../history';
import {AUTH_ERROR, AUTH_USER} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Attempt to connect
    axios.post(`${ROOT_URL}/signin`, { email, password })
         .then(response => {
           const jwtToken = response.data.token;

           localStorage.setItem('token', jwtToken);
           dispatch({ type: AUTH_USER });
           history.push('/feature');
         })
         .catch(() => {
           dispatch(authError('Signin failed. Check credentials.'));
         });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

import axios from 'axios';
import {AUTH_ERROR, AUTH_USER, UNAUTH_USER} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser(history, { email, password }) {
  return function(dispatch) {
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

export function signupUser(history, { email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
         .then(response => {
           const jwtToken = response.data.token;
           localStorage.setItem('token', jwtToken);
           dispatch(authUser(jwtToken));
           history.push('/feature');
         })
         .catch((e) => {
           dispatch(authError('Signup failed. Email already exists or password not supplied.'));
         });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export function authUser() {
  return { type: AUTH_USER };
}

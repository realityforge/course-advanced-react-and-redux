import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import {authUser} from './actions/index';
import App from './components/app';
import RequireAuth from './components/auth/require_auth';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import Header from './components/header';
import history from './history';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const jwtToken = localStorage.getItem('token');
if (jwtToken) {
  store.dispatch(authUser(jwtToken));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <div>
        <Header/>
        <Switch>
          <Route path="/signin" component={Signin}/>
          <Route path="/signout" component={Signout}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/feature" component={RequireAuth(Feature)}/>
          <Route path="/" component={App}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

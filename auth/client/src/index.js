import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/app';
import Signin from './components/auth/signin';
import Header from './components/header';
import history from './history';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter history={history}>
      <div>
        <Header/>
        <Switch>
          <Route path="/signin" component={Signin}/>
          <Route path="/signout" component={Signout}/>
          <Route path="/" component={App}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

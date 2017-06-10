import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Route, Router } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import App from './components/app';
import requireAuth from './components/hoc/require_auth';
import Resources from './components/resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()( createStore );

ReactDOM.render(
  <Provider store={createStoreWithMiddleware( reducers )}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/resources" component={requireAuth( Resources )}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector( '.container' ) );

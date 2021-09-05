import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';  //creates store, allows access to the store for thunk
import thunk from 'redux-thunk';
import {Provider} from 'react-redux' //wraps app allowing access to the store throughout
import postReducer from './reducers/postReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  //grants access to Redux dev tools

let store = createStore(postReducer, composeEnhancers(applyMiddleware(thunk)))  //create store and pass in reducer, updates store

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain='dev-brennan.us.auth0.com'
      clientId='CpbTX3C0gqhR1l0TFJ4YoHq3eiBLBaYR'
      redirectUri={window.location.origin}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
//access to store through provider
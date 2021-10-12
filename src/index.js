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
      domain='salute-vets.us.auth0.com'
      clientId='eWmuyXmXcLjOvU7SSmDYpVV9rwcxS8Of'
      redirectUri={window.location.origin}
      audience="https://salute-vets.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
//access to store through provider
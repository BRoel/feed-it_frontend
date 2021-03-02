import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';  //creates store, allows access to the store for thunk
import thunk from 'redux-thunk';
import {Provider} from 'react-redux' //wraps app allowing access to the store throughout
import postReducer from './reducers/postReducer'
import {BrowserRouter as Router} from 'react-router-dom'


import './index.css';
import Header from "./Header";
import App from './App';
import Footer from './Footer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(postReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Router>
      <App />
    </Router>
    <Footer />
  </Provider>,
  document.getElementById('root')
);

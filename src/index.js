import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import postReducer from './reducers/postReducer'

import './index.css';
import Header from "./Header";
import App from './App';
import Footer from './Footer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(postReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <App />
    <Footer />
  </Provider>,
  document.getElementById('root')
);

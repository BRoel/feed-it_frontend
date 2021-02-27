import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./Header";
import App from './App';
import Footer from './Footer';

ReactDOM.render(
  <div>
    <Header />
    <App />
    <Footer />
  </div>,
  document.getElementById('root')
);

import React from 'react';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import PostsContainer from './containers/PostsContainer'
import Footer from './Footer';
import './index.css';

class App extends React.Component {

  render() {
    return (
      <>
        <div id='wrap'>
          <div id="main">
            <ScrollToTop/>
            <NavBar/>
            <PostsContainer/>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

export default (App);
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
        <ScrollToTop/>
        <NavBar/>
        <div id='wrap'>
          <div id="main">
            <PostsContainer/>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

export default (App);
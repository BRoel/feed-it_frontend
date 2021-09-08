import React from 'react';
import LoginButton from './components/Auth0/LoginButton';
import LogoutButton from './components/Auth0/LogoutButton';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import PostsContainer from './containers/PostsContainer'
import Footer from './Footer';
import { useAuth0 } from '@auth0/auth0-react';
import './index.css';

function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <ScrollToTop/>
      <NavBar/>
      <div id='wrap'>
        <div id="main">
          <h3>User is { isAuthenticated ? "Logged In" : "Logged Out"}</h3>
          <LoginButton/>
          <LogoutButton/>
          <PostsContainer/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default (App);
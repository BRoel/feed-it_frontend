import React from 'react';
import LoginButton from './components/Auth0/LoginButton';
import LogoutButton from './components/Auth0/LogoutButton';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import PostsContainer from './containers/PostsContainer'
import Footer from './Footer';
import { useAuth0 } from '@auth0/auth0-react';
import { Route } from 'react-router-dom'
import './index.css';
import Profile from './components/Auth0/Profile';
import { Redirect } from 'react-router';
import { render } from '@testing-library/react';
import Registration from './components/Auth0/Registration';
import PrivateRoute from './components/Auth0/PrivateRoute';

function App() {

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    idTokenPayload,
    logout,
  } = useAuth0();

  debugger;



  return (
    <div>
      <ScrollToTop/>
      <NavBar/>
      <div id='wrap'>
        <div id="main">
          <h3>User is { isAuthenticated ? "Logged In" : "Logged Out" }</h3>
          {isAuthenticated ? <Redirect to="/posts" /> : null }
          <Route exact path='/' component={Registration}/>
          <PrivateRoute path='/profile' component={Profile}/>
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
import React from 'react';
import PostsContainer from './containers/PostsContainer'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <PostsContainer/>
      </div>
    );
  }
}

export default (App);
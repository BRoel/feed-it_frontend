import React from 'react';
import PostsContainer from './containers/PostsContainer'

class App extends React.Component {

  render() {
    return (
      <div id='container'>
      <div id="content-wrap">
        <PostsContainer />
      </div>
      </div>
    );
  }
}

export default (App);
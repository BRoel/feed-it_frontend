import React from 'react';
import {connect} from 'react-redux'
import PostsContainer from './containers/PostsContainer'
import './App.css';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/posts')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Feed goes here
        </header>
      </div>
    );
  }
}

export default connect()(App);
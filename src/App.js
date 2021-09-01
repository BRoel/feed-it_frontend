import React from 'react';
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Dashboard from './components/Dashboard';
// import Home from './components/Home';
import PostsContainer from './containers/PostsContainer'
// import axios from "axios";

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     loggedInStatus: "NOT_LOGGED_IN",
  //     user: {}
  //   };

  //   this.handleLogin = this.handleLogin.bind(this);
  //   this.handleLogout = this.handleLogout.bind(this);
  // }

  // checkLoginStatus() {
  //   axios
  //     .get("http://localhost:3001/logged_in", { withCredentials: true })
  //     .then(response => {
  //       if (
  //         response.data.logged_in &&
  //         this.state.loggedInStatus === "NOT_LOGGED_IN"
  //       ) {
  //         this.setState({
  //           loggedInStatus: "LOGGED_IN",
  //           user: response.data.user
  //         });
  //       } else if (
  //         !response.data.logged_in &
  //         (this.state.loggedInStatus === "LOGGED_IN")
  //       ) {
  //         this.setState({
  //           loggedInStatus: "NOT_LOGGED_IN",
  //           user: {}
  //         });
  //       }
  //     })
  //     .catch(error => {
  //       console.log("check login error", error);
  //     });
  // }

  // componentDidMount() {
  //   this.checkLoginStatus();
  // }

  // handleLogout() {
  //   this.setState({
  //     loggedInStatus: "NOT_LOGGED_IN",
  //     user: {}
  //   });
  // }

  // handleLogin(data) {
  //   this.setState({
  //     loggedInStatus: "LOGGED_IN",
  //     user: data.user
  //   });
  // }

  render() {
    return (
      <div id='container'>
        {/* <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={props => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={props => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            /> */}
            <PostsContainer />
          {/* </Switch>
        </BrowserRouter> */}
      </div>
    );
  }
}

export default (App);
import React, { Component } from 'react';
import '../App.css';
import Login from './login';

var App = React.createClass({
  getInitialState: function() {
    return {
      currentUser: null,
      loggedIn: false
    }
  },

  render: function() {
    if (this.state.loggedIn) {
      return <div>Login successful! Welcome back, { this.state.currentUser }</div>
    } else {
      return <Login onLogin={ this.loginUser }/>
    }
  },

  loginUser: function(email) {
    this.setState({loggedIn: true, currentUser: email});
  }
})

export default App;

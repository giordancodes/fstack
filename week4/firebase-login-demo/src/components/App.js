import React, { Component } from 'react';
import '../App.css';
import firebase from 'firebase';
import Login from './login';

class App extends React.Component{

  constructor(){
    super();
    this.loginUser = this.loginUser.bind(this);
    this.state = {
      currentUser: null,
      loggedIn: false
    }
  }
  render() {
    if (this.state.loggedIn) {
      return <div>Login successful! Welcome back, { this.state.currentUser }</div>
    } else {
      return <Login onLogin={ this.loginUser } />
    }
  }

  loginUser(email){
    console.log(this);
    this.setState({ loggedIn: true, currentUser: email})
  }
}

export default App;
import React, { Component } from 'react';
import firebase from 'firebase';
import { browserHistory, Link } from 'react-router';

import TimeTracker from './TimeTracker';

class LoginCheck extends React.Component {
  constructor(){
    super();
    this.state={
      loggedIn: true
    }
  }

  render() {
    if (this.state.loggedIn) {
      return(
        <TimeTracker>
          { React.cloneElement(this.props.children,
            { loggedIn: this.state.loggedIn,
              currentUser: this.state.currentUser,
              userID: this.state.userID
          })}
        </TimeTracker>
      )
    } else {
      browserHistory.push('/login');
    }
  }
  componentWillMount(){
    this.firebaseRef = firebase.database().ref("root");
    firebase.auth().onAuthStateChanged((user) =>{
      if (user){
        this.setState({ loggedIn: true, currentUser: user.displayName, userID: user.uid });
        browserHistory.push('/');
      }
    })
  }
  // componentDidMount(){
  //   if (user){
  //     this.setState({ loggedIn: true, currentUser: user.displayName, userID: user.uid });
  //   }
  // }
}

export default LoginCheck;
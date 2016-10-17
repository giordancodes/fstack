import React from 'react';
// import firebase from 'firebase';
import Login from './Login';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: null,
      loggedIn: false
    }
 }
// this.state.loggedIn toggles which screen is rendered, setting default as not logged in
  render(){
    if(!this.state.loggedIn){
      return <Login onLogin={ this.loginUser } /> 
    }
    else{
      return <div>Successful login, { this.state.currentUser }! </div> 
    }
  }

  loginUser(email){
    this.setState({ loggedIn: true, currentUser: email })
  }
}

export default App;

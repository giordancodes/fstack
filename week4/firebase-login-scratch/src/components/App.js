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

  render(){
    if(this.state.loggedIn){
      return <div>Successful login, { this.state.currentUser }! </div> 
    }else{
      return <Login onLogin={ this.loginUser } /> 
    }
  }

  loginUser(email){
    this.setState({ loggedIn: true, currentUser: email })
  }
}

export default App;

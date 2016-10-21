import React from 'react';
import firebase from 'firebase';

class Login extends React.Component {

  constructor(){
    super();
    // these functions are re-defined so they are bound to the parent
    this.setMode = this.setMode.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      email: '',
      password: '',
      mode: 'login',
      error: null
    }
  }
  // in this case, calling <Login /> in the parent will render all data in its render method, which includes all inputs needed to gather user data
  // this.state is used in the child, and this.props in the parent
  render() {
    return (
      <div>
        { this.state.error ? 
          <div> { this.state.error } </div> :
          null
        }
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="login">
            <input  type="radio" 
                    value="login"
                    onChange={ this.setMode }
                    checked={ this.state.mode === 'login' }
                    value='login' />
            Login
          </label>
          <label htmlFor="signup">
            <input  type="radio" 
                    value="signup"
                    onChange={ this.setMode }
                    checked={ this.state.mode === 'signup' }
                    value='signup' />
            Sign Up
          </label>
          <div>
            <label htmlFor="email">
              <input type="text"/>
              Email
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input type="password"/>
              Password
            </label>
          </div>
          <div>
            <button onClick={ this.login }>
              { this.state.mode === 'login' ? 'Log That' : 'Signez-Vous' }
            </button>
          </div>
        </form>
      </div>
    )
  }

  // each of these functions exist to set the state of their respective input
  // for every input, a method to set the state of what its tied to
  setMode(e){
    this.setState({ mode: e.target.value })
  }
  setEmail(e){
    this.setState({ email: e.target.value })
  }
  setPassword(e){
    this.setState({ password: e.target.value })
  }

  // take the current state of email and password inputs and set as variables

  login(){
    const email = this.state.email,
          password = this.state.password,
          component = this;

// onLogin is the prop method called in either successful "then" instance below, even though the function is named loginUser in App.js

    // if mode is login, pass through email & password to the well-named function
    if (this.state.mode === 'login'){
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function() { component.props.onLogin( component.state.email )})
      .catch((error) => this.setState({ error: error.message }))
    } 
    // if mode is signup, pass through email & password
      else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function() { component.props.onLogin( component.state.email )})
      .catch((error) => this.setState({ error: error.message }))
    }
  }
}

export default Login;
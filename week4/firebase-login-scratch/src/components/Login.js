import React from 'react';
import firebase from 'firebase';

class Login extends React.Component {

  constructor(){
    super();
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

  setMode(e){
    this.setState({ mode: e.target.value })
  }
  setEmail(e){
    this.setState({ email: e.target.value })
  }
  setPassword(e){
    this.setState({ password: e.target.value })
  }

  login(){
    const email = this.state.email,
          password = this.state.password,
          component = this;

    if (this.state.mode === 'login'){
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function() { component.props.onLogin( component.state.email )})
      .catch((error) => this.setState({ error: error.message }))
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function() { component.props.onLogin( component.state.email )})
      .catch((error) => this.setState({ error: error.message }))
    }

  }

}

export default Login;

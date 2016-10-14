import React from 'react';
import firebase from 'firebase';

class Login extends React.Component{
  
  constructor(){
    super();
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setMode = this.setMode.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      email: '',
      password: '',
      mode: 'login',
      error: null
    }
  }

  render(){
    return <div>
      { this.state.error ? <div>{ this.state.error }</div> : null }
      <div>
        <label>
          <input type='radio' value='login' checked={ this.state.mode === 'login' } onChange={ this.setMode } />
          Login
        </label>
        <label>
          <input type='radio' value='signup' checked={ this.state.mode === 'signup' } onChange={ this.setMode } />
          Signup
        </label>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' value={ this.state.email } onChange={ this.setEmail } />
      </div>
      <div>
        <label htmlFor='email'>Password</label>
        <input type='password' name='password' value={ this.state.password } onChange={ this.setPassword } />
      </div>
      <div>``
        <button onClick={ this.login }>
          { this.state.mode === 'login' ? 'Log-In' : "Sign Up" }
        </button>
      </div>
    </div>
  }

  setEmail(e) { this.setState({ email: e.target.value }) }
  setPassword(e) { this.setState({ password: e.target.value }) }
  setMode(e) { this.setState({ mode: e.target.value }) }

  login(){
    const email = this.state.email,
          password = this.state.password,
          component = this;

    if (this.state.mode === 'login'){
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function()  {component.props.onLogin( component.state.email )})
      .catch((error) =>  this.setState({ error: error.message }))
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(){component.props.onLogin( component.state.email )})
      .catch((error) => this.setState({ error: error.message }) )
    }
  }
}

export default Login;
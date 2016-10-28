import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class Login extends Component {
	constructor(){
		super();
		this.state={
			form:{
				email: '',
				password: ''
			},
			mode: 'login',
			error: null
		}
	}

  render() {
    return (
      <div>
        <h1>Identify Yourself</h1>
				<p>{ 
					(this.state.form.email) ? `Hello, ${this.state.form.email}` : null 
				}</p>
        <form onSubmit={ (e) => e.preventDefault }>
        	<label 	htmlFor="email">email</label>
          <input 	type="text" 
          				placeholder="email"
          				id="email"
          				value={ this.state.form.email }
          				onChange={ this.updateField } />
          <label 	htmlFor="password">password</label>
          <input 	type="password"
          				placeholder="password"
          				id="password"
          				value={ this.state.form.password }
          				onChange={ this.updateField } />
          <label htmlFor="login">Login</label>
          <input 	type="radio"
          				id='login'
									checked={ this.state.mode === 'login' }
          				onChange={ this.setMode }
          				 />
          <label htmlFor="signup">Sign Up</label>
				 	<input 	type="radio"
          				id='signup'
									checked={ this.state.mode === 'signup' }
          				onChange={ this.setMode }
          				 />
        </form>
      </div>
    );
  }

  updateField = (e) =>{
  	let form = this.state.form;
  	form[e.target.id] = e.target.value;
  	this.setState({form})
  }

  setMode = (e) => {
  	this.setState({mode: e.target.id})
  }
}

export default Login;

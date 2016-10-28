import React, { Component } from 'react';
import firebase from 'firebase';

import './App.css';
import './setup.css';

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
      <div className="login wrapper"> 
        <h1>Identify Yourself</h1>
				<div className="greeting">
          <code>{ 
            (this.state.form.email) ? `Hello, ${this.state.form.email}` : null 
          }</code>
        </div>
        <form onSubmit={ (e) => e.preventDefault }>
        	<div className="input">
            <label  htmlFor="email">email</label>
            <input  type="text" 
                    placeholder="email"
                    id="email"
                    value={ this.state.form.email }
                    onChange={ this.updateField } />
          </div>
          <div className="input">
            <label  htmlFor="password">password</label>
            <input  type="password"
                    placeholder="password"
                    id="password"
                    value={ this.state.form.password }
                    onChange={ this.updateField } />
          </div>
          <div className="input">
            <label  htmlFor="login">login</label>
            <input  type="radio"
                    id='login'
                    checked={ this.state.mode === 'login' }
                    onChange={ this.setMode }
                     />
           </div>
          <div className="input">
            <label  htmlFor="signup">sign up</label>
            <input  type="radio"
                    id='signup'
                    checked={ this.state.mode === 'signup' }
                    onChange={ this.setMode }
                     />
           </div>
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

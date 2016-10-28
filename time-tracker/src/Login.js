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
			}
		}
	}

  render() {
    return (
      <div>
        <h1>Identify Yourself</h1>

        <form onSubmit={ (e) => e.preventDefault }>
        	<label htmlFor="email">email</label>
          <input 	type="text" 
          				placeholder="email"
          				name="email"
          				id="email"
          				value={ this.state.form.email }
          				onChange={ this.updateField } />
          <label htmlFor="password">password</label>
          <input 	type="password"
          				placeholder="password"
          				name="password"
          				id="password"
          				value={ this.state.form.password }
          				onChange={ this.updateField } />
        </form>
      </div>
    );
  }

  updateField = (e) =>{
  	let form = this.state.form;
  	form[e.target.name] = e.target.value;
  	console.log(form);
  	this.setState({form})
  }
}

export default Login;

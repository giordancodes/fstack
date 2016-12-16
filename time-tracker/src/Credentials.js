import React, { Component } from 'react';
import firebase from 'firebase';

class Credentials extends Component { 
	constructor(){
		super();
		this.state={
			form:{
				email: '',
				password: ''
			},
			error: null
		}
	}

	render(){
		return(
		  <form className="credentials" onSubmit={ this.login }>
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
				<div className="error"> { this.state.error ? <code>{ this.state.error }</code> : null } 
				</div>
		  </form>
   	)
	}

	updateField = (e) =>{
		let form = this.state.form;
		form[e.target.id] = e.target.value;
		this.setState({form});
	}

	destroyUser = (e) =>{
		e.preventDefault();
		let result;
		let creds = this.state.form;
		let user = firebase.auth().currentUser;

		result = firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
		.then(user.delete())
		.catch((error) =>{
			console.log('error: ' + error.message);
			this.resetError(error);
		})

	}

	resetError = (error) =>{
	  this.setState({error: error.message})
	  setTimeout(() => {
	    this.setState({error: null})}
	    , 5000);
	}

}

export default Credentials;
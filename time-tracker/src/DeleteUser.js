import React, { Component } from 'react';
import firebase from 'firebase';
// import { browserHistory } from 'react-router';

import Credentials from './Credentials';
import './animate.css';

class DeleteUser extends Component { 
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
			<section className="goodbye login">
				<h1>enter your credentials one last time to delete your account</h1>
			  <Credentials />
	      <button className="primary cancel infinite pulse animated"
	      				onClick={ this.destroyUser }	>
	      	break my heart
	      </button>
			</section>
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

export default DeleteUser;
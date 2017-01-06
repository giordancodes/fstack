import React, { Component } from 'react';
import firebase from 'firebase';
// import { browserHistory } from 'react-router';

import Credentials from './Credentials';
import './animate.css';

class UpdateUser extends Component { 
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
				<h1>enter your credentials to update sensitive data in your account</h1>
			  <Credentials />
	      <button className="primary cancel infinite pulse animated"
	      				onClick={ this.destroyUser }	>
	      	confirm
	      </button>
			</section>
   	)
	}

	updateField = (e) =>{
		let form = this.state.form;
		form[e.target.id] = e.target.value;
		this.setState({form});
	}

	resetError = (error) =>{
	  this.setState({error: error.message})
	  setTimeout(() => {
	    this.setState({error: null})}
	    , 5000);
	}

}

export default UpdateUser;
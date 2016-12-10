import React, { Component } from 'react';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

class DeleteUser extends Component { 
	constructor(){
		super();
		this.state={
			form:{
        name: '',
				email: '',
				password: ''
			}
		}
	}
	
	render(){
		return(
			<section className="goodbye">
			  <form onSubmit={ this.login }>
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
			  </form>
			</section>
   	)
	}

	updateField = (e) =>{
		let form = this.state.form;
		form[e.target.id] = e.target.value;
		this.setState({form});
	}
}

export default DeleteUser;
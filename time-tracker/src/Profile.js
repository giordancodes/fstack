import React, { Component } from 'react';

class Profile extends Component {
	constructor(){
		super();
		this.state={
			form:{
				profileUser: '',
				profileEmail: '',
				profilePassword: ''
			}
		}
	}

	render(){
		return(
			<section id="profilePage">
				<h1>{ this.props.currentUser }'s Profile</h1>
			  <div className="options">
			  	<div className="main-options">
			  		<form>
			  			<label htmlFor="">
			  				<span>your username:</span>
			  				<input 	type="text"
			  								id="profileUser"
			  								onChange={ this.updateField }
			  								value={ this.state.form.user }
			  								placeholder= { this.props.currentUser } /> 
							</label>
			  			<button className="primary">not great?</button>
			  		</form>
			  		<form>
			  			<label htmlFor="">
				  			<span>your email:</span>
				  			<input 	type="text"
				  							id="profileEmail"
				  							onChange={ this.updateField }
				  							value={ this.state.form.email }
				  							placeholder= { this.props.userEmail } />
							</label>
			  			<button className="primary">not great?</button>
			  		</form>
			  		<form>
			  			<label htmlFor="">
				  			<span>your password:</span>
				  			<input 	type="password"
				  							id="profilePassword"
				  							onChange={ this.updateField }
				  							value={ this.state.form.password }
				  							placeholder="just kidding" />
			  			</label>
			  			<button className="primary">not great?</button>
			  		</form>
			  	</div>
			  	<form>
			  		<label htmlFor=""><span>delete account??</span></label>
			  		<button className="primary cancel">damn { this.props.currentUser }</button>
			  	</form>
			  </div>
			</section>
		)
	}
	updateField = (e) =>{
		let form = this.state.form;
		form[e.target.id] = e.target.value;
		this.setState({form});
	}
}

export default Profile;
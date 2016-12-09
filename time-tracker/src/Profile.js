import React, { Component } from 'react';
import firebase from 'firebase';

class Profile extends Component {
	constructor(){
		super();
		this.state={
			form:{
				profileUser: null,
				profileEmail: null,
				profilePassword: null,
				profileImage: null
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
			  			<label htmlFor="profileUser">
			  				<span>your username:</span>
			  				<input 	type="text"
			  								id="profileUser"
			  								onChange={ this.updateField }
			  								value={ this.state.form.user }
			  								placeholder={ this.props.currentUser } /> 
							</label>
			  		</form>
			  		<form>
			  			<label htmlFor="profileEmail">
				  			<span>your email:</span>
				  			<input 	type="text"
				  							id="profileEmail"
				  							onChange={ this.updateField }
				  							value={ this.state.form.email }
				  							placeholder={ this.props.userEmail } />
							</label>
			  		</form>
			  		<form>
			  			<label htmlFor="profileImage">
				  			<span>your image:</span>
				  			<input 	type="text"
				  							id="profileImage"
				  							onChange={ this.updateField }
				  							value={ this.state.form.image }
				  							placeholder={ this.props.userImage } />
			  			</label>
			  		</form>
			  		<form>
			  			<label htmlFor="profilePassword">
				  			<span>your password:</span>
				  			<input 	type="password"
				  							id="profilePassword"
				  							onChange={ this.updateField }
				  							value={ this.state.form.password }
				  							placeholder="just kidding" />
			  			</label>
			  		</form>
			  	<div className="update">
			  		<button className="primary"
			  						onClick={ this.updateUserInfo } >
			  			update entered info?
			  		</button>
			  	</div>
			  	</div>
			  	<form>
			  		<label>
			  			<span>delete account??</span>
				  		<button className="primary cancel"
				  						onClick={ this.props.deleteUser } >
					  		damn { this.props.currentUser }</button>
			  		</label>
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

	updateUserInfo = () =>{
		let result;
		let creds = this.state.form;
		let user = firebase.auth().currentUser;

		// console.log(user, creds, (!creds.profileImage));
		if (creds.profileImage){
			user.updateProfile({photoURL: creds.profileImage})
			.then(() => {
				this.props.reloadUser();
				
			})
		}
	}

}

export default Profile;
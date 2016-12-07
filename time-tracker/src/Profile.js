import React, { Component } from 'react';

class Profile extends Component {

	constructor(){
		super();
		this.state={
		}
	}

	render(){
		return(
			<section id="profilePage">
				<h1>{ this.props.currentUser }'s Profile</h1>
			  <form>
			  	<label htmlFor=""><span>your username:</span> { this.props.currentUser } </label>
			  	<button className="primary">not great?</button>
			  </form>
			  <form>
			  	<label htmlFor=""><span>your email:</span> { this.props.userEmail } </label>
			  	<button className="primary">not great?</button>
			  </form>
			  <form>
			  	<label htmlFor=""><span>your password:</span> just kidding </label>
			  	<button className="primary">not great?</button>
			  </form>
			</section>
		)
	}
}

export default Profile;
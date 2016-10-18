import React, { Component } from 'react';

class Login extends Component{
	constructor(){
		super();
		this.getUser = this.getUser.bind(this);
		this.getPass = this.getPass.bind(this);
		this.buttonPress = this.buttonPress.bind(this);
		this.state = {
			user: '',
			pass: '',
			presses : null
		}
	}
	getUser(e){
		this.setState({ user: e.target.value });
	}
	getPass(e){
		this.setState({ pass: e.target.value });
	}
	buttonPress(){
		var component = this;
		this.setState({ presses : this.state.presses + 1 });
		component.props.onSubmission();
	}
	render(){
		return(
			 <div>
			 	<form onSubmit={ (e) => e.preventDefault() }>
			 		<h3>nom?</h3>
					<input 	type="text"
									onChange={ this.getUser }/>
					<h3>pass?</h3>
					<input 	type="password"
									onChange={ this.getPass } />
					<div>
						<button onClick={ this.buttonPress } >
							submissione
						</button>
					</div>
					<div>
						<p>submissiones</p>
						<p>{ this.state.presses }</p>
					</div>
			 	</form>
			 </div>
	  )
	}
}

export default Login;
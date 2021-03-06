import React, { Component } from 'react';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

import './App.css';
import './index.css';

class Login extends Component {
	constructor(){
		super();
		this.state={
			form:{
        name: '',
				email: '',
				password: ''
			},
			mode: 'login',
      roboMode: false,
			error: null		}
	}

  render() {
    return (
      <div className="login wrapper"> 
        <h1>Identify Yourself</h1>
				<div className="greeting">
          <code>
            { 
              (this.state.form.email) ? `Hello, ${this.state.form.email}` : null 
            } 
            {
              (this.state.form.name) ? `...or do you prefer ${this.state.form.name}?` : null
            }
          </code>
        </div>
        <form onSubmit={ this.login }>
          <div className="input">
            <label  htmlFor="email">email</label>
            <input  type="email" 
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
          <div className="input radio-sneak">
            <label  htmlFor="login">login</label>
            <input  type="radio"
                    id='login'
                    checked={ this.state.mode === 'login' }
                    onChange={ this.setMode }
                     />
          </div>
          <div className="input radio-sneak">
            <label  htmlFor="signup">sign up</label>
            <input  type="radio"
                    id='signup'
                    checked={ this.state.mode === 'signup' }
                    onChange={ this.setMode }
                     />
           </div>
           <div className="button-div">
             <button  className='primary'
                      onClick={ this.login } >
               { this.state.mode }
             </button>
           </div>
           <div className="error"> { this.state.error ? <code>{ this.state.error }</code> : null } </div>
            { (this.state.mode === 'signup' ) ?
              <div>
              <div className="input">
                <label  htmlFor="name">name of user</label>
                <input  type="text" 
                        placeholder="name"
                        id="name"
                        value={ this.state.form.name }
                        onChange={ this.updateField } />
               </div>
               
           </div> 
           : null }
        </form>
      </div>
    );
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) =>{
      if (user){
        browserHistory.push('/');
      }
    })
  }

  componentWillUnmount(){
    location.reload();
  }

  updateField = (e) =>{
  	let form = this.state.form;
  	form[e.target.id] = e.target.value;
  	this.setState({form});
  }

  verifyRobot = () =>{
    let roboMode = this.state.roboMode;
    (roboMode === false ? roboMode = true : roboMode = false)
    this.setState({roboMode});
  } 

  setMode = (e) => {
  	this.setState({mode: e.target.id});
  }

  login = (e) =>{
    e.preventDefault();
    let result;
    let creds = this.state.form;
    let newName = this.state.form.name;
    if(this.state.mode === "login"){
      result = firebase.auth().signInWithEmailAndPassword(
        creds.email, creds.password)
    } else {
      if (newName.replace(/\s/g,'') !== '' || newName){
        result = firebase.auth().createUserWithEmailAndPassword(creds.email, creds.password)
        .then((user) => {
          return user.updateProfile({ displayName: creds.name })
        })
      } else {
        this.setState({error: 'Please enter a username'});
      }
    }
    result.then((data) => {
      browserHistory.push('/');
    })
    .catch((error) => {
      console.log(error);
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

export default Login;
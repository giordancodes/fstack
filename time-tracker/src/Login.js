import React, { Component } from 'react';
import firebase from 'firebase';

import './App.scss';
import './setup.scss';

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
			error: null
		}
	}

  render() {
    return (
      <div className="login wrapper"> 
        <h1>Identify Yourself</h1>
				<div className="greeting">
          <code>
            { 
              (this.state.form.email) ? `Hello, ${this.state.form.email}.` : null 
            } 
            {
              (this.state.form.name) ? `..or do you prefer ${this.state.form.name}?` : null
            }
          </code>
        </div>
        <form onSubmit={ (e) => e.preventDefault }>
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
                      onClick={ (e) => e.preventDefault } >
               { this.state.mode }
             </button>
           </div>
            { (this.state.mode === 'signup' ) ?
              <div className='roboMode'>
              <div className="input">
                <label  htmlFor="name">name of user</label>
                <input  type="text" 
                        placeholder="name"
                        id="name"
                        value={ this.state.form.name }
                        onChange={ this.updateField } />
               </div>
               <div className="input">
                 <label>is user machine/part-machine?</label>
                 <label htmlFor="roboModeOff">no</label>
                 <input  type="radio"
                        id='roboModeOff'
                        checked={ !this.state.roboMode }
                        onChange={ this.verifyRobot }
                         />
                 <label htmlFor="roboMode">yes</label>
                 <input  type="radio"
                        id='roboMode'
                        checked={ this.state.roboMode }
                        onChange={ this.verifyRobot }
                         />
                          </div>
           </div> : null }
        </form>
      </div>
    );
  }

  updateField = (e) =>{
  	let form = this.state.form;
  	form[e.target.id] = e.target.value;
  	this.setState({form})
  }

  verifyRobot = () =>{
    let roboMode = this.state.roboMode;
    this.setState({roboMode})
  } 

  setMode = (e) => {
  	this.setState({mode: e.target.id})
  }

  login = () =>{
    // let result;
    // if(this.state.mode === "login"){

    // }
  }
}

export default Login;

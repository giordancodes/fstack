import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	
	constructor(){
		super();
		this.state ={
			pieces : {
				text: 'hi'
			}
		}
	}
	
	printScrn(event){
		event.preventDefault();
		const pieces = {
			text: this.state.text,
			number: this.state.number
		};
		this.setState(pieces);
	}
	
  render() {
    return (
			<div className="App wrapper">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Hola</h2>
				</div>
				<div className="layer1">
					<h2>Data Entry</h2>
				</div>
      	
				<div className="dataEntry">
					<form ref={(input) => this.form = input}
								onSubmit={ (event) => this.printScrn(event) }>
						<textarea ref={ (input) => this.text = input } placeholder="Step right up"/>
						<input ref={ (input) => this.number = input } type="range" min="1" max="999" />
						<button>Contribute</button>
					</form>
				</div>
				
				<div className="dataDisplay">
					{/* <h2>{ this.state.pieces }</h2>*/}
					{ <h2> {this.state.pieces.text} </h2> }
				</div>
			</div>
			
    );
  }
}

export default App;
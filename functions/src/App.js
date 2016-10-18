import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';

class App extends Component {
  constructor(){
    super();
    this.state = {
      clicks: null,
      beenClicked: false
    }
  }
  render() {
    return (
      <div>
        { !this.state.beenClicked ? 
          <h1>not yet</h1> :
          null
        }
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <Login 
            onSubmission={ this.submission }
          />
        </div>
      </div>
    );
  }
  submission(){
    this.setState({ beenClicked: true })
  }

}

export default App;

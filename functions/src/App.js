import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './Login';

class App extends Component {
  constructor(){
    super();
    this.submission = this.submission.bind(this);
    this.state = {
      clicks: null,
      beenClicked: false
    }
  }
  render() {
    return (
      <div>
        { !this.state.beenClicked ? 
          <h2>nein</h2> :
          null
        }
        <div className="App">
          <Login 
            onSubmission={ this.submission }
          />
        </div>
        <div>
          <p>parental</p>
          <p> { this.state.clicks } </p>
        </div>
      </div>
    );
  }
  submission(clicks){
    this.setState({ beenClicked: true, clicks: clicks })
  }
}

export default App;

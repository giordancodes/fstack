import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      elapsed: 0,
      start: 0
    }
  }

  componentDidMount(){

    // this.setState({ start: new Date().getTime() })
    // console.log(this.state.start);
    this.timer = setInterval(this.tick, 90);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  tick(){
    this.setState({ elapsed: new Date() - this.state.start });
  }

  start(){
    console.log(new Date().getTime());
    return new Date().getTime();
  }

  render() {

    const elapsed = Math.round(this.state.elapsed / 100);
    const seconds = (elapsed / 10).toFixed(1);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            <code>timer.js</code>
          </h2>
        </div>
        <p className="App-intro">
          timer started almost precisely <code>{ seconds }</code> ago.
        </p>
      </div>
    );
  }
}

export default App;

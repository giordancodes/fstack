import React, { Component } from 'react';

class Timer extends Component {
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
    this.setState({ start: new Date() })
    this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  tick = () =>{
    this.setState({ elapsed: new Date() - this.state.start });
  }  

  render() {

    const elapsed = Math.round(this.state.elapsed / 100);
    const seconds = (elapsed / 10).toFixed(1);

    return (
      <div className="App">
        <div className="App-header">
          <h2>
            <code>timer.js</code>
          </h2>
        </div>
        <p className="App-intro">
          timer started almost precisely <code>{ seconds }</code> seconds ago.
        </p>
      </div>
    );
  }
}

export default Timer;
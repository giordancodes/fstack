import React, { Component } from 'react';

class Timer extends Component {
  constructor(){
    super();
    this.state={
      start: 0
    }
  }

  componentDidMount(){

    // this.setState({ start: new Date().getTime() })
    // console.log(this.state.start);
    // this.setState({ start: new Date() })
    // this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  } 

  render() {

    let elapsed = Math.round(this.props.elapsed / 100);
    let seconds = (elapsed / 10).toFixed(1);

    return (
      <section className="timer">
        <code>
          timer started almost precisely <code>{ seconds }</code> seconds ago.
        </code>
      </section>
    );
  }
}

export default Timer;
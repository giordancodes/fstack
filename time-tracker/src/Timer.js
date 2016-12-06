import React, { Component } from 'react';

class Timer extends Component {
  constructor(){
    super();
    this.state={
      start: 0
    }
  }

  render() {

    let elapsed = Math.round(this.props.elapsed / 100);
    // let seconds = (elapsed / 10).toFixed(1);

    return (
      <section className="timer">
        <code>
          timer started almost precisely <code>{ this.props.elapsed }</code> seconds ago.
        </code>
      </section>
    );
  }
}

export default Timer;
var React = require('react');
var $ = require('jquery');

var App = React.createClass({
  getInitialState: function() {
    return {
      counter: null,
      error: false,
      loading: true
    }
  },

  render: function() {
    if (this.state.loading) {
      return <div>Loading...</div>
    } else {
      return <div>
        { this.error() }
        <div>
          <div>Counter: { this.state.counter.count1 }</div>
          <div>
            <button onClick={ this.increment1 }>Add One</button>
            <button onClick={ this.decrement1 }>Remove One</button>
            <button onClick={ this.reset1 }>Reset</button>
          </div>
        </div>
        <div>
          <div>Counter: { this.state.counter.count2 }</div>
          <div>
            <button onClick={ this.increment2 }>Add One</button>
            <button onClick={ this.decrement2 }>Remove One</button>
            <button onClick={ this.reset2 }>Reset</button>
          </div>
        </div>
      </div>
    }
  },

  error: function() {
    if (this.state.error) {
      return <div>There was an error</div>;
    }
  },

  increment1: function() {
    var newState = this.state.counter;
    newState.count1 = newState.count1 + 1;
    this.updateCount(this.state.counter, newState);
  },

  increment2: function() {
    var newState = this.state.counter;
    newState.count2 = newState.count2 + 1;
    this.updateCount(this.state.counter, newState);
  },

  decrement1: function() {
    var newState = this.state.counter;
    newState.count1 = newState.count1 - 1;
    this.updateCount(this.state.counter, newState);
  },

  decrement2: function() {
    var newState = this.state.counter;
    newState.count2 = newState.count2 - 1;
    this.updateCount(this.state.counter, newState);
  },

  reset1: function() {
    var newState = this.state.counter;
    newState.count1 = 0;
    this.updateCount(this.state.counter, newState);
  },

  reset2: function() {
    var newState = this.state.counter;
    newState.count1 = 0;
    this.updateCount(this.state.counter, newState);
  },

  updateCount: function(oldState, newState) {
    var component = this;
    $.ajax({
      url: "https://fir-counter-4.firebaseio.com/.json",
      method: "PUT",
      data: JSON.stringify(newState),
      error: function() {
        component.setState({ counter: oldState, error: true});
      }
    });

    this.setState({counter: newState});
  },

  componentDidMount: function() {
    var component = this;

    $.ajax({
      url: "https://fir-counter-4.firebaseio.com/.json",
      method: "GET",
      success: function(data) {
        component.setState({ counter: data, loading: false });
      }
    })
  }
});

module.exports = App;

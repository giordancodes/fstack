var React = require('react');
var $ = require('jquery');

var Counter = require('./counter_with_arrow');

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
        <Counter count={ this.state.counter.count1 }
                 onChange={ this.updateCount1 } />
        <Counter count={ this.state.counter.count2 }
                 onChange={ this.updateCount2 } />
      </div>
    }
  },

  error: function() {
    if (this.state.error) {
      return <div>There was an error</div>;
    }
  },

  updateCount1: function(newCount) {
    var newState = this.state.counter;
    newState.count1 = newCount;
    this.updateCount(this.state.counter, newState);
  },

  updateCount2: function(newCount) {
    var newState = this.state.counter;
    newState.count2 = newCount;
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

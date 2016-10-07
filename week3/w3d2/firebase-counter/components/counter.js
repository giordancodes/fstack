var React = require('react');

var Counter = React.createClass({
  render: function() {
    return <div>
      <div>Counter 1: { this.props.count }</div>
      <div>
        <button onClick={ this.increment }>Add One</button>
        <button onClick={ this.decrement }>Remove One</button>
        <button onClick={ this.reset }>Reset</button>
      </div>
    </div>;
  },

  increment: function() {
    this.props.onChange(this.props.count + 1);
  },

  decrement: function() {
    this.props.onChange(this.props.count - 1);
  },

  reset: function() {
    this.props.onChange(0);
  }
});

module.exports = Counter;

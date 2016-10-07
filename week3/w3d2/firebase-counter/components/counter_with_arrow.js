var React = require('react');

var Counter = React.createClass({
  render: function() {
    var count = this.props.count;

    return <div>
      <div>Counter: { count }</div>
      <div>
        <button onClick={ () => this.props.onChange(count + 1) }>Add One</button>
        <button onClick={ () => this.props.onChange(count - 1) }>Remove One</button>
        <button onClick={ () => this.props.onChange(0) }>Reset</button>
      </div>
    </div>;
  }
})

module.exports = Counter;

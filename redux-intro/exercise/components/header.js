var React = require('react');

var Header = React.createClass({
  render: function() {
    return <header className='todo-header'>{ this.props.text }</header>
  }
})

module.exports = Header;

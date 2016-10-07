var React = require('react');

var ChangeButton = require('./change_button');

var Counter = React.createClass({
  render: function() {
    var count = this.props.count;

    return <div>
      <div>Counter: { count }</div>
      <div>
        <ChangeButton updateTo={ this.props.count + 1}
                      onClick={ this.props.onChange }
                      text="Add One" />
        <ChangeButton updateTo={ this.props.count - 1}
                      onClick={ this.props.onChange }
                      text="Remove One" />
        <ChangeButton updateTo={ 0 }
                      onClick={ this.props.onChange }
                      text="Reset" />
      </div>
    </div>;
  }
})

module.exports = Counter;

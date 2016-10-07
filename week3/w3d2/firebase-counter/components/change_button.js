var ChangeButton = React.createClass({
  render: function() {
    return <button onClick={ this.update }>{ this.props.text }</button>
  },

  update: function() {
    this.props.onChange(this.props.updateTo);
  }
})

var React = require('react');

var TodoItem = React.createClass({
  render: function() {
    var todo = this.props.todo;

    return <div className='row'>
      <div className='col-md-2 todo-check'>
        <input type='checkbox'
               checked={ todo.completed }
               onClick={ this.completeTodo }
               />
      </div>
      <div className='col-md-10'>{ todo.text }</div>
    </div>
  },

  completeTodo: function() {
    if (this.props.onCompleteTodo) {
      this.props.onCompleteTodo();
    }
  }
});

module.exports = TodoItem;

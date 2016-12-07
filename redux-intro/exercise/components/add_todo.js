var React = require('react');

var AddTodo = React.createClass({
  getInitialState: function() {
    return { newTodo: "" }
  },

  render: function() {
    return <div className='row new-todo'>
      <div className='col-md-2'></div>
      <div className='col-md-9'>
        <div className="input-group">
          <input type="text"
                 className="form-control"
                 placeholder="Add Something New"
                 value={ this.state.newTodo }
                 onChange={ this.updateNewTodo }
                 />
          <span className="input-group-btn">
            <button onClick={ this.addTodo } className="btn btn-primary" type="button">Add</button>
          </span>
        </div>
      </div>
    </div>;
  },

  updateNewTodo: function(event) {
    this.setState({ newTodo: event.target.value });
  },

  addTodo: function() {
    if (this.props.onAddTodo) {
      this.props.onAddTodo({ completed: false, text: this.state.newTodo });
    }
    this.setState({ newTodo: "" });
  }
})

module.exports = AddTodo;

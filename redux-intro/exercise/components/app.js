var React = require('react');

var Header = require('./header');
var AddTodo = require('./add_todo');
var TodoItem = require('./todo_item');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        { completed: false, text: "Mow the lawn" },
        { completed: false, text: "Do the dishes" },
      ]
    }
  },

  render: function() {
    return <div className='todo-list'>
      <Header text={ this.state.todos.length + " things to do" } />

      <div>
        { this.state.todos.map((todo, i) => {
          return <TodoItem todo={ todo } key={ i } onCompleteTodo={ this.completeTodo.bind(this, i) }/>
        })}

        <AddTodo onAddTodo={ this.addTodo }/>
      </div>
    </div>
  },

  completeTodo: function(i) {
    var todos = this.state.todos;
    todos[i].completed = !todos[i].completed;
    this.setState({ todos: todos });
  },

  addTodo: function(newTodo) {
    var todos = this.state.todos.concat(newTodo);
    this.setState({ todos: todos });
  }
});

module.exports = TodoApp;

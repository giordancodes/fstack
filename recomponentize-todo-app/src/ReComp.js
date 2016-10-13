import React, { Component } from 'react';
//import ReactBootstrap from 'react-bootstrap';
import HeaderTop from './HeaderTop';
import TodoItem from './TodoItem';
import AddNew from './AddNew';
import './App.css';

class ReComp extends React.Component {
	
	constructor(){
		super();
		this.updateText = this.updateText.bind(this);
		this.updateCheck = this.updateCheck.bind(this);
		this.state = {
			todos:[
				{ item: 'Water', checked: true },
				{ item: 'Masticate', checked: false },
				{ item: 'Intrepid', checked: false },
				{ item: 'Seppuku', checked: true }
			]
		}
	}
	
  render() {
			var component = this;
			
			return(
				<div className='container'>
					<HeaderTop 
						todos={ this.state.todos }
						/>
					
					<TodoItem 
						todos={ this.state.todos }
						updateCheck={ this.updateCheck }
						updateText={ this.updateText }
					/>
					
					<AddNew 
						todos={ this.state.todos }
						updateNewTodo={ this.updateNewTodo }
						onAdd={ this.onAdd }
					/>
				</div>
			)
		}
	
	onAdd(newTodo) {
		const t = this.state.todos.concat({ 
			item: newTodo, 
			checked: false 
		});
		this.setState({ todos: t, newTodo: "" });

	}

	updateText(i, e) {
//			1. Pull this.state.todos into a variable
//			2. Modify the 'text' property if todos[i] to 'event.target.value'
//			3. Call this.setState to re-render
		const t = this.state.todos;
		t[i].item = e.target.value;
		this.setState({ todos: t })

	}
		
	updateCheck(i) {
		const t = this.state.todos;

//			short form for turning true into false & vice versa
//			t[0].checked = !t[0].checked;
		t[i].checked = !t[i].checked;

		this.setState({ todos: t });
	}
}

export default ReComp;
import React from 'react';
import firebase from 'firebase';
import { Router, Route, Link, browserHistory } from 'react-router';

import HeaderTop from './HeaderTop';
import TodoItemsAll from './TodoItemsAll';
import TodoItemsChecked from './TodoItemsChecked';
import TodoItemsUnchecked from './TodoItemsUnchecked';
import AddNew from './AddNew';
import './App.css';

class ReComp extends React.Component {
	
	constructor(){
		super();
		this.updateText = this.updateText.bind(this);
		this.updateCheck = this.updateCheck.bind(this);
		this.onAdd = this.onAdd.bind(this);
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
			return(
				<div className='container'>
					<HeaderTop 
						todos={ this.state.todos }
						/>
					
					<TodoItemsUnchecked
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
		this.setState({ todos: t });
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
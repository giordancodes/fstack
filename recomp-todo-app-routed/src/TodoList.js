import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router';
import HeaderTop from './HeaderTop';
import AddNew from './AddNew';

import './App.css';


class TodoList extends React.Component {
	constructor(){
		super();
		this.state = {
			todos:[
				{ item: 'Water', checked: true },
				{ item: 'MC-202', checked: false },
				{ item: '303', checked: false },
				{ item: '808', checked: false },
				{ item: 'Prophet 6', checked: true },
				{ item: 'Seppuku', checked: true }
			]
		}
	}

	componentDidMount(){
		// insert firebase auth here
	}

  render() {
		const component = this;
		let items;

		if (this.props.params.filter == 'checked') {
			items = this.state.todos.filter((todo) => todo.checked);
		} else if (this.props.params.filter =='unchecked'){
			items = this.state.todos.filter((todo) => !todo.checked)
		} else {
			items = this.state.todos;
		}
		return(
			<div className="row">
				
				Filter: { this.props.params.filter}
				(
					<Link to="/">All</Link> |
					<Link to="/checked">Checked</Link> |
					<Link to="/unchecked">Unchecked</Link>
				)

				{ items.map((item, i) => {
					return(
						<div className="col-xs-12" key={ i } >
							<input className="col-xs-2" 
								type="checkbox" 
								checked={ item.checked } 
								onChange={ component.onUpdateCheck.bind(component, i) }
							 />
							<input type="text" 
								className="col-xs-10" 
								htmlFor={ item.item } 
								value={ item.item }
								onChange={ component.onUpdateText.bind(component, i) }
							/>
						</div>
					)
				})
				}

					
				<AddNew 
					todos={ this.state.todos }
					updateNewTodo={ this.updateNewTodo }
					onAdd={ this.onAdd }
				/>
			</div>
		)
	}

	// filterItems = (items) => {
	// 	let items;

	// 	if (this.props.params.filter == 'checked') {
	// 		items = this.state.todos.filter((todo) => todo.checked);
	// 	} else {
	// 		items = this.state.todos;
	// 	}
	// }

	onUpdateCheck = (i) => {
		this.props.updateCheck(i);
	}
		
	onUpdateText = (i, e) => {
		this.props.updateText(i, e);
	}
	
	updateText = (i, e) => {
//			1. Pull this.state.todos into a variable
//			2. Modify the 'text' property if todos[i] to 'event.target.value'
//			3. Call this.setState to re-render
		const t = this.state.todos;
		t[i].item = e.target.value;
		this.setState({ todos: t });
	}
			
	updateCheck = (i) => {
		const t = this.state.todos;
//			short form for turning true into false & vice versa
//			t[0].checked = !t[0].checked;
		t[i].checked = !t[i].checked;

		this.setState({ todos: t });
	}
}


export default TodoList;
import React from 'react';

class TodoItemsUnchecked extends React.Component {

  render() {
		const component = this;

		return(
			<div className="row">
				<h2>Unchecked Items</h2>
				{ this.props.todos.map((todo, i) => {
					if (!todo.checked)
					{
						return(
							<div className="col-xs-12" key={ i } >
								<input className="col-xs-2" 
									type="checkbox" 
									checked={ todo.checked } 
									onChange={ component.onUpdateCheck.bind(component, i) }
								 />
								<input type="text" 
									className="col-xs-10" 
									htmlFor={ todo.item } 
									value={ todo.item }
									onChange={ component.onUpdateText.bind(component, i) }
								/>
							</div>
						)}
					})
				}
			</div>
		)
	}

	onUpdateCheck(i) {
		this.props.updateCheck(i);
	}
		
	onUpdateText(i, e) {
		this.props.updateText(i, e);
	}
}

export default TodoItemsUnchecked;
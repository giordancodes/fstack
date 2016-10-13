import React from 'react';

class TodoItem extends React.Component {

  render() {
		const component = this;

		return(
			<div className="row">
				{ this.props.todos.map((todo, i) => {
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
					)
				})
				}
			</div>
		)
	}
}

export default TodoItem;
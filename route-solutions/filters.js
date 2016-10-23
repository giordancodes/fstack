render:
	var checkedItems = this.props.todos.filter((todo) => todo.checked)

	var checkedItems = this.props.todos.filter((todo) => !todo.checked)

	var allItems = this.props.todos;
